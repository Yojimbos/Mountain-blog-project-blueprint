project_name                 = "mountain-blog"
environment                  = "dev"
location                     = "westeurope"
static_web_app_sku_tier      = "Free"
static_web_app_sku_size      = "Free"
preview_environments_enabled = true
workspace_retention_in_days  = 30
enable_application_insights  = true
enable_aks_platform          = true
aks_system_node_count        = 2
aks_system_node_vm_size      = "Standard_D4s_v5"
acr_sku                      = "Basic"

extra_tags = {
  owner       = "solo-engineer"
  environment = "development"
}
