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

output "log_analytics_workspace_id" {
  description = "Log Analytics workspace resource ID."
  value       = azurerm_log_analytics_workspace.main.id
}

output "application_insights_connection_string" {
  description = "Application Insights connection string for future server-side instrumentation."
  value       = try(azurerm_application_insights.main[0].connection_string, null)
  sensitive   = true
}

output "aks_cluster_name" {
  description = "AKS cluster name."
  value       = try(azurerm_kubernetes_cluster.main[0].name, null)
}

output "aks_resource_group_name" {
  description = "AKS resource group name."
  value       = azurerm_resource_group.main.name
}

output "acr_login_server" {
  description = "Azure Container Registry login server."
  value       = try(azurerm_container_registry.main[0].login_server, null)
}
