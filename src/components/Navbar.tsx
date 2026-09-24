import React, { useState, useMemo } from 'react';
import { Phone, Clock, MapPin, Shield, ChevronDown, Menu, X, AlertTriangle, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/restorationData';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '../data/allServicesData';
import { PageTab } from '../types';

interface NavbarProps {
  currentTab: PageTab;
  onNavigate: (tab: PageTab, serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>(SERVICE_CATEGORIES[0].id);

  const handleNavClick = (tab: PageTab, serviceId?: string) => {
    onNavigate(tab, serviceId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter services by search query
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return ALL_SERVICES.filter(
      (s) => s.title.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm font-sans">
      {/* Top 24/7 Emergency Dispatch Title Bar - Trust Palette (Deep Slate Navy & Medical Blue) */}
      <div className="bg-slate-900 text-white text-xs sm:text-sm py-2 px-3 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-blue-600/90 text-white px-2.5 py-0.5 rounded text-xs font-bold tracking-wide uppercase">
              <Clock className="w-3.5 h-3.5" /> 24/7 Emergency Dispatch
            </span>
            <span className="text-slate-300">
              <strong className="text-white">Quick Service</strong> in McKinney, TX (75069, 75070, 75071)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> 100% Hassle-Free Service
            </span>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors px-3.5 py-1 rounded-md text-xs sm:text-sm shadow-sm"
              aria-label="Call Emergency Dispatch"
            >
              <Phone className="w-3.5 h-3.5 text-blue-100" />
              <span>Call 24/7: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Title Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-blue-700 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-800 transition-colors">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-none group-hover:text-blue-700 transition-colors">
              McKinney Flood
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
              & Water Damage Restoration
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
              currentTab === 'home'
                ? 'text-blue-700 bg-blue-50'
                : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          {/* Mega-Dropdown: Services (McKinney TX) with Hover Open */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('services')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                currentTab === 'services' || currentTab === 'service-detail'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              <span>Services (McKinney TX)</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-blue-700' : ''
                }`}
              />
            </button>

            {/* Hover Options List Dropdown Mega-Menu */}
            {servicesDropdownOpen && (
              <div
                className="absolute top-full -left-40 xl:-left-24 w-[840px] bg-white rounded-xl shadow-2xl border border-slate-200 py-4 px-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}
              >
                {/* Mega-Menu Header & Live Search */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 gap-4">
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                      All 50 McKinney TX Water Restoration Services
                    </div>
                    <div className="text-[12px] text-slate-500">
                      Select any service below for 24/7 emergency response, protocol, and dispatch
                    </div>
                  </div>

                  {/* Search Bar inside Mega-Menu */}
                  <div className="relative w-64">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search 50 services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-800"
                    />
                  </div>
                </div>

                {/* If Searching: Display Search Results */}
                {filteredServices ? (
                  <div className="pt-3">
                    <div className="text-xs font-bold text-slate-700 mb-2">
                      Matching Services ({filteredServices.length})
                    </div>
                    {filteredServices.length === 0 ? (
                      <div className="text-xs text-slate-400 py-6 text-center">
                        No services found matching "{searchQuery}". Call +18447453029 for custom emergency dispatch.
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2 max-h-[420px] overflow-y-auto pr-1">
                        {filteredServices.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleNavClick('service-detail', s.id)}
                            className="text-left p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/70 transition-colors group cursor-pointer"
                          >
                            <div className="font-bold text-xs text-slate-900 group-hover:text-blue-700 line-clamp-1">
                              {s.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {s.shortDesc}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Categorized Multi-Column Mega-Menu */
                  <div className="pt-3 grid grid-cols-12 gap-4">
                    {/* Left Column: Category Tabs */}
                    <div className="col-span-4 border-r border-slate-200 pr-3 space-y-1">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-2 pb-1">
                        Categories
                      </div>
                      {SERVICE_CATEGORIES.map((cat) => {
                        const isActive = activeCategoryTab === cat.id;
                        return (
                          <button
                            key={cat.id}
                            onMouseEnter={() => setActiveCategoryTab(cat.id)}
                            onClick={() => setActiveCategoryTab(cat.id)}
                            className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                              isActive
                                ? 'bg-blue-700 text-white shadow-xs'
                                : 'text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <span className="truncate">{cat.name}</span>
                            <span
                              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                isActive ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-500'
                              }`}
                            >
                              {cat.services.length}
                            </span>
                          </button>
                        );
                      })}

                      <div className="pt-3 border-t border-slate-100 mt-2 px-2">
                        <button
                          onClick={() => handleNavClick('services')}
                          className="w-full text-left text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
                        >
                          <span>View All Services Directory</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Services in Selected Category */}
                    <div className="col-span-8 pl-1">
                      {SERVICE_CATEGORIES.filter((c) => c.id === activeCategoryTab).map((cat) => (
                        <div key={cat.id} className="space-y-2">
                          <div className="pb-1.5">
                            <div className="text-xs font-bold text-slate-900">
                              {cat.name} (McKinney TX)
                            </div>
                            <p className="text-[11px] text-slate-500">{cat.description}</p>
                          </div>

                          <div className="grid grid-cols-1 gap-1.5 max-h-[360px] overflow-y-auto pr-1">
                            {cat.services.map((serviceId) => {
                              const s = ALL_SERVICES.find((item) => item.id === serviceId);
                              if (!s) return null;
                              return (
                                <button
                                  key={s.id}
                                  onClick={() => handleNavClick('service-detail', s.id)}
                                  className="w-full text-left p-2 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/60 transition-colors group cursor-pointer flex items-center justify-between"
                                >
                                  <div className="pr-2">
                                    <span className="font-semibold text-xs text-slate-800 group-hover:text-blue-700 block">
                                      {s.title}
                                    </span>
                                    <span className="text-[11px] text-slate-500 line-clamp-1">
                                      {s.shortDesc}
                                    </span>
                                  </div>
                                  <span className="text-[10px] font-bold text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    View Page →
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('service-areas')}
            className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
              currentTab === 'service-areas'
                ? 'text-blue-700 bg-blue-50'
                : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
            }`}
          >
            Service Areas
          </button>

          <button
            onClick={() => handleNavClick('emergency-guide')}
            className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
              currentTab === 'emergency-guide'
                ? 'text-blue-700 bg-blue-50'
                : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
            }`}
          >
            Emergency Action Guide
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
              currentTab === 'about'
                ? 'text-blue-700 bg-blue-50'
                : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
              currentTab === 'contact'
                ? 'text-blue-700 bg-blue-50'
                : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Button: 24/7 Call Button (Cost Estimator Removed) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call 24/7: {COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="p-2 bg-blue-600 text-white rounded-lg"
            aria-label="Call Emergency Dispatch"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-blue-700 rounded-lg hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left px-3 py-2 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Home
          </button>

          {/* Mobile Services Accordion */}
          <div className="border border-slate-200 rounded-xl p-3 bg-slate-50/70 space-y-2">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              50 Restoration Services (McKinney TX)
            </div>
            {SERVICE_CATEGORIES.map((cat) => (
              <div key={cat.id} className="pt-1">
                <div className="text-[11px] font-bold text-slate-800 pb-1">{cat.name}</div>
                <div className="space-y-1 pl-2 border-l-2 border-blue-200">
                  {cat.services.map((sid) => {
                    const s = ALL_SERVICES.find((item) => item.id === sid);
                    if (!s) return null;
                    return (
                      <button
                        key={s.id}
                        onClick={() => handleNavClick('service-detail', s.id)}
                        className="w-full text-left text-xs py-1 text-slate-600 hover:text-blue-700 truncate block"
                      >
                        {s.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('service-areas')}
            className="w-full text-left px-3 py-2 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Service Areas
          </button>

          <button
            onClick={() => handleNavClick('emergency-guide')}
            className="w-full text-left px-3 py-2 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Emergency Action Guide
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left px-3 py-2 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-left px-3 py-2 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Contact
          </button>

          <div className="pt-2">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full py-3 bg-blue-600 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call 24/7 Dispatch: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
