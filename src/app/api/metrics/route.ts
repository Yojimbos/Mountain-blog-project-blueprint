import { NextResponse } from "next/server";

import { getMetricsRegistry } from "@/lib/metrics";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const registry = getMetricsRegistry();

  return new NextResponse(await registry.metrics(), {
    status: 200,
    headers: {
      "Content-Type": registry.contentType,
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}

