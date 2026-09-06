import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  Stethoscope,
  UserCheck2,
  HeartPulse,
  FlaskConical,
  Activity,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Church,
  Globe2,
  GraduationCap,
  ShieldCheck,
  Clock,
  HelpCircle,
  Zap,
} from "lucide-react";

// Confirmed Services Data
const confirmedServices = [
  {
    id: "medical-outreach-staffing",
    icon: UserCheck2,
    badge: "Clinical Staffing & Placement",
    name: "Medical Outreach Staffing",
    shortDescription:
      "On-demand deployment of vetted, licensed, and insured healthcare professionals for community missions, corporate clinics, and health drives.",
    involves: [
      "Rapid assembly and credential verification of medical teams",
      "Deployment of experienced Doctors, Nurses, and Lab Scientists",
      "Pre-event clinical orientation and safety briefing",
      "On-site shift coordination, team supervision, and emergency response cover",
    ],
    designedFor: [
      "NGOs & Non-Profit Foundations",
      "Corporate Entities & CSR Initiatives",
      "Churches & Religious Bodies",
      "Community Associations & Local Leaders",
    ],
    benefits: [
      "100% Vetted & License-Verified Professionals",
      "Flexible Single-Day or Multi-Day Deployments",
      "Reduced Administrative & Recruitment Burden",
      "Clinical Standard Compliance & Liability Safeguards",
    ],
    color: "from-blue-600 to-indigo-700",
    badgeColor: "bg-blue-100 text-[#0B56A4]",
    accentBorder: "hover:border-[#0B56A4]",
  },
  {
    id: "doctors",
    icon: Stethoscope,
    badge: "Clinical Consultations & Diagnosis",
    name: "Doctors & Physician Services",
    shortDescription:
      "General Practitioners and Specialist Medical Doctors providing comprehensive bedside consultations, diagnosis, clinical triage, and health talks.",
    involves: [
      "One-on-one patient clinical consultations and physical examinations",
      "Prescription of essential medications and patient counseling",
      "Diagnosis of acute symptoms and chronic disease management guidance",
      "Specialist referral routing for critical medical conditions",
    ],
    designedFor: [
      "Community Medical Outreaches",
      "Corporate Executive Health Days",
      "Church Health Awareness Fairs",
      "School & Campus Health Programs",
    ],
    benefits: [
      "Expert Clinical Care by Registered Physicians (MDCN Vetted)",
      "Empathetic, Patient-Centered Consultation Style",
      "Early Diagnosis & Referral Support",
      "Structured Prescription & Medication Guidance",
    ],
    color: "from-emerald-600 to-teal-700",
    badgeColor: "bg-emerald-100 text-emerald-800",
    accentBorder: "hover:border-emerald-500",
  },
  {
    id: "nursing-services",
    icon: HeartPulse,
    badge: "Patient Triage & Nursing Care",
    name: "Nursing Services & Clinical Care",
    shortDescription:
      "Professional registered nurses delivering patient triage, vital signs monitoring, wound management, health education, and medication administration.",
    involves: [
      "Systematic patient registration, triage, and vital signs measurement (BP, Temp, Pulse, SpO2)",
      "Basic wound dressing, minor injury care, and first aid response",
      "Medication administration and patient counseling on treatment adherence",
      "Group health talks on maternal/child health, hygiene, and nutrition",
    ],
    designedFor: [
      "Rural & Urban Medical Missions",
      "School & University Health Screening",
      "Elderly Care & Community Wellness Days",
      "Corporate On-Site First Aid Stations",
    ],
    benefits: [
      "NMCN Certified & Experienced Nursing Officers",
      "Gentle & Patient-Focused Care Delivery",
      "Accurate Vital Signs & Triage Documentation",
      "Effective Community Health Education",
    ],
    color: "from-rose-600 to-pink-700",
    badgeColor: "bg-rose-100 text-rose-800",
    accentBorder: "hover:border-rose-500",
  },
  {
    id: "laboratory-services",
    icon: FlaskConical,
    badge: "Diagnostic Testing & Pathology",
    name: "Laboratory Services & Point-of-Care Testing",
    shortDescription:
      "Licensed Medical Laboratory Scientists conducting accurate, rapid diagnostic investigations on-site for immediate clinical decision-making.",
    involves: [
      "Rapid Diagnostic Tests (RDT) for Malaria, Blood Glucose, and Hepatitis B/C",
      "Point-of-Care Lipid Profiles, Urinalysis, and Hb/PCV screening",
      "Aseptic blood sample collection and hygienic waste disposal",
      "Immediate reporting of critical diagnostic values to consulting doctors",
    ],
    designedFor: [
      "High-Volume Community Screenings",
      "Corporate Executive Wellness Packages",
      "Pre-Outreach Baseline Diagnostics",
      "Public Health Disease Control Campaigns",
    ],
    benefits: [
      "AMLSCN Registered Medical Lab Scientists",
      "Rapid Results Within Minutes for On-Site Decision Making",
      "High-Precision Calibrated Diagnostic Test Kits",
      "Strict Biohazard Waste Management Standards",
    ],
    color: "from-violet-600 to-purple-700",
    badgeColor: "bg-violet-100 text-violet-800",
    accentBorder: "hover:border-violet-500",
  },
  {
    id: "health-screening",
    icon: Activity,
    badge: "Preventive Health Assessment",
    name: "Health Screening & Risk Assessment",
    shortDescription:
      "Targeted preventive screening packages designed to detect early indicators of hypertension, diabetes, cardiovascular disease, and lifestyle conditions.",
    involves: [
      "Hypertension screening (digital and manual blood pressure evaluation)",
      "Random and fasting blood glucose testing",
      "Body Mass Index (BMI), body fat composition, and waist-to-hip ratio assessment",
      "Cardiovascular and metabolic health risk profiling",
    ],
    designedFor: [
      "Corporate Staff Wellness Screenings",
      "Churches & Religious Congregations",
      "Trade Unions & Market Women Associations",
      "Annual Community Health Days",
    ],
    benefits: [
      "Early Detection of Silent Killers (Hypertension & Diabetes)",
      "Actionable Personalized Health Advice",
      "Customized Screening Station Layouts",
      "Aggregated Anonymized Health Risk Reports for Organizations",
    ],
    color: "from-amber-600 to-orange-700",
    badgeColor: "bg-amber-100 text-amber-800",
    accentBorder: "hover:border-amber-500",
  },
  {
    id: "outreach-coordination",
    icon: ClipboardList,
    badge: "End-to-End Mission Management",
    name: "Outreach Coordination & Operations",
    shortDescription:
      "Full turnkey management of medical outreaches — from venue scouting and patient flow design to logistics, crowd control, and outcome reporting.",
    involves: [
      "Pre-outreach site inspection, venue zoning, and patient pathway mapping",
      "Cold-chain pharmacy logistics and consumable medical supply management",
      "On-site crowd control, patient ticketing, and security coordination",
      "Post-outreach impact summary, statistical reporting, and client debrief",
    ],
    designedFor: [
      "Sponsoring Donors & International NGOs",
      "Corporate CSR Departments",
      "Philanthropic Foundations & Political Outreach Teams",
      "Churches Planning Large-Scale Missions",
    ],
    benefits: [
      "Seamless Operational Execution Without Event Stress",
      "Optimized Patient Flow & Reduced Waiting Times",
      "Full Compliance with Local Public Health Directives",
      "Comprehensive Data Analytics & Impact Reporting",
    ],
    color: "from-cyan-600 to-blue-700",
    badgeColor: "bg-cyan-100 text-cyan-800",
    accentBorder: "hover:border-cyan-500",
  },
];

