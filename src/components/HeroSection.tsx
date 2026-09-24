import React from 'react';
import { Phone, Clock, ShieldCheck, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/restorationData';
import { QuickQuoteForm } from './QuickQuoteForm';
import { DispatchFormData } from '../types';

interface HeroSectionProps {
  onDispatchSubmit: (data: DispatchFormData) => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDispatchSubmit,
  onExploreServices
}) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-12 lg:py-16 font-sans border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Emergency Hotlines */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Geo & Certification Pill - Clean Trust Design */}
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-3.5 py-1 text-xs text-slate-200">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="font-bold text-white tracking-wide uppercase">McKinney, TX Local Dispatch</span>
              <span className="text-slate-500">|</span>
              <span className="text-blue-300 font-semibold">Quick Service Response</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                24/7 Emergency Flood & Water Damage Restoration in McKinney, TX
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                When burst pipes, storm flooding, or supply line leaks strike your McKinney home or business, our certified master restoration teams provide quick emergency service with industrial extractors and thermal drying equipment.
              </p>
            </div>

            {/* Key Value Points - 2-Color Trust Palette */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700 rounded-xl p-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span><strong>100% Hassle-Free Process</strong> (Zero Out-of-Pocket Stress)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700 rounded-xl p-3">
                <Clock className="w-5 h-5 text-blue-400 shrink-0" />
                <span><strong>Quick Service Dispatch</strong> in McKinney (75069, 75070, 75071)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700 rounded-xl p-3">
                <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                <span><strong>IICRC Master Restorers</strong> & FLIR Thermal Moisture Mapping</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700 rounded-xl p-3">
                <Shield className="w-5 h-5 text-blue-400 shrink-0" />
                <span><strong>Complete Restoration</strong> from Extraction to Final Structural Handover</span>
              </div>
            </div>

            {/* Primary Action Buttons (Cost Estimator Removed) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base rounded-xl shadow-md transition-colors"
              >
                <Phone className="w-5 h-5 text-white" />
                <div className="text-left leading-tight">
                  <div className="text-[11px] uppercase font-black tracking-wider text-white">Click to Call 24/7 Dispatch</div>
                  <div className="text-lg text-white font-black">{COMPANY_INFO.phone}</div>
                </div>
              </a>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm rounded-xl border border-slate-700 transition-colors cursor-pointer"
              >
                <span>Browse 50 Specialized Services</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>
            </div>

            {/* Local Trust Badges */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="font-bold text-white">Local McKinney Technicians</span>
                <span>(Covering Zip Codes 75069, 75070, 75071)</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-slate-300">Certified Master Restorers • Licensed & Bonded • 100% Hassle-Free</span>
              </div>
            </div>

          </div>

          {/* Right Column: 60-Minute Dispatch Form */}
          <div className="lg:col-span-5">
            <QuickQuoteForm
              onSuccess={onDispatchSubmit}
              title="Request 24/7 Emergency Dispatch"
              subtitle="Quick service across McKinney, TX (75069, 75070, 75071)"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
