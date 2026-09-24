import { ServiceItem, FaqItem, ServiceAreaItem } from '../types';
import { ALL_SERVICES, SERVICE_CATEGORIES } from './allServicesData';

export { ALL_SERVICES, SERVICE_CATEGORIES };

export const COMPANY_INFO = {
  name: "McKinney Flood & Water Damage Restoration",
  shortName: "McKinney Flood Restoration",
  phone: "+18447453029",
  phoneClean: "+18447453029",
  email: "dispatch@mckinneyfloodrestoration.com",
  emergencyEmail: "emergency@mckinneyfloodrestoration.com",
  address: "201 W Virginia St, McKinney, TX 75069",
  city: "McKinney",
  state: "TX",
  zip: "75069",
  zipCodes: ["75069", "75070", "75071"],
  county: "Collin County",
  hours: "24 Hours / 7 Days a Week / 365 Days a Year",
  responseTime: "Quick Service Dispatch",
  certifications: [
    "IICRC Certified Master Water Restorer",
    "EPA Lead-Safe Certified Firm",
    "Texas Licensed Mold Remediation Contractor",
    "RIA (Restoration Industry Association) Member"
  ],
  insuranceCarriers: [
    "State Farm",
    "Allstate",
    "USAA",
    "Travelers",
    "Liberty Mutual",
    "Farmers Insurance",
    "Chubb",
    "Nationwide"
  ]
};

