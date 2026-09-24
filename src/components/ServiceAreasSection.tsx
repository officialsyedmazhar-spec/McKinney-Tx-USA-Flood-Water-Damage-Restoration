import React from 'react';
import { MapPin, Clock, CheckCircle2, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../data/restorationData';
import { GoogleMapEmbed } from './GoogleMapEmbed';

interface ServiceAreasSectionProps {
  onNavigateToContact: () => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({
  onNavigateToContact
}) => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header - 2-Color Trust Palette */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
            <MapPin className="w-3.5 h-3.5 text-blue-700" />
            <span>Local McKinney, Texas Coverage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our 24/7 Water Damage Service Areas
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Headquartered directly in McKinney, Texas, our mobile extraction fleets are strategically positioned for quick service dispatch across all McKinney neighborhoods (Zip Codes: 75069, 75070, 75071).
          </p>
        </div>

        {/* Embedded Interactive Google Map */}
        <GoogleMapEmbed />

        {/* Service Areas Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                McKinney Neighborhoods & Zip Codes Served
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Request quick emergency service for water extraction and structural drying in McKinney, TX.
              </p>
            </div>
            <div className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 self-start sm:self-auto">
              ✓ Zip Codes 75069, 75070, 75071 Dispatched 24/7
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-blue-50 text-blue-800">
                      {area.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-blue-700" />
                      <span>{area.responseTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900">
                    {area.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {area.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Covered Zip Codes:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {area.zipCodes.map((zip) => (
                        <span key={zip} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded">
                          {zip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="w-full py-2 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs rounded-lg border border-slate-200 hover:border-blue-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-700" />
                    <span>Dispatch to {area.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Callout Card - 2-Color Trust Styling */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-white">
              Is Your McKinney Property Flooding Right Now?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Don't wait for business hours. Standing water causes mold and wood warping within hours. Our emergency crews are on standby 24/7 across McKinney, TX.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base rounded-xl transition-colors flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-blue-100" />
              <span>Call Emergency Dispatch: {COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={onNavigateToContact}
              className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm rounded-xl transition-colors border border-slate-700 cursor-pointer"
            >
              Online Request
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
