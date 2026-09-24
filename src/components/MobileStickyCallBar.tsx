import React from 'react';
import { Phone, Clock, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/restorationData';

interface MobileStickyCallBarProps {
  onNavigateToContact: () => void;
  onExploreServices?: () => void;
}

export const MobileStickyCallBar: React.FC<MobileStickyCallBarProps> = ({
  onNavigateToContact,
  onExploreServices
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-xl safe-area-bottom font-sans">
      <div className="grid grid-cols-2 gap-2">
        {/* Instant 1-tap emergency call */}
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="w-full py-2.5 px-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
          aria-label="Call emergency dispatch"
        >
          <Phone className="w-4 h-4 text-blue-100" />
          <span>Call 24/7 Dispatch</span>
        </a>

        {/* Dispatch Request / Services */}
        <button
          onClick={onNavigateToContact}
          className="w-full py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
        >
          <Clock className="w-4 h-4 text-blue-400" />
          <span>Quick Service</span>
        </button>
      </div>
    </div>
  );
};
