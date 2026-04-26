# Terraform Foundation

This folder contains the lean Azure infrastructure baseline for the project.

## Current scope

The MVP infrastructure provisions:

- Azure Resource Group
- Azure Static Web App

This keeps the first release cheap, reliable, and easy to operate while still aligning with the Azure-first platform direction from `AGENTS.md`.

## Why this shape

- `Azure Static Web Apps` fits a content-first MVP with minimal operational overhead
- static assets are served through Azure's globally distributed edge, so an extra CDN layer is unnecessary for the first release
- fewer resources means lower cost, smaller attack surface, and simpler maintenance
- the structure remains easy to evolve later toward custom domains, monitoring, or alternate hosting if product requirements change

## Files

- `versions.tf` Terraform and provider constraints
- `providers.tf` Azure provider configuration
- `variables.tf` reusable inputs
- `locals.tf` naming and tag composition
- `main.tf` Azure resources
- `outputs.tf` deploy-time outputs
- `terraform.tfvars.example` sample root-level configuration
- `environments/dev.tfvars` example development values
- `environments/prod.tfvars` example production values
- `backend.hcl.example` remote state bootstrap example

## Usage

Initialize locally:

```bash
terraform -chdir=infra/terraform init
```

Validate:

```bash
terraform -chdir=infra/terraform fmt -check
terraform -chdir=infra/terraform validate
```

Plan for development:

```bash
terraform -chdir=infra/terraform plan -var-file=environments/dev.tfvars
```

Plan for production:

```bash
terraform -chdir=infra/terraform plan -var-file=environments/prod.tfvars
```

## Remote state

Use `backend.hcl.example` as a starting point once you decide where shared Terraform state should live.

Example:

```bash
terraform -chdir=infra/terraform init -backend-config=backend.hcl
```

## GitHub deployment prerequisites

Before infrastructure apply from GitHub Actions, configure:

- Azure OIDC or service principal credentials
- repository secrets for Azure authentication
- environment protection rules for production

## Next infrastructure steps

Reasonable follow-ups after this baseline:

1. Add DNS and custom domain wiring
2. Add remote state bootstrap resources
3. Add staged `plan` and `apply` workflows
4. Add monitoring only when the site actually needs runtime telemetry
5. Revisit App Service, Container Apps, or AKS only when the application outgrows Static Web Apps
