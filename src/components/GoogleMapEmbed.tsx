import React from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/restorationData';

export const GoogleMapEmbed: React.FC = () => {
  // Google Maps embed URL for McKinney, TX centered on historic McKinney / Collin County
  const mapEmbedUrl = "https://maps.google.com/maps?q=201%20W%20Virginia%20St,%20McKinney,%20TX%2075069&t=&z=13&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=201+W+Virginia+St,+McKinney,+TX+75069";

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Map Header Info Bar */}
      <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>Local McKinney Headquarters & Dispatch Facility</span>
          </div>
          <h3 className="text-xl font-extrabold text-white">
            Serving McKinney, Texas, USA
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            {COMPANY_INFO.address} (GPS: 33.1972° N, 96.6398° W)
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer border border-slate-700"
          >
            <Navigation className="w-3.5 h-3.5 text-blue-400" />
            <span>Get Driving Directions</span>
            <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
          </a>

          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Map Iframe Container */}
      <div className="relative w-full h-80 sm:h-96 bg-slate-100">
        <iframe
          title="McKinney Flood Restoration Location Map"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />

        {/* Floating Coverage Pill on Desktop */}
        <div className="hidden sm:block absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-lg text-xs space-y-1 max-w-xs pointer-events-none">
          <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Live Dispatch Active in McKinney, TX</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Quick service units stationed near US-75 & US-380 serving McKinney zip codes: 75069, 75070, 75071.
          </p>
        </div>
      </div>

      {/* Bottom Service Area Badges */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-600 shrink-0" />
          <span><strong>Emergency Hours:</strong> 24 Hours / 7 Days a Week / 365 Days a Year</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
          <span><strong>Local McKinney Service:</strong> Dedicated to Zip Codes 75069, 75070, 75071</span>
        </div>
      </div>
    </div>
  );
};
