import React from 'react';
import { Clock, ShieldCheck, FileCheck, Eye, Shield, Award, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/restorationData';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      icon: <Clock className="w-6 h-6 text-blue-700" />,
      title: "Quick Service Response",
      desc: "Our response vehicles are stationed locally across McKinney (75069, 75070, 75071). We dispatch promptly to extract water and prevent secondary mold."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-blue-700" />,
      title: "100% Hassle-Free Full Service",
      desc: "We manage all moisture mapping, documentation, and technical reporting from start to finish so you enjoy zero out-of-pocket stress."
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-700" />,
      title: "Thermal Infrared Moisture Detection",
      desc: "We pinpoint hidden moisture pockets inside wall cavities and subfloors without knocking down walls using FLIR thermal cameras."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-700" />,
      title: "IICRC Master Certified Restorers",
      desc: "All technicians carry active IICRC certifications in water damage, structural drying, antimicrobial application, and mold remediation."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-700" />,
      title: "Complete Structural Rebuilds",
      desc: "From initial pump-out to dry-wall replacement, texture matching, and luxury hardwood installation, we handle the entire project."
    },
    {
      icon: <Award className="w-6 h-6 text-blue-700" />,
      title: "Dedicated Local McKinney Teams",
      desc: "Direct rapid response teams stationed locally across McKinney zip codes 75069, 75070, and 75071."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - 2-Color Trust Styling */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
            <span>The McKinney Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why McKinney Homeowners Trust Us in an Emergency
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            When floodwater threatens your home, you need more than a generic franchise. You need local master restorers equipped with high-capacity equipment and complete structural restoration expertise.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:bg-white hover:shadow-sm transition-all duration-200 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Real Equipment Strip - Slate Navy & Blue */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-800 shadow-sm">
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-xs uppercase font-extrabold tracking-wider text-blue-400">
              Commercial Fleet & Drying Technology
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Industrial Extractors & Desiccant Units Stationed in McKinney, TX
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Truck-mounted extractors capable of vacuuming 1,000+ gallons per hour, eliminating standing water before mold spores germinate.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition-colors flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-blue-100" />
              <span>Call 24/7 Dispatch: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
