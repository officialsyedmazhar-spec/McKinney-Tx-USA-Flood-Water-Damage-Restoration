import React from 'react';
import { CheckCircle2, Clock, Phone, AlertTriangle, ShieldCheck, X } from 'lucide-react';
import { DispatchFormData } from '../types';
import { COMPANY_INFO } from '../data/restorationData';

interface DispatchConfirmationModalProps {
  formData: DispatchFormData | null;
  onClose: () => void;
}

export const DispatchConfirmationModal: React.FC<DispatchConfirmationModalProps> = ({
  formData,
  onClose
}) => {
  if (!formData) return null;

  const ticketNumber = `TX-MCK-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden text-center p-6 sm:p-8 space-y-5 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/10">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        {/* Title */}
        <div className="space-y-1">
          <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-600">
            Emergency Dispatch Queued Successfully
          </div>
          <h3 className="text-2xl font-black text-slate-900">
            Technician En Route to McKinney
          </h3>
          <p className="text-xs text-slate-500">
            Priority Dispatch Ticket: <strong className="text-slate-800">{ticketNumber}</strong>
          </p>
        </div>

        {/* ETA Highlight Card */}
        <div className="p-4 rounded-2xl bg-blue-700 text-white space-y-1 shadow-sm">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase font-extrabold tracking-wider text-blue-100">
            <Clock className="w-4 h-4" /> Quick Service Dispatch
          </div>
          <div className="text-2xl font-black">
            Crew Mobilizing
          </div>
          <div className="text-xs text-blue-100">
            Destination: {formData.streetAddress ? formData.streetAddress + ', ' : ''}{formData.city || 'McKinney'}, TX {formData.zipCode}
          </div>
        </div>

        {/* Request Summary */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-slate-500">Customer:</span>
            <span className="font-bold text-slate-800">{formData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Callback Phone:</span>
            <span className="font-bold text-slate-800">{formData.phoneNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Reported Damage:</span>
            <span className="font-bold text-slate-800">{formData.waterSource}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Service Process:</span>
            <span className="font-bold text-blue-700">100% Hassle-Free Handling</span>
          </div>
        </div>

        {/* Important Warning */}
        <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-left flex items-start gap-2.5 text-xs text-slate-800">
          <AlertTriangle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
          <span>
            <strong>Reminder:</strong> Please locate and shut off your main water valve if safe to do so. Avoid entering rooms with submerged outlets or sagging ceilings.
          </span>
        </div>

        {/* Direct Call Dispatch Button */}
        <div className="space-y-2 pt-1">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Dispatch Now: {COMPANY_INFO.phone}</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close & Return to Website
          </button>
        </div>

      </div>
    </div>
  );
};
