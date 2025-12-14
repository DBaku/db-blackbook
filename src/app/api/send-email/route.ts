import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Environment variables required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL
    const host = process.env.SMTP_HOST;
    if (!host) {
      return new Response(JSON.stringify({ error: "SMTP not configured" }), {
        status: 500,
      });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: `Website Contact: ${body.name || "Neue Nachricht"}`,
      text: `Von: ${body.name} <${body.email}>\n\n${body.message}`,
    });

    return new Response(JSON.stringify({ ok: true }));
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
    });
  }
}
