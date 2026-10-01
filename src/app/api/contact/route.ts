const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const bad = (error: string) => Response.json({ error }, { status: 400 });

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return bad("invalid_body");

  // honeypot: real users never see or fill this field, bots do
  if (body.website) return Response.json({ ok: true });

  const name = typeof body.name === "string" ? body.name.replace(/\s+/g, " ").trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 100) return bad("invalid_name");
  if (!EMAIL_RE.test(email) || email.length > 200) return bad("invalid_email");
  if (!message || message.length > 5000) return bad("invalid_message");

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    console.error("contact: RESEND_API_KEY / CONTACT_TO / CONTACT_FROM not set");
    return Response.json({ error: "not_configured" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `${name} <${email}>\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("contact: resend failed", res.status, await res.text());
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
