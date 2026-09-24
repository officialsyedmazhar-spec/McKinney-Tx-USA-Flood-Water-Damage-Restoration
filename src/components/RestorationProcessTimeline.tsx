import React, { useState } from 'react';
import { 
  PhoneCall, 
  Search, 
  Droplets, 
  Wind, 
  ShieldCheck, 
  Hammer, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Wrench, 
  FileText, 
  AlertCircle,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/restorationData';

interface StepDetail {
  number: string;
  id: string;
  title: string;
  shortLabel: string;
  timeframe: string;
  summary: string;
  fullDesc: string;
  icon: React.ElementType;
  keyActions: string[];
  equipment: string[];
  homeownerTip: string;
  protocolNote: string;
}

const PROCESS_STEPS: StepDetail[] = [
  {
    number: "01",
    id: "dispatch",
    title: "24/7 Emergency Call & Quick Service Dispatch",
    shortLabel: "Emergency Dispatch",
    timeframe: "Immediate Dispatch",
    summary: "Immediate phone consultation, crew dispatch with truck-mounted units, and pre-arrival damage mitigation guidance.",
    fullDesc: "The moment water intrusion occurs, timing is critical. When you dial our McKinney hotline, you speak directly with a live restoration coordinator—not a call center. We confirm your address, assess immediate hazards (such as electrical or ceiling collapse risks), and dispatch an IICRC-certified rapid-response truck equipped with extraction machinery.",
    icon: PhoneCall,
    keyActions: [
      "Direct 24/7 coordinator response with zero phone queue",
      "Immediate safety triage (main shut-off, breaker panel checks)",
      "Truck-mounted crew mobilized within minutes of call",
      "Quick service dispatch across McKinney, TX (75069, 75070, 75071)"
    ],
    equipment: [
      "Truck-Mounted Direct Extraction Rigs",
      "Emergency Moisture Pin Meters",
      "PPE & Containment Barriers",
      "Emergency Power Generators"
    ],
    homeownerTip: "If safe to do so, immediately turn off the main water shut-off valve (usually in the front flower bed or garage in McKinney homes). Avoid entering standing water if electrical outlets are submerged.",
    protocolNote: "Take timestamped photos of standing water levels before moving anything. Our crew compiles comprehensive video logs and baseline thermal scans for documentation."
  },
  {
    number: "02",
    id: "inspection",
    title: "Thermal Infrared Inspection & Moisture Mapping",
    shortLabel: "Moisture Inspection",
    timeframe: "First 1–2 Hours",
    summary: "Non-invasive FLIR thermal cameras and penetrating RF meters locate hidden water behind drywall, subflooring, and ceilings.",
    fullDesc: "Water follows gravity and capillary action, migrating deep into wall cavities and under hardwood without visible surface stains. We utilize FLIR thermal imaging cameras to map temperature anomalies caused by evaporative cooling, pinpointing the exact perimeter of moisture migration before cutting drywall.",
    icon: Search,
    keyActions: [
      "Non-destructive thermal infrared perimeter scanning",
      "Wood, drywall & concrete moisture content baseline testing",
      "Classification of water category (Clean, Grey, or Black Water)",
      "Generation of initial IICRC S500 Drying Plan & Scope of Work"
    ],
    equipment: [
      "FLIR E6 Thermal Infrared Imaging Cameras",
      "Protimeter Surveymaster Dual-Depth Moisture Meters",
      "Delmhorst Penetrating Hammer Subfloor Probes",
      "Psychrometric Thermo-Hygrometers"
    ],
    homeownerTip: "Do not attempt to punch holes in sagging drywall ceilings without safety glasses and a bucket ready; water trapped above drywall can release suddenly.",
    protocolNote: "Empirical moisture percentage logs are recorded across wall studs, subfloors, and drywall to verify depth of intrusion scientifically."
  },
  {
    number: "03",
    id: "extraction",
    title: "Industrial High-Volume Water Extraction",
    shortLabel: "Water Extraction",
    timeframe: "First 2–4 Hours",
    summary: "Powerful truck-mounted vacuum extractors and submersible pumps remove thousands of gallons of standing water rapidly.",
    fullDesc: "Physical extraction of liquid water is 500 times faster and more cost-effective than evaporative drying. Our Phoenix Hydro-X extractors apply extreme vacuum pressure and compression wands to draw trapped water from carpets, pad underlayment, tile grout, and concrete subfloors.",
    icon: Droplets,
    keyActions: [
      "Submersible pump deployment for deep standing water",
      "Weighted compression wand extraction from carpet & padding",
      "Subfloor cavity vacuuming through baseboard weep holes",
      "Removal of unsalvageable saturated materials when necessary"
    ],
    equipment: [
      "Phoenix Hydro-X Industrial Compression Wands",
      "Truck-Mounted Vacuum Evacuation Systems",
      "Submersible Trash & Slurry Pumps",
      "Heavy-Duty Commercial Wet/Dry Extractors"
    ],
    homeownerTip: "Keep pets and children away from extraction hose pathways. Standard shop vacuums have tiny tanks and lack the CFM power to remove moisture from subflooring.",
    protocolNote: "Fast water extraction minimizes property loss by saving original hardwood floors, custom cabinets, and structural baseplates."
  },
  {
    number: "04",
    id: "drying",
    title: "Controlled Structural Drying & Dehumidification",
    shortLabel: "Structural Drying",
    timeframe: "Days 2 to 4 (Continuous)",
    summary: "LGR dehumidifiers and high-velocity axial air movers establish balanced psychrometric drying conditions.",
    fullDesc: "Once standing water is gone, moisture remains bound inside porous building materials (drywall, framing studs, subfloor OSB). We position commercial Low-Grain Refrigerant (LGR) dehumidifiers and centrifugal air movers to maintain an optimal vapor pressure differential, pulling moisture out of the materials and converting it to liquid condensate.",
    icon: Wind,
    keyActions: [
      "Strategic vortex placement of centrifugal air movers",
      "High-efficiency LGR dehumidifiers removing up to 150 pints/day each",
      "Targeted cavity wall injection systems to preserve sheetrock",
      "Twice-daily psychrometric monitoring and equipment adjustment"
    ],
    equipment: [
      "Dri-Eaz Revolution LGR Commercial Dehumidifiers",
      "Centrifugal High-Velocity Axial Air Movers (3,000+ CFM)",
      "Injectidry Directed Wall & Cabinet Drying Systems",
      "Floor Mat Hardwood Extraction Drying Systems"
    ],
    homeownerTip: "Never turn off or reposition drying equipment, even at night. Consistent 24/7 airflow prevents mold spores from germinating in wet wood fibers.",
    protocolNote: "Daily drying logs tracking relative humidity (RH), grains per pound (GPP), and moisture content (MC) are verified until dry standard is achieved."
  },
  {
    number: "05",
    id: "sanitization",
    title: "Antimicrobial Sanitization & Mold Prevention",
    shortLabel: "Sanitization & Mold",
    timeframe: "Day 3–4",
    summary: "Application of hospital-grade botanical antimicrobials and HEPA air scrubbing to eliminate pathogens and mold spores.",
    fullDesc: "Warm, damp environments in North Texas trigger rapid microbial amplification within 24 to 48 hours. We treat all affected structural surfaces with EPA-registered botanical antimicrobials and deploy hospital-grade HEPA air scrubbers to capture 99.97% of airborne spores, bacteria, and particulate matter.",
    icon: ShieldCheck,
    keyActions: [
      "Botanical EPA-registered antimicrobial spray & fogging",
      "Continuous HEPA 500 CFM negative air scrubbing",
      "Odor neutralization and organic barrier application",
      "Pre-clearance hygiene and microbial evaluation"
    ],
    equipment: [
      "DOP-Tested HEPA 500 Air Filtration Scrubbers",
      "ULV Ultra-Low Volume Cold Foggers",
      "EPA-Registered Botanical Antimicrobial Solutions",
      "Hydroxyl Generators for Molecular Odor Elimination"
    ],
    homeownerTip: "We prioritize natural, non-toxic botanical antimicrobials (derived from thyme oil) that are completely safe for children, pets, and individuals with respiratory sensitivities.",
    protocolNote: "Antimicrobial preventative application eliminates fungal colonization and guarantees hospital-grade sanitary clearance."
  },
  {
    number: "06",
    id: "rebuild",
    title: "Final Verification & Structural Reconstruction",
    shortLabel: "Final Rebuild",
    timeframe: "Days 4+",
    summary: "Dry standard sign-off, structural moisture certification, drywall patching, flooring restoration, and complete property handover.",
    fullDesc: "We don't leave you with torn-up walls and bare subfloors. Our licensed construction division completes drywall installation, seamless texture matching, painting, baseboard installation, and floor replacement. We ensure your home is returned to pristine, pre-loss condition with zero evidence of water intrusion.",
    icon: Hammer,
    keyActions: [
      "Final moisture meter certification meeting IICRC Dry Standards",
      "Seamless drywall replacement, taping, mudding, and texture match",
      "Hardwood, laminate, or carpet reinstallation and refinishing",
      "Final property handover with zero out-of-pocket hassle"
    ],
    equipment: [
      "Drywall Texture Matching Spray Rigs",
      "Hardwood Moisture Acclimation Meters",
      "Dustless Sanding Systems with HEPA Vacuums",
      "Digital Forensic Documentation Suite"
    ],
    homeownerTip: "Review paint swatches and flooring finishes with our project manager during the drying phase so reconstruction materials are staged for immediate install.",
    protocolNote: "We file the Certificate of Completion and final structural dry sign-off directly for your records so everything is closed out cleanly."
  }
];

export const RestorationProcessTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-800 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header - 2-Color Trust Styling */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Clock className="w-3.5 h-3.5 text-blue-700" />
            <span>IICRC S500 Standardized Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Step-by-Step Restoration Process in McKinney, TX
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From the moment your call connects to our 24/7 McKinney dispatch to the final dry standard certification and structural handover, here is exactly what to expect:
          </p>
        </div>

        {/* Step Navigation Bar (Interactive) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2 sm:p-3 shadow-2xs">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {PROCESS_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-xl text-left transition-all duration-200 flex flex-col justify-between group cursor-pointer relative ${
                    isActive
                      ? 'bg-blue-700 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`text-xs font-black tracking-wider px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {step.number}
                    </span>
                    <StepIcon
                      className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-700'
                      }`}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold leading-tight">
                      {step.shortLabel}
                    </div>
                    <div
                      className={`text-[10px] truncate mt-0.5 ${
                        isActive ? 'text-blue-100' : 'text-slate-400'
                      }`}
                    >
                      {step.timeframe}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed View Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Step Meta & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-blue-700 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    Step {activeStep.number} of 06
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-blue-700" />
                    <span>Timeframe: {activeStep.timeframe}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {activeStep.title}
                </h3>

                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {activeStep.fullDesc}
                </p>
              </div>

              {/* Key Technical Actions */}
              <div className="space-y-3 bg-white p-5 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-extrabold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  <span>Key Actions Performed During Step {activeStep.number}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.keyActions.map((action, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 shrink-0" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Homeowner Action Tip */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Important Homeowner Safety Tip
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeStep.homeownerTip}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Equipment Deployed, Insurance Note, & Navigation */}
            <div className="lg:col-span-5 space-y-6">
              {/* Equipment Deployed */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900">
                  <Wrench className="w-4 h-4 text-blue-700" />
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                    Commercial Equipment Deployed
                  </h4>
                </div>
                <div className="space-y-2">
                  {activeStep.equipment.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Master Restorer Protocol Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-2 border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400">
                  <ShieldCheck className="w-4 h-4" />
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                    Master Restorer Protocol
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeStep.protocolNote}
                </p>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={handlePrev}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 rounded-xl text-xs font-bold transition-colors border border-slate-200 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Step</span>
                </button>

                <div className="text-xs font-extrabold text-slate-400 px-2">
                  {activeStepIndex + 1} / {PROCESS_STEPS.length}
                </div>

                <button
                  onClick={handleNext}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors shadow-xs cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Action Strip: Immediate Dispatch (Cost Estimator Removed) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm text-white">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Crews Standing By in McKinney, TX</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Need immediate emergency water extraction or damage restoration?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Don't wait for mold to start growing. Our dispatch units arrive in under 60 minutes with industrial extractors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-extrabold shadow-sm transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-blue-100" />
              <span>Call 24/7: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
