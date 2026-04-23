# Ansible Operations

Ansible is used here for imperative bootstrap and operator workflows that sit outside ongoing GitOps reconciliation.

## Where Ansible fits

- bootstrap an operator workstation or admin VM with `az`, `kubectl`, `helm`, and `flux`
- fetch AKS kubeconfig locally
- run the one-time Flux bootstrap against GitHub
- validate platform readiness after infrastructure creation

Flux remains the source of truth for in-cluster state. Ansible does not replace Flux for application or platform reconciliation.

## Playbooks

- `playbooks/bootstrap-tools.yml` install operator tooling on Ubuntu hosts
- `playbooks/get-aks-credentials.yml` fetch AKS credentials
- `playbooks/bootstrap-flux.yml` run Flux bootstrap for this repository

