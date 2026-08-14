"use client";

import { useRef } from "react";
import {
  Target,
  Eye,
  Award,
  Users,
  Building2,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useCountUp } from "../hooks/useScrollReveal";

/* ── Animated stat number ─────────────────────────────────── */
function AnimatedStat({
  value,
  suffix,
  description,
  delay = 0,
}: {
  value: number;
  suffix: string;
  description: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref, value, 1800);

  return (
    <div className="text-center">
      <p className="text-4xl sm:text-5xl font-black text-[#1E242B] tracking-tight">
        <span ref={ref}>0</span>
        <span>{suffix}</span>
      </p>
      <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">{description}</p>
    </div>
  );
}

const stats = [
  { value: 50,   suffix: "+",    label: "Corporate Outreaches Delivered", description: "Organized for banks, NGOs & multinationals", icon: Building2, color: "text-[#0B56A4]", bg: "bg-blue-50", border: "border-blue-100" },
  { value: 200,  suffix: "+",    label: "Qualified Medical Personnel",    description: "Verified physicians, nurses & lab scientists",  icon: Users,     color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { value: 10000,suffix: "+",    label: "Community Lives Impacted",       description: "Screened, treated, and educated across Nigeria", icon: MapPin,    color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    tagline: "Bridging the Healthcare Divide",
    description:
      "To democratize access to quality healthcare by delivering structured medical outreach programs, supplying verified healthcare teams, and fostering preventive health literacy across African communities.",
    gradient: "from-[#0B56A4] to-[#0E2A47]",
    accent: "bg-blue-400/20",
  },
  {
    icon: Eye,
    title: "Our Vision",
    tagline: "Equitable Health Everywhere",
    description:
      "A continent where distance, income, and logistics no longer stand between individuals and life-saving clinical consultations, preventive diagnostics, and quality pharmaceutical care.",
    gradient: "from-[#0E2A47] to-[#1E3A5F]",
    accent: "bg-indigo-400/20",
  },
  {
    icon: Award,
    title: "Our Standard",
    tagline: "Clinical Integrity & Empathy",
    description:
      "We operate under rigorous clinical protocols, ethical patient data management, and strict medical supply chain standards — ensuring reliable, compassionate execution on every single project.",
    gradient: "from-[#065F46] to-[#0E2A47]",
    accent: "bg-emerald-400/20",
  },
];

const coreStrengths = [
  "End-to-end event logistics & crowd management",
  "Medical supplies & cold-chain pharmaceutical safety",
  "Onsite diagnostic test kits & biometric screenings",
  "Customized executive wellness reports for HR & management",
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-96 h-96 rounded-full bg-slate-50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B56A4]/10 border border-[#0B56A4]/20 text-[#0B56A4] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-6">
            Healthcare With a{" "}
            <span className="text-[#0B56A4]">Human Heart</span> &amp; Professional Rigor
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            TifeMedic is a premier Nigerian healthcare consulting and medical outreach agency.
            We bridge the gap between medical expertise and community need — organizing turnkey health
            outreaches, deploying verified clinical personnel, and orchestrating comprehensive corporate
            wellness initiatives.
          </p>
        </div>

        {/* ── Impact Metric Cards ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-card reveal group relative bg-[#F8FAFD] rounded-3xl p-8 border ${stat.border} shadow-xs hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden stagger-${i + 1}`}
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/70 blur-xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xs`}
                >
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>

                {/* Animated counter */}
                <AnimatedStat
                  value={stat.value}
                  suffix={stat.suffix}
                  description={stat.description}
                  delay={i * 0.2}
                />
                <p className="text-base font-bold text-slate-800 mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mission / Vision / Standard Pillars ───────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`reveal group relative bg-gradient-to-br ${pillar.gradient} rounded-3xl p-8 sm:p-9 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-950/20 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden stagger-${i + 1}`}
            >
              {/* Decorative ambient circles */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              {/* Shimmer strip on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div
                  className="absolute top-0 left-[-70%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[-15deg] opacity-0 group-hover:opacity-100"
                  style={{ animation: "card-shine 0.7s ease forwards" }}
                />
              </div>

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl ${pillar.accent} backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block mb-1">
                  {pillar.tagline}
                </span>
                <h3 className="text-2xl font-extrabold text-white mb-4">{pillar.title}</h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Core Differentiators Checklist ──────────────────────── */}
        <div className="reveal bg-[#F8FAFD] rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B56A4]">
                The TifeMedic Advantage
              </span>
              <h3 className="text-2xl font-extrabold text-[#1E242B] mt-1 mb-2">
                Why Corporate Leaders & NGOs Partner With Us
              </h3>
              <p className="text-sm text-slate-600">
                From initial planning to on-site execution and post-event analytics, our team delivers seamless
                clinical precision.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreStrengths.map((strength, i) => (
                <div
                  key={strength}
                  className={`flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-2xs hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 stagger-${i + 1}`}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 leading-snug">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
