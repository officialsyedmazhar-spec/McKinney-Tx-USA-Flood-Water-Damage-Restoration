import React, { useState } from 'react';
import { PageTab, DispatchFormData } from './types';
import { SERVICES } from './data/restorationData';
import { ALL_SERVICES } from './data/allServicesData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailView } from './components/ServiceDetailView';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { EmergencyGuide } from './components/EmergencyGuide';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrustCertifications } from './components/TrustCertifications';
import { RestorationProcessTimeline } from './components/RestorationProcessTimeline';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { FaqSection } from './components/FaqSection';
import { GoogleMapEmbed } from './components/GoogleMapEmbed';
import { DispatchConfirmationModal } from './components/DispatchConfirmationModal';
import { MobileStickyCallBar } from './components/MobileStickyCallBar';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('burst-pipe-water-damage-restoration-mckinney-usa');
  const [confirmationData, setConfirmationData] = useState<DispatchFormData | null>(null);

  const handleNavigate = (tab: PageTab, serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
      setCurrentTab('service-detail');
    } else {
      setCurrentTab(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDispatchSuccess = (data: DispatchFormData) => {
    setConfirmationData(data);
  };

  // Find currently selected service from the complete 50 services list
  const activeService =
    ALL_SERVICES.find((s) => s.id === selectedServiceId) ||
    SERVICES.find((s) => s.id === selectedServiceId) ||
    ALL_SERVICES[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Header with 24/7 Hotline & Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
      />

      {/* Main Content Pages */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            {/* Hero with Direct McKinney 60-Min Dispatch Form */}
            <HeroSection
              onDispatchSubmit={handleDispatchSuccess}
              onExploreServices={() => handleNavigate('services')}
            />

            {/* Trust & Accreditations Section */}
            <TrustCertifications />

            {/* Core Restoration Services (All 50 Services with Categories & Search) */}
            <ServicesSection
              onSelectService={(id) => handleNavigate('service-detail', id)}
            />

            {/* Interactive Step-by-Step Restoration Process Timeline */}
            <RestorationProcessTimeline />

            {/* Real Case Studies Before & After */}
            <BeforeAfterGallery />

            {/* Why Choose McKinney Flood Restoration */}
            <WhyChooseUs />

            {/* Google Map of McKinney TX & Coverage */}
            <section className="py-16 bg-white border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-blue-700">
                    Local McKinney Headquarters
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-900">
                    Quick Service Across McKinney, Texas
                  </h2>
                  <p className="text-sm text-slate-600">
                    Centrally stationed in McKinney, TX serving zip codes 75069, 75070, and 75071.
                  </p>
                </div>
                <GoogleMapEmbed />
              </div>
            </section>

            {/* Homeowner Water Damage FAQs */}
            <FaqSection onNavigateToContact={() => handleNavigate('contact')} />
          </>
        )}

        {currentTab === 'services' && (
          <div className="space-y-8">
            <ServicesSection
              onSelectService={(id) => handleNavigate('service-detail', id)}
            />
            <RestorationProcessTimeline />
            <BeforeAfterGallery />
            <WhyChooseUs />
          </div>
        )}

        {currentTab === 'service-detail' && (
          <ServiceDetailView
            service={activeService}
            onBack={() => handleNavigate('services')}
            onSelectService={(id) => handleNavigate('service-detail', id)}
            onDispatchSubmit={handleDispatchSuccess}
          />
        )}

        {currentTab === 'service-areas' && (
          <ServiceAreasSection
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {currentTab === 'emergency-guide' && (
          <EmergencyGuide onCallDispatch={() => handleNavigate('contact')} />
        )}

        {currentTab === 'about' && (
          <AboutPage />
        )}

        {currentTab === 'contact' && (
          <ContactPage onDispatchSubmit={handleDispatchSuccess} />
        )}
      </main>

      {/* SEO-Optimized Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky 1-Tap Emergency Call Bar */}
      <MobileStickyCallBar
        onNavigateToContact={() => handleNavigate('contact')}
        onExploreServices={() => handleNavigate('services')}
      />

      {/* Emergency Dispatch Confirmation Ticket Modal */}
      <DispatchConfirmationModal
        formData={confirmationData}
        onClose={() => setConfirmationData(null)}
      />
    </div>
  );
}
