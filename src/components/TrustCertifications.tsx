import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TrustCertifications: React.FC = () => {
  const certifications = [
    {
      badgeTitle: "IICRC CERTIFIED FIRM",
      subTitle: "Clean Trust & Master Water Restorer",
      regNumber: "Cert #084920",
      description: "Certified in ANSI/IICRC S500 Standard for Professional Water Damage Restoration and S520 Mold Remediation."
    },
    {
      badgeTitle: "BBB ACCREDITED BUSINESS",
      subTitle: "A+ Rated for Superior Service",
      regNumber: "Accredited Member",
      description: "Zero unresolved complaints. Exemplary consumer reliability, fair pricing practices, and prompt Texas emergency delivery."
    },
    {
      badgeTitle: "TEXAS DSHS LICENSED",
      subTitle: "Licensed Mold Remediation Contractor",
      regNumber: "TX License #MRC1482",
      description: "Fully credentialed with the Texas Department of State Health Services for legal, insured residential containment."
    },
    {
      badgeTitle: "EPA LEAD-SAFE FIRM",
      subTitle: "Federal Environmental Compliance",
      regNumber: "NAT-F18492-1",
      description: "Certified to safely restore historical and vintage McKinney properties built prior to 1978 without lead risk."
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-white border-y border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Bar */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-800 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>Vetted • State Licensed • Fully Bonded • Certified</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Industry Accreditations & Certified Master Standards
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Water damage restoration requires rigorous scientific protocols. We maintain active compliance with national regulatory bodies.
          </p>
        </div>

        {/* 4 Credential Badges Grid - 2-Color Trust Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {certifications.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:bg-white hover:shadow-2xs transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-700 shadow-2xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    {item.regNumber}
                  </span>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                    {item.badgeTitle}
                  </h3>
                  <div className="text-xs font-semibold text-blue-700 mt-0.5">
                    {item.subTitle}
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] text-slate-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                <span>Verified Active Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
