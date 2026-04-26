param(
    [string]$ProjectName = "mountain-blog",
    [string]$Environment = "dev",
    [string]$Location = "westeurope",
    [string]$ResourceGroupName = "rg-tfstate-mountain-blog-shared",
    [string]$StorageAccountName = "tfstatemtnblog60f9b6",
    [string]$ContainerName = "tfstate",
    [switch]$WriteBackendFile
)

$ErrorActionPreference = "Stop"

$subscription = az account show --output json | ConvertFrom-Json
if (-not $subscription.id) {
    throw "Azure CLI is not authenticated. Run 'az login' first."
}

$stateKey = "$ProjectName/$Environment.tfstate"
$backendFilePath = Join-Path $PSScriptRoot "..\infra\terraform\backend.hcl"
$backendFilePath = [System.IO.Path]::GetFullPath($backendFilePath)

Write-Host "Ensuring resource group '$ResourceGroupName' exists in '$Location'..."
az group create `
    --name $ResourceGroupName `
    --location $Location `
    --tags project=$ProjectName purpose=terraform-state managed_by=bootstrap-script `
    --output none

$nameAvailable = az storage account check-name --name $StorageAccountName --query nameAvailable -o tsv
$storageExistsInSubscription = $false
az storage account show --name $StorageAccountName --resource-group $ResourceGroupName --output none 2>$null
if ($LASTEXITCODE -eq 0) {
    $storageExistsInSubscription = $true
}

if (-not $storageExistsInSubscription) {
    if ($nameAvailable -ne "true") {
        throw "Storage account name '$StorageAccountName' is not available and no matching account was found in resource group '$ResourceGroupName'."
    }

    Write-Host "Creating storage account '$StorageAccountName'..."
    az storage account create `
        --name $StorageAccountName `
        --resource-group $ResourceGroupName `
        --location $Location `
        --sku Standard_LRS `
        --kind StorageV2 `
        --min-tls-version TLS1_2 `
        --allow-blob-public-access false `
        --https-only true `
        --output none
}

Write-Host "Ensuring blob container '$ContainerName' exists..."
az storage container create `
    --name $ContainerName `
    --account-name $StorageAccountName `
    --auth-mode login `
    --output none

$backendConfig = @(
    "resource_group_name  = `"$ResourceGroupName`""
    "storage_account_name = `"$StorageAccountName`""
    "container_name       = `"$ContainerName`""
    "key                  = `"$stateKey`""
) -join [Environment]::NewLine

if ($WriteBackendFile) {
    Set-Content -Path $backendFilePath -Value ($backendConfig + [Environment]::NewLine) -Encoding ascii
    Write-Host "Wrote backend config to '$backendFilePath'."
}

Write-Host ""
Write-Host "Terraform backend is ready."
Write-Host ""
Write-Host "GitHub Actions requirements:"
Write-Host "  Required secrets:"
Write-Host "    AZURE_CLIENT_ID"
Write-Host "    AZURE_TENANT_ID"
Write-Host "    AZURE_SUBSCRIPTION_ID"
Write-Host ""
Write-Host "  No extra GitHub repository variables are required for the dev release workflow."
Write-Host ""
Write-Host "backend.hcl values:"
Write-Host $backendConfig
