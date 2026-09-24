import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, MessageSquare, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO } from '../data/restorationData';
import { QuickQuoteForm } from './QuickQuoteForm';
import { GoogleMapEmbed } from './GoogleMapEmbed';
import { DispatchFormData } from '../types';

interface ContactPageProps {
  onDispatchSubmit: (data: DispatchFormData) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onDispatchSubmit }) => {
  return (
    <div className="py-14 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Clock className="w-3.5 h-3.5 text-blue-700" />
            <span>24/7 Quick Emergency Service</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact McKinney Flood & Water Damage Restoration
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have an active water leak, burst pipe, or storm flood? Contact our local McKinney dispatch office immediately. Technicians provide quick emergency service across McKinney, TX (75069, 75070, 75071).
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: 24/7 Phone */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-extrabold tracking-wider text-blue-700 mb-1">
                24/7 Emergency Dispatch
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="text-xl font-extrabold text-slate-900 hover:text-blue-700 transition-colors block"
              >
                {COMPANY_INFO.phone}
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Quick service across McKinney, TX (75069, 75070, 75071).
              </p>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="text-xs font-bold text-blue-700 hover:text-blue-800 underline"
            >
              Tap to Call Now →
            </a>
          </div>

          {/* Card 2: Physical Address in McKinney TX */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-extrabold tracking-wider text-slate-800 mb-1">
                McKinney Facility
              </div>
              <div className="text-sm font-bold text-slate-900">
                {COMPANY_INFO.address}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Historic Downtown McKinney, TX 75069
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=201+W+Virginia+St,+McKinney,+TX+75069"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-700 hover:text-blue-800 underline"
            >
              Get Directions on Maps →
            </a>
          </div>

          {/* Card 3: Direct Email */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-extrabold tracking-wider text-blue-700 mb-1">
                Customer Care & Dispatch Email
              </div>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors block break-all"
              >
                {COMPANY_INFO.email}
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Direct service inquiry & documentation dispatch.
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-xs font-bold text-blue-700 hover:text-blue-800 underline"
            >
              Send Inquiries →
            </a>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-extrabold tracking-wider text-slate-800 mb-1">
                Operating Schedule
              </div>
              <div className="text-sm font-bold text-slate-900">
                24 Hours / 7 Days
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Open 365 days, including weekends & holidays.
              </p>
            </div>
            <span className="text-xs font-bold text-blue-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Crews On Duty Right Now
            </span>
          </div>
        </div>

        {/* Contact Form & Google Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Dispatch Form */}
          <div className="lg:col-span-6">
            <QuickQuoteForm
              onSuccess={onDispatchSubmit}
              title="Send Us a Dispatch or Inspection Request"
              subtitle="Our dispatch coordinator will confirm via phone within minutes."
            />
          </div>

          {/* Right: Embedded Google Map & Service Info */}
          <div className="lg:col-span-6 space-y-6">
            <GoogleMapEmbed />

            {/* 100% Hassle-Free Assistance Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-blue-700" />
                <span>100% Hassle-Free Full Service Restoration</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                From emergency moisture extraction and thermal detection to complete structural drying and sanitization, our certified master restoration teams ensure a completely smooth, stress-free experience.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Certified IICRC Technicians', 'Thermal Imaging Included', 'Zero-Stress Coordination', 'Immediate Dispatch'].map((feat, i) => (
                  <span key={i} className="text-[11px] font-semibold bg-blue-50 text-blue-800 px-2.5 py-1 rounded-md border border-blue-100">
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
