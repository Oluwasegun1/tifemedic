"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  MapPin,
  MessageSquare,
  Sparkles,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

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

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.677.15-.2.301-.777.98-.953 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.789-1.68-2.09-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.3-.501.1-.2.05-.376-.025-.527-.075-.15-.677-1.63-.928-2.232-.244-.587-.493-.507-.677-.516-.175-.009-.376-.011-.577-.011s-.527.075-.803.376c-.276.301-1.053 1.029-1.053 2.508s1.079 2.909 1.229 3.11c.15.201 2.123 3.242 5.143 4.547.718.31 1.279.496 1.716.635.721.23 1.377.198 1.896.12.578-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.175-1.429-.075-.126-.276-.201-.577-.351zM12.04 2C6.527 2 2.05 6.477 2.05 11.99c0 1.815.488 3.518 1.34 4.992L2 22l5.176-1.356a9.94 9.94 0 0 0 4.864 1.267c5.513 0 9.99-4.477 9.99-9.99C22.03 6.477 17.553 2 12.04 2zm0 18.257a8.23 8.23 0 0 1-4.202-1.151l-.301-.179-3.125.82.834-3.045-.196-.312a8.232 8.232 0 0 1-1.267-4.399c0-4.566 3.716-8.282 8.282-8.282 4.566 0 8.282 3.716 8.282 8.282 0 4.566-3.716 8.266-8.282 8.266z" />
    </svg>
  );
}

const serviceOptions = [
  "Corporate Health & Wellness Program",
  "Public Health & Community Outreach",
  "Medications & Pharmaceutical Logistics",
  "Healthcare Personnel Staffing",
  "Health Education / Keynote Talk",
  "Other Custom Project",
];

const contactChannels = [
  {
    icon: Phone,
    label: "Direct Phone Call",
    value: "+234 805 254 4332",
    href: "tel:+2348052544332",
    color: "text-[#0B56A4]",
    bg: "bg-blue-50",
    description: "Mon – Sat: 8:00 AM – 6:00 PM WAT",
  },
  {
    icon: Mail,
    label: "Official Email",
    value: "tifemedic@gmail.com",
    href: "mailto:tifemedic@gmail.com",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    description: "Formal inquiries & proposal requests",
  },
  {
    icon: MapPin,
    label: "Service Coverage",
    value: "Nationwide (Nigeria)",
    href: "#",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    description: "Lagos, Abuja, Ogun, Oyo & all states",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    service: "",
    estimatedAttendees: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate safe client submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-28 bg-[#F8FAFD] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-emerald-50/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B56A4]/10 border border-[#0B56A4]/20 text-[#0B56A4] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-6">
            Book a Consultation or <span className="text-[#0B56A4]">Medical Outreach</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ready to bring certified medical teams or corporate health checkups to your organization?
            Fill out the form below or chat directly with our coordinator on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Smart Consultation Booking Form */}
          <div className="lg:col-span-7 reveal-left">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl shadow-blue-950/5">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-5">
                  <div className="w-18 h-18 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1E242B]">
                    Consultation Request Received!
                  </h3>
                  <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed">
                    Thank you for contacting TifeMedic. Our clinical outreach director will review your details
                    and contact you within <strong>24 hours</strong> with a customized execution proposal.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        organization: "",
                        email: "",
                        phone: "",
                        service: "",
                        estimatedAttendees: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-3 rounded-xl bg-blue-50 text-[#0B56A4] text-sm font-bold hover:bg-blue-100 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Adeola Martins"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-[#F8FAFD] text-sm text-[#1E242B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B56A4]/30 focus:border-[#0B56A4] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Organization / Community
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formState.organization}
                        onChange={handleChange}
                        placeholder="e.g. Acme Corp / Grace Foundation"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-[#F8FAFD] text-sm text-[#1E242B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B56A4]/30 focus:border-[#0B56A4] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="adeola@organization.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-[#F8FAFD] text-sm text-[#1E242B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B56A4]/30 focus:border-[#0B56A4] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-[#F8FAFD] text-sm text-[#1E242B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B56A4]/30 focus:border-[#0B56A4] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Primary Service Needed <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-[#F8FAFD] text-sm text-[#1E242B] focus:outline-none focus:ring-2 focus:ring-[#0B56A4]/30 focus:border-[#0B56A4] transition-all cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a service package...
                        </option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="estimatedAttendees"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                      >
                        Expected Attendees / Staff
                      </label>
                      <input
                        id="estimatedAttendees"
                        name="estimatedAttendees"
                        type="text"
                        value={formState.estimatedAttendees}
                        onChange={handleChange}
                        placeholder="e.g. 50 - 200 persons"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-[#F8FAFD] text-sm text-[#1E242B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B56A4]/30 focus:border-[#0B56A4] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Project Details & Target Date <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about the target location, proposed date, specific tests needed, or staffing requirements..."
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-[#F8FAFD] text-sm text-[#1E242B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B56A4]/30 focus:border-[#0B56A4] transition-all resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0B56A4] hover:bg-[#08407B] text-white font-bold text-base transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Instant Channels & WhatsApp Direct Action */}
          <div className="lg:col-span-5 space-y-6 reveal-right" style={{ transitionDelay: "0.1s" }}>
            {/* Direct 1-Click WhatsApp Quick Action Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-7 text-white shadow-xl shadow-emerald-950/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-4">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>Instant Response</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
                  Need a Rapid Consultation?
                </h3>
                <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                  Chat directly with our Clinical Operations team on WhatsApp for immediate pricing and availability.
                </p>

                <a
                  href="https://wa.me/2348052544332?text=Hello%20TifeMedic,%20I%20would%20like%20to%20inquire%20about%20your%20healthcare%20services%20and%20outreach%20programs."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="whatsapp-chat-button"
                  className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-xl bg-white text-emerald-800 font-bold text-sm hover:bg-emerald-50 transition-all shadow-md active:scale-98"
                >
                  <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                  <span>Chat on WhatsApp (+234 805 254 4332)</span>
                </a>
              </div>
            </div>

            {/* Contact Channels Cards */}
            <div className="space-y-4">
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#0B56A4]/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${channel.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xs`}
                  >
                    <channel.icon className={`w-6 h-6 ${channel.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {channel.label}
                    </p>
                    <p className="text-sm font-bold text-[#1E242B] truncate group-hover:text-[#0B56A4] transition-colors">
                      {channel.value}
                    </p>
                    <p className="text-xs text-slate-500">{channel.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Channels Pill Box */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Follow Our Field Work
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/tifemedic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-pink-50 hover:text-pink-600 text-slate-700 text-xs font-bold transition-colors border border-slate-200/60"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://x.com/tifemedic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-sky-50 hover:text-sky-600 text-slate-700 text-xs font-bold transition-colors border border-slate-200/60"
                >
                  <XIcon className="w-4 h-4" />
                  <span>X / Twitter</span>
                </a>
              </div>
            </div>

            {/* 24h SLA Trust Promise */}
            <div className="bg-blue-50/80 rounded-2xl p-4 border border-blue-100 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#0B56A4] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[#0B56A4]">24-Hour Proposal Commitment</p>
                <p className="text-xs text-slate-600 mt-0.5">
                  We prepare customized itemized budgets and personnel deployment schedules within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
