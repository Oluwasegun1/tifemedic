"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Building2,
  Church,
  Globe2,
  GraduationCap,
  ClipboardList,
  HeartPulse,
  Stethoscope,
  FlaskConical,
  Activity,
  UserCheck2,
  FileText,
  DollarSign,
  HelpCircle,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  Send,
} from "lucide-react";

const organisationTypes = [
  "Church / Religious Organisation",
  "NGO / Non-Profit Foundation",
  "Corporate Enterprise",
  "Community Association / CDA",
  "School / Educational Institution",
  "Government Agency",
  "Private Sponsor / Individual",
  "Other",
];

const confirmedServiceOptions = [
  { id: "doctors", label: "Doctors & Physician Consultations", icon: Stethoscope },
  { id: "nursing", label: "Nursing Services & Patient Triage", icon: HeartPulse },
  { id: "laboratory", label: "Laboratory Diagnostics (RDTs, Glucose, Urinalysis)", icon: FlaskConical },
  { id: "screening", label: "Health Screening (Hypertension, BMI, Risk Profile)", icon: Activity },
  { id: "staffing", label: "Medical Outreach Staffing & Personnel Placement", icon: UserCheck2 },
  { id: "coordination", label: "End-to-End Outreach Coordination & Logistics", icon: ClipboardList },
  { id: "dispensary", label: "Pharmaceutical Dispensary & Medication Supply", icon: FileText },
];

function PlanAnOutreachContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  // Step State (1 to 5)
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Contact Details
    fullName: "",
    orgName: "",
    email: "",
    phone: "",
    orgType: "Church / Religious Organisation",

    // Step 2: Outreach Details
    outreachTitle: "",
    location: "",
    proposedDate: "",
    altDate: "",
    expectedBeneficiaries: "200 - 500 people",
    targetAudience: "",

    // Step 3: Services Required
    selectedServices: preselectedService
      ? [preselectedService]
      : ["Doctors & Physician Consultations", "Health Screening (Hypertension, BMI, Risk Profile)"],

    // Step 4: Additional Requirements & Budget
    description: "",
    specialNeeds: "",
    existingLogistics: "",
    estimatedBudget: "Flexible / To Be Discussed",
    fundingStatus: "Funding Secured",
  });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle Service Checkbox
  const handleServiceToggle = (label: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(label);
      if (exists) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== label),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, label],
        };
      }
    });
  };

  // Form Navigation
  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#F8FAFD] via-slate-50 to-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl" />
            <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-emerald-50/60 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B56A4]/10 border border-[#0B56A4]/20 text-[#0B56A4] text-xs font-bold uppercase tracking-wide mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Partner With TifeMedic</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E242B] tracking-tight leading-tight mb-6">
                Let&apos;s Bring Quality Healthcare Closer to Your Community.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                TifeMedic assists churches, NGOs, corporate organizations, foundations, and community leaders to plan, coordinate, staff, and deliver professional, safe medical outreaches across Nigeria.
              </p>

              <a
                href="#request-form"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B56A4] hover:bg-[#08407B] text-white font-bold text-base shadow-xl shadow-blue-500/20 hover:shadow-2xl transition-all"
              >
                <span>Start Planning Your Outreach</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* 5-Step Outreach Planning Process Visualizer */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B56A4] bg-blue-50 px-3 py-1 rounded-full">
                Simple & Transparent
              </span>
              <h2 className="text-3xl font-extrabold text-[#1E242B] tracking-tight mt-3 mb-2">
                Our 5-Step Outreach Planning Process
              </h2>
              <p className="text-slate-600 text-sm">
                From initial request to final report, we guide you seamlessly through every phase.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Step 1 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3 relative group hover:border-[#0B56A4] transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#0B56A4] text-white font-extrabold text-xs flex items-center justify-center">
                  1
                </div>
                <h4 className="text-sm font-bold text-[#1E242B]">Tell Us About Your Outreach</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fill out our simple form with your location, proposed dates, and target beneficiaries.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3 relative group hover:border-[#0B56A4] transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#0B56A4] text-white font-extrabold text-xs flex items-center justify-center">
                  2
                </div>
                <h4 className="text-sm font-bold text-[#1E242B]">We Understand Your Needs</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our team reviews attendance expectations, clinical scope, and site requirements.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3 relative group hover:border-[#0B56A4] transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#0B56A4] text-white font-extrabold text-xs flex items-center justify-center">
                  3
                </div>
                <h4 className="text-sm font-bold text-[#1E242B]">We Build the Outreach Plan</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We assemble the medical team, drug dispensary supplies, diagnostic kits, and site logistics.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3 relative group hover:border-[#0B56A4] transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#0B56A4] text-white font-extrabold text-xs flex items-center justify-center">
                  4
                </div>
                <h4 className="text-sm font-bold text-[#1E242B]">We Execute the Outreach</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our clinical team delivers professional consultations, lab tests, and care safely on site.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3 relative group hover:border-[#0B56A4] transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#0B56A4] text-white font-extrabold text-xs flex items-center justify-center">
                  5
                </div>
                <h4 className="text-sm font-bold text-[#1E242B]">We Measure the Impact</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Receive a detailed post-event report with anonymized medical stats and recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outreach Request Multi-Step Form */}
        <section id="request-form" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-[#0E2A47] text-white p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-1">
                    Medical Outreach Request Form
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">Plan Your Outreach With Us</h2>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Response within 24h</span>
                </div>
              </div>

              {/* Step Progress Bar Indicator */}
              {!isSubmitted && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs font-bold mb-3">
                    <span className="text-blue-300">Step {currentStep} of 5</span>
                    <span className="text-slate-300">
                      {currentStep === 1 && "Contact Details"}
                      {currentStep === 2 && "Outreach Details"}
                      {currentStep === 3 && "Services Required"}
                      {currentStep === 4 && "Additional & Budget"}
                      {currentStep === 5 && "Review & Submit"}
                    </span>
                  </div>
                  <div className="w-full bg-white/15 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-emerald-400 h-full transition-all duration-500"
                      style={{ width: `${(currentStep / 5) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Form Body / Confirmation Modal View */}
            <div className="p-8 sm:p-12">
              {isSubmitted ? (
                /* Post-Submission Success State */
                <div className="text-center py-10 space-y-6">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#1E242B]">Thank You for Reaching Out!</h3>
                  <p className="text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Thank you for reaching out. Our team will review your request and contact you to discuss the next steps.
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2 text-slate-600">
                    <p><strong>Proposed Outreach:</strong> {formData.outreachTitle || "Medical Outreach"}</p>
                    <p><strong>Organisation:</strong> {formData.orgName || "Partner Organisation"}</p>
                    <p><strong>Contact Email:</strong> {formData.email}</p>
                    <p><strong>Selected Services:</strong> {formData.selectedServices.length} options</p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <a
                      href="tel:+2348052544332"
                      className="px-6 py-3 rounded-xl bg-[#0B56A4] hover:bg-[#08407B] text-white font-bold text-xs"
                    >
                      Call Desk: +234 805 254 4332
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Contact Details */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-[#1E242B] flex items-center gap-2">
                        <UserCheck2 className="w-5 h-5 text-[#0B56A4]" />
                        <span>Step 1 — Contact Information</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="e.g. Dr. John Doe / Pastor Mary Smith"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Organisation Name *
                          </label>
                          <input
                            type="text"
                            name="orgName"
                            required
                            value={formData.orgName}
                            onChange={handleChange}
                            placeholder="e.g. Hope Chapel / Acme Corp"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. contact@organisation.org"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Phone / WhatsApp Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. +234 801 234 5678"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                          Organisation Type *
                        </label>
                        <select
                          name="orgType"
                          value={formData.orgType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800 bg-white"
                        >
                          {organisationTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Outreach Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-[#1E242B] flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-[#0B56A4]" />
                        <span>Step 2 — Proposed Outreach Details</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Proposed Outreach Title / Name
                          </label>
                          <input
                            type="text"
                            name="outreachTitle"
                            value={formData.outreachTitle}
                            onChange={handleChange}
                            placeholder="e.g. 2026 Community Health & Screening Mission"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Proposed Location / Town / State *
                          </label>
                          <input
                            type="text"
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="e.g. Ikorodu, Lagos State"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Preferred Proposed Date *
                          </label>
                          <input
                            type="date"
                            name="proposedDate"
                            required
                            value={formData.proposedDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Alternative Date (Optional)
                          </label>
                          <input
                            type="date"
                            name="altDate"
                            value={formData.altDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Expected Number of Beneficiaries
                          </label>
                          <select
                            name="expectedBeneficiaries"
                            value={formData.expectedBeneficiaries}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800 bg-white"
                          >
                            <option value="Under 100 people">Under 100 people</option>
                            <option value="100 - 300 people">100 - 300 people</option>
                            <option value="300 - 600 people">300 - 600 people</option>
                            <option value="600 - 1,000 people">600 - 1,000 people</option>
                            <option value="1,000+ people">1,000+ people (Large Scale Mission)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Target Audience / Community Focus
                          </label>
                          <input
                            type="text"
                            name="targetAudience"
                            value={formData.targetAudience}
                            onChange={handleChange}
                            placeholder="e.g. Elderly congregants, market women, staff"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Services Required */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-[#1E242B] flex items-center gap-2">
                          <Stethoscope className="w-5 h-5 text-[#0B56A4]" />
                          <span>Step 3 — Select Required Healthcare Services</span>
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Select all confirmed service offerings you wish TifeMedic to deliver during the outreach.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {confirmedServiceOptions.map((opt) => {
                          const OptionIcon = opt.icon;
                          const isSelected = formData.selectedServices.includes(opt.label);
                          return (
                            <div
                              key={opt.id}
                              onClick={() => handleServiceToggle(opt.label)}
                              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                                isSelected
                                  ? "bg-blue-50/80 border-[#0B56A4] shadow-xs"
                                  : "bg-white border-slate-200 hover:border-slate-300"
                              }`}
                            >
                              <div
                                className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center flex-shrink-0 transition-colors ${
                                  isSelected
                                    ? "bg-[#0B56A4] border-[#0B56A4] text-white"
                                    : "border-slate-300 bg-white"
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5 font-bold text-xs text-[#1E242B]">
                                  <OptionIcon className="w-3.5 h-3.5 text-[#0B56A4]" />
                                  <span>{opt.label}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Additional Requirements & Budget */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-[#1E242B] flex items-center gap-2">
                        <ClipboardList className="w-5 h-5 text-[#0B56A4]" />
                        <span>Step 4 — Additional Requirements & Logistics</span>
                      </h3>

                      <div>
                        <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                          Describe Your Outreach & Specific Healthcare Needs
                        </label>
                        <textarea
                          name="description"
                          rows={3}
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Provide any specific goals, target health conditions (e.g., high hypertension in community), or special requirements..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Logistics Already Available On-Site
                          </label>
                          <input
                            type="text"
                            name="existingLogistics"
                            value={formData.existingLogistics}
                            onChange={handleChange}
                            placeholder="e.g. Venue hall, tables, canopy, power generator"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold uppercase text-slate-600 mb-2">
                            Estimated Budget Range (Optional)
                          </label>
                          <select
                            name="estimatedBudget"
                            value={formData.estimatedBudget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B56A4] focus:ring-2 focus:ring-[#0B56A4]/20 outline-none text-sm text-slate-800 bg-white"
                          >
                            <option value="Flexible / To Be Discussed">Flexible / To Be Discussed</option>
                            <option value="Under ₦500,000">Under ₦500,000</option>
                            <option value="₦500,000 - ₦1,500,000">₦500,000 - ₦1,500,000</option>
                            <option value="₦1,500,000 - ₦3,000,000">₦1,500,000 - ₦3,000,000</option>
                            <option value="₦3,000,000+ (Full Turnkey Mega Mission)">₦3,000,000+ (Mega Mission)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5: Review & Submit */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-[#1E242B] flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          <span>Step 5 — Review Your Request Summary</span>
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Please review the details below before submitting your outreach request to TifeMedic.
                        </p>
                      </div>

                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 pb-4">
                          <div>
                            <span className="text-slate-400 block uppercase font-bold">Contact Person</span>
                            <span className="font-bold text-slate-800 text-sm">{formData.fullName || "Not provided"}</span>
                            <span className="block text-slate-500">{formData.email} · {formData.phone}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block uppercase font-bold">Organisation</span>
                            <span className="font-bold text-slate-800 text-sm">{formData.orgName || "Not provided"}</span>
                            <span className="block text-slate-500">{formData.orgType}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-200 pb-4">
                          <div>
                            <span className="text-slate-400 block uppercase font-bold">Outreach Location & Date</span>
                            <span className="font-bold text-slate-800">{formData.location || "Location pending"}</span>
                            <span className="block text-slate-500">Date: {formData.proposedDate || "TBD"}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block uppercase font-bold">Expected Attendance</span>
                            <span className="font-bold text-slate-800">{formData.expectedBeneficiaries}</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-slate-400 block uppercase font-bold mb-2">Selected Services ({formData.selectedServices.length})</span>
                          <div className="flex flex-wrap gap-1.5">
                            {formData.selectedServices.map((s, idx) => (
                              <span key={idx} className="bg-blue-100 text-[#0B56A4] px-2.5 py-1 rounded-md font-semibold">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Form Navigation Controls */}
                  <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous Step</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < 5 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B56A4] hover:bg-[#08407B] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                      >
                        <span>Continue to Step {currentStep + 1}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Outreach Request</span>
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function PlanAnOutreachPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-slate-500">Loading Outreach Planner...</div>}>
      <PlanAnOutreachContent />
    </Suspense>
  );
}
