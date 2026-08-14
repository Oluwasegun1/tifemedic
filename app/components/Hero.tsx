"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Users2,
  CalendarCheck,
  Sparkles,
  Check,
} from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Verified Personnel",
    subtitle: "MDCN-Licensed Doctors & Nurses",
    color: "text-[#0B56A4]",
    bg: "bg-blue-50",
  },
  {
    icon: HeartPulse,
    title: "Evidence-Based",
    subtitle: "Standard Clinical Protocols",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Users2,
    title: "Community-First",
    subtitle: "Public & Corporate Reach",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

/* Floating medical cross/plus particle positions */
const particles = [
  { x: "8%",  y: "20%", size: 6,  delay: 0,    duration: 7 },
  { x: "15%", y: "65%", size: 4,  delay: 1.2,  duration: 9 },
  { x: "88%", y: "18%", size: 8,  delay: 0.5,  duration: 6 },
  { x: "82%", y: "72%", size: 5,  delay: 2,    duration: 8 },
  { x: "50%", y: "12%", size: 4,  delay: 1.5,  duration: 10},
  { x: "70%", y: "85%", size: 6,  delay: 0.8,  duration: 7 },
  { x: "25%", y: "85%", size: 5,  delay: 3,    duration: 9 },
  { x: "92%", y: "45%", size: 4,  delay: 2.5,  duration: 8 },
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  /* Stagger in the headline words after mount */
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "1";
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-b from-[#EDF5FC] via-[#F3F8FE] to-white pt-28 sm:pt-32 pb-36 sm:pb-40 lg:pb-48"
    >
      {/* ── Animated ambient glow blobs ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-20 right-[-8%] w-[700px] h-[700px] rounded-full blur-3xl animate-gradient"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(11,86,164,0.14) 0%, rgba(2,132,199,0.06) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-gradient"
          style={{
            animationDelay: "4s",
            background:
              "radial-gradient(ellipse at center, rgba(5,150,105,0.08) 0%, rgba(11,86,164,0.04) 60%, transparent 80%)",
          }}
        />
        <div
          className="absolute bottom-16 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-50/50 blur-3xl"
        />
      </div>

      {/* ── Floating medical particles ───────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: p.x,
              top: p.y,
              animationName: "float-slow",
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          >
            {/* Medical plus / cross shape */}
            <svg
              width={p.size * 4}
              height={p.size * 4}
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="9" y="2" width="6" height="20" rx="2" fill="#0B56A4" />
              <rect x="2" y="9" width="20" height="6" rx="2" fill="#0B56A4" />
            </svg>
          </div>
        ))}
      </div>

      {/* ── Main Content Grid ─────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT: Text ─────────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-7 z-10 text-center lg:text-left">

            {/* Animated live pill tag */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 shadow-sm reveal"
              style={{ transitionDelay: "0.05s" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#0B56A4] opacity-75 animate-breathe" style={{ animationName: "ping-ring" }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0B56A4]" />
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0B56A4] tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Healthcare Consulting & Medical Outreach — Nigeria
              </span>
            </div>

            {/* Headline with animated gradient underline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-[#1E242B] tracking-tight leading-[1.1] reveal"
              style={{ transitionDelay: "0.12s" }}
            >
              Empowering Communities &{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#0B56A4]">Organizations</span>
                {/* Animated underline squiggle */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2,9 C50,3 100,11 150,6 C200,1 250,10 298,5"
                    stroke="#0B56A4"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.35"
                    strokeDasharray="300"
                    strokeDashoffset="300"
                    style={{
                      animation: "dash-draw 1.2s 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
                    }}
                  />
                </svg>
              </span>{" "}
              Through Quality Healthcare
            </h1>

            <p
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 reveal"
              style={{ transitionDelay: "0.22s" }}
            >
              We organize high-impact public health campaigns, provide turnkey corporate
              wellness checkups, and supply verified healthcare professionals across Nigeria.
            </p>

            {/* CTA Buttons with micro-interactions */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1 reveal"
              style={{ transitionDelay: "0.32s" }}
            >
              <a
                href="#contact"
                id="hero-cta-primary"
                className="btn-glow group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0B56A4] hover:bg-[#08407B] text-white font-bold text-base transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-1 active:translate-y-0"
              >
                <CalendarCheck className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#services"
                id="hero-cta-secondary"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/90 hover:bg-white text-[#0B56A4] font-bold text-base border-2 border-blue-200/80 hover:border-[#0B56A4] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Trust Badges – properly spaced above the hero wave */}
            <div
              className="pt-5 border-t border-slate-200/60 reveal"
              style={{ transitionDelay: "0.42s" }}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5 text-center lg:text-left">
                Why Top Organizations & Communities Trust Us
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {badges.map((badge, i) => (
                  <div
                    key={badge.title}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs hover:shadow-sm hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-200 group"
                    style={{ transitionDelay: `${0.05 * i}s` }}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${badge.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <badge.icon className={`w-5 h-5 ${badge.color}`} />
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-xs font-bold text-[#1E242B] truncate flex items-center gap-1">
                        {badge.title}
                        <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">{badge.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Hero Image with floating cards ───────────────────── */}
          <div className="lg:col-span-5 relative flex items-center justify-center reveal-right" style={{ transitionDelay: "0.15s" }}>
            {/* Outer decorative rings */}
            <div className="absolute w-[440px] h-[440px] rounded-full border border-blue-200/50 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[370px] h-[370px] rounded-full border border-dashed border-[#0B56A4]/25 pointer-events-none" style={{ animation: "spin-very-slow 60s linear reverse infinite" }} />

            {/* Floating Card — top-left */}
            <div className="absolute -top-6 -left-4 sm:-left-10 z-20 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-300/40 p-3.5 flex items-center gap-3 border border-slate-100 animate-float-slow">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <HeartPulse className="w-6 h-6 text-[#0B56A4] animate-breathe" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-extrabold text-[#1E242B]">500+</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500">Patients Screened</p>
              </div>
            </div>

            {/* Floating Card — bottom-right */}
            <div className="absolute -bottom-4 -right-4 sm:-right-8 z-20 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-300/40 p-3.5 flex items-center gap-3 border border-slate-100 animate-float-delay">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-[#1E242B]">100% Verified</p>
                <p className="text-[11px] font-medium text-slate-500">Licensed Practitioners</p>
              </div>
            </div>

            {/* Main photo */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/15 border-4 border-white z-10 group">
              <Image
                src="/hero.jpg"
                alt="TifeMedic medical outreach team providing quality healthcare services across Nigeria"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 420px"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/85 via-transparent to-transparent" />

              {/* Photo caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold mb-1.5">
                  📍 Nationwide Medical Outreach
                </div>
                <p className="text-sm sm:text-base font-bold leading-tight">
                  Delivering Quality Care Across Communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom transition wave ────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" aria-hidden="true">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{ height: "clamp(60px, 8vw, 100px)" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0 100L1440 100L1440 32C1200 80 960 10 720 42C480 74 240 10 0 46L0 100Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Inline style for SVG dash-draw animation and ping-ring */}
      <style>{`
        @keyframes dash-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes ping-ring {
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
