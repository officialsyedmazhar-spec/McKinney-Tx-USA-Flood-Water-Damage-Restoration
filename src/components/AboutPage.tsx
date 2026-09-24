import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, Clock, MapPin, Phone, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data/restorationData';
import { BlurImage } from './BlurImage';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-14 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Locally Owned & Operated in McKinney, TX</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About McKinney Flood & Water Damage Restoration
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Protecting McKinney and Collin County homes and commercial properties from water disasters with compassion, cutting-edge thermal technology, and IICRC-certified craftsmanship.
          </p>
        </div>

        {/* Company Overview Card with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Rapid, Honest Disaster Restoration Backed by Real Texas Roots
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded to provide North Texas property owners with an immediate, honest alternative to slow-moving franchise chains, <strong>McKinney Flood & Water Damage Restoration</strong> maintains dedicated mobile fleets right in Collin County.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When disaster strikes at 2 AM or on a holiday weekend, our phones are answered by certified restoration coordinators—not an outsourced answering service. We mobilize immediately with commercial truck-mounted extractors, desiccant dehumidifiers, and thermal imaging cameras.
            </p>
            
            <div className="grid grid-cols-2 gap-3 pt-3">
              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100">
                <div className="text-2xl font-black text-blue-700">Quick</div>
                <div className="text-xs text-slate-600 font-semibold">Service Dispatch in McKinney</div>
              </div>
              <div className="p-3 bg-slate-100/70 rounded-xl border border-slate-200">
                <div className="text-2xl font-black text-slate-800">100%</div>
                <div className="text-xs text-slate-600 font-semibold">Hassle-Free Restoration</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 sm:h-96 w-full">
              <BlurImage
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Restored McKinney Texas Residence"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-300">Headquartered in McKinney, TX</div>
                <div className="text-base font-bold">201 W Virginia St, McKinney, TX 75069</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Badges */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs uppercase font-extrabold tracking-wider text-sky-400">Industry Credentials</div>
            <h3 className="text-2xl font-extrabold text-white">Certified to the Highest National Standards</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our technicians undergo continuous IICRC credentialing and rigorous safety training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPANY_INFO.certifications.map((cert, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Promises */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Never-Sleep 24/7 Availability</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pipes burst on Thanksgiving; roofs leak at midnight. Our crews rotate 24/7 on-call dispatch shifts so McKinney homes are never left soaking.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Zero-Stress Process</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We compile scientific drying documentation, moisture mapping charts, and structural logs so your restoration is handled seamlessly without headaches.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Full Structural Rebuilds</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Beyond water extraction and drying, we are full-service general contractors capable of replacing drywall, painting, laying hardwood, and restoring your home to perfection.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
