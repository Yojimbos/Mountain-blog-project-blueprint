import { Counter, Gauge, Registry, collectDefaultMetrics } from "prom-client";

const register = new Registry();

collectDefaultMetrics({
  register,
  prefix: "mountain_blog_",
});

const appInfo = new Gauge({
  name: "mountain_blog_app_info",
  help: "Static information about the running application.",
  labelNames: ["app", "version", "environment"],
  registers: [register],
});

const metricsRequests = new Counter({
  name: "mountain_blog_metrics_requests_total",
  help: "Number of scrapes performed against the metrics endpoint.",
  registers: [register],
});

appInfo.set(
  {
    app: "mountain-blog",
    version: process.env.npm_package_version || "0.1.0",
    environment: process.env.NODE_ENV || "development",
  },
  1,
);

export function getMetricsRegistry() {
  metricsRequests.inc();
  return register;
}

