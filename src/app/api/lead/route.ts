import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyL_ChaSsub6PTbD__EOi8YPezbLlRP37UOKSZTNYN9ThKCgRn_hn2urnKCErcw1P7J/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, lang, source } = body;

    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email || ""))) {
      return NextResponse.json(
        { success: false, error: "invalid_input" },
        { status: 400 }
      );
    }

    const appsScriptUrl = process.env.APPS_SCRIPT_LEAD_URL || DEFAULT_APPS_SCRIPT_URL;

    const payload = {
      // General log text & notification
      tieto: `🔔 NEW LEAD JOINED SITE!\nName: ${name}\nEmail: ${email}\nLanguage: EN\nSource: ${
        source || "free-guide"
      }`,

      // Standard English fields
      name,
      email,
      lang: lang === "fi" ? "fi" : "en",
      source: source || "free-guide",

      // Finnish alias fields for Apps Script compatibility
      etunimi: name,
      nimi: name,
      sahkoposti: email,
      kieli: lang === "fi" ? "fi" : "en",
      lahde: source || "free-guide",

      // Sheet & Action specs
      action: "addLead",
      sheet: "Liidit",
      tab: "Liidit",
      sheetName: "Liidit",

      // Email notification params
      recipient: "tiedottajanne@gmail.com",
      subject: `🔔 New Email Subscriber: ${name} (${email})`,
      secret: process.env.LEAD_SHARED_SECRET || "sakkinen-lead-secret",
      ua: req.headers.get("user-agent") || "",
    };

    const r = await fetch(appsScriptUrl, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const textData = await r.text().catch(() => "");
    let data: any = {};
    try {
      data = JSON.parse(textData);
    } catch (e) {
      data = {};
    }

    const isSuccess =
      r.ok ||
      r.status === 200 ||
      r.status === 302 ||
      data.status === "success" ||
      data.success === true ||
      textData.includes("success");

    if (!isSuccess) {
      console.error("[lead-api] Apps Script lead submission error:", r.status, textData);
      return NextResponse.json(
        { success: false, error: data.error || "send_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("[lead-api] Internal server error:", e);
    return NextResponse.json(
      { success: false, error: "server_error" },
      { status: 500 }
    );
  }
}
