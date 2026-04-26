# Mountain Blog Project Blueprint

Content-first Ukrainian hiking platform built with Next.js, TypeScript, Tailwind CSS, and Markdown content files.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Markdown content stored in `src/content`
- Static-friendly architecture ready for future Azure evolution

## Run locally

```bash
npm install
npm run dev
```

## Optional environment

- `NEXT_PUBLIC_SITE_URL` sets the canonical site origin for metadata, Open Graph, `robots.txt`, and `sitemap.xml`
- if not set, the project falls back to `http://localhost:3000`

## Deployment automation

- `CI` runs lint, typecheck, build, and a static export smoke test on pushes and pull requests
- `Release Dev` is designed to create or update the Azure `dev` infrastructure with Terraform and then deploy the static site to Azure Static Web Apps
- the release workflow expects GitHub Actions secrets `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, and `AZURE_SUBSCRIPTION_ID`
- the Terraform backend values are already fixed in the workflow for this repository, so no extra GitHub repository variables are required for the `dev` release path

## Project structure

- `src/app` application routes
- `src/components` reusable UI
- `src/content` markdown-driven content collections
- `src/lib` content loading, metadata, site configuration
- `infra/terraform` initial Azure-oriented skeleton
- `.github/workflows` CI placeholder for lint, typecheck, build

## Notes

- Website content is intentionally written in Ukrainian.
- Code, configuration, and documentation are in English.
- The initial MVP avoids a database by design.
