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

variable "extra_tags" {
  type        = map(string)
  description = "Additional tags applied to all Azure resources."
  default     = {}
}
