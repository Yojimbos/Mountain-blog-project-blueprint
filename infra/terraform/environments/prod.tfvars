project_name                 = "mountain-blog"
environment                  = "prod"
location                     = "westeurope"
static_web_app_sku_tier      = "Standard"
static_web_app_sku_size      = "Standard"
preview_environments_enabled = false
workspace_retention_in_days  = 30
enable_application_insights  = true
enable_aks_platform          = true
aks_system_node_count        = 3
aks_system_node_vm_size      = "Standard_D4s_v5"
acr_sku                      = "Standard"

extra_tags = {
  owner       = "solo-engineer"
  environment = "production"
}
