"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, PhoneCall } from "lucide-react";

const faqs = [
  {
    question: "What is included in a TifeMedic Corporate Wellness Day?",
    answer:
      "Our Corporate Wellness programs typically include onsite physician consultations, blood pressure & BMI checks, random blood sugar (diabetes) screening, lipid profile checks, eye checks, stress counseling, and confidential individual health reports. We also provide HR with an anonymized aggregate wellness health summary.",
  },
  {
    question: "Can TifeMedic execute medical outreaches outside of Lagos?",
    answer:
      "Yes! TifeMedic operates nationwide across Nigeria. We have organized and staffed successful outreach programs and corporate health activations in Lagos, Ogun, Oyo, Abuja (FCT), Port Harcourt, and surrounding states.",
  },
  {
    question: "How do you verify the credentials of healthcare personnel?",
    answer:
      "Every doctor, nurse, pharmacist, and medical laboratory scientist in our network undergoes strict verification: active Medical and Dental Council of Nigeria (MDCN) or Nursing Council licenses, valid indemnity cover, and background checks on clinical experience.",
  },
  {
    question: "How far in advance do we need to book an outreach or corporate event?",
    answer:
      "For small-to-medium corporate health days (up to 200 staff), 1 to 2 weeks notice is usually sufficient. For large community medical outreaches (500+ attendees) requiring complex drug logistics, tent setup, and crowd permits, we recommend booking 3 to 4 weeks in advance.",
  },
  {
    question: "Are all medications and test kits NAFDAC-approved?",
    answer:
      "Absolutely. We only procure medications, diagnostic test strips, and medical consumables from licensed pharmaceutical distributors with full NAFDAC registration and strict batch expiry traceability.",
  },
  {
    question: "Can we customize our outreach package to match our budget?",
    answer:
      "Yes. We design tiered packages to fit various CSR and corporate budgets — ranging from basic vital screenings and health talks to comprehensive mobile mini-clinics with free drug dispensaries.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-blue-50/80 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-slate-50 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B56A4]/10 border border-[#0B56A4]/20 text-[#0B56A4] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-6">
            Frequently Asked <span className="text-[#0B56A4]">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about planning an outreach, booking staff, or organizing corporate health events.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F8FAFD] border-[#0B56A4]/30 shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#0B56A4]/30 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle
                      className={`w-5 h-5 flex-shrink-0 transition-colors ${
                        isOpen ? "text-[#0B56A4]" : "text-slate-400"
                      }`}
                    />
                    <span className="text-base sm:text-lg font-bold text-[#1E242B]">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#0B56A4] text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/50 mt-1">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-[#F0F6FD] to-emerald-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0B56A4] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/20">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base font-bold text-[#1E242B]">Have a unique requirement?</p>
              <p className="text-xs sm:text-sm text-slate-600">Speak directly with our clinical outreach coordinator.</p>
            </div>
          </div>

          <a
            href="tel:+2348052544332"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B56A4] hover:bg-[#08407B] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Call +234 805 254 4332</span>
          </a>
        </div>
      </div>
    </section>
  );
}
