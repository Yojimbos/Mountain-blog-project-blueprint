# Infrastructure Rollout Plan

## Scope

This rollout covers the first Azure foundation for the project:

- Resource Group
- Log Analytics Workspace
- Application Insights
- Static Web App

## Risk level

Low to medium.

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
4. Confirm `NEXT_PUBLIC_SITE_URL` for the target environment.
5. Run:

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
- Log Analytics workspace exists

### Short-term

- `static_web_app_default_host_name` is returned in Terraform outputs
- Static Web App URL responds over HTTPS
- Application Insights resource is visible in Azure

### Medium-term

- GitHub workflow validation remains green
- deployment settings are ready for later app publishing
- telemetry resources are reusable for future server-side hosting

## Rollback

If the deployment must be rolled back before any downstream usage:

```bash
terraform -chdir=infra/terraform destroy -var-file=environments/dev.tfvars
```

For production, use a deliberate review before destroy. If only one resource is misconfigured, prefer a corrective apply over full removal.

## Follow-up after first apply

1. Save the Static Web App hostname.
2. Set the production `NEXT_PUBLIC_SITE_URL`.
3. Decide on remote Terraform state storage.
4. Add Azure-authenticated plan/apply workflow when credentials are ready.
5. Add custom domain and DNS when branding is ready.

