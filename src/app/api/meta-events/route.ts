import { NextRequest, NextResponse } from "next/server";
import { sendCAPIEvent } from "@/lib/meta-capi";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, eventId, sourceUrl, customData } = body;

    if (!eventName || !eventId || !sourceUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Extract user signals from request
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "0.0.0.0";
    const userAgent = request.headers.get("user-agent") || "";

    // Read Meta cookies for matching
    const fbp = request.cookies.get("_fbp")?.value;
    const fbc = request.cookies.get("_fbc")?.value;

    await sendCAPIEvent({
      eventName,
      eventId,
      sourceUrl,
      ip,
      userAgent,
      fbp,
      fbc,
      customData,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
