"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Appointment & Consultation");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setErrorMessage("Please enter at least email and message.");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-8 md:p-10 rounded-3xl bg-[#000d21] border border-[#0C66B4] shadow-glow space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Send a Contact Request
        </h2>
        <p className="text-slate-300 text-sm font-normal">
          Fill out the form below for general inquiries, keynotes, and clinical workshop inquiries.
        </p>
        <div className="p-3 rounded-xl bg-[#014489]/30 border border-[#00AEEF]/40 text-[#67e8f9] text-xs font-semibold">
          💡 <strong>Notice:</strong> Appointments are booked only through our partners (Terveystalo, Norre, Hammasvahti). We do not take bookings by phone.
        </div>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF] text-white space-y-3">
          <div className="flex items-center gap-3 text-[#67e8f9] font-bold text-lg">
            <CheckCircle2 className="w-6 h-6" />
            <span>Your message has been sent!</span>
          </div>
          <p className="text-sm text-gray-200">
            Thank you for reaching out. A confirmation has been sent to your email ({email}).
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs font-semibold text-[#67e8f9] underline hover:text-white"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-300 text-sm flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Email *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Phone Number
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+358 40 123 4567"
                className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
              />
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Subject
              </label>
              <select
                id="contact-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white focus:outline-none focus:border-[#00AEEF] text-sm"
              >
                <option value="Online Virtual Consultation (Video Call)">Online Virtual Consultation (Video Call)</option>
                <option value="Appointment & Consultation (Oulu, Finland)">Appointment in Oulu, Finland</option>
                <option value="Workshops & Keynotes">Workshops &amp; Keynotes</option>
                <option value="Dental Ergonomics">Dental Ergonomics</option>
                <option value="Other Inquiry">Other Inquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Message &amp; Preferred Time Zone *
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your main symptoms (e.g. TMJ, jaw clicking, neck pain) and mention your country & time zone for virtual video appointments..."
              className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