export const SERVICES: ServiceItem[] = ALL_SERVICES;
const LEGACY_SERVICES: ServiceItem[] = [
  {
    id: "water-damage-restoration",
    title: "Emergency Water Damage Restoration",
    shortDesc: "Rapid structural extraction, moisture thermal mapping, and complete structural restoration in McKinney, TX.",
    fullDesc: "Water damage can compromise your home's structural integrity within hours. Our certified McKinney water damage restoration technicians arrive with industrial truck-mounted extractors, commercial air movers, and infrared moisture meters to identify hidden pockets of water behind drywall, subfloors, and ceilings before permanent rot or mold takes hold.",
    iconName: "Droplets",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    beforeAfterImages: {
      before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    features: [
      "24/7 Quick Emergency Service in McKinney, TX",
      "FLIR Thermal Infrared Moisture Detection & Mapping",
      "100% Hassle-Free Process – Complete restoration assistance",
      "Wood Floor & Subfloor Deep Cavity Drying Systems",
      "Antimicrobial Sanitization & Odor Neutralization"
    ],
    equipment: [
      "Phoenix Hydro-X Industrial Truck-Mounted Water Extractors",
      "Drieaz LGR (Low-Grain Refrigerant) Commercial Dehumidifiers",
      "Centrifugal High-Velocity Axial Air Movers",
      "FLIR E6 Thermal Imaging Moisture Cameras",
      "Protimeter Moisture Meters & Penetrating Probes"
    ],
    process: [
      {
        step: 1,
        title: "Immediate Arrival & Safety Assessment",
        description: "We secure electrical circuits, stop incoming water, and inspect structural stability with thermal cameras."
      },
      {
        step: 2,
        title: "High-Volume Water Extraction",
        description: "Our heavy-duty submersible pumps and truck extractors remove thousands of gallons of standing water in minutes."
      },
      {
        step: 3,
        title: "Scientific Structural Drying",
        description: "We deploy psychrometric drying configurations with commercial dehumidifiers and high-velocity air movers."
      },
      {
        step: 4,
        title: "Antimicrobial Treatment & Full Rebuild",
        description: "Surfaces are disinfected with hospital-grade botanicals, followed by complete dry-wall and flooring reconstruction."
      }
    ],
    urgencyWarning: "Water damage spreads laterally and vertically through sheetrock within 2 hours. Waiting 24 hours increases restoration costs by up to 300% and invites toxic black mold."
  },
  {
    id: "flood-water-extraction",
    title: "Flood Water Extraction & Storm Cleanup",
    shortDesc: "High-capacity pump-out and emergency extraction for flash floods, storm surges, and overflowing creeks in Collin County.",
    fullDesc: "When severe North Texas storms and flash flooding overwhelm McKinney drainage or rivers, floodwater enters homes carrying silt, chemicals, and bio-contaminants. Our emergency flood extraction crews utilize commercial trash pumps, weighted carpet extractors, and containment barriers to remove outdoor floodwaters swiftly and safely.",
    iconName: "Waves",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    features: [
      "High-Volume Submersible & Gas-Powered Trash Pumps",
      "Contaminated Floodwater (Category 3) Decontamination",
      "Complete Silt, Mud & Debris Removal",
      "Crawlspace & Basement Flood Pump-Out",
      "Complete Anti-Fungal Disinfection"
    ],
    equipment: [
      "Gas-Powered Submersible Trash Pumps (300 GPM)",
      "Ride-on Extreme Extractors for Commercial Floods",
      "HEPA Air Scrubbers with Activated Carbon Filters",
      "Industrial EPA-Registered Disinfectants"
    ],
    process: [
      {
        step: 1,
        title: "Flood Containment & Hazard Check",
        description: "Cordoning off contaminated zones and isolating electrical panels to ensure occupant safety."
      },
      {
        step: 2,
        title: "Mass Extraction of Silt & Water",
        description: "Pumping out muddy floodwater and vacuuming fine sediment from concrete, tile, and carpets."
      },
      {
        step: 3,
        title: "Demucking & Porous Material Removal",
        description: "Carefully removing flood-soaked insulation and drywall up to 2 feet above the water line (flood cut)."
      },
      {
        step: 4,
        title: "Decontamination & Desiccant Dehumidification",
        description: "Sterilizing framing with antimicrobials and running desiccant drying units until moisture meters read zero."
      }
    ],
    urgencyWarning: "Outdoor floodwater contains raw sewage, agricultural runoff, and bacteria. Never enter floodwater without protective gear."
  },
  {
    id: "mold-remediation",
    title: "Certified Mold Remediation & Inspection",
    shortDesc: "State-certified mold removal, HEPA containment negative air, and clearance testing in McKinney, TX.",
    fullDesc: "In McKinney's warm, humid climate, mold colonies can establish within 24 to 48 hours following water intrusion. Our Texas-licensed mold remediation specialists isolate infested areas under negative air pressure, remove damaged drywall, and scrub indoor air with true HEPA filtration to safeguard your family's health.",
    iconName: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Licensed Texas Mold Remediation Protocol Compliant",
      "Plastic Containment Barriers & Negative Air Machines",
      "HEPA Air Scrubbing to Capture 99.97% of Airborne Spores",
      "Third-Party Independent Clearance Testing",
      "Non-Toxic Antimicrobial Fogging"
    ],
    equipment: [
      "DefendAir HEPA 500 Air Scrubbers",
      "Commercial Cold-Mist Foggers",
      "Thermal Hygrometers & Particle Counters",
      "Negative Air Pressure Manometers"
    ],
    process: [
      {
        step: 1,
        title: "Comprehensive Mold & Moisture Inspection",
        description: "Locating the moisture intrusion source and mapping the full scope of active fungal colonies."
      },
      {
        step: 2,
        title: "Containment Chamber Setup",
        description: "Sealing doorways and HVAC vents with 6-mil polyethylene plastic to prevent spore migration."
      },
      {
        step: 3,
        title: "HEPA Vacuuming & Remediation",
        description: "Physical removal of colonized sheetrock, wire brushing framing, and applying micro-encapsulants."
      },
      {
        step: 4,
        title: "Post-Remediation Verification & Clearance",
        description: "Independent air sampling certifies your home meets rigorous Texas indoor air quality standards."
      }
    ],
    urgencyWarning: "Disturbing mold without negative pressure containment can spread millions of mycotoxin spores into your HVAC system and living areas."
  },
  {
    id: "sewage-backup-cleanup",
    title: "Sewage Backup & Biohazard Sanitation",
    shortDesc: "Category 3 blackwater extraction, emergency toilet overflow cleanup, and hospital-grade sanitization.",
    fullDesc: "Sewage backups represent an immediate biohazard emergency containing dangerous viruses, E. coli, parasites, and chemical toxins. McKinney Flood Restoration provides rapid 24/7 biohazard containment, safe waste extraction, and complete antimicrobial sanitization to restore sanitary conditions safely.",
    iconName: "Biohazard",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Hazardous Category 3 Blackwater Management",
      "Emergency Main Line & Toilet Overflow Pump-Out",
      "Complete Biohazard Disposal in Compliance with EPA/OSHA",
      "Thermal Fogging & Hydroxyl Odor Elimination",
      "Full Replacement of Contaminated Porous Flooring"
    ],
    equipment: [
      "Heavy-duty Bio-Waste Extraction Equipment",
      "Hospital-Grade Quaternary Disinfectants",
      "Hydroxyl Generators & Ozone Deodorizers",
      "Full OSHA Level C PPE Suits & Respirators"
    ],
    process: [
      {
        step: 1,
        title: "Immediate Biohazard Isolation",
        description: "Sealing off contaminated zones to protect non-affected areas and prevent airborne pathogens."
      },
      {
        step: 2,
        title: "Blackwater & Solid Waste Removal",
        description: "Pumping raw sewage into sealed transport tanks following strict environmental safety standards."
      },
      {
        step: 3,
        title: "Deep Sanitization & Disinfection",
        description: "Washing hard surfaces with broad-spectrum virucidal and bactericidal solutions."
      },
      {
        step: 4,
        title: "Molecular Odor Elimination",
        description: "Hydroxyl treatment neutralizes embedded hydrogen sulfide odors at the molecular level."
      }
    ],
    urgencyWarning: "Never touch or breathe sewage backup fumes. Call our emergency dispatch immediately for professional decontamination."
  },
  {
    id: "structural-drying",
    title: "Structural Drying & Thermal Moisture Detection",
    shortDesc: "In-place hardwood drying, subfloor cavity injection, and commercial dehumidification.",
    fullDesc: "Water often seeps beneath tile, behind baseboards, and deep into building studs where standard fans cannot reach. Using psychrometric science and FLIR thermal imaging, we dry structural building components in place, saving expensive hardwood floors, cabinetry, and structural load-bearing timbers.",
    iconName: "ThermometerSnowflake",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Rescue Mat Systems for Solid Hardwood Floors",
      "Wall Cavity Injected Air Drying (Minimal Sheetrock Cuts)",
      "Daily Psychrometric Moisture Log & Structural Documentation",
      "Industrial Low-Grain Refrigerant (LGR) Dehumidifiers",
      "Thermal Imaging Non-Invasive Diagnostics"
    ],
    equipment: [
      "Injectidry System for Cabinets and Wall Cavities",
      "Drying Mat Hardwood Vacuum Extractors",
      "FLIR Thermal Infrared Moisture Imagers",
      "Digital Psychrometers measuring Grains Per Pound (GPP)"
    ],
    process: [
      {
        step: 1,
        title: "Non-Invasive Moisture Mapping",
        description: "Thermal cameras locate hidden moisture boundaries behind walls, under tiles, and inside ceilings."
      },
      {
        step: 2,
        title: "Targeted Airflow Engineering",
        description: "Positioning high-static air movers to create the exact boundary-layer evaporation vortex required."
      },
      {
        step: 3,
        title: "Continuous Dehumidification",
        description: "Drawing moisture from the air to maintain ideal vapor pressure differentials that pull water out of studs."
      },
      {
        step: 4,
        title: "Daily Verification & Log Sign-Off",
        description: "Daily probe readings verify structures reach dry standards before equipment retrieval."
      }
    ],
    urgencyWarning: "Trapped moisture behind sheetrock creates dry rot that quietly destroys structural wooden framing over weeks."
  },
  {
    id: "commercial-restoration",
    title: "Commercial Water Damage & Large Loss",
    shortDesc: "Emergency disaster response for McKinney businesses, warehouses, medical clinics, and retail complexes.",
    fullDesc: "Every hour your business is closed translates to lost revenue and customer interruption. Our commercial disaster restoration unit delivers industrial-scale water extraction and 24/7 round-the-clock drying to minimize business downtime in McKinney and North Texas.",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Priority Commercial Dispatch & Dedicated Project Manager",
      "Large-Loss Desiccant Mobile Drying Trailers",
      "Document, Record & Server Room Drying",
      "Off-Hours & Weekend Work to Maintain Operations",
      "Commercial Large-Loss Direct Coordination"
    ],
    equipment: [
      "Large Desiccant Dehumidification Mobile Generators (5000+ CFM)",
      "Temporary Power Generation Units",
      "Commercial Ultrasonic Content Cleaning Systems",
      "Containment Zippers & Negative Air Scrubbers"
    ],
    process: [
      {
        step: 1,
        title: "Business Continuity Triage",
        description: "We identify critical operational areas to extract and dry first so your staff can resume business."
      },
      {
        step: 2,
        title: "Mass Scale Water Removal",
        description: "Simultaneous multi-level extraction across entire office floors, warehouses, or multi-family units."
      },
      {
        step: 3,
        title: "Desiccant Deep Structural Drying",
        description: "Pumping dry, heated air into structural cavities to accelerate drying timelines by over 50%."
      },
      {
        step: 4,
        title: "Final Clearance & Handover",
        description: "Complete hygiene clearance certification and documentation for your commercial underwriter."
      }
    ],
    urgencyWarning: "Commercial water losses risk substantial business interruption claims. Immediate response protects inventories and customer trust."
  }
];

