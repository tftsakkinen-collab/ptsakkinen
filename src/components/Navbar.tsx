"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, CreditCard, Globe, Sparkles, FolderDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const STRIPE_29_USD_URL = "https://buy.stripe.com/dRm14n2C8cM65lEeYl0Ny03";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Video Guide ($29)", href: "/#course" },
    { name: "Video Library", href: "/videos" },
    { name: "Free Guides", href: "/free-guide" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#000814] border-b border-[#0C66B4] shadow-2xl transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#00AEEF] bg-[#000a18] flex items-center justify-center shadow-[0_0_15px_rgba(0,174,239,0.8)] group-hover:scale-105 transition-transform p-0.5">
              <img
                src="/logo-whitebg.png?v=20260730"
                alt="PT Sakkinen logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl tracking-wide text-white group-hover:text-[#67e8f9] transition-colors">
                PT SAKKINEN<span className="text-[#67e8f9]">.</span>
              </span>
              <span className="text-[10px] text-slate-300 uppercase tracking-widest -mt-1 font-sans font-semibold">
                OMT Physical Therapist
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-3 xl:gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHighlight = link.name.includes("$29");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-all whitespace-nowrap py-1.5 px-3 rounded-lg ${
                    isHighlight
                      ? "text-[#67e8f9] bg-[#014489] border border-[#00AEEF] hover:bg-[#014489]/90 font-extrabold"
                      : isActive
                      ? "text-[#67e8f9] bg-white/10 font-bold"
                      : "text-slate-100 hover:text-[#67e8f9] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Persistent CTA Button (Blueprint NavGlobal Rule: "Get the course — $29") */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://www.ftsakkinen.com"
              title="Suomeksi — ftsakkinen.com"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 min-h-[44px] rounded-lg border border-[#0C66B4]/60 bg-[#000d21] text-xs font-semibold text-gray-200 hover:text-white hover:border-[#00AEEF] transition-all shadow-sm"
            >
              <Globe className="w-4 h-4 text-[#67e8f9]" />
              <span className="text-slate-300 font-normal">EN /</span>
              <span>FI</span>
            </a>

            <a
              href={STRIPE_29_USD_URL}
              className="px-5 py-2.5 min-h-[46px] rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-xs sm:text-sm hover:from-white hover:to-slate-100 transition-all shadow-[0_0_20px_rgba(0,174,239,0.5)] flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <CreditCard className="w-4 h-4 text-[#000a18]" />
              <span>Get the course — $29</span>
            </a>
          </div>

          {/* Mobile Menu Button + Persistent Header CTA */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={STRIPE_29_USD_URL}
              className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-xs flex items-center gap-1 shrink-0"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Get Course ($29)</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="min-w-[44px] min-h-[44px] p-2 rounded-lg bg-[#0C66B4]/20 border border-[#0C66B4]/50 text-white hover:text-[#67e8f9] flex items-center justify-center cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000d21] border-b border-[#0C66B4]/40 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-[#0C66B4]/30 text-[#67e8f9] border-l-4 border-[#00AEEF]"
                      : "text-slate-200 hover:bg-[#0C66B4]/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="https://www.ftsakkinen.com"
              className="w-full py-2.5 rounded-lg border border-[#0C66B4]/60 bg-[#000a18] text-gray-200 text-center text-sm font-semibold hover:border-[#00AEEF] transition-all flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4 text-[#67e8f9]" />
              Vaihda Suomeksi (ftsakkinen.com)
            </a>
            <a
              href={STRIPE_29_USD_URL}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-center text-base hover:from-white hover:to-slate-100 transition-all shadow-glow flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5" />
              Get the course — $29
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
