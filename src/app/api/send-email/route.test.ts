import { vi, describe, it, expect, beforeEach } from "vitest";

vi.mock("nodemailer", () => {
  const sendMail = vi.fn().mockResolvedValue({ messageId: "mocked" });
  const transport = () => ({ sendMail });
  // Provide both named and default-style exports to be robust across import styles
  return {
    createTransport: transport,
    default: {
      createTransport: transport,
    },
  };
});

import { POST } from "./route";

describe("POST /api/send-email", () => {
  beforeEach(() => {
    process.env.SMTP_HOST = "smtp.test";
    process.env.SMTP_PORT = "587";
    process.env.SMTP_USER = "user@test";
    process.env.SMTP_PASS = "pass";
    process.env.TO_EMAIL = "to@test";
  });

  it("returns ok when payload valid", async () => {
    const req = {
      json: async () => ({ name: "A", email: "a@test.com", message: "hi" }),
    };
    const res = await POST(req as any);
    // Response ist ein Web-Response; überprüfe Status + Body
    expect((res as Response).status).toBe(200);
    const body = JSON.parse(await (res as Response).text());
    expect(body.ok).toBe(true);
  });

  it("returns 500 when transporter missing host", async () => {
    delete process.env.SMTP_HOST;
    const req = {
      json: async () => ({ name: "A", email: "a@test.com", message: "hi" }),
    };
    const res = await POST(req as any);
    expect((res as Response).status).toBe(500);
  });
});
