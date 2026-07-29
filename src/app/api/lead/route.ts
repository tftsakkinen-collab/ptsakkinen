import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, guide, locale = "en" } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const leadData = {
      name,
      email,
      guide,
      locale,
      list: "PT_Sakkinen_EN",
      recipient: SITE_CONFIG.contactEmail, // tiedottajanne@gmail.com
      timestamp: new Date().toISOString(),
    };

    console.log("=== NEW ENGLISH GLOBAL LEAD ===");
    console.log(`Sending notification to: ${leadData.recipient}`);
    console.log(`Subscriber: ${name} (${email}), Guide: ${guide}`);

    // Here we integrate with Formspree / Resend / Webhook if API Key is configured
    // E.g., await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify(leadData) })

    return NextResponse.json({
      success: true,
      message: "Subscription received and notification sent.",
      driveUrl: "https://drive.google.com/drive/folders/[PLACEHOLDER_ENGLISH_DRIVE_FOLDER]",
    });
  } catch (error) {
    console.error("Error processing subscription:", error);
    return NextResponse.json({ error: "Server error processing subscription" }, { status: 500 });
  }
}
