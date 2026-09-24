import React, { useState } from 'react';
import { Send, Phone, ShieldCheck, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/restorationData';
import { DispatchFormData } from '../types';

interface QuickQuoteFormProps {
  onSuccess: (data: DispatchFormData) => void;
  title?: string;
  subtitle?: string;
  isCompact?: boolean;
}

export const QuickQuoteForm: React.FC<QuickQuoteFormProps> = ({
  onSuccess,
  title = "Request Quick Emergency Service",
  subtitle = "100% Hassle-free service • Certified master restorers • Local McKinney team",
  isCompact = false
}) => {
  const [formData, setFormData] = useState<DispatchFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    streetAddress: '',
    city: 'McKinney',
    zipCode: '75070',
    serviceType: 'Emergency Water Extraction',
    urgency: 'immediate',
    waterSource: 'Burst Pipe / Plumbing Leak',
    standingWater: 'Yes (1-3 inches)',
    notes: '',
    insuranceClaim: 'yes'
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setErrorMsg('Please enter your full name and a phone number where our McKinney dispatcher can reach you.');
      return;
    }

    if (formData.phoneNumber.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please provide a valid 10-digit phone number for immediate callback.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    // Realistic brief dispatch queuing
    setTimeout(() => {
      setLoading(false);
      onSuccess(formData);
    }, 700);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden ${isCompact ? 'p-5' : 'p-6 sm:p-8'}`}>
      <div className="border-b border-slate-100 pb-4 mb-5">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">
          <Clock className="w-4 h-4 text-blue-700 animate-pulse" />
          <span>Priority McKinney Dispatch Line</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-700 mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {errorMsg && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-xs flex items-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Your Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. John Miller"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-400 rounded-lg text-sm text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="(972) 000-0000"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-400 rounded-lg text-sm text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold"
            />
          </div>
        </div>

        {/* Address & McKinney Zip Code strictly 75069, 75070, 75071 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold text-slate-800 mb-1">
              McKinney Property Address
            </label>
            <input
              type="text"
              placeholder="e.g. 1420 Stonebridge Dr, McKinney, TX"
              value={formData.streetAddress}
              onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-400 rounded-lg text-sm text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              McKinney Zip Code
            </label>
            <select
              value={formData.zipCode}
              onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
              className="w-full px-3 py-2.5 bg-white border border-slate-400 rounded-lg text-sm font-bold text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all cursor-pointer"
            >
              <option value="75069">75069 (Downtown / Central McKinney)</option>
              <option value="75070">75070 (Stonebridge / Craig Ranch)</option>
              <option value="75071">75071 (Tucker Hill / North McKinney)</option>
            </select>
          </div>
        </div>

        {/* Damage Type & Urgency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Water Damage Situation
            </label>
            <select
              value={formData.waterSource}
              onChange={(e) => setFormData({ ...formData, waterSource: e.target.value })}
              className="w-full px-3 py-2.5 bg-white border border-slate-400 rounded-lg text-sm font-bold text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all cursor-pointer"
            >
              <option value="Burst Pipe / Frozen Plumbing">Burst Pipe / Frozen Plumbing</option>
              <option value="Appliance Leak (Water Heater, Dishwasher)">Appliance Leak (Water Heater/Washer)</option>
              <option value="Storm Flooding / Rain Runoff">Storm Flooding / Rain Runoff</option>
              <option value="Toilet Overflow / Sewage Backup">Toilet Overflow / Sewage Backup</option>
              <option value="Slab Leak / Hidden Foundation Moisture">Slab Leak / Foundation Moisture</option>
              <option value="Visible Mold Infestation">Visible Mold Infestation</option>
              <option value="Ceiling / Drywall Water Leak">Ceiling / Drywall Water Leak</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">
              Dispatch Request
            </label>
            <select
              value={formData.urgency}
              onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
              className="w-full px-3 py-2.5 bg-blue-100/90 border border-blue-400 text-blue-950 font-bold rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all cursor-pointer"
            >
              <option value="immediate">🚨 Immediate Quick Service Dispatch</option>
              <option value="within-4-hours">⏰ Today (Within 2-4 Hours)</option>
              <option value="scheduled">📅 Scheduled Service Appointment</option>
            </select>
          </div>
        </div>

        {/* Standing Water Status */}
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-1">
            Current Standing Water Status
          </label>
          <select
            value={formData.standingWater}
            onChange={(e) => setFormData({ ...formData, standingWater: e.target.value })}
            className="w-full px-3 py-2.5 bg-white border border-slate-400 rounded-lg text-xs sm:text-sm text-slate-950 focus:ring-2 focus:ring-blue-600 transition-all font-bold cursor-pointer"
          >
            <option value="Yes (Over 2 inches)">Yes (Over 2 inches standing water)</option>
            <option value="Yes (Soaked carpet / puddles)">Yes (Soaked carpets / wet flooring)</option>
            <option value="No standing, but damp walls/ceiling">No standing, but damp walls/ceilings</option>
            <option value="Unsure / Suspected behind walls">Unsure / Moisture inside walls</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 transform active:scale-[0.99]"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Routing to McKinney On-Call Team...</span>
            </div>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>REQUEST QUICK SERVICE DISPATCH</span>
            </>
          )}
        </button>

        {/* Immediate Call Notice */}
        <div className="pt-2 text-center">
          <div className="text-xs text-slate-600 flex items-center justify-center gap-1.5 flex-wrap">
            <span>Water actively flooding?</span>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="font-bold text-blue-700 hover:text-blue-800 underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 inline" /> Call {COMPANY_INFO.phone} for immediate assistance
            </a>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 flex-wrap gap-2">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" /> IICRC Certified Master Restorers
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" /> 100% Hassle-Free Process
          </span>
          <span className="flex items-center gap-1 font-semibold text-slate-800">
            📍 Quick Service (75069, 75070, 75071)
          </span>
        </div>
      </form>
    </div>
  );
};
