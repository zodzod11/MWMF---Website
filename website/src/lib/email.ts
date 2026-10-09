export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

/**
 * Send an email via Resend.
 * Not configured until RESEND_API_KEY environment variable is set.
 * See: https://resend.com
 */
export async function sendEmail(_payload: EmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[EMAIL] Not sent — RESEND_API_KEY not configured");
    console.log("[EMAIL] Would have sent:", JSON.stringify(_payload, null, 2));
    return;
  }

  // TODO: Uncomment when Resend is configured
  // const res = await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${apiKey}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     from: "Women Maternal Wellness Foundation <notifications@womenmaternalwellness.org>",
  //     to: _payload.to,
  //     subject: _payload.subject,
  //     html: _payload.html,
  //   }),
  // });
  // if (!res.ok) {
  //   console.error("[EMAIL] Failed to send:", await res.text());
  // }
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
}): Promise<void> {
  await sendEmail({
    to: "contact@womenmaternalwellness.org", // [VERIFY] confirm contact email
    subject: `[WMWF Contact] ${data.topic} — ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "—"}</p>
      <p><strong>Topic:</strong> ${data.topic}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
  });
}
