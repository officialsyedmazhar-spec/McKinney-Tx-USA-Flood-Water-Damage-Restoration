import React, { useState } from 'react';
import { Shield, CheckCircle2, Phone } from 'lucide-react';
import { BlurImage } from './BlurImage';
import { COMPANY_INFO } from '../data/restorationData';

export const BeforeAfterGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hardwood' | 'basement' | 'mold'>('hardwood');

  const cases = {
    hardwood: {
      title: "Hardwood Floor Flooding Saved (Craig Ranch, McKinney)",
      desc: "Water heater failure flooded 1,200 sq. ft. of white oak hardwood. Using injected drying mats and LGR dehumidifiers, we dried the wood in place without cupping or costly replacement.",
      beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      stats: { dryingTime: "74 Hours", moistureDrop: "from 38% to 9%", replacementSaved: "$14,500" }
    },
    basement: {
      title: "Storm Flood Extraction & Sanitization (Stonebridge Ranch)",
      desc: "Flash flood runoff entered a ground-level living space. Our crews extracted 3,400 gallons of silt water, applied botanical antimicrobials, and sanitized framing.",
      beforeImg: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80",
      stats: { dryingTime: "4 Days", moistureDrop: "100% Extracted", replacementSaved: "$22,000" }
    },
    mold: {
      title: "Kitchen Wall Cavity Mold Remediation (Historic McKinney)",
      desc: "Hidden ice-maker leak caused dense fungal colonization inside the wall cavity. Isolated under negative air HEPA containment; passed air clearance test on day 3.",
      beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      stats: { dryingTime: "3 Days", moistureDrop: "0 Spores Detected", replacementSaved: "100% Restored" }
    }
  };

  const current = cases[activeTab];

  return (
    <section className="py-16 sm:py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header - 2-Color Trust Styling */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Shield className="w-3.5 h-3.5 text-blue-700" />
            <span>Proven McKinney Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Before & After Restoration Case Studies
          </h2>
          <p className="text-base text-slate-600">
            Real North Texas properties restored from catastrophic water damage back to pristine living condition.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab('hardwood')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'hardwood'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Hardwood Floor Extraction
          </button>
          <button
            onClick={() => setActiveTab('basement')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'basement'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Storm & Sump Flooding
          </button>
          <button
            onClick={() => setActiveTab('mold')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'mold'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Wall Cavity Mold Removal
          </button>
        </div>

        {/* Active Case Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {current.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
              {current.desc}
            </p>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="text-[11px] font-bold text-slate-500 uppercase">Drying Timeline</div>
              <div className="text-lg font-black text-slate-900">{current.stats.dryingTime}</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="text-[11px] font-bold text-slate-500 uppercase">Moisture Metric</div>
              <div className="text-lg font-black text-blue-700">{current.stats.moistureDrop}</div>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="text-[11px] font-bold text-slate-500 uppercase">Homeowner Value</div>
              <div className="text-lg font-black text-slate-900">{current.stats.replacementSaved}</div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Before */}
            <div className="space-y-2">
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 border border-slate-300 shadow-2xs bg-slate-200">
                <BlurImage
                  src={current.beforeImg}
                  alt="Before Restoration"
                  containerClassName="w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-bold uppercase px-3 py-1 rounded-lg shadow-sm pointer-events-none">
                  BEFORE: Active Intrusion
                </div>
              </div>
              <div className="text-xs text-slate-500 italic">
                Initial thermal assessment showing high moisture saturation behind building materials.
              </div>
            </div>

            {/* After */}
            <div className="space-y-2">
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 border border-slate-300 shadow-2xs bg-slate-200">
                <BlurImage
                  src={current.afterImg}
                  alt="After Restoration"
                  containerClassName="w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs font-bold uppercase px-3 py-1 rounded-lg shadow-sm pointer-events-none">
                  AFTER: Fully Restored & Certified Dry
                </div>
              </div>
              <div className="text-xs text-slate-500 italic">
                100% dry standard verified, sanitized, and rebuilt with zero mold occurrence.
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="pt-2 flex justify-center">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-sm"
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
