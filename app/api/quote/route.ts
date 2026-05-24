import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, details } = body as {
      name?: string;
      email?: string;
      phone?: string;
      details?: string;
    };

    if (!name?.trim() || !email?.trim() || !details?.trim()) {
      return NextResponse.json({ ok: false, error: "Please fill out all required fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM ?? "quotes@walshsdemo.com";
    const to = process.env.RESEND_TO ?? "hello@walshsdemo.com";

    if (!apiKey) {
      console.warn("RESEND_API_KEY not set — skipping email send.");
      return NextResponse.json({ ok: true });
    }

    const html = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Project Details:</strong></p>
      <p>${details.replace(/\n/g, "<br>")}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to,
        subject: `New Quote Request from ${name}`,
        html,
        reply_to: email
      })
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ ok: false, error: "Failed to send message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json({ ok: false, error: "An unexpected error occurred." }, { status: 500 });
  }
}
