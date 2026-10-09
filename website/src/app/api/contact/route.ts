import { ContactSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { sanitizeAll } from "@/lib/sanitize";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const limit = checkRateLimit(ip);
    if (!limit.allowed) {
      return Response.json(
        { ok: false, errors: [{ field: "form", message: "Too many requests. Please wait before trying again." }] },
        { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
      );
    }

    // Size limit (32KB)
    const text = await request.text();
    if (text.length > 32_768) {
      return Response.json(
        { ok: false, errors: [{ field: "form", message: "Message too long." }] },
        { status: 413 }
      );
    }

    const body = JSON.parse(text);

    // Honeypot
    if (body._hp && body._hp.length > 0) {
      return Response.json({ ok: true });
    }

    const result = ContactSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.issues.map((i) => ({
        field: i.path.join("."),
        message: sanitizeAll({ m: i.message }).m as string,
      }));
      return Response.json({ ok: false, errors }, { status: 400 });
    }

    const data = sanitizeAll(result.data as Record<string, unknown>) as unknown as typeof result.data;

    console.log("[CONTACT FORM]", JSON.stringify(data, null, 2));

    return Response.json({
      ok: true,
      message: "Thank you for reaching out. We will respond as soon as possible.",
    });
  } catch {
    return Response.json(
      { ok: false, errors: [{ field: "form", message: "Invalid request. Please try again." }] },
      { status: 400 }
    );
  }
}
