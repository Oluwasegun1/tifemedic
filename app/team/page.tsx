"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
  Sparkles,
  Users,
  Filter,
  Briefcase,
  GraduationCap,
} from "lucide-react";

// Team Members Dataset
const teamMembers = [
  {
    id: "dr-tife-ogunbanjo",
    name: "Dr. Boluwatife Ogunbanjo",
    role: "Lead Medical Director & Clinical Consultant",
    category: "Medical Doctors",
    photo: "/Dr. Tife.png",
    qualifications: "MBBS, MBChB, Graduate of Medicine and Surgery",
    certifications: "MDCN Registered Physician ",
    expertise: [
      "Public Health Leadership",
      "Preventive Cardiology",
      "Community Triage & Emergency Response",
      "Health Strategy Consulting",
    ],
    bio: "Dr. Bolu is a medical doctor passionate about preventive healthcare, patient education, wellness, and community-based medical care. She provides medical consultations, health screenings, medical outreaches, health education, minor procedures, and wellness support, with a strong commitment to compassionate, evidence-based care.",
  },
  {
    id: "dr-esther-emeli",
    name: "Dr. Esther Emeli",
    role: "Medical Officer",
    category: "Medical Doctors",
    photo: "/Dr.ESther.png",
    qualifications: "MBBS, MBChB, Graduate of Medicine and Surgery",
    certifications: "MDCN Registered Physician ",
    experience: "8 Years Experience",
    expertise: [
      "Community & Clinical Medicine",
      "Community Health & Medical Outreaches",
      "Primary Health Care",
      "General Medical Consultations",
    ],
    bio: "Dr. Esther is a medical doctor with over 8 years of experience across community and clinical medicine. She is dedicated to delivering accessible, patient-centered healthcare with a particular focus on primary health care, community health, and medical outreaches. She provides general medical consultations, health assessments, preventive healthcare, and patient education, combining clinical expertise with a compassionate approach to care."
  },
  {
    id: "nurse-maris",
    name: "Nurse Maris Orimolade",
    role: "Head of Nursing Services & Clinical Operations",
    category: "Nurses",
    photo: "/Nurse Maris.png",
    qualifications: "B.N.Sc, RN, RM, RPN",
    certifications: "NMCN Certified Nurse Practitioner",
    expertise: [
      "Triage & Acute Nursing Care",
      "Patient Flow Management",
      "Community Immunization & Hygiene",
      "Wound Care & First Aid",
    ],
    bio: "Maris oversees TifeMedic's nursing protocols and field care delivery. With extensive emergency and community nursing experience, he ensures seamless patient triage and empathetic bedside care during outreach campaigns.",
  },
  {
    id: "mr_franks",
    name: "Mr. Franklin Udoka",
    role: "Laboratory Scientist",
    category: "Laboratory Professionals",
    photo: "/Frank.png",
    qualifications: "BMLS (Medical Lab Science)",
    certifications: "AMLSCN Licensed Medical Laboratory Scientist",
    expertise: [
      "Point-of-Care Diagnostics",
      "Hematology & Parasitology",
      "Quality Assurance & Bio-Safety",
    ],
    bio: "Abiola manages all point-of-care laboratory investigations and diagnostic accuracy for TifeMedic outreaches. She brings 9+ years of experience in diagnostic microbiology and rapid lab screening protocols.",
  },
  {
    id: "mr_kenny",
    name: "Mr. Kenny Akinjole",
    role: "Laboratory Scientist",
    category: "Laboratory Professionals",
    photo: "/Kenny.png",
    qualifications: "BMLS (Medical Lab Science)",
    certifications: "AMLSCN Licensed Medical Laboratory Scientist",
    expertise: [
      "Point-of-Care Diagnostics",
      "Hematology & Parasitology",
      "Quality Assurance & Bio-Safety",
    ],
    bio: "Dedicated and detail-oriented Medical Laboratory Personnel,  8 years experience with hands-on expertise in Haematology, Immunology, Chemical Pathology, Phlebotomy, Microbiology, and Immunohistochemistry. Proficient in sample collection, analysis, quality control, and accurate result interpretation to support effective diagnosis and patient care. Committed to laboratory best practices, safety, and continuous learning.",
  },

  {
    id: "Abiola",
    name: "Mr. Abiola Ogunfowokan",
    role: "Triage Officer",
    category: "Medical Outreach Team",
    photo: "/abiola.png",
    qualifications: "BMLS (Medical Lab Science)",
    certifications: "AMLSCN Licensed Medical Laboratory Scientist",
    expertise: [
      "Patient Triage & Assessment",
      "Clinical Screening & Referral",
      "Outreach Coordination & Logistics",
    ],
    bio: "Abiola oversees patient triage and initial health assessments during TifeMedic outreaches, helping to identify patients who require further medical attention and appropriate referral. She also supports the coordination of outreach activities, ensuring efficient patient flow, team organization, and smooth delivery of healthcare services.",
  },
  // {
  //   id: "Abiola",
  //   name: "Abiola",
  //   role: "Medical Laboratory Scientist",
  //   category: "Laboratory Professionals",
  //   photo: "/abiola.png",
  //   qualifications: "BMLS (Medical Lab Science)",
  //   certifications: "AMLSCN Licensed Medical Laboratory Scientist",
  //   expertise: [
  //     "Point-of-Care Diagnostics",
  //     "Hematology & Parasitology",
  //     "Quality Assurance & Bio-Safety",
  //   ],
  //   bio: "Abiola manages all point-of-care laboratory investigations and diagnostic accuracy for TifeMedic outreaches. She brings 9+ years of experience in diagnostic microbiology and rapid lab screening protocols.",
  // },
  // {
  //   id: "olatunde-balogun",
  //   name: "Olatunde Balogun",
  //   role: "Senior Outreach Logistics Coordinator",
  //   category: "Outreach Coordinators",
  //   photo: "/outreach_health_check.jpg",
  //   qualifications: "B.Sc Public Administration, PMP",
  //   certifications: "Certified Project Management Professional (PMI)",
  //   expertise: [
  //     "Field Logistics & Venue Planning",
  //     "Crowd Control & Safety Protocols",
  //     "Pharmaceutical Supply Chain",
  //     "Community Stakeholder Engagement",
  //   ],
  //   bio: "Olatunde coordinates venue setup, security, volunteer deployment, and pharmacy supply chains for TifeMedic's high-volume community missions, ensuring smooth execution without operational bottlenecks.",
  // },
  // {
  //   id: "dr-emmanuel-folorunsho",
  //   name: "Dr. Emmanuel Folorunsho",
  //   role: "Consultant Family Physician & Medical Assessor",
  //   category: "Medical Doctors",
  //   photo: "/team_nurse_male.jpg",
  //   qualifications: "MBBS, FMCGP",
  //   certifications: "MDCN Registered Specialist",
  //   expertise: [
  //     "Hypertension & Diabetes Management",
  //     "Geriatric Health Screenings",
  //     "Occupational Health Audits",
  //     "Health Education",
  //   ],
  //   bio: "Dr. Emmanuel conducts specialist clinical consultations and risk stratification for corporate wellness days and rural health missions, helping clients detect early indicators of chronic lifestyle conditions.",
  // },
  // {
  //   id: "grace-adesina",
  //   name: "Grace Adesina",
  //   role: "Head of Operations & Client Partnerships",
  //   category: "Administrative/Operations Team",
  //   photo: "/team_doctor_female.jpg",
  //   qualifications: "B.Sc Health Administration, MBA",
  //   certifications: "Certified Healthcare Administrator",
  //   expertise: [
  //     "Partner Relations & Contracting",
  //     "Corporate CSR Alignment",
  //     "Budget Planning & Compliance",
  //     "Impact Reporting",
  //   ],
  //   bio: "Grace acts as the chief liaison for corporate partners, NGOs, and church leaders. She translates organizational health objectives into tailored outreach proposals and oversees client satisfaction.",
  // },
];

