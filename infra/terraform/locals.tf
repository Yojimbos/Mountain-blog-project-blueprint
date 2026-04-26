locals {
  base_name = lower(replace("${var.project_name}-${var.environment}", "_", "-"))

  resource_names = {
    resource_group = "rg-${local.base_name}"
    static_web_app = substr("swa-${local.base_name}", 0, 60)
  }

  tags = merge(
    {
      project     = var.project_name
      environment = var.environment
      managed_by  = "terraform"
      workload    = "web-platform"
    },
    var.extra_tags
  )
}
