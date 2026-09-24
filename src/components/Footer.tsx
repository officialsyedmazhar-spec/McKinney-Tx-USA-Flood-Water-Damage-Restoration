import React from 'react';
import { Shield, ShieldCheck, Phone, Mail, MapPin, Clock, Award, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from '../data/restorationData';
import { PageTab } from '../types';

interface FooterProps {
  onNavigate: (tab: PageTab, serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Emergency CTA Strip - 2-Color Trust Styling */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-400">
              Immediate Emergency Dispatch in McKinney, TX
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Flooding or Burst Pipe Right Now?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Don't wait for business hours. Our response team provides quick emergency service across McKinney, TX.
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base rounded-xl flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
          >
            <Phone className="w-5 h-5 text-blue-100" />
            <span>Call 24/7: {COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800 text-sm">
          
          {/* Column 1: Company & Local McKinney Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-extrabold text-base text-white tracking-tight leading-none">
                  McKinney Flood
                </div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                  & Water Damage Restoration
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              McKinney's premier 24/7 emergency water damage, flood extraction, mold remediation, and structural drying contractor. Certified IICRC master restorers providing quick service across McKinney, TX (75069, 75070, 75071).
            </p>

            {/* Direct Contact info */}
            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address} (GPS: 33.1972° N, 96.6398° W)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white font-bold text-slate-200">
                  {COMPANY_INFO.phone} (24/7 Live Response)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Open 24/7/365 Days a Year</span>
              </div>
            </div>
          </div>

          {/* Column 2: Restoration Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Restoration Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onNavigate('service-detail', s.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white text-left transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400" />
                    <span className="truncate">{s.title}</span>
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-blue-400 hover:text-blue-300 font-bold text-xs"
                >
                  View All 50 Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: McKinney & Collin County Service Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_AREAS.slice(0, 7).map((area, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigate('service-areas');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white text-left transition-colors flex items-center gap-1 group cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400" />
                    <span>{area.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Service Coverage */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Homeowner Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('emergency-guide')}
                  className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Emergency Action Guide</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>About Our Company</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Contact & Dispatch Office</span>
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Covered McKinney Zip Codes:
              </span>
              <div className="flex flex-wrap gap-1 text-[11px] text-slate-300">
                <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-700 font-semibold">75069</span>
                <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-700 font-semibold">75070</span>
                <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-700 font-semibold">75071</span>
              </div>
            </div>
          </div>

        </div>

        {/* Master Certifications & Guarantee Banner */}
        <div className="py-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-400" />
            <span>IICRC Certified Master Water Restorer • Texas Licensed Mold Remediation Contractor</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300 font-medium">100% Hassle-Free Restoration • Complete Thermal Moisture Mapping • Zero Stress Process</span>
          </div>
        </div>

        {/* Copyright & SEO Geo Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} McKinney Flood & Water Damage Restoration. All rights reserved. McKinney, Texas.
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span>Local McKinney, TX Contractor</span>
            <span>•</span>
            <span>24/7 Dispatch Hotline</span>
            <span>•</span>
            <span>IICRC S500 Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
