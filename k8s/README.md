# Kubernetes GitOps Layout

This directory contains the GitOps-managed Kubernetes platform for the project.

## Structure

- `clusters/<env>` cluster entrypoints consumed by Flux
- `infrastructure` shared platform components such as ingress, monitoring, and logging
- `apps` application workloads and overlays

## Platform decisions

- GitOps controller: FluxCD
- Metrics and dashboards: kube-prometheus-stack
- Logs: Loki
- Log collection: Grafana Alloy
- Ingress: ingress-nginx

## Bootstrap flow

1. Provision AKS with Terraform
2. Build and publish the application image
3. Bootstrap Flux against this repository
4. Let Flux reconcile `k8s/clusters/<env>`

## Notes

- Loki is kept internal to the cluster as `ClusterIP`
- Grafana is provisioned by the Prometheus stack and gets Loki as an additional datasource
- The application exposes `/api/health` and `/api/metrics`

