"use client";

import { Activity, Mail, Phone, ArrowUp, Sparkles, MapPin, Heart } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Past Outreaches", href: "/our-work" },
  { label: "Plan an Outreach", href: "/plan-an-outreach" },
];

const serviceLinks = [
  { label: "Medical Outreach Staffing", href: "/services#medical-outreach-staffing" },
  { label: "Doctors & Consultations", href: "/services#doctors" },
  { label: "Nursing Care & Triage", href: "/services#nursing-services" },
  { label: "Laboratory Diagnostics", href: "/services#laboratory-services" },
  { label: "Health Screening & Risk Assessment", href: "/services#health-screening" },
  { label: "Outreach Coordination", href: "/services#outreach-coordination" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0E2A47] text-white relative overflow-hidden">
      {/* Subtle top wave or ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Overview (5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#0B56A4] flex items-center justify-center shadow-md">
                <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  TIFE<span className="text-blue-400">MEDIC</span>
                </span>
                <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase leading-none">
                  Healthcare & Outreach Agency
                </p>
              </div>
            </a>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              TifeMedic is a registered healthcare consulting and medical outreach agency empowering communities
              and organizations across Nigeria through verified medical personnel and turnkey health programs.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/tifemedic"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="TifeMedic Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://x.com/tifemedic"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-twitter"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-sky-500 flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="TifeMedic X (Twitter)"
              >
                <XIcon className="w-4 h-4 text-white" />
              </a>
              <a
                href="mailto:tifemedic@gmail.com"
                id="footer-email-link"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0B56A4] flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Email TifeMedic"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Healthcare Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-5">
              Clinical Solutions
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Coverage (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-5">
              Get in Touch
            </h4>
            
            <a
              href="mailto:tifemedic@gmail.com"
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="truncate">tifemedic@gmail.com</span>
            </a>

            <a
              href="tel:+2348052544332"
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>+234 805 254 4332</span>
            </a>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0" />
              <span>Nigeria (Nationwide)</span>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all hover:-translate-y-0.5 cursor-pointer"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Medical & Emergency Disclaimer Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-200">Clinical Disclaimer:</strong> TifeMedic specializes in scheduled public health
            outreaches, preventive corporate screenings, and medical staffing. We do not provide 24/7 emergency trauma services.
            For acute medical emergencies, please visit the nearest hospital or call local emergency dispatch numbers immediately.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} TifeMedic Healthcare Services. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with care for health across Africa</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
