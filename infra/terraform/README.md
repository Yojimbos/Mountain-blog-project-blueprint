# Terraform Foundation

This folder contains the first practical Azure infrastructure layer for the project.

## Current scope

The MVP infrastructure provisions:

- Azure Resource Group
- Azure Log Analytics Workspace
- Azure Application Insights
- Azure Static Web App
- Azure Container Registry
- Azure Kubernetes Service (AKS)

This keeps the first release simple and fast while still aligning with the Azure-first platform direction from `AGENTS.md`.

## Why this shape

- `Azure Static Web Apps` remains useful for lightweight static delivery and fallback hosting
- `AKS` unlocks FluxCD, Prometheus, Grafana, Loki, and future platform expansion
- `Log Analytics` and `Application Insights` establish an observability path early
- the structure is intentionally easy to evolve later toward container hosting, AKS, Key Vault, and GitOps

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
4. Add Key Vault when secrets are introduced
5. Revisit container hosting or AKS only when the application needs it
