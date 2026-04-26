output "resource_group_name" {
  description = "Azure resource group name."
  value       = azurerm_resource_group.main.name
}

output "static_web_app_name" {
  description = "Azure Static Web App resource name."
  value       = azurerm_static_web_app.main.name
}

output "static_web_app_default_host_name" {
  description = "Default hostname assigned by Azure Static Web Apps."
  value       = azurerm_static_web_app.main.default_host_name
}

output "static_web_app_url" {
  description = "Public HTTPS URL of the Static Web App."
  value       = "https://${azurerm_static_web_app.main.default_host_name}"
}
