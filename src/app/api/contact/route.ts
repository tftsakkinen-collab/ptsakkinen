import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required fields." },
        { status: 400 }
      );
    }

    const recipientEmail = SITE_CONFIG.contactEmail || "tiedottajanne@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        // 1. Send Notification Email to Janne Sakkinen
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "PT Sakkinen Website <onboarding@resend.dev>",
            to: [recipientEmail],
            subject: `New Global Contact Inquiry: ${name || email}`,
            tags: [
              { name: "language", value: "en" },
              { name: "type", value: "contact-form" },
            ],
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #000a18; color: #ffffff; border-radius: 16px; border: 1px solid #0C66B4;">
                <h2 style="color: #00AEEF; margin-top: 0;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name || "Not provided"}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
                <hr style="border: 0; border-top: 1px solid #0C66B4; margin: 16px 0;" />
                <p><strong>Message:</strong></p>
                <div style="background-color: #000d21; padding: 16px; border-radius: 8px; border: 1px solid #0C66B4/50; color: #dddddd; white-space: pre-wrap;">
                  ${message}
                </div>
                <p style="color: #888; font-size: 12px; margin-top: 20px;">Time: ${new Date().toISOString()}</p>
              </div>
            `,
          }),
        });

        // 2. Send Confirmation Email to Sender
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "PT Janne Sakkinen <onboarding@resend.dev>",
            to: [email],
            subject: `Thank you for reaching out${name ? `, ${name}` : ""}!`,
            tags: [
              { name: "language", value: "en" },
              { name: "type", value: "contact-confirmation" },
            ],
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #000a18; color: #ffffff; border-radius: 16px; border: 1px solid #0C66B4;">
                <h2 style="color: #00AEEF; margin-top: 0;">Thank You for Your Inquiry!</h2>
                <p style="font-size: 15px; line-height: 1.6;">Hello ${name || "there"},</p>
                <p style="font-size: 14px; line-height: 1.6; color: #dddddd;">Your message has been received successfully. I will respond to your inquiry as soon as possible.</p>
                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #0C66B4; color: #888888; font-size: 12px;">
                  <p style="margin: 0; font-weight: bold; color: #ffffff;">Janne Sakkinen</p>
                  <p style="margin: 4px 0 0 0;">OMT Physical Therapist | <a href="https://www.ptsakkinen.com" style="color: #00AEEF; text-decoration: none;">www.ptsakkinen.com</a></p>
                </div>
              </div>
            `,
          }),
        });
      } catch (resendErr) {
        console.error("Resend API error:", resendErr);
      }
    }

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Server error sending message." }, { status: 500 });
  }
}
