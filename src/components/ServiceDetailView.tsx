import React from 'react';
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, Phone, Wrench, Clock, FileCheck, MapPin, Navigation, ArrowRight } from 'lucide-react';
import { ServiceItem, DispatchFormData } from '../types';
import { COMPANY_INFO } from '../data/restorationData';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '../data/allServicesData';
import { QuickQuoteForm } from './QuickQuoteForm';
import { BlurImage } from './BlurImage';
import { GoogleMapEmbed } from './GoogleMapEmbed';

interface ServiceDetailViewProps {
  service: ServiceItem;
  onBack: () => void;
  onSelectService?: (serviceId: string) => void;
  onDispatchSubmit: (data: DispatchFormData) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBack,
  onSelectService,
  onDispatchSubmit
}) => {
  // Find related services in the same category or related keywords
  const relatedServices = ALL_SERVICES.filter(
    (s) => s.id !== service.id
  ).slice(0, 4);

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Breadcrumb & Back Navigation */}
        <div className="flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Services Directory</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500 truncate max-w-xs">{service.title}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-blue-700" />
            <span>McKinney, TX 75069 • Collin County</span>
          </div>
        </div>

        {/* Top Emergency CTA Strip on Service Page */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400">
              <Clock className="w-3.5 h-3.5" /> 24/7 Immediate Emergency Dispatch
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white">
              Facing Water Damage in McKinney Right Now?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Our McKinney mobile units are fully stocked to provide quick emergency service at your property.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-blue-100" />
              <span>Call Dispatch: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header Title Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                <Clock className="w-3.5 h-3.5 text-blue-700" /> Quick Service in McKinney, TX (75069, 75070, 75071)
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.fullDesc}
              </p>

              {/* Key Highlights */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-64 sm:h-96 w-full">
              <BlurImage
                src={service.image}
                alt={service.title}
                priority={true}
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs uppercase font-bold tracking-wider text-blue-300">
                  Certified McKinney Technicians
                </div>
                <div className="text-base sm:text-lg font-bold">
                  {service.title} • Collin County Emergency Response
                </div>
              </div>
            </div>

            {/* Critical Time-Sensitive Notice (Trust Slate / Blue Alert) */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex items-start gap-3.5">
              <AlertTriangle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-xs font-extrabold uppercase tracking-wider text-blue-400">
                  Why Immediate Action is Mandatory in McKinney, TX
                </div>
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.urgencyWarning}
                </div>
              </div>
            </div>

            {/* Step-by-Step Restoration Protocol */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                  IICRC S500 Standard
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Our Step-by-Step Restoration Protocol
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Scientifically proven procedures to ensure complete dryness and structural preservation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors space-y-2 relative"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Equipment Deployed */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-blue-700">
                <Wrench className="w-5 h-5" />
                <h2 className="text-xl font-extrabold text-slate-900">
                  Commercial Equipment Deployed on This Job
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Standard consumer wet vacuums cannot dry deep subfloors. We deploy commercial-grade drying units:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {service.equipment.map((eq, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 100% Hassle-Free Property Restoration Guarantee Section */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-800">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <FileCheck className="w-4 h-4" />
                <span>100% Hassle-Free Process</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Complete End-to-End Restoration & Paperwork Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We handle line-item structural documentation, daily moisture drying curves, and comprehensive forensic reporting so your property restoration is handled smoothly with zero stress.
              </p>
              <div className="pt-1 flex flex-wrap gap-2 text-xs">
                {['FLIR® Thermal Scans', 'Industrial Desiccant Drying', 'Complete Moisture Mapping', 'Air Quality Restoration', 'Full Reconstruction Ready'].map((feature, idx) => (
                  <span key={idx} className="bg-slate-800 px-3 py-1 rounded-md text-slate-200 font-medium border border-slate-700">
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Embedded Google Map with McKinney TX Headquarters Callout */}
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                    Service Area Coverage
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Local McKinney, TX Headquarters & Rapid Dispatch Radius
                  </h3>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  201 W Virginia St, McKinney, TX 75069
                </div>
              </div>
              <GoogleMapEmbed />
            </div>

            {/* Related Services in McKinney TX */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">
                Other McKinney, TX Water Restoration Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedServices.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectService ? onSelectService(rel.id) : onBack()}
                    className="p-3 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50/60 text-left transition-colors group cursor-pointer"
                  >
                    <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 flex items-center justify-between">
                      <span className="truncate pr-2">{rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 shrink-0" />
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {rel.shortDesc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sticky Column: Dispatch Form & Call Card */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            
            {/* Quick Dispatch Form */}
            <QuickQuoteForm
              onSuccess={onDispatchSubmit}
              title={`Request 24/7 Dispatch`}
              subtitle={`For ${service.title} in McKinney, TX`}
              isCompact={true}
            />

            {/* Emergency Phone Call Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mx-auto border border-blue-100">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Speak With On-Call Dispatch
              </h3>
              <p className="text-xs text-slate-500">
                Certified water mitigation experts are on call 24 hours a day in McKinney, TX.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-blue-100" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
              <div className="text-[11px] text-slate-400">
                Average call answer time: under 15 seconds
              </div>
            </div>

            {/* Local Trust Card */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>McKinney Service Guarantee</span>
              </div>
              <p className="leading-relaxed">
                We are a local Collin County contractor. If your McKinney home suffers sudden water intrusion, our emergency response crew arrives with moisture meters, pumps, and drying equipment ready to protect your home.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
