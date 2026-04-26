# Azure Bootstrap

This repository is set up to work with only these GitHub Actions secrets:

- `AZURE_CLIENT_ID`
- `AZURE_TENANT_ID`
- `AZURE_SUBSCRIPTION_ID`

For the `dev` release workflow, the Terraform backend values are already fixed in the repository:

- resource group: `rg-tfstate-mountain-blog-shared`
- storage account: `tfstatemtnblog60f9b6`
- container: `tfstate`
- state key: `mountain-blog/dev.tfstate`

## What already exists

The Terraform state backend has already been bootstrapped in Azure:

- Resource Group: `rg-tfstate-mountain-blog-shared`
- Storage Account: `tfstatemtnblog60f9b6`
- Blob Container: `tfstate`

## Recreate or verify the backend

Run:

```powershell
./scripts/bootstrap-terraform-state.ps1 -WriteBackendFile
```

This script:

- verifies Azure CLI authentication
- ensures the resource group exists
- ensures the storage account exists
- ensures the blob container exists
- optionally writes `infra/terraform/backend.hcl`

## Local Terraform init

If you want to use the remote backend locally:

```powershell
terraform -chdir=infra/terraform init -backend-config=backend.hcl
```

## CI/CD behavior

On push to `main`, the `Release Dev` workflow is designed to:

1. run lint, typecheck, build, and static export smoke tests
2. initialize Terraform against the remote Azure Blob backend
3. apply the `dev` Terraform configuration
4. fetch the Azure Static Web Apps deployment token
5. deploy the generated static site
