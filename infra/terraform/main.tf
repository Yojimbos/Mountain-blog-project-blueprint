resource "azurerm_resource_group" "main" {
  name     = local.resource_names.resource_group
  location = var.location
  tags     = local.tags
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
