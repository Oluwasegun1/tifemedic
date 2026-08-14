import { Star, Quote, Building, Heart, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Funmi Adeyemi",
    role: "Head of People & Culture",
    company: "Apex Financial Services",
    quote:
      "TifeMedic transformed our annual staff health week. They handled biometric screenings for over 350 staff across two locations in Lagos with zero operational disruption. The clinical reports helped our leadership understand workplace health trends.",
    rating: 5,
    tag: "Corporate Wellness",
    icon: Building,
  },
  {
    name: "Pastor Emmanuel Okafor",
    role: "Community Outreach Director",
    company: "Grace Life Foundation",
    quote:
      "Finding dependable, licensed doctors and genuine pharmaceuticals for our rural outreach was always a nightmare before TifeMedic. Their team arrived fully equipped, treated 800+ patients in a single weekend, and managed triage effortlessly.",
    rating: 5,
    tag: "Community Outreach",
    icon: Heart,
  },
  {
    name: "Bolanle Kalu",
    role: "CSR Lead",
    company: "Westbridge Logistics",
    quote:
      "The level of professionalism TifeMedic brings to public health campaigns is exceptional. From pre-event permits and cold-chain drug logistics to crowd management, everything was executed with clinical excellence.",
    rating: 5,
    tag: "CSR Health Mission",
    icon: Sparkles,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-28 bg-[#F8FAFD] relative overflow-hidden">
      {/* Background ambient decor */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-50/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B56A4]/10 border border-[#0B56A4]/20 text-[#0B56A4] text-xs font-bold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-6">
            Trusted by Leaders Across <span className="text-[#0B56A4]">Nigeria</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See how our medical missions and workplace wellness programs have made a measurable difference
            for organizations and local communities.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={item.name}
              className={`reveal group relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between stagger-${i + 1}`}
            >
              <div>
                {/* Header: Tag & Rating Stars */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-[#0B56A4] border border-blue-100">
                    <item.icon className="w-3.5 h-3.5" />
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Icon & Body */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-blue-100 mb-2" />
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Details */}
              <div className="pt-5 border-t border-slate-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0B56A4] to-[#0E2A47] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1E242B]">{item.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{item.role}, {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
