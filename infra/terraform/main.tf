resource "azurerm_resource_group" "main" {
  name     = local.resource_names.resource_group
  location = var.location
  tags     = local.tags
}

resource "azurerm_log_analytics_workspace" "main" {
  name                = local.resource_names.log_analytics
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "PerGB2018"
  retention_in_days   = var.workspace_retention_in_days
  tags                = local.tags
}

resource "azurerm_application_insights" "main" {
  count = var.enable_application_insights ? 1 : 0

  name                = local.resource_names.application_insights
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  workspace_id        = azurerm_log_analytics_workspace.main.id
  application_type    = "web"
  tags                = local.tags
}

resource "azurerm_static_web_app" "main" {
  name                         = local.resource_names.static_web_app
  resource_group_name          = azurerm_resource_group.main.name
  location                     = azurerm_resource_group.main.location
  sku_tier                     = var.static_web_app_sku_tier
  sku_size                     = var.static_web_app_sku_size
  preview_environments_enabled = var.preview_environments_enabled
  tags                         = local.tags
}

resource "azurerm_container_registry" "main" {
  count = var.enable_aks_platform ? 1 : 0

  name                = local.resource_names.acr
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  sku                 = var.acr_sku
  admin_enabled       = false
  tags                = local.tags
}

resource "azurerm_kubernetes_cluster" "main" {
  count = var.enable_aks_platform ? 1 : 0

  name                = local.resource_names.aks
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  dns_prefix          = coalesce(var.aks_dns_prefix, local.resource_names.aks)
  kubernetes_version  = var.aks_kubernetes_version
  tags                = local.tags

  default_node_pool {
    name                 = "system"
    node_count           = var.aks_system_node_count
    vm_size              = var.aks_system_node_vm_size
    auto_scaling_enabled = false
    os_disk_type         = "Managed"
    os_disk_size_gb      = 128
    type                 = "VirtualMachineScaleSets"
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin    = "azure"
    network_policy    = "azure"
    load_balancer_sku = "standard"
  }
}

resource "azurerm_role_assignment" "aks_acr_pull" {
  count = var.enable_aks_platform ? 1 : 0

  scope                = azurerm_container_registry.main[0].id
  role_definition_name = "AcrPull"
  principal_id         = azurerm_kubernetes_cluster.main[0].kubelet_identity[0].object_id
}
