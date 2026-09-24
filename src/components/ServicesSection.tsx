import React, { useState, useMemo } from 'react';
import { Droplets, Waves, Shield, ArrowRight, CheckCircle2, Phone, Clock, Search } from 'lucide-react';
import { COMPANY_INFO } from '../data/restorationData';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '../data/allServicesData';
import { BlurImage } from './BlurImage';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const displayedServices = useMemo(() => {
    let list = ALL_SERVICES;

    if (selectedCategoryId !== 'all') {
      const cat = SERVICE_CATEGORIES.find((c) => c.id === selectedCategoryId);
      if (cat) {
        list = list.filter((s) => cat.services.includes(s.id));
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (s) => s.title.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCategoryId, searchQuery]);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header - 2-Color Trust Styling */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Shield className="w-3.5 h-3.5 text-blue-700" />
            <span>Comprehensive Disaster Mitigation Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            50 Specialized Restoration Services in McKinney, TX
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every flood, broken pipe, and moisture intrusion demands specialized protocol. Explore our complete directory of IICRC S500 certified solutions across Collin County.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search services (e.g. burst pipe, drywall, mold, hardwood)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 shadow-2xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedCategoryId('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                selectedCategoryId === 'all'
                  ? 'bg-blue-700 text-white shadow-2xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              All Services ({ALL_SERVICES.length})
            </button>
            {SERVICE_CATEGORIES.map((cat) => {
              const count = cat.services.length;
              const isSelected = selectedCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-2xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid (All 50 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group"
            >
              {/* Service Image */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                <BlurImage
                  src={service.image}
                  alt={service.title}
                  className="group-hover:scale-105 transition-transform duration-300"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* 24/7 Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white px-2.5 py-1 rounded-md flex items-center gap-1.5 text-[11px] font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>Available 24/7</span>
                </div>

                {/* Arrival Badge */}
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-2.5 py-1 rounded-md flex items-center gap-1 text-[11px] font-bold">
                  <Clock className="w-3 h-3 text-blue-100" />
                  <span>Quick Service</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white font-bold text-base leading-snug">
                  {service.title}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Features */}
                <div className="space-y-1.5 border-t border-slate-100 pt-3">
                  {service.features.slice(0, 2).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Dedicated Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Phone className="w-3 h-3 text-blue-100" />
                    <span>Dispatch</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {displayedServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-600 text-sm">No services found matching your search.</p>
            <button
              onClick={() => { setSelectedCategoryId('all'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 bg-blue-700 text-white rounded-lg text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom 24/7 Action Banner (Cost Estimator Removed) */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Immediate Response Guaranteed</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Emergency Water Damage in McKinney, TX?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Do not wait. Moisture wicks into framing and drywall within hours. Our certified technicians provide quick emergency service across McKinney, TX (75069, 75070, 75071) with truck-mounted vacuum extractors and thermal cameras.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition-colors text-center shadow-sm"
            >
              Call 24/7 Dispatch: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