const categories = [
  "All",
  "Medical Doctors",
  "Nurses",
  "Laboratory Professionals",
  "Outreach Coordinators",
  "Administrative/Operations Team",
];

export default function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMembers =
    selectedCategory === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.category === selectedCategory);

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
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Professional Expertise</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E242B] tracking-tight leading-tight mb-6">
                Meet Our Clinical & Outreach Leadership Team
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                TifeMedic is powered by verified doctors, registered nurses, licensed medical laboratory scientists,
                and seasoned outreach coordinators committed to delivering safe, ethical, and compassionate healthcare.
              </p>

              {/* Verified Credibility Notice */}
              <div className="inline-flex flex-wrap items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-bold text-[#0B56A4]">
                  <Award className="w-4 h-4 text-[#0B56A4]" />
                  <span>Verified Credentials:</span>
                </div>
                <span className="bg-blue-50 text-[#0B56A4] font-semibold px-2.5 py-1 rounded-md">MDCN Doctors</span>
                <span className="bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-md">NMCN Nurses</span>
                <span className="bg-violet-50 text-violet-700 font-semibold px-2.5 py-1 rounded-md">AMLSCN Lab Scientists</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Navigation Tabs */}
        <section className="py-8 bg-white border-b border-slate-100 sticky top-16 z-30 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mr-2 flex-shrink-0">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter by Specialty:</span>
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${selectedCategory === cat
                    ? "bg-[#0B56A4] text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo & Badge */}
                  <div className="relative h-90 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover  object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/80 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-200 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full mb-1">
                        {member.category}
                      </span>
                      <h3 className="text-xl font-extrabold text-white">{member.name}</h3>
                      <p className="text-xs text-blue-200 font-medium">{member.role}</p>
                    </div>
                  </div>

                  {/* Details Body */}
                  <div className="p-6 space-y-4">
                    {/* Qualifications & Certifications */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                        <GraduationCap className="w-4 h-4 text-[#0B56A4] flex-shrink-0" />
                        <span>{member.qualifications}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-emerald-700 font-bold bg-emerald-50/70 p-2 rounded-xl">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{member.certifications}</span>
                      </div>
                    </div>

                    {/* Biography */}
                    <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {member.bio}
                    </p>

                    {/* Areas of Expertise */}
                    <div className="pt-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
                        Areas of Clinical Focus
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.expertise.map((exp, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <Link
                    href={`/plan-an-outreach?requestedTeam=${encodeURIComponent(member.name)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-50 hover:bg-[#0B56A4] text-[#0B56A4] hover:text-white font-bold text-xs transition-colors group-hover:shadow-xs"
                  >
                    <span>Request Team for Outreach</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-16 bg-[#0E2A47] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              Deploy Vetted Healthcare Professionals for Your Organization
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8">
              We eliminate the stress of medical staffing by providing fully credentialed doctors, nurses, and diagnostic experts for your upcoming health missions or corporate clinics.
            </p>
            <Link
              href="/plan-an-outreach"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B56A4] hover:bg-[#08407B] text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
            >
              <span>Work With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
