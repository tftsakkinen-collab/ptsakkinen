"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Download, Globe, Sparkles } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Puristus Pois Course ⚡", href: "/puristus-pois" },
    { name: "About", href: "/about" },
    { name: "Video Library", href: "/videos" },
    { name: "Programs", href: "/programs" },
    { name: "My Gear", href: "/gear" },
    { name: "Free Guides", href: "/free-guide" },
    { name: "Workshops", href: "/workshops" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#000814] border-b border-[#0C66B4] shadow-2xl transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo with Official Image */}
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

          {/* Desktop Nav - Evenly Spaced & Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-4 xl:gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHighlight = link.href === "/puristus-pois";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-all whitespace-nowrap relative py-1.5 px-2 rounded-lg ${
                    isHighlight
                      ? "text-[#67e8f9] bg-[#014489] border border-[#00AEEF] hover:bg-[#014489]/90 font-bold"
                      : isActive
                      ? "text-[#67e8f9] bg-white/10 font-bold"
                      : "text-slate-100 hover:text-[#67e8f9] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && !isHighlight && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00AEEF] shadow-[0_0_8px_#00AEEF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://www.ftsakkinen.com"
              title="Suomeksi — ftsakkinen.com"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-lg border border-[#0C66B4]/60 bg-[#000d21] text-xs font-semibold text-gray-200 hover:text-white hover:border-[#00AEEF] hover:bg-[#0C66B4]/30 transition-all shadow-sm"
            >
              <Globe className="w-4 h-4 text-[#67e8f9]" />
              <span className="text-slate-300 font-normal">EN /</span>
              <span>FI</span>
            </a>
            <Link
              href="/free-guide"
              className="px-5 py-2.5 min-h-[48px] rounded-lg bg-[#00AEEF] text-black font-bold text-xs sm:text-sm hover:bg-[#33C2F5] transition-all shadow-glow flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Get Free Guide</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-lg bg-[#0C66B4]/20 border border-[#0C66B4]/50 text-white hover:text-[#67e8f9] flex items-center justify-center cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
            <Link
              href="/free-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-[#00AEEF] text-black font-semibold text-center text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Get Free Guide
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