// Placeholder / Upcoming Service Categories
const upcomingPlaceholders = [
  {
    title: "Mobile Dental & Ophthalmic Screening Unit",
    category: "Specialized Outreach",
    description:
      "Targeted eye checkups, prescription glass distribution, and basic dental hygiene screenings for rural and school outreaches.",
    status: "Upcoming Service Option · Request Pre-booking",
  },
  {
    title: "Telemedicine Post-Outreach Follow-Up Station",
    category: "Digital Health Extension",
    description:
      "Virtual doctor follow-up calls and prescription refill tracking for beneficiaries with chronic hypertension or diabetes detected during outreach.",
    status: "In Development · Partner Pilot Available",
  },
  {
    title: "Surgical Outreach & Minor Procedures Unit",
    category: "Advanced Medical Missions",
    description:
      "Mobile surgical teams for minor outpatient procedures such as lipoma excision, hernia screening, and wound debridement in rural centers.",
    status: "Specialized Option · Requires Pre-Assessment",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-[#F8FAFD] via-slate-50 to-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl" />
            <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-emerald-50/60 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B56A4]/10 border border-[#0B56A4]/20 text-[#0B56A4] text-xs font-bold uppercase tracking-wide mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Confirmed Healthcare Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E242B] tracking-tight leading-tight mb-6">
                Professional Healthcare Services & Medical Outreach Solutions
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                TifeMedic provides verified medical personnel, preventive health screenings, laboratory diagnostics,
                and turnkey outreach management for corporate organizations, churches, NGOs, foundations, and community leaders across Nigeria.
              </p>

              {/* Quick stats / summary badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B56A4] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E242B]">100% Vetted</h4>
                    <p className="text-[11px] text-slate-500">MDCN, NMCN & AMLSCN</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E242B]">Turnkey Delivery</h4>
                    <p className="text-[11px] text-slate-500">Planning to Reporting</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1E242B]">Multi-Sector</h4>
                    <p className="text-[11px] text-slate-500">NGO, Corporate & Faith</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve Target Audience Strip */}
        <section className="py-10 bg-[#0E2A47] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">
                  Target Partners & Beneficiaries
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Who We Serve & Partner With</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-sm">
                  <Building2 className="w-4 h-4 text-blue-300" />
                  <span>Corporate Organisations</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-sm">
                  <Church className="w-4 h-4 text-emerald-300" />
                  <span>Churches & Faith Bodies</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-sm">
                  <Globe2 className="w-4 h-4 text-amber-300" />
                  <span>NGOs & Foundations</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-sm">
                  <GraduationCap className="w-4 h-4 text-violet-300" />
                  <span>Communities & Schools</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Confirmed Services List Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B56A4] bg-blue-50 px-3 py-1 rounded-full">
              Detailed Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E242B] tracking-tight mt-3 mb-4">
              Explore Our Core Service Categories
            </h2>
            <p className="text-slate-600">
              Each service is executed with clinical precision, clear protocols, and compassionate patient care.
            </p>
          </div>

          <div className="space-y-12">
            {confirmedServices.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 ${service.accentBorder}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Column 1: Info & Description (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-md`}>
                          <ServiceIcon className="w-7 h-7" />
                        </div>
                        <div>
                          <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${service.badgeColor}`}>
                            {service.badge}
                          </span>
                          <h3 className="text-2xl font-extrabold text-[#1E242B] mt-1">{service.name}</h3>
                        </div>
                      </div>

                      <p className="text-slate-600 text-base leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* What the Service Involves */}
                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-3">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                          <ClipboardList className="w-4 h-4 text-[#0B56A4]" />
                          <span>What This Service Involves</span>
                        </h4>
                        <ul className="space-y-2">
                          {service.involves.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Benefits */}
                      <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                          Key Benefits
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-blue-50/60 text-[#0B56A4] text-xs font-bold px-3 py-2 rounded-xl">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0B56A4]" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Target Audience & Direct Action (5 cols) */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-[#F8FAFD] to-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between h-full space-y-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                          Designed Specifically For
                        </span>
                        <ul className="space-y-2.5">
                          {service.designedFor.map((target, idx) => (
                            <li key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/70 shadow-2xs text-xs font-bold text-slate-700">
                              <span className="w-2 h-2 rounded-full bg-emerald-500" />
                              <span>{target}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-slate-200 space-y-3">
                        <Link
                          href={`/plan-an-outreach?service=${encodeURIComponent(service.name)}`}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B56A4] hover:bg-[#08407B] text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
                        >
                          <span>Plan a Medical Outreach With Us</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <p className="text-[11px] text-center text-slate-400">
                          Tailored service quotes & custom team sizing available upon request.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Placeholders for Upcoming / Specialized Services */}
        <section className="py-16 bg-[#F8FAFD] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-full">
                Service Expansion Pipeline
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E242B] tracking-tight mt-3 mb-2">
                Specialized & Upcoming Healthcare Capabilities
              </h2>
              <p className="text-slate-600 text-sm">
                In addition to our confirmed core offerings, we partner with specialized institutions to accommodate custom requests upon request.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingPlaceholders.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-dashed border-slate-300 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <HelpCircle className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1E242B]">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strong Final CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-[#0E2A47] via-[#0B56A4] to-[#0E2A47] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              Ready to Bring Professional Healthcare to Your Community?
            </h2>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you are planning a single-day church wellness event or a week-long rural medical outreach, our team is equipped to plan, staff, and execute seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/plan-an-outreach"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0B56A4] hover:bg-blue-50 font-bold text-base shadow-xl transition-all hover:scale-105"
              >
                <span>Plan a Medical Outreach With Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+2348052544332"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all"
              >
                <span>Speak with an Outreach Specialist</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
