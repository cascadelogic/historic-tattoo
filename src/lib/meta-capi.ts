import { createHash } from "crypto";

const PIXEL_ID = process.env.META_PIXEL_ID?.trim();
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN?.trim();
const GRAPH_URL = `https://graph.facebook.com/v24.0/${PIXEL_ID}/events`;

function sha256(value: string): string {
  return createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
}

interface CAPIEventParams {
  eventName: string;
  eventId: string;
  sourceUrl: string;
  ip: string;
  userAgent: string;
  fbp?: string;
  fbc?: string;
  customData?: Record<string, unknown>;
  testEventCode?: string;
}

export async function sendCAPIEvent(params: CAPIEventParams) {
  if (!PIXEL_ID || !ACCESS_TOKEN) return;

  const userData: Record<string, unknown> = {
    client_ip_address: params.ip,
    client_user_agent: params.userAgent,
    // Historic Tattoo is in Portland, OR — include geo for match quality
    ct: [sha256("portland")],
    st: [sha256("or")],
    zp: [sha256("97215")],
    country: [sha256("us")],
  };

  if (params.fbp) userData.fbp = params.fbp;
  if (params.fbc) userData.fbc = params.fbc;

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: params.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: params.eventId,
        event_source_url: params.sourceUrl,
        action_source: "website",
        user_data: userData,
        ...(params.customData && { custom_data: params.customData }),
      },
    ],
    access_token: ACCESS_TOKEN,
  };

  if (params.testEventCode) {
    payload.test_event_code = params.testEventCode;
  }

  const res = await fetch(GRAPH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("[Meta CAPI] Error:", err);
  }

  return res;
}
