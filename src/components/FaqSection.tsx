import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/restorationData';

export const FaqSection: React.FC<{ onNavigateToContact: () => void }> = ({ onNavigateToContact }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Water Damage Questions
          </h2>
          <p className="text-base text-slate-600">
            Clear, honest answers about our McKinney emergency dispatch, restoration procedures, and drying standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 bg-slate-50/60 hover:bg-slate-50 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-50 border-blue-200' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-slate-600" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-2 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 bg-slate-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border border-slate-300">
          <div>
            <h3 className="font-extrabold text-slate-950 text-base sm:text-lg">
              Have an urgent or unique water emergency?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-medium mt-0.5">
              Speak directly with a certified McKinney water restoration technician right now.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={onNavigateToContact}
              className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm rounded-lg border border-slate-400 transition-colors cursor-pointer"
            >
              Ask Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
