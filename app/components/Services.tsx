import {
  Building2,
  Globe2,
  Pill,
  UserCheck2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    id: "corporate-health",
    icon: Building2,
    serviceKey: "Corporate Health Program",
    badge: "For Organizations",
    title: "Corporate Health & Wellness Programs",
    description:
      "Turnkey workplace wellness solutions tailored for forward-thinking companies seeking healthier, more productive teams.",
    features: [
      "Onsite comprehensive employee health checkups",
      "Executive biometric & cardiovascular screening",
      "Stress management & ergonomic workplace audits",
      "Anonymized corporate wellness analytics for HR",
    ],
    color: "text-[#0B56A4]",
    bg: "bg-blue-50",
    border: "border-blue-100",
    badgeColor: "bg-blue-100 text-[#0B56A4]",
    accentHover: "group-hover:border-[#0B56A4]/40",
  },
  {
    id: "public-health",
    icon: Globe2,
    serviceKey: "Public Health Outreach",
    badge: "Community & NGOs",
    title: "Public Health & Community Outreach",
    description:
      "End-to-end planning, logistics, and execution of large-scale community health outreaches and medical missions.",
    features: [
      "Free medical consultations & vital checks",
      "Mass hypertension & blood sugar screenings",
      "Health education & hygiene awareness workshops",
      "Crowd control, security & patient triage management",
    ],
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    badgeColor: "bg-emerald-100 text-emerald-800",
    accentHover: "group-hover:border-emerald-500/40",
  },
  {
    id: "medications-supplies",
    icon: Pill,
    serviceKey: "Medications & Supplies",
    badge: "Logistics & Pharmacy",
    title: "Medications & Medical Supply Chain",
    description:
      "Reliable procurement, temperature-controlled transport, and compliant on-site dispensary management for medical events.",
    features: [
      "Compliant on-site drug dispensary management",
      "NAFDAC-approved pharmaceutical procurement",
      "Cold-chain storage & emergency medical kits",
      "Diagnostic test kits & consumable supplies",
    ],
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    badgeColor: "bg-violet-100 text-violet-800",
    accentHover: "group-hover:border-violet-500/40",
  },
  {
    id: "staffing-consulting",
    icon: UserCheck2,
    serviceKey: "Healthcare Staffing",
    badge: "Clinical Talent",
    title: "Healthcare Staffing & Consulting",
    description:
      "Connecting event organizers and healthcare facilities with verified, licensed, and insured medical personnel.",
    features: [
      "Vetted doctors, nurses, and medical lab scientists",
      "Short-term and multi-day outreach deployments",
      "Comprehensive credential & license verification",
      "Emergency first responder teams for corporate events",
    ],
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    badgeColor: "bg-amber-100 text-amber-800",
    accentHover: "group-hover:border-amber-500/40",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28 bg-[#F8FAFD] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-slate-200/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B56A4]/10 border border-[#0B56A4]/20 text-[#0B56A4] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-6">
            Healthcare Services Tailored For <span className="text-[#0B56A4]">Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From executive boardroom wellness checkups to high-volume rural health missions, we deliver
            precision healthcare solutions backed by clinical excellence.
          </p>
        </div>

        {/* Services 2x2 Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={`reveal group relative bg-white rounded-3xl p-8 sm:p-9 border ${service.border} ${service.accentHover} shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between stagger-${(i % 2) + 1}`}
            >
              <div>
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs`}
                  >
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1.5 rounded-full ${service.badgeColor}`}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Title and description */}
                <h3 className="text-2xl font-extrabold text-[#1E242B] mb-3 group-hover:text-[#0B56A4] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What We Deliver
                  </p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 ${service.color} flex-shrink-0 mt-0.5`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-bold ${service.color} hover:underline group-hover:translate-x-1 transition-all`}
                >
                  <span>Book this service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5 text-slate-400" />
                  Customized Quote
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
