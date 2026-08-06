import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, guide, locale = "en" } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const recipientEmail = SITE_CONFIG.contactEmail || "tiedottajanne@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    console.log("=== NEW ENGLISH GLOBAL LEAD ===");
    console.log(`Sending notification to: ${recipientEmail}`);
    console.log(`Subscriber: ${name || "Anonymous"} (${email}), Guide: ${guide || "Free Rehabilitation Materials"}`);

    if (resendApiKey) {
      try {
        // Send Notification Email to Janne
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "PT Sakkinen Website <info@ftsakkinen.com>",
            to: [recipientEmail],
            subject: `New Global Lead (ptsakkinen.com): ${name || email}`,
            html: `
              <div style="font-family: Arial, sans-serif; padding: 16px; background-color: #f4f4f5; border-radius: 8px;">
                <h2 style="color: #00AEEF; margin-top: 0;">New Global Subscriber!</h2>
                <p><strong>Name:</strong> ${name || "Not provided"}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Locale:</strong> ${locale}</p>
                <p><strong>Time:</strong> ${new Date().toISOString()}</p>
              </div>
            `,
          }),
        });

        // Send Welcome Email to Subscriber
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "PT Janne Sakkinen <janne@ftsakkinen.com>",
            to: [email],
            subject: `Welcome to PT Sakkinen Rehabilitation Guides${name ? `, ${name}` : ""}!`,
            tags: [
              { name: "language", value: "en" },
              { name: "site", value: "ptsakkinen.com" },
            ],
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #000a18; color: #ffffff; border-radius: 16px; border: 1px solid #0C66B4;">
                <h2 style="color: #00AEEF; margin-top: 0;">Welcome!</h2>
                <p style="font-size: 15px; line-height: 1.6;">Thank you for subscribing to PT Janne Sakkinen's clinical rehabilitation updates and physical therapy guides.</p>
                
                <div style="margin: 20px 0; background-color: #000d21; border-radius: 12px; padding: 18px; border: 1px solid #0C66B4;">
                  <h3 style="color: #00AEEF; margin-top: 0; font-size: 16px;">📁 Free Digital Rehabilitation Materials</h3>
                  <p style="color: #bbbbbb; font-size: 13px; margin-bottom: 14px; line-height: 1.5;">Access the official shared Google Drive folder containing clinical exercise guides, TMJ protocols, and rehabilitation PDFs:</p>
                  <a href="${SITE_CONFIG.googleDriveUrl}" target="_blank" style="display: inline-block; background-color: #00AEEF; color: #000a18; font-weight: bold; text-decoration: none; padding: 11px 20px; border-radius: 8px; font-size: 13px;">Open Shared Google Drive Folder →</a>
                </div>

                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #0C66B4; color: #888888; font-size: 12px;">
                  <p style="margin: 0; font-weight: bold; color: #ffffff;">Janne Sakkinen</p>
                  <p style="margin: 4px 0 0 0;">OMT Physical Therapist | <a href="https://www.ptsakkinen.com" style="color: #00AEEF; text-decoration: none;">www.ptsakkinen.com</a></p>
                </div>
              </div>
            `,
          }),
        });
      } catch (resendError) {
        console.error("Resend API error sending email:", resendError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Subscription received and notification processed.",
    });
  } catch (error) {
    console.error("Error processing subscription:", error);
    return NextResponse.json({ error: "Server error processing subscription" }, { status: 500 });
  }
}

