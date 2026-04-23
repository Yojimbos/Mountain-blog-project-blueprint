variable "project_name" {
  type        = string
  description = "Short project identifier used in Azure resource names."
  default     = "mountain-blog"
}

variable "environment" {
  type        = string
  description = "Deployment environment name."
  default     = "dev"
}

variable "location" {
  type        = string
  description = "Azure region for infrastructure resources."
  default     = "westeurope"
}

variable "static_web_app_sku_tier" {
  type        = string
  description = "Azure Static Web App pricing tier."
  default     = "Free"

  validation {
    condition     = contains(["Free", "Standard"], var.static_web_app_sku_tier)
    error_message = "static_web_app_sku_tier must be either Free or Standard."
  }
}

variable "static_web_app_sku_size" {
  type        = string
  description = "Azure Static Web App pricing size."
  default     = "Free"

  validation {
    condition     = contains(["Free", "Standard"], var.static_web_app_sku_size)
    error_message = "static_web_app_sku_size must be either Free or Standard."
  }
}

variable "preview_environments_enabled" {
  type        = bool
  description = "Whether preview environments are enabled for pull requests."
  default     = true
}

variable "workspace_retention_in_days" {
  type        = number
  description = "Retention period for Log Analytics workspace data."
  default     = 30
}

variable "enable_application_insights" {
  type        = bool
  description = "Whether to provision Application Insights for future server-side telemetry."
  default     = true
}

variable "extra_tags" {
  type        = map(string)
  description = "Additional tags applied to all Azure resources."
  default     = {}
}

variable "enable_aks_platform" {
  type        = bool
  description = "Whether to provision the AKS platform layer for GitOps and observability."
  default     = true
}

variable "aks_kubernetes_version" {
  type        = string
  description = "Optional Kubernetes version for AKS. Set to null to let Azure choose the default supported version."
  default     = null
}

variable "aks_system_node_count" {
  type        = number
  description = "System node pool size for AKS."
  default     = 2
}

variable "aks_system_node_vm_size" {
  type        = string
  description = "VM size for the AKS system node pool."
  default     = "Standard_D4s_v5"
}

variable "aks_dns_prefix" {
  type        = string
  description = "DNS prefix for the AKS API endpoint."
  default     = null
}

variable "acr_sku" {
  type        = string
  description = "Azure Container Registry SKU."
  default     = "Basic"

  validation {
    condition     = contains(["Basic", "Standard", "Premium"], var.acr_sku)
    error_message = "acr_sku must be Basic, Standard, or Premium."
  }
}
