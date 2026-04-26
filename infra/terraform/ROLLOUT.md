# Infrastructure Rollout Plan

## Scope

This rollout covers the first Azure foundation for the project:

- Resource Group
- Static Web App

The goal is a cheap, reliable, and secure hosting baseline for a content-first website.

## Risk level

Low.

The rollout creates new resources and does not migrate production data. The main risks are naming collisions, Azure permissions, region availability, and applying the wrong environment file.

## Prerequisites

- Azure subscription access with permission to create resource groups and web resources
- Terraform `>= 1.7`
- Authenticated Azure CLI session or GitHub Actions Azure credentials
- Chosen environment file:
  - `environments/dev.tfvars`
  - `environments/prod.tfvars`

## Preflight checks

1. Confirm the target subscription and tenant.
2. Confirm the target environment file.
3. Confirm naming conventions and tags.
4. Run:

```bash
terraform -chdir=infra/terraform fmt -check -recursive
terraform -chdir=infra/terraform init
terraform -chdir=infra/terraform validate
terraform -chdir=infra/terraform plan -var-file=environments/dev.tfvars
```

## Rollout steps

### Development

```bash
terraform -chdir=infra/terraform apply -var-file=environments/dev.tfvars
```

### Production

```bash
terraform -chdir=infra/terraform apply -var-file=environments/prod.tfvars
```

## Verification signals

### Immediate

- Terraform apply completes without errors
- Resource group exists
- Static Web App resource exists

### Short-term

- `static_web_app_default_host_name` is returned in Terraform outputs
- Static Web App URL responds over HTTPS

### Medium-term

- GitHub workflow validation remains green
- deployment settings are ready for app publishing
- preview environments behavior matches the selected plan and environment settings

## Rollback

If the deployment must be rolled back before any downstream usage:

```bash
terraform -chdir=infra/terraform destroy -var-file=environments/dev.tfvars
```

For production, use a deliberate review before destroy. If only one resource is misconfigured, prefer a corrective apply over full removal.

## Follow-up after first apply

1. Save the Static Web App hostname.
2. Decide on remote Terraform state storage.
3. Add Azure-authenticated plan/apply workflow when credentials are ready.
4. Add custom domain and DNS when branding is ready.
5. Add monitoring only if the site later introduces server-side runtime behavior that needs it.
