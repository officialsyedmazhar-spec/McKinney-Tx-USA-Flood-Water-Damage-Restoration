import React from 'react';
import { AlertTriangle, Droplets, Phone, CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, EMERGENCY_STEPS } from '../data/restorationData';

interface EmergencyGuideProps {
  onCallDispatch: () => void;
}

export const EmergencyGuide: React.FC<EmergencyGuideProps> = ({ onCallDispatch }) => {
  return (
    <div className="py-14 sm:py-20 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header - 2-Color Trust Styling */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
            <AlertTriangle className="w-3.5 h-3.5 text-blue-700" />
            <span>Homeowner Emergency Protocol</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Immediate Flood & Water Emergency Action Guide
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            What you do right now can save thousands of dollars in structural damage and prevent toxic mold growth while our McKinney response team is in transit.
          </p>
        </div>

        {/* Emergency Callout Card - Slate Navy & Blue */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs uppercase font-extrabold tracking-wider text-blue-400">Emergency Step #1</div>
            <h2 className="text-2xl font-black text-white">Call Our McKinney Dispatch Unit First</h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Water migration speeds through drywall and flooring at rapid rates. Our truck-mounted extractors are ready 24/7.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base rounded-xl shadow-sm transition-colors flex items-center gap-2 shrink-0"
          >
            <Phone className="w-5 h-5 text-blue-100" />
            <span>Call 24/7 Dispatch: {COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* 4 Emergency Steps with Icons */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center sm:text-left">
            Immediate Steps While Waiting for Our McKinney Dispatch Crew
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EMERGENCY_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-blue-100">
                    {step.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                    Priority Action
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DOs and DON'Ts Grid - Clean Slate Navy & Blue Accents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DOs */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs">
            <div className="flex items-center gap-2 text-slate-900">
              <CheckCircle2 className="w-6 h-6 text-blue-700" />
              <h3 className="text-xl font-bold">WHAT TO DO (Safe Actions)</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span><strong>Shut off water:</strong> Close the main valve in your garage or at the city water meter curb box.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span><strong>Elevate furniture:</strong> Place aluminum foil or plastic wood blocks under furniture legs to avoid staining.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span><strong>Remove loose floor items:</strong> Pick up area rugs, books, magazines, and electronics immediately.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span><strong>Document with photos:</strong> Take high-resolution photos and video of all standing water and damaged items for insurance.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span><strong>Turn on A/C:</strong> If safe and electrical is on, set air conditioning to cool (under 72°F) to slow mold growth.</span>
              </li>
            </ul>
          </div>

          {/* DON'Ts */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xs">
            <div className="flex items-center gap-2 text-slate-900">
              <XCircle className="w-6 h-6 text-slate-500" />
              <h3 className="text-xl font-bold">WHAT NOT TO DO (Avoid Hazards)</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span><strong>DO NOT use household vacuums:</strong> Regular shop vacs or vacuum cleaners risk severe electrical shock and motor fires.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span><strong>DO NOT walk in standing sewage:</strong> Category 3 black water carries harmful pathogens and bacteria.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span><strong>DO NOT enter rooms with sagging ceilings:</strong> Heavy wet drywall can collapse without warning.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span><strong>DO NOT turn on ceiling fixtures:</strong> Wet electrical fixtures can cause arching and attic fires.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span><strong>DO NOT wait for your adjuster:</strong> Texas policies require immediate mitigation to avoid denied mold claims.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Water Category Guide */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
          <h3 className="text-xl font-extrabold text-slate-900">
            Understanding the 3 Categories of Water Damage (IICRC Standard)
          </h3>
          <p className="text-sm text-slate-600">
            Water contamination dictates the exact protective gear and sanitization chemicals our McKinney team brings:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold uppercase text-blue-700">Category 1: Clean Water</div>
              <p className="text-xs text-slate-600 mt-1">
                Source: Broken supply pipes, sink overflows, rainwater. No immediate biological hazard, but degrades to Category 2 after 48 hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold uppercase text-slate-800">Category 2: Grey Water</div>
              <p className="text-xs text-slate-600 mt-1">
                Source: Washing machine discharge, dishwasher leaks, toilet overflow with urine. Contains detergents and potential chemical contaminants.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold uppercase text-slate-900">Category 3: Black Water</div>
              <p className="text-xs text-slate-600 mt-1">
                Source: Sewage backups, overflowing rivers, toilet overflow with feces. Grossly unsanitary; requires biohazard PPE and antimicrobial disinfection.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
