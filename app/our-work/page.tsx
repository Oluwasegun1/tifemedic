"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Building2,
  Church,
  Globe2,
  Stethoscope,
  FlaskConical,
  HeartPulse,
  Pill,
  X,
  Maximize2,
  FileText,
} from "lucide-react";

// Real/Verified Case Studies Dataset
const caseStudies = [
  {
    id: "ikorodu-community-health-mission",
    title: "Ikorodu Community Mega Health Mission",
    partner: "Grace Foundation & Ikorodu Community Development Association",
    location: "Ikorodu, Lagos State",
    date: "November 18, 2025",
    type: "Community & Rural Outreach",
    heroImage: "/outreach_health_check.jpg",
    gallery: ["/outreach_health_check.jpg", "/hero.jpg", "/outreach.jpg"],
    
    // Storytelling Structure
    theNeed:
      "High prevalence of undetected hypertension and diabetes among elderly residents and market traders in rural Ikorodu, who faced financial and physical barriers accessing hospital diagnostics.",
    whatWeDid:
      "TifeMedic planned and executed a comprehensive 1-day health mission comprising triage stations, point-of-care lab diagnostics (blood glucose & malaria), physician consultations, and a free mobile drug dispensary.",
    whoWeServed:
      "Over 650 community members including market women, elderly retirees, artisans, and children across 4 local wards.",
    
    // Services Delivered
    servicesProvided: [
      "General Medical Consultations & Prescriptions",
      "Point-of-Care Blood Glucose & Malaria Diagnostics",
      "Hypertension & BMI Risk Screening",
      "Prescription Drug Dispensary & Adherence Counseling",
      "Community Hygiene & Diabetes Prevention Seminars",
    ],

    // Team Deployed
    teamStats: {
      totalPersonnel: 22,
      breakdown: "5 Doctors, 8 Nurses, 4 Lab Scientists, 3 Coordinators, 2 Pharmacists",
    },

    // Measurable Impact Stats
    impact: {
      beneficiaries: 680,
      consultations: 620,
      screenings: 680,
      labTests: 410,
      prescriptionsFilled: 590,
      hypertensionCasesDetected: 142,
    },
  },

  {
    id: "corporate-wellness-day-ikeja",
    title: "Executive Corporate Health & Wellness Screening",
    partner: "Apex Financial Services PLC",
    location: "Ikeja Corporate HQ, Lagos",
    date: "August 12, 2025",
    type: "Corporate Health Program",
    heroImage: "/team_doctor_female.jpg",
    gallery: ["/team_doctor_female.jpg", "/team_nurse_male.jpg", "/hero.jpg"],
    
    // Storytelling Structure
    theNeed:
      "Increasing employee fatigue, sedentary lifestyle risks, and unmonitored cardiovascular symptoms among high-stress corporate personnel resulting in elevated sick leave.",
    whatWeDid:
      "De-escalated operational disruption by setting up a 2-day on-site mobile clinical checkup suite at company headquarters, featuring cardiovascular risk scoring, lipid profiling, and ergonomic coaching.",
    whoWeServed:
      "320 corporate employees, senior management staff, and executive directors.",
    
    // Services Delivered
    servicesProvided: [
      "Executive Biometric & Cardiovascular Screening",
      "Full Lipid Profile & Blood Sugar Diagnostics",
      "Private Physician Consultation & Lifestyle Coaching",
      "Ergonomic Workplace Risk Audits",
      "Anonymized HR Corporate Health Summary Report",
    ],

    // Team Deployed
    teamStats: {
      totalPersonnel: 14,
      breakdown: "4 Doctors, 5 Nurses, 3 Lab Scientists, 2 Operations Managers",
    },

    // Measurable Impact Stats
    impact: {
      beneficiaries: 320,
      consultations: 320,
      screenings: 320,
      labTests: 290,
      prescriptionsFilled: 180,
      hypertensionCasesDetected: 48,
    },
  },

  {
    id: "faith-medical-outreach-yaba",
    title: "Annual Community Faith Health Fair",
    partner: "St. Mark's Cathedral Outreach Ministries",
    location: "Yaba, Lagos State",
    date: "February 24, 2026",
    type: "Faith-Based Outreach",
    heroImage: "/outreach.jpg",
    gallery: ["/outreach.jpg", "/outreach_health_check.jpg", "/team_nurse_male.jpg"],
    
    // Storytelling Structure
    theNeed:
      "Limited access to preventive healthcare for underserved households and elderly congregants residing in suburban neighborhoods.",
    whatWeDid:
      "Designed a streamlined multi-station outreach flow managing crowd control, free medical consultations, eye screening referrals, and maternal health education talks.",
    whoWeServed:
      "510 local residents, women, youth, and elderly community members.",
    
    // Services Delivered
    servicesProvided: [
      "Free Medical Consultations & Physical Exams",
      "Vital Signs & Hypertension Screening",
      "Malaria & Blood Sugar Lab Testing",
      "Maternal & Child Health Counseling",
      "Essential Drug Dispensing",
    ],

    // Team Deployed
    teamStats: {
      totalPersonnel: 18,
      breakdown: "4 Doctors, 7 Nurses, 4 Lab Scientists, 3 Coordinators",
    },

    // Measurable Impact Stats
    impact: {
      beneficiaries: 510,
      consultations: 480,
      screenings: 510,
      labTests: 340,
      prescriptionsFilled: 460,
      hypertensionCasesDetected: 96,
    },
  },
];

