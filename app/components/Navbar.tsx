"use client";

import { useState, useEffect } from "react";
import { Menu, X, Activity, Phone, Calendar, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Outreach Campaigns", href: "#outreach" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#0B56A4]/40 rounded-xl p-1"
            aria-label="TifeMedic - Back to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B56A4] to-[#0E2A47] flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <Activity className="w-5 h-5 text-white animate-pulse" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-[#1E242B] flex items-center">
                TIFE
                <span className="text-[#0B56A4]">MEDIC</span>
              </span>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase leading-none">
                Healthcare · Consulting
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-slate-200/60 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-semibold text-[#334155] hover:text-[#0B56A4] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+2348052544332"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#0B56A4] px-3.5 py-2 rounded-xl hover:bg-blue-50/60 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B56A4]" />
              <span>+234 805 254 4332</span>
            </a>

            <a
              href="#contact"
              id="nav-cta-button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B56A4] hover:bg-[#08407B] text-white text-xs font-bold transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+2348052544332"
              className="p-2.5 rounded-xl bg-blue-50 text-[#0B56A4] hover:bg-blue-100 transition-colors"
              aria-label="Call TifeMedic"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B56A4]"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[420px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-slate-100 p-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#1E242B] hover:bg-blue-50/80 hover:text-[#0B56A4] transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-400">→</span>
              </a>
            ))}

            <div className="pt-2 border-t border-slate-100 mt-2">
              <a
                href="#contact"
                onClick={handleLinkClick}
                id="mobile-cta-button"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#0B56A4] text-white text-sm font-bold shadow-md shadow-blue-500/25 active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Outreach / Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