export const SERVICE_AREAS: ServiceAreaItem[] = [
  {
    name: "Historic Downtown & Central McKinney, TX",
    type: "Primary McKinney Hub",
    zipCodes: ["75069"],
    responseTime: "Quick Service Dispatch",
    description: "Our local McKinney base. Fast dispatch to historic homes, downtown businesses, Virginia Street, and Kentucky Street corridors."
  },
  {
    name: "Stonebridge Ranch (West McKinney, TX)",
    type: "Primary McKinney Hub",
    zipCodes: ["75070"],
    responseTime: "Quick Service Dispatch",
    description: "Comprehensive emergency water extraction, flood cleanup, and thermal drying across all Stonebridge Ranch villages and residences."
  },
  {
    name: "Craig Ranch (South McKinney, TX)",
    type: "Primary McKinney Hub",
    zipCodes: ["75070"],
    responseTime: "Quick Service Dispatch",
    description: "Fast local response for burst plumbing pipes, appliance leaks, and flood damage along Custer Rd, Alma Rd, and Hwy 121."
  },
  {
    name: "Tucker Hill & Virginia Parkway, TX",
    type: "Primary McKinney Hub",
    zipCodes: ["75071"],
    responseTime: "Quick Service Dispatch",
    description: "Dedicated water damage restoration teams serving Tucker Hill, Virginia Parkway corridor, and western McKinney communities."
  },
  {
    name: "North McKinney & US-380 Corridor, TX",
    type: "Primary McKinney Hub",
    zipCodes: ["75071"],
    responseTime: "Quick Service Dispatch",
    description: "High-capacity water extraction and commercial drying units stationed along US-380, Hardin Blvd, and northern residential developments."
  },
  {
    name: "East McKinney & Airport Corridor, TX",
    type: "Primary McKinney Hub",
    zipCodes: ["75069"],
    responseTime: "Quick Service Dispatch",
    description: "Full residential and light commercial flood extraction serving East McKinney, Industrial Blvd, and surrounding properties."
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "emergency",
    question: "How fast can your team arrive at my McKinney home?",
    answer: "Our certified technicians are based locally right here in McKinney, TX. We provide quick emergency service across all McKinney zip codes (75069, 75070, 75071). When you call our 24/7 hotline, our local crew is immediately mobilized with truck-mounted vacuum extractors and moisture detection equipment."
  },
  {
    id: "faq-2",
    category: "process",
    question: "How is the water damage restoration process handled?",
    answer: "Sudden and accidental water damage (such as burst pipes, appliance leaks, supply line breaks, and sudden overflows) is handled through our 100% hassle-free process. We provide line-item estimating, scientific moisture mapping, and comprehensive documentation so you never have to worry about out-of-pocket stress."
  },
  {
    id: "faq-3",
    category: "mold",
    question: "How quickly does mold begin growing after water damage?",
    answer: "In Texas, toxic mold spores can begin colonizing wet drywall, carpet padding, and wood within 24 to 48 hours. That is why immediate water extraction and structural drying are critical to prevent health hazards and avoid secondary mold remediation expenses."
  },
  {
    id: "faq-4",
    category: "process",
    question: "How long does the structural drying process take?",
    answer: "On average, thorough structural drying takes between 3 to 5 days depending on the materials affected (sheetrock dries faster than solid hardwood or dense concrete). Our technicians visit daily to take psychrometric readings and adjust air movers until the structure meets industry standard moisture equilibrium."
  },
  {
    id: "faq-5",
    category: "emergency",
    question: "What should I do immediately while waiting for your technicians to arrive?",
    answer: "1. Turn off your main water shutoff valve immediately. 2. If it is safe to do so without touching water, turn off circuit breakers to the affected rooms. 3. Avoid walking on wet carpets or walking through standing water. 4. Remove fragile items, electronics, and documents from the floor. 5. Do NOT use a household vacuum to pick up water."
  },
  {
    id: "faq-6",
    category: "process",
    question: "Do I have to wait before you start extracting water?",
    answer: "No! Immediate extraction is critical to protect your property structure. Waiting even a few hours allows moisture to wick deep into drywall, subfloors, and framing, resulting in dangerous secondary mold and wood rot. We document every square inch with infrared thermal photos and digital moisture logs before and during extraction."
  }
];

export const EMERGENCY_STEPS = [
  {
    number: "01",
    title: "Shut Off Water Supply",
    desc: "Locate your main water cutoff valve (usually in the front flower bed or garage) and rotate 90 degrees clockwise to stop incoming water pressure."
  },
  {
    number: "02",
    title: "Cut Electrical Power to Affected Areas",
    desc: "If you can safely access the breaker panel without standing in water, switch off electrical circuits connected to flooded rooms to prevent shock hazard."
  },
  {
    number: "03",
    title: "Protect Valuables & Take Initial Photos",
    desc: "Elevate wooden furniture off wet carpeting with aluminum foil or blocks, move important documents, and snap quick photos of the affected areas."
  },
  {
    number: "04",
    title: "Call Our 24/7 McKinney Dispatch",
    desc: "Call +18447453029 immediately. Our on-call crew will be dispatched with truck-mounted extractors to provide quick emergency service at your McKinney property."
  }
];