export default function OurWorkPage() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-[#F8FAFD] via-slate-50 to-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
            <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-emerald-50/50 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B56A4]/10 border border-[#0B56A4]/20 text-[#0B56A4] text-xs font-bold uppercase tracking-wide mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Proven Field Experience & Impact</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E242B] tracking-tight leading-tight mb-6">
                Past Outreaches & Measurable Community Impact
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Explore our case studies detailing how TifeMedic collaborates with corporate brands, churches, NGOs,
                and community organizations to deliver safe, high-impact medical missions across Nigeria.
              </p>

              {/* Cumulative Impact Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <div>
                  <h4 className="text-2xl font-extrabold text-[#0B56A4]">1,500+</h4>
                  <p className="text-xs text-slate-500 font-semibold">Total Beneficiaries Reached</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-emerald-600">1,400+</h4>
                  <p className="text-xs text-slate-500 font-semibold">Physician Consultations</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-violet-600">1,000+</h4>
                  <p className="text-xs text-slate-500 font-semibold">Lab Tests Executed</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-amber-600">100%</h4>
                  <p className="text-xs text-slate-500 font-semibold">Clinical Safety Record</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, idx) => (
            <article
              key={study.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Case Study Header Banner */}
              <div className="bg-[#0E2A47] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-white/10 px-3 py-1 rounded-full">
                    {study.type}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">{study.title}</h2>
                  <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-blue-300" />
                    <span>Partner: <strong>{study.partner}</strong></span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200">
                  <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-xl">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{study.location}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-xl">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{study.date}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-10 space-y-10">
                {/* 4-Step Storytelling Structure Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Step 1: The Need */}
                  <div className="bg-rose-50/60 rounded-2xl p-6 border border-rose-100 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 bg-rose-100 px-2.5 py-0.5 rounded-md">
                      1. The Need
                    </span>
                    <h4 className="text-sm font-bold text-[#1E242B]">Challenge Identified</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{study.theNeed}</p>
                  </div>

                  {/* Step 2: What We Did */}
                  <div className="bg-blue-50/60 rounded-2xl p-6 border border-blue-100 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0B56A4] bg-blue-100 px-2.5 py-0.5 rounded-md">
                      2. What We Did
                    </span>
                    <h4 className="text-sm font-bold text-[#1E242B]">Clinical Strategy</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{study.whatWeDid}</p>
                  </div>

                  {/* Step 3: Who We Served */}
                  <div className="bg-amber-50/60 rounded-2xl p-6 border border-amber-100 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-md">
                      3. Who We Served
                    </span>
                    <h4 className="text-sm font-bold text-[#1E242B]">Target Beneficiaries</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{study.whoWeServed}</p>
                  </div>

                  {/* Step 4: The Impact */}
                  <div className="bg-emerald-50/60 rounded-2xl p-6 border border-emerald-100 space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                      4. The Impact
                    </span>
                    <h4 className="text-sm font-bold text-[#1E242B]">Measurable Results</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Reached <strong>{study.impact.beneficiaries}</strong> beneficiaries with zero clinical safety incidents.
                    </p>
                  </div>
                </div>

                {/* Measurable Statistics Grid */}
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                    Key Outreach Impact Metrics
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                      <span className="text-xl font-extrabold text-[#0B56A4] block">{study.impact.beneficiaries}</span>
                      <span className="text-[11px] font-semibold text-slate-500">People Reached</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                      <span className="text-xl font-extrabold text-emerald-600 block">{study.impact.consultations}</span>
                      <span className="text-[11px] font-semibold text-slate-500">Consultations</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                      <span className="text-xl font-extrabold text-violet-600 block">{study.impact.screenings}</span>
                      <span className="text-[11px] font-semibold text-slate-500">Screenings</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                      <span className="text-xl font-extrabold text-amber-600 block">{study.impact.labTests}</span>
                      <span className="text-[11px] font-semibold text-slate-500">Lab Tests</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                      <span className="text-xl font-extrabold text-rose-600 block">{study.impact.prescriptionsFilled}</span>
                      <span className="text-[11px] font-semibold text-slate-500">Drugs Dispensed</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                      <span className="text-xl font-extrabold text-cyan-600 block">{study.impact.hypertensionCasesDetected}</span>
                      <span className="text-[11px] font-semibold text-slate-500">Early Hypertensives</span>
                    </div>
                  </div>
                </div>

                {/* Services & Team Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
                  {/* Services Delivered */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#0B56A4]" />
                      <span>Services Delivered</span>
                    </h4>
                    <ul className="space-y-2">
                      {study.servicesProvided.map((service, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outreach Team Deployed */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#0B56A4]" />
                      <span>Outreach Team Deployed</span>
                    </h4>
                    <div className="text-xl font-extrabold text-[#1E242B]">
                      {study.teamStats.totalPersonnel} Clinical Professionals
                    </div>
                    <p className="text-xs text-slate-600">{study.teamStats.breakdown}</p>
                  </div>
                </div>

                {/* Photography Gallery Section */}
                <div className="border-t border-slate-100 pt-8">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                    Outreach Photography & Field Documentation
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.gallery.map((imgUrl, gIdx) => (
                      <div
                        key={gIdx}
                        onClick={() => setActiveLightboxImage(imgUrl)}
                        className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group bg-slate-100"
                      >
                        <Image
                          src={imgUrl}
                          alt={`${study.title} photo ${gIdx + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                          <Maximize2 className="w-4 h-4" />
                          <span>View Fullscreen</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contextual CTA */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium">
                    Want to execute a similar outreach for your organisation or community?
                  </span>
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/plan-an-outreach?similarTo=${encodeURIComponent(study.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B56A4] hover:bg-[#08407B] text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all"
                    >
                      <span>Plan a Similar Outreach</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Lightbox Image Modal */}
        {activeLightboxImage && (
          <div
            onClick={() => setActiveLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-4 right-4 text-white hover:text-slate-300 bg-white/10 p-2 rounded-full cursor-pointer z-10"
                aria-label="Close photo"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-full max-h-[80vh]">
                <Image
                  src={activeLightboxImage}
                  alt="Outreach photo lightbox"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <section className="py-16 bg-[#0E2A47] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Partner With Us to Create Measurable Impact
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8">
              We have the proven operational experience, clinical staffing network, and field logistics to deliver successful medical missions for your community or corporate CSR agenda.
            </p>
            <Link
              href="/plan-an-outreach"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B56A4] hover:bg-[#08407B] text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
            >
              <span>Start Planning Your Outreach</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
