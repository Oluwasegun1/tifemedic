import Image from "next/image";
import {
  CalendarDays,
  ArrowRight,
  Ribbon,
  HeartPulse,
  Stethoscope,
  Sparkles,
  MapPin,
  Users2,
} from "lucide-react";

const campaigns = [
  {
    id: "breast-cancer",
    icon: Ribbon,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-50",
    tag: "Active Campaign",
    tagColor: "bg-pink-100 text-pink-700 border-pink-200",
    title: "Breast Cancer Awareness & Clinical Screening",
    date: "Quarterly Community Tour Across Nigeria",
    location: "Lagos & Ogun Communities",
    description:
      "Delivering free breast clinical examinations, ultrasound referrals, self-check education, and preventive oncology consultations to underserved women.",
  },
  {
    id: "cardio-wellness",
    icon: HeartPulse,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
    tag: "Upcoming Mission",
    tagColor: "bg-rose-100 text-rose-700 border-rose-200",
    title: "Cardiovascular Wellness & Hypertension Mission",
    date: "Monthly Outreach Circuit",
    location: "Community Centers & Faith Venues",
    description:
      "Mass digital blood pressure screening, random blood glucose testing, body mass index checks, and complimentary cardiovascular medications.",
  },
  {
    id: "corporate-wellness-day",
    icon: Stethoscope,
    iconColor: "text-[#0B56A4]",
    iconBg: "bg-blue-50",
    tag: "Open for Booking",
    tagColor: "bg-blue-100 text-[#0B56A4] border-blue-200",
    title: "Corporate Wellness Day & Executive Checkup",
    date: "On-Demand Flexible Scheduling",
    location: "On-Site at Client Premises",
    description:
      "A dedicated, zero-downtime health day for your workforce: on-site physician consultations, cholesterol profiling, ergonomic checks, and confidential wellness reports.",
  },
];

export default function OutreachCTA() {
  return (
    <section id="outreach" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-slate-50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B56A4]/10 border border-[#0B56A4]/20 text-[#0B56A4] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community Programs & Missions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-6">
            Current Outreach Campaigns & <span className="text-[#0B56A4]">Field Missions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We partner with corporate CSR initiatives, philanthropic foundations, and religious organizations to
            deliver healthcare right to where it matters most.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Interactive Campaign Cards */}
          <div className="lg:col-span-7 space-y-5 reveal-left">
            {campaigns.map((campaign, i) => (
              <div
                key={campaign.id}
                id={`campaign-${campaign.id}`}
                className={`reveal group relative bg-[#F8FAFD] rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-300 hover:bg-white shadow-xs hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-0.5 transition-all duration-300 stagger-${i + 1}`}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className={`w-13 h-13 rounded-2xl ${campaign.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xs mt-1`}
                  >
                    <campaign.icon className={`w-6 h-6 ${campaign.iconColor}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold border ${campaign.tagColor}`}
                      >
                        {campaign.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#1E242B] mb-2 group-hover:text-[#0B56A4] transition-colors">
                      {campaign.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-500 mb-3">
                      <div className="flex items-center gap-1.5 text-[#0B56A4] font-semibold">
                        <CalendarDays className="w-3.5 h-3.5" />
                        <span>{campaign.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{campaign.location}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {campaign.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                id="outreach-inquire-btn"
                className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#0B56A4] hover:bg-[#08407B] text-white font-bold text-base transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Partner or Sponsor an Outreach</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Featured Photo & Floating Impact Widgets */}
          <div className="lg:col-span-5 relative reveal-right" style={{ transitionDelay: "0.15s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/15 border-4 border-white aspect-[4/5] sm:aspect-auto sm:h-[580px]">
              <Image
                src="/outreach.jpg"
                alt="TifeMedic medical team on the ground conducting community health screening"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/90 via-[#0E2A47]/30 to-transparent" />

              {/* Top Floating Pill */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#0B56A4] shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Real Field Impact</span>
                </div>
              </div>

              {/* Bottom Glassmorphism Impact Stats Overlay */}
              <div className="absolute bottom-5 left-5 right-5 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3.5 border border-white/20 text-white">
                    <div className="flex items-center gap-1.5 text-blue-200 text-xs font-medium mb-1">
                      <Users2 className="w-3.5 h-3.5" />
                      <span>Communities</span>
                    </div>
                    <p className="text-2xl font-black">15+ States</p>
                  </div>

                  <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3.5 border border-white/20 text-white">
                    <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-medium mb-1">
                      <HeartPulse className="w-3.5 h-3.5" />
                      <span>Free Checks</span>
                    </div>
                    <p className="text-2xl font-black">100% Free</p>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 text-[#1E242B] border border-white/80 shadow-md">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0B56A4]">
                    Custom Outreach Packages
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    We handle everything: permits, drugs, doctors, triage, screening kits, and report analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
