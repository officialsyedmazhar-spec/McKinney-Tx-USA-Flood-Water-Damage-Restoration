import { ServiceItem } from '../types';

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: string[]; // Service IDs
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "burst-pipe-emergencies",
    name: "Burst & Pipe Emergencies",
    description: "Rapid mitigation for broken plumbing, frozen lines, and high-pressure supply ruptures.",
    services: [
      "burst-pipe-water-damage-restoration-mckinney-tx",
      "broken-pipe-water-damage-cleanup-mckinney-tx",
      "water-pipe-break-cleanup-mckinney-tx",
      "emergency-burst-pipe-response-mckinney-tx"
    ]
  },
  {
    id: "water-extraction-removal",
    name: "Water Extraction & Removal",
    description: "High-capacity submersible pumping, standing water evacuation, and deep extraction.",
    services: [
      "emergency-water-extraction-mckinney-tx",
      "standing-water-removal-mckinney-tx",
      "water-extraction-mckinney-tx",
      "water-removal-mckinney-tx",
      "carpet-water-extraction-mckinney-tx",
      "floor-drying-mckinney-tx",
      "subfloor-drying-mckinney-tx"
    ]
  },
  {
    id: "drying-moisture-detection",
    name: "Drying & Moisture Detection",
    description: "FLIR thermal scanning, psychrometric moisture mapping, and LGR dehumidification.",
    services: [
      "structural-drying-mckinney-tx",
      "wall-drying-mckinney-tx",
      "ceiling-drying-mckinney-tx",
      "moisture-detection-mckinney-tx",
      "moisture-mapping-mckinney-tx",
      "thermal-imaging-inspection-mckinney-tx",
      "water-damage-assessment-mckinney-tx",
      "hidden-water-damage-detection-mckinney-tx",
      "water-migration-assessment-mckinney-tx",
      "dehumidification-mckinney-tx",
      "air-movement-drying-mckinney-tx",
      "post-drying-moisture-verification-mckinney-tx"
    ]
  },
  {
    id: "flooring-walls-ceilings",
    name: "Flooring, Walls & Ceilings",
    description: "Specialized hardwood, laminate, drywall, and structural overhead restoration.",
    services: [
      "hardwood-floor-water-damage-cleanup-mckinney-tx",
      "laminate-flooring-water-damage-cleanup-mckinney-tx",
      "tile-grout-water-damage-cleanup-mckinney-tx",
      "drywall-water-damage-assessment-mckinney-tx",
      "drywall-removal-replacement-mckinney-tx",
      "ceiling-water-damage-restoration-mckinney-tx",
      "wall-water-damage-restoration-mckinney-tx",
      "structural-material-restoration-mckinney-tx",
      "water-damaged-flooring-restoration-mckinney-tx",
      "water-damaged-wall-restoration-mckinney-tx",
      "water-damaged-ceiling-restoration-mckinney-tx"
    ]
  },
  {
    id: "sanitization-mold-prevention",
    name: "Sanitization & Mold Prevention",
    description: "EPA-registered botanical antimicrobials, sewage remediation, and pathogen disinfection.",
    services: [
      "sanitization-mckinney-tx",
      "disinfection-of-affected-areas-mckinney-tx",
      "odor-control-mckinney-tx",
      "mold-prevention-after-water-damage-mckinney-tx",
      "sewage-contaminated-water-cleanup-mckinney-tx",
      "contaminated-water-cleanup-mckinney-tx",
      "affected-area-containment-mckinney-tx"
    ]
  },
  {
    id: "contents-documentation-rebuild",
    name: "Contents, Insurance & Rebuild",
    description: "Pack-out protection, Xactimate® insurance reports, and complete turn-key reconstruction.",
    services: [
      "contents-protection-mckinney-tx",
      "furniture-water-damage-protection-mckinney-tx",
      "personal-belongings-drying-mckinney-tx",
      "water-damaged-material-removal-mckinney-tx",
      "debris-removal-mckinney-tx",
      "damage-documentation-mckinney-tx",
      "restoration-documentation-for-insurance-mckinney-tx",
      "water-damage-repair-coordination-mckinney-tx",
      "reconstruction-after-water-damage-mckinney-tx"
    ]
  }
];

export const ALL_SERVICES: ServiceItem[] = [
  // 1. Burst & Pipe Emergencies
  {
    id: "burst-pipe-water-damage-restoration-mckinney-tx",
    title: "Burst Pipe Water Damage Restoration McKinney TX",
    shortDesc: "24/7 immediate response for high-pressure water pipe ruptures, winter freeze bursts, and plumbing failures across McKinney, TX.",
    fullDesc: "A burst plumbing pipe can discharge over 400 to 1,000 gallons of pressurized water into your McKinney home in less than an hour. Our emergency crews provide quick service across McKinney, TX with truck-mounted vacuum extraction units to stop continuous flooding, secure water mains, and isolate saturated building materials.",
    iconName: "Droplets",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: ["Quick Service in McKinney, TX", "Direct pipe isolation & plumbing stabilization", "Truck-mounted deep vacuum extraction", "Direct insurance billing with zero out-of-pocket on approved claims"],
    equipment: ["Truck-Mounted Extractor Rigs", "FLIR Thermal Cameras", "Submersible Pumps", "LGR Dehumidifiers"],
    process: [
      { step: 1, title: "Emergency Water Main Triage", description: "Immediate shut-off verification and electrical hazard safety inspection." },
      { step: 2, title: "High-Volume Extraction", description: "Evacuation of standing water before it wicks up drywall and into floor cavities." },
      { step: 3, title: "Thermal Cavity Mapping", description: "Locating trapped water behind walls, under cabinets, and beneath baseboards." },
      { step: 4, title: "Structural Dehumidification", description: "Industrial air movers and commercial dehumidifiers to reach IICRC dry standard." }
    ],
    urgencyWarning: "Water under high pressure wicks rapidly up drywall. Immediate extraction and quick emergency service prevent black mold growth."
  },
  {
    id: "broken-pipe-water-damage-cleanup-mckinney-tx",
    title: "Broken Pipe Water Damage Cleanup McKinney TX",
    shortDesc: "Complete cleanup and remediation for cracked, corroded, or disconnected water supply lines in McKinney homes and businesses.",
    fullDesc: "Hidden pinhole leaks and cracked PVC or copper pipes often saturate wall cavities and floorboards before being discovered. In McKinney's soil conditions, foundation shifts can crack plumbing lines. We systematically extract water, dry framing, and prevent long-term dry rot.",
    iconName: "Droplets",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    features: ["Rapid plumbing failure mitigation", "Acoustic and thermal leak detection", "Drywall and subfloor moisture evacuation", "Complete structural sanitization"],
    equipment: ["Thermal Imaging Cameras", "Acoustic Leak Detectors", "High-Flow Axial Fans", "Antimicrobial Sprayers"],
    process: [
      { step: 1, title: "Detection & Containment", description: "Locating the exact rupture point and sealing off affected living zones." },
      { step: 2, title: "Water Evacuation", description: "Pumping out pooled water from wall bottoms and subflooring." },
      { step: 3, title: "Controlled Material Opening", description: "Careful baseboard removal to vent wet wall cavities without excess damage." },
      { step: 4, title: "Full Drying Certification", description: "Moisture verification ensuring 100% dry compliance." }
    ],
    urgencyWarning: "Moisture trapped in enclosed wall cavities sparks fungal colonies in 24 to 48 hours."
  },
  {
    id: "water-pipe-break-cleanup-mckinney-tx",
    title: "Water Pipe Break Cleanup McKinney TX",
    shortDesc: "Heavy-duty extraction, sanitization, and restoration after sudden pressurized water pipe breaks in Collin County.",
    fullDesc: "Sudden pipe breaks cause catastrophic water damage across multiple floors. Our McKinney certified restoration technicians extract pooling water, remove ruined insulation, and treat wet studs with botanical antimicrobials.",
    iconName: "Waves",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    features: ["Multi-story water mitigation", "Ceiling collapse hazard prevention", "Industrial moisture extraction", "Insurance photo documentation"],
    equipment: ["Multi-Stage Vacuum Extractors", "Moisture Probes", "HEPA Air Scrubbers", "Industrial Dehumidifiers"],
    process: [
      { step: 1, title: "Rapid Multi-Floor Containment", description: "Preventing upper-floor runoff from collapsing downstairs drywall ceilings." },
      { step: 2, title: "Deep Vacuum Extraction", description: "Extracting saturated carpeting, pad, and wood flooring." },
      { step: 3, title: "In-Place Drying Setup", description: "Using injected wall cavity drying systems to save sheetrock when possible." },
      { step: 4, title: "Sanitization & Deodorization", description: "Eliminating damp musty odors with EPA-registered botanical antimicrobials." }
    ],
    urgencyWarning: "Water flowing through second-story subfloors threatens ceiling collapse downstairs within hours."
  },
  {
    id: "emergency-burst-pipe-response-mckinney-tx",
    title: "Emergency Burst Pipe Response McKinney TX",
    shortDesc: "24/7/365 rapid response dispatch team mobilized in under 15 minutes for burst pipe emergencies in McKinney, TX.",
    fullDesc: "When a pipe bursts at 2 AM on a freezing night or over a holiday weekend, our on-call McKinney dispatch team responds immediately. Fully stocked trucks arrive with power generators, pumps, and drying fleets.",
    iconName: "Droplets",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    features: ["Live human dispatch 24/7", "Average 45-minute arrival time", "Truck-mounted industrial pumps", "Direct billing to homeowner insurance"],
    equipment: ["Emergency Response Fleet", "High-Volume Trash Pumps", "LGR Dehumidifiers", "Thermal Moisture Scanners"],
    process: [
      { step: 1, title: "Live Call Triage", description: "Guiding you through shut-off procedures while our McKinney truck is en route." },
      { step: 2, title: "Immediate Site Arrival", description: "Deploying high-volume hoses and submersible pumps within minutes." },
      { step: 3, title: "Stabilization", description: "Stopping lateral water migration across adjoining rooms and hallways." },
      { step: 4, title: "Psychrometric Drying Plan", description: "Setting up commercial drying chambers to protect structural studs." }
    ],
    urgencyWarning: "Delayed response converts clean Category 1 water into hazardous Category 2 gray water in 48 hours."
  },

  // 2. Water Extraction & Removal
  {
    id: "emergency-water-extraction-mckinney-tx",
    title: "Emergency Water Extraction McKinney TX",
    shortDesc: "Rapid extraction of hundreds of gallons of standing water from flooded rooms, hallways, and basements in McKinney, TX.",
    fullDesc: "Extracting liquid water is 500 times faster than waiting for evaporation. Our truck-mounted extraction units draw high-volume suction to pull moisture from deep within carpets, padding, and porous concrete slabs.",
    iconName: "Waves",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Industrial vacuum suction", "Deep pad extraction tools", "Crawlspace & basement water removal", "Zero structural residue"],
    equipment: ["Truck-Mounted Vacuum Systems", "Hydro-X Extraction Rovers", "Submersible Pumps", "Sump Evacuation Lines"],
    process: [
      { step: 1, title: "Standing Water Removal", description: "High-flow suction to clear visible standing water pools." },
      { step: 2, title: "Deep Pad Extraction", description: "Weighted rover passes to compress carpet pads and pull deep water." },
      { step: 3, title: "Subfloor Assessment", description: "Non-invasive moisture testing of wood and concrete foundation." },
      { step: 4, title: "Antimicrobial Pre-Treatment", description: "Preventing microbial growth before starting air movers." }
    ],
    urgencyWarning: "Unextracted standing water weakens load-bearing joists and permanently buckles flooring within 24 hours."
  },
  {
    id: "standing-water-removal-mckinney-tx",
    title: "Standing Water Removal McKinney TX",
    shortDesc: "Heavy submersible pumping and vacuum removal for standing water caused by appliance leaks, storms, and sewer overflows.",
    fullDesc: "Whether from an overflowing washing machine, failed water heater, or heavy McKinney storm runoff, standing water requires immediate mechanical evacuation. We quickly drain pooled water and protect nearby rooms.",
    iconName: "Waves",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: ["Submersible trash pumps", "High-efficiency water evacuation", "Basement and ground floor drying", "Foundation moisture inspection"],
    equipment: ["Commercial Sump Pumps", "Industrial Wet Vacuums", "Moisture Sensors", "Disinfectant Sprayers"],
    process: [
      { step: 1, title: "Site Assessment", description: "Identifying electrical hazards and establishing containment barriers." },
      { step: 2, title: "Mass Evacuation", description: "Deploying high-flow discharge lines to remove thousands of gallons." },
      { step: 3, title: "Silt & Debris Wash", description: "Rinsing and extracting residual sediment left behind by storm waters." },
      { step: 4, title: "Moisture Verification", description: "Checking baseboards and door jambs for wicked moisture." }
    ],
    urgencyWarning: "Standing water creates toxic indoor humidity, swelling doors and cabinet millwork throughout the home."
  },
  {
    id: "water-extraction-mckinney-tx",
    title: "Water Extraction Services McKinney TX",
    shortDesc: "Professional residential and commercial water extraction services adhering to IICRC S500 standard in McKinney, TX.",
    fullDesc: "Comprehensive extraction for all types of water loss. We utilize weighted extraction mats, vacuum tools, and moisture sensors to ensure every drop of free water is eliminated from your property.",
    iconName: "Droplets",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    features: ["IICRC certified technicians", "Residential & commercial capacity", "Thermal moisture inspection", "Full dry guarantee"],
    equipment: ["Extraction Rovers", "Floor Squeegee Tools", "Commercial Wet-Vac Rigs", "Digital Moisture Meters"],
    process: [
      { step: 1, title: "Inspection", description: "Mapping water penetration through carpet, tile, and hardwood." },
      { step: 2, title: "Extraction", description: "Continuous vacuum extraction to remove 95%+ of bulk water." },
      { step: 3, title: "Sanitization", description: "Applying botanical antimicrobials to eliminate bacteria." },
      { step: 4, title: "Drying Setup", description: "Positioning LGR dehumidifiers to pull residual moisture." }
    ],
    urgencyWarning: "Without professional extraction, water remains trapped underneath flooring for weeks, causing toxic mold."
  },
  {
    id: "water-removal-mckinney-tx",
    title: "Water Removal McKinney TX",
    shortDesc: "Fast, reliable water removal for McKinney residential and commercial properties facing sudden flood conditions.",
    fullDesc: "Our water removal services cover everything from single-room bathroom overflows to multi-story flood events. We prioritize salvageable building elements and work directly with all major insurance providers.",
    iconName: "Waves",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    features: ["24/7 on-call availability", "Complete water disposal", "Furniture elevation & protection", "Insurance claim assistance"],
    equipment: ["High-Volume Extraction Units", "Axial Blowers", "LGR Dehumidifiers", "Thermal Scanners"],
    process: [
      { step: 1, title: "Quick Service Dispatch", description: "Prompt on-site arrival with full industrial extraction gear." },
      { step: 2, title: "Water Evacuation", description: "Rapid pumping and vacuuming of all free-standing water." },
      { step: 3, title: "Content Rescue", description: "Elevating furniture on aluminum foil blocks to stop staining." },
      { step: 4, title: "Airflow Installation", description: "Creating balanced vortex airflow across affected surfaces." }
    ],
    urgencyWarning: "Standing water ruins carpet backing and permanently separates adhesives in vinyl and tile."
  },
  {
    id: "carpet-water-extraction-mckinney-tx",
    title: "Carpet Water Extraction McKinney TX",
    shortDesc: "Specialized deep vacuum carpet and padding water extraction to save carpeting and prevent mildew in McKinney homes.",
    fullDesc: "Soaked carpet and carpet padding act like a massive sponge holding hundreds of gallons of water. Using our weighted Hydro-X extraction rovers, our technicians apply 150 lbs of downward pressure to compress and extract water without tearing carpet seams.",
    iconName: "Droplets",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    features: ["Weighted compression extraction", "Carpet salvage optimization", "Under-pad floating drying techniques", "Antimicrobial odor treatment"],
    equipment: ["Hydro-X Weighted Rover", "Carpet Clamps", "Direct Drive Air Movers", "Moisture Probes"],
    process: [
      { step: 1, title: "Water Extraction", description: "Multi-pass weighted extraction removing 90%+ of pad water." },
      { step: 2, title: "Pad Inspection", description: "Determining if pad can be dried in place or requires sanitary replacement." },
      { step: 3, title: "Floating the Carpet", description: "Directing high-velocity air under the carpet to dry backing and slab." },
      { step: 4, title: "Re-Stretching & Grooming", description: "Tensioning carpet back onto tack strips once dry standard is reached." }
    ],
    urgencyWarning: "Wet carpet pad develops sour mildew odors within 24 hours if not extracted with industrial equipment."
  },
  {
    id: "floor-drying-mckinney-tx",
    title: "Floor Drying McKinney TX",
    shortDesc: "Commercial floor drying systems for tile, concrete, vinyl plank, and luxury flooring throughout McKinney, TX.",
    fullDesc: "Different flooring materials require precise drying protocols. Concrete slabs trap vapor, tile grout absorbs dirty water, and vinyl planks trap moisture against the foundation. We employ targeted drying fans and dehumidifiers.",
    iconName: "Waves",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Subfloor moisture balance", "Targeted floor air movers", "Non-destructive drying", "Zero-buckle guarantee"],
    equipment: ["Floor Drying Injectors", "Axial Air Movers", "LGR Dehumidification Fleet", "Laser Temp Probes"],
    process: [
      { step: 1, title: "Surface Extraction", description: "Removing surface water film from hard surfaces." },
      { step: 2, title: "Boundary Mapping", description: "Checking how far water traveled under flooring edges." },
      { step: 3, title: "Laminar Airflow", description: "Directing high-speed warm dry air across floor level." },
      { step: 4, title: "Moisture Equilibrium", description: "Testing daily until floor readings match unaffected dry standards." }
    ],
    urgencyWarning: "Trapped moisture under vinyl plank loosens glue and produces musty odor pockets."
  },
  {
    id: "subfloor-drying-mckinney-tx",
    title: "Subfloor Drying McKinney TX",
    shortDesc: "Advanced negative pressure and positive airflow subfloor drying for plywood, OSB, and concrete slabs in McKinney.",
    fullDesc: "When water penetrates beneath your surface flooring, it saturates OSB or plywood subflooring. Wet subflooring loses structural rigidity and causes soft spots. We use injected drying mats to dry subfloors in place without demolition.",
    iconName: "Droplets",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    features: ["Injected drying mat systems", "Prevents plywood delamination", "Preserves floor joist strength", "Daily moisture verification"],
    equipment: ["Floor Drying Mats", "High-Pressure Vacuum Blowers", "Pin Moisture Probes", "Desiccant Units"],
    process: [
      { step: 1, title: "Subfloor Moisture Profiling", description: "Deep pin readings into OSB and plywood subflooring." },
      { step: 2, title: "Mat System Seal", description: "Attaching airtight vacuum mats directly over saturated zones." },
      { step: 3, title: "Continuous Vapor Draw", description: "Drawing moisture up through wood grain without cupping." },
      { step: 4, title: "Structural Clearance", description: "Verifying moisture level is below 12% wood moisture equivalent." }
    ],
    urgencyWarning: "OSB subflooring swells permanently if allowed to stay saturated for more than 48 hours."
  },

  // 3. Drying & Moisture Detection
  {
    id: "structural-drying-mckinney-tx",
    title: "Structural Drying McKinney TX",
    shortDesc: "Science-based psychrometric structural drying for framing studs, drywall, and subflooring in McKinney, TX.",
    fullDesc: "Structural drying uses thermodynamic principles to balance temperature, vapor pressure, and airflow to evaporate trapped water from structural timber. We monitor grain depression daily until the home is verified dry.",
    iconName: "Wind",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: ["Psychrometric monitoring", "Commercial LGR dehumidifiers", "High-velocity air movement", "Certified dry documentation"],
    equipment: ["LGR Dehumidifiers", "Axial Fans", "Thermo-Hygrometers", "Moisture Data Loggers"],
    process: [
      { step: 1, title: "Psychrometric Assessment", description: "Calculating specific humidity (grains per pound) of indoor air." },
      { step: 2, title: "Equipment Ratio Placement", description: "Calculating exact CFM air movement and pint capacity per cubic foot." },
      { step: 3, title: "Daily Dry Logs", description: "Recording moisture drops across all framing points." },
      { step: 4, title: "Clearance Sign-Off", description: "Issuing formal IICRC S500 structural dry certificate." }
    ],
    urgencyWarning: "Improper structural drying leads to hidden dry rot, weakened roof loads, and recurring mold blooms."
  },
  {
    id: "wall-drying-mckinney-tx",
    title: "Wall Drying McKinney TX",
    shortDesc: "In-place cavity wall drying and injected airflow to salvage drywall and structural framing in McKinney properties.",
    fullDesc: "Water wicks up porous drywall and gets trapped in the dark cavity between studs where wet insulation sits. Our non-invasive cavity drying systems inject warm, dry air into wall cavities through small holes hidden behind baseboards.",
    iconName: "Wind",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    features: ["In-wall cavity air injection", "Saves sheetrock and custom texture", "Preserves wall insulation", "Eliminates hidden moisture"],
    equipment: ["Cavity Air Injectors", "Thermal Scanners", "Baseboard Air Movers", "Dehumidifiers"],
    process: [
      { step: 1, title: "Baseboard Removal", description: "Carefully prying baseboards to access lower wall perimeter." },
      { step: 2, title: "Micro-Venting", description: "Drilling tiny holes behind baseboard line to introduce dry airflow." },
      { step: 3, title: "Positive Pressure Injection", description: "Forcing heated, dehumidified air into stud bays." },
      { step: 4, title: "Moisture Confirmation", description: "Confirming studs have reached safe dry standard before resealing." }
    ],
    urgencyWarning: "Wet insulation inside walls loses R-value and holds moisture against studs for months."
  },
  {
    id: "ceiling-drying-mckinney-tx",
    title: "Ceiling Drying McKinney TX",
    shortDesc: "Controlled overhead drying and collapse prevention for drywall and plaster ceilings in McKinney, TX.",
    fullDesc: "Upstairs pipe breaks and roof leaks pool water on top of ceiling sheetrock. Saturated drywall becomes heavy and can collapse suddenly. We safely drain, support, and dry ceiling cavities using thermal scanning and dehumidification.",
    iconName: "Wind",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    features: ["Ceiling collapse prevention", "Controlled weeping drains", "Overhead thermal scanning", "Structural joist drying"],
    equipment: ["Thermal Scanners", "Drywall Shoring Jacks", "High-Reach Air Movers", "Desiccant Dryers"],
    process: [
      { step: 1, title: "Hazard Mitigation", description: "Checking ceiling sag and creating controlled relief drains to prevent collapse." },
      { step: 2, title: "Thermal Mapping", description: "Scanning overhead drywall to find boundary of water migration." },
      { step: 3, title: "Upward Vortex Airflow", description: "Focusing high-velocity air movers upward to evaporate trapped moisture." },
      { step: 4, title: "Joint & Fastener Check", description: "Inspecting ceiling screws and joints to ensure structural safety." }
    ],
    urgencyWarning: "Water pooling above sheetrock ceilings causes sudden structural failure without warning."
  },
  {
    id: "moisture-detection-mckinney-tx",
    title: "Moisture Detection McKinney TX",
    shortDesc: "Non-invasive electronic moisture detection to pinpoint hidden leaks and saturation behind walls and floors.",
    fullDesc: "You cannot manage what you cannot measure. Our certified technicians use radio frequency moisture meters, penetrating pin probes, and infrared cameras to locate moisture hidden inside walls, subfloors, and ceiling joists.",
    iconName: "Search",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Non-destructive testing", "Pin and pinless digital meters", "Relative humidity profiling", "Full photographic documentation"],
    equipment: ["Protimeter SurveyMaster", "Radio Frequency Detectors", "Digital Hygrometers", "Infrared Scanners"],
    process: [
      { step: 1, title: "Baseline Calibration", description: "Measuring unaffected drywall and flooring to establish the dry standard." },
      { step: 2, title: "Perimeter Sweep", description: "Scanning all adjoining walls, baseboards, and floors." },
      { step: 3, title: "Depth Pin Probing", description: "Testing subfloors and framing timber for moisture percentage." },
      { step: 4, title: "Moisture Map Report", description: "Generating a digital color-coded map for your insurance adjuster." }
    ],
    urgencyWarning: "Hidden moisture creates invisible structural deterioration and mold colonization behind clean-looking walls."
  },
  {
    id: "moisture-mapping-mckinney-tx",
    title: "Moisture Mapping McKinney TX",
    shortDesc: "Detailed photographic and digital moisture mapping documenting the full path of water migration for insurance claims.",
    fullDesc: "Moisture mapping is the cornerstone of insurance approval. We create a room-by-room digital schematic showing exact moisture percentages, water migration pathways, and equipment placement logs.",
    iconName: "Search",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    features: ["Room-by-room digital schematics", "Accepted by all insurance carriers", "Daily progression tracking", "Clearance dry certification"],
    equipment: ["Digital Moisture Mapping Software", "FLIR Thermal Imagers", "Electronic Moisture Sensors", "GPS Stamping Tools"],
    process: [
      { step: 1, title: "Initial Grid Setup", description: "Dividing affected rooms into measurable test grid zones." },
      { step: 2, title: "Data Collection", description: "Recording moisture percentages across all materials on Day 1." },
      { step: 3, title: "Daily Tracking", description: "Updating the map daily as dehumidifiers extract moisture." },
      { step: 4, title: "Final Proof of Dryness", description: "Documenting that all points meet or exceed the dry baseline standard." }
    ],
    urgencyWarning: "Without an official moisture map, insurance adjusters often deny coverage for hidden structural drying."
  },
  {
    id: "thermal-imaging-inspection-mckinney-tx",
    title: "Thermal Imaging Inspection McKinney TX",
    shortDesc: "FLIR high-resolution infrared thermal imaging inspections to uncover concealed moisture without cutting into walls.",
    fullDesc: "Evaporating water creates an evaporative cooling effect that thermal cameras see instantly. Our FLIR thermal cameras display temperature differentials as vivid visual heat maps, revealing the exact boundaries of wet drywall, insulation, and subflooring.",
    iconName: "Search",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: ["FLIR infrared cameras", "Zero wall cutting required", "Pinpoints exact leak paths", "High-definition photo evidence"],
    equipment: ["FLIR E8 Infrared Camera", "Digital Thermal Scanners", "Dual-Laser Thermometers", "Photo Loggers"],
    process: [
      { step: 1, title: "Infrared Thermal Scan", description: "Scanning ceilings, walls, and floor perimeters for cool wet anomalies." },
      { step: 2, title: "Physical Probe Verification", description: "Confirming thermal anomalies with physical moisture pin meters." },
      { step: 3, title: "Side-by-Side Documentation", description: "Capturing visible light and infrared photos for insurance proof." },
      { step: 4, title: "Post-Drying Scan", description: "Rescanning after 3 days to verify thermal uniformity across all surfaces." }
    ],
    urgencyWarning: "What looks completely dry to the eye can be soaking wet inside. Thermal imaging eliminates all guesswork."
  },
  {
    id: "water-damage-assessment-mckinney-tx",
    title: "Water Damage Assessment McKinney TX",
    shortDesc: "Comprehensive IICRC S500 water damage assessments with line-item Xactimate® damage reports for McKinney properties.",
    fullDesc: "A complete professional assessment identifies the water source, classifies the contamination category, maps migration, and outlines a clear scope of work that insurance adjusters approve quickly.",
    iconName: "Search",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    features: ["IICRC S500 standard methodology", "Water category classification", "Insurance scope generation", "Immediate safety audit"],
    equipment: ["Moisture Meters", "Thermal Cameras", "Xactimate Estimating Tools", "Air Quality Meters"],
    process: [
      { step: 1, title: "Source Verification", description: "Confirming the water source is safely secured and isolated." },
      { step: 2, title: "Category Determination", description: "Classifying Category 1 clean, Category 2 gray, or Category 3 black water." },
      { step: 3, title: "Class of Water Loss", description: "Calculating evaporation load (Class 1 through Class 4)." },
      { step: 4, title: "Written Scope of Work", description: "Providing a detailed scope of drying and restoration for your adjuster." }
    ],
    urgencyWarning: "Inaccurate assessments lead to under-drying, mold growth, or disputed insurance claims."
  },
  {
    id: "hidden-water-damage-detection-mckinney-tx",
    title: "Hidden Water Damage Detection McKinney TX",
    shortDesc: "Advanced acoustic and infrared leak detection finding hidden water leaks behind cabinets, showers, and under slabs.",
    fullDesc: "Hidden leaks behind tiled showers, dishwasher supply lines, and under concrete foundation slabs in McKinney can run undetected for months. We use specialized acoustic leak locators and thermal imaging to find the source without tearing your home apart.",
    iconName: "Search",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    features: ["Acoustic listening devices", "Slab leak moisture profiling", "Under-cabinet inspection cameras", "Targeted access cutouts"],
    equipment: ["Acoustic Underground Detectors", "Borescope Cameras", "Moisture Sniffers", "Thermal Cameras"],
    process: [
      { step: 1, title: "Acoustic Sweep", description: "Listening for pressurized pipe hiss behind walls and under foundations." },
      { step: 2, title: "Borescope Inspection", description: "Inserting micro-cameras into tiny wall holes to inspect cavities." },
      { step: 3, title: "Moisture Tracing", description: "Following water trail back to the primary point of origin." },
      { step: 4, title: "Plumbing Repair Coordination", description: "Directing plumbers to the exact spot to minimize drywall cuts." }
    ],
    urgencyWarning: "Hidden leaks undermine McKinney clay soil foundations and encourage subterranean mold colonies."
  },
  {
    id: "water-migration-assessment-mckinney-tx",
    title: "Water Migration Assessment McKinney TX",
    shortDesc: "Detailed tracking of lateral and vertical water migration through building materials in McKinney structures.",
    fullDesc: "Water follows gravity and capillary action, travelling along floor joists, down wiring conduits, and across concrete slabs into rooms far from the original leak. We map the full migration boundary so no wet areas are missed.",
    iconName: "Search",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Traces lateral capillary draw", "Multi-room boundary tracking", "HVAC duct moisture check", "Full containment borders"],
    equipment: ["Penetrating Moisture Probes", "Thermal Cameras", "Laser Measures", "Moisture Grid Software"],
    process: [
      { step: 1, title: "Epicenter Identification", description: "Pinpointing the primary point of water release." },
      { step: 2, title: "Radial Perimeter Checks", description: "Measuring outward in a grid until dry baseline readings are confirmed." },
      { step: 3, title: "Vertical Cavity Checks", description: "Checking lower floors and crawlspaces for downward seepage." },
      { step: 4, title: "Drying Chamber Isolation", description: "Erecting plastic containment barriers to concentrate drying power." }
    ],
    urgencyWarning: "Failing to trace water migration leaves wet insulation in adjoining rooms that causes surprise mold weeks later."
  },
  {
    id: "dehumidification-mckinney-tx",
    title: "Dehumidification McKinney TX",
    shortDesc: "Industrial Low-Grain Refrigerant (LGR) dehumidification fleets removing dozens of gallons of airborne water vapor daily.",
    fullDesc: "As air movers blow water out of wet building materials, that water turns into airborne humidity. Without commercial dehumidifiers, this moisture recondenses onto ceilings and furniture. Our Phoenix and Dri-Eaz LGR dehumidifiers pull moisture down to single-digit relative humidity.",
    iconName: "Wind",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    features: ["LGR Low-Grain Refrigerant technology", "Pulls 160+ pints per unit per day", "Operates efficiently in high heat", "Continuous pump-out lines"],
    equipment: ["Phoenix 250 MAX LGRs", "Dri-Eaz Evolution Dehumidifiers", "Condensate Discharge Lines", "Digital Thermo-Hygrometers"],
    process: [
      { step: 1, title: "Psychrometric Calculation", description: "Calculating total pints of moisture extraction needed per 24 hours." },
      { step: 2, title: "Dehumidifier Installation", description: "Placing LGR units in optimal airflow positions with secure drains." },
      { step: 3, title: "Grain Depression Monitoring", description: "Checking daily grains of moisture per pound of air (GPP)." },
      { step: 4, title: "De-escalation & Removal", description: "Removing units once materials reach equilibrium with outdoor dry standards." }
    ],
    urgencyWarning: "High humidity above 60% relative humidity triggers active mold germination throughout the entire home."
  },
  {
    id: "air-movement-drying-mckinney-tx",
    title: "Air Movement & Drying McKinney TX",
    shortDesc: "High-velocity axial and centrifugal air movers creating high-speed laminar airflow to accelerate structural evaporation.",
    fullDesc: "Air movement strips the boundary layer of saturated air away from wet materials, allowing deeper water molecules to escape into the dehumidifier stream. We use aerodynamic axial fans positioned at 45-degree angles to maximize evaporation.",
    iconName: "Wind",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: ["Axial and centrifugal blowers", "Calculated CFM airflow per room", "Low-amp energy efficient motors", "Focused vortex drying action"],
    equipment: ["Dri-Eaz StealthAV Axial Fans", "Centrifugal Air Blowers", "Down-draft Air Movers", "Airflow Anemometers"],
    process: [
      { step: 1, title: "Airflow Design", description: "Calculating exact number of air movers needed per IICRC guidelines." },
      { step: 2, title: "Vortex Placement", description: "Angling blowers along walls to create a circular vortex in the room." },
      { step: 3, title: "Thermal Balancing", description: "Pairing air movement with dehumidifiers so evaporated air is trapped." },
      { step: 4, title: "Angle Adjustment", description: "Repositioning fans daily to target stubborn moisture pockets." }
    ],
    urgencyWarning: "Air movers without dehumidification simply circulate humid air, speeding up mold growth."
  },
  {
    id: "post-drying-moisture-verification-mckinney-tx",
    title: "Post-Drying Moisture Verification McKinney TX",
    shortDesc: "Official IICRC S500 post-drying inspection and dry standard certification for McKinney homeowners and insurance adjusters.",
    fullDesc: "Before any equipment is packed up or reconstruction begins, our technicians perform exhaustive verification testing. We test every previously affected area to prove that moisture readings have returned to pre-loss dry standards.",
    iconName: "Search",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    features: ["Formal Dry Standard Certificate", "Insurance claim sign-off documentation", "100% dry guarantee", "Thermal clearance verification"],
    equipment: ["Calibrated Moisture Probes", "FLIR Thermal Scanners", "RH Meters", "Verification Certificates"],
    process: [
      { step: 1, title: "Multi-Point Probe Test", description: "Testing all studs, baseboards, drywall, and subflooring." },
      { step: 2, title: "Comparison to Baseline", description: "Verifying readings match the dry standard of unaffected rooms." },
      { step: 3, title: "Thermal Uniformity Check", description: "Confirming no cool evaporative spots remain under infrared view." },
      { step: 4, title: "Certificate Issuance", description: "Signing the Certificate of Dryness for your insurance file." }
    ],
    urgencyWarning: "Starting repairs before certified dry verification traps residual moisture inside new drywall."
  },

  // 4. Flooring, Walls & Ceilings Restoration
  {
    id: "hardwood-floor-water-damage-cleanup-mckinney-tx",
    title: "Hardwood Floor Water Damage Cleanup McKinney TX",
    shortDesc: "Specialized rescue and negative pressure drying for white oak, maple, and engineered hardwood flooring in McKinney.",
    fullDesc: "Hardwood flooring cups and crowns when water gets trapped beneath the planks. Replacing hardwood floors can cost $15,000 to $30,000+. Using high-vacuum injected drying mats, we pull water directly through the wood pores, flattening cupping planks and restoring original beauty.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    features: ["Injected negative pressure mat systems", "Saves expensive hardwood without tear-out", "Reverses cupping and crowning", "Porous vapor draw technology"],
    equipment: ["Rescue Mat Drying Systems", "High-Pressure Vacuum Compressors", "Hardwood Pin Moisture Probes", "LGR Fleets"],
    process: [
      { step: 1, title: "Immediate Water Extraction", description: "Clearing standing surface water before wood cells saturate." },
      { step: 2, title: "Mat System Installation", description: "Taping airtight extraction mats across cupped planks." },
      { step: 3, title: "Negative Pressure Vacuum", description: "Drawing moisture from beneath subfloor through wood pores." },
      { step: 4, title: "Refinishing Assessment", description: "Confirming wood has flattened back to original level tolerance." }
    ],
    urgencyWarning: "Hardwood left saturated for over 72 hours suffers permanent cellular crush, requiring complete tear-out."
  },
  {
    id: "laminate-flooring-water-damage-cleanup-mckinney-tx",
    title: "Laminate Flooring Water Damage Cleanup McKinney TX",
    shortDesc: "Assessment and remediation of water intrusion under laminate and luxury vinyl plank (LVP) flooring in McKinney.",
    fullDesc: "Laminate flooring is made of compressed high-density fiberboard (HDF) that swells rapidly when water penetrates the seams. We quickly assess whether the laminate can be dried or if water has migrated to the subfloor, requiring careful plank removal.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Seam swell assessment", "Subfloor moisture evacuation", "Non-destructive unclicking when possible", "Insurance replacement scope"],
    equipment: ["Non-Invasive Moisture Meters", "Air Movers", "LGR Dehumidifiers", "Plank Removal Tools"],
    process: [
      { step: 1, title: "Seam Inspection", description: "Inspecting joints for swelling, buckling, or bubbling." },
      { step: 2, title: "Subfloor Testing", description: "Measuring moisture under vapor barrier underlayment." },
      { step: 3, title: "Controlled Uninstallation", description: "Numbering and salvaging dry planks to access wet concrete or plywood." },
      { step: 4, title: "Subfloor Decontamination", description: "Sanitizing and drying the foundation before new flooring is laid." }
    ],
    urgencyWarning: "Moisture trapped beneath laminate vapor barriers turns into stagnant black water within 3 days."
  },
  {
    id: "tile-grout-water-damage-cleanup-mckinney-tx",
    title: "Tile & Grout Water Damage Cleanup McKinney TX",
    shortDesc: "Deep extraction, sanitization, and sub-tile drying for ceramic, porcelain, and natural stone tile in McKinney homes.",
    fullDesc: "While tile surfaces are resilient, grout lines are porous cement that absorbs contaminated flood water. Water travels under tiles, softening thin-set mortar and causing loose, hollow tiles. We dry the sub-tile foundation to save your tile installation.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    features: ["Porous grout sanitization", "Hollow tile bond acoustic testing", "Concrete slab drying", "Mildew stain removal"],
    equipment: ["Rotary Tile Cleaners", "Acoustic Tile Hammers", "High-Flow Dehumidifiers", "Steam Sanitizers"],
    process: [
      { step: 1, title: "Extraction & Wash", description: "Extracting water and scrubbing grout lines with antimicrobial solutions." },
      { step: 2, title: "Acoustic Bond Sounding", description: "Tapping tiles to identify which tiles have lost adhesive bond." },
      { step: 3, title: "Deep Sub-Slab Drying", description: "Pulling moisture out through grout channels with high-heat airflow." },
      { step: 4, title: "Grout Re-sealing", description: "Re-grouting and applying water-resistant sealer." }
    ],
    urgencyWarning: "Water under tile rots wood subflooring silently, causing the floor to sag under heavy bathtubs."
  },
  {
    id: "drywall-water-damage-assessment-mckinney-tx",
    title: "Drywall Water Damage Assessment McKinney TX",
    shortDesc: "Precise moisture probing and structural integrity testing of water-damaged sheetrock across McKinney properties.",
    fullDesc: "Drywall is made of gypsum pressed between paper facings. When wet, gypsum loses structural strength and the organic paper provides food for fungal growth. We assess drywall saturation to determine if it can be saved or if a flood cut is needed.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: ["Gypsum core strength testing", "Wicking height measurement", "Flood-cut line determination", "Prevents unnecessary demo"],
    equipment: ["Deep Pin Drywall Probes", "Gypsum Hardness Gauges", "Laser Levels", "Thermal Scanners"],
    process: [
      { step: 1, title: "Wicking Height Test", description: "Measuring how high water traveled up the wall sheetrock." },
      { step: 2, title: "Core Softness Audit", description: "Testing gypsum resistance to determine structural salvagability." },
      { step: 3, title: "Flood-Cut Line Mark", description: "Marking clean laser cut lines (typically 2-foot or 4-foot standard cuts)." },
      { step: 4, title: "Stud Cavity Inspection", description: "Checking behind sheetrock for wet wiring, insulation, and framing." }
    ],
    urgencyWarning: "Wet drywall paper is the number one breeding ground for Stachybotrys chartarum (black toxic mold)."
  },
  {
    id: "drywall-removal-replacement-mckinney-tx",
    title: "Drywall Removal & Replacement McKinney TX",
    shortDesc: "Clean, contained removal of contaminated drywall followed by professional hanging, taping, texturing, and painting.",
    fullDesc: "When sheetrock is compromised by Category 2 or Category 3 flood waters, or has remained wet for over 48 hours, clean removal is mandatory. We set up HEPA negative air containment, make precision straight cuts, and reconstruct seamlessly to pre-loss condition.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    features: ["Dustless HEPA containment", "Precision laser cuts", "Seamless texture matching (Orange Peel & Knockdown)", "Turn-key paint finish"],
    equipment: ["Oscillating Cutting Saws", "HEPA Vacuum Dust Extractors", "Drywall Lifts", "Texture Spray Rigs"],
    process: [
      { step: 1, title: "Containment Setup", description: "Zippered plastic walls and HEPA air scrubbers prevent dust migration." },
      { step: 2, title: "Precision Flood Cut", description: "Cutting 24 or 48 inches above water line for clean reconstruction." },
      { step: 3, title: "Insulation & Stud Disinfection", description: "Removing wet fiberglass and treating wood framing with botanicals." },
      { step: 4, title: "Hanging & Finishing", description: "Installing moisture-resistant drywall, floating joints, and matching texture." }
    ],
    urgencyWarning: "Tearing out wet drywall without containment spreads microscopic mold spores into your HVAC system."
  },
  {
    id: "ceiling-water-damage-restoration-mckinney-tx",
    title: "Ceiling Water Damage Restoration McKinney TX",
    shortDesc: "Full structural stabilization, drying, drywall repair, and seamless texture blending for water-damaged ceilings in McKinney.",
    fullDesc: "Water damage to ceilings requires specialized structural care due to gravity and collapse hazards. Our certified team drains water blisters, shores up framing, dries joists, and repairs drywall with flawless texture matching.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    features: ["Ceiling blister drainage", "Attic and joist inspection", "Acoustic and popcorn texture matching", "Structural reinforcement"],
    equipment: ["Drywall Shoring Columns", "FLIR Cameras", "Attic Access Fans", "Texture Spray Guns"],
    process: [
      { step: 1, title: "Emergency Water Release", description: "Puncturing water pillows to relieve weight before ceiling fails." },
      { step: 2, title: "Attic Water Source Check", description: "Inspecting roof, AC condensation pan, or upstairs bathroom plumbing." },
      { step: 3, title: "Cavity Drying", description: "Blowing warm dry air across ceiling joists and wet insulation." },
      { step: 4, title: "Re-texturing & Painting", description: "Blending ceiling texture and painting corner-to-corner for invisible repair." }
    ],
    urgencyWarning: "Water trapped above ceiling drywall adds hundreds of pounds of load that can collapse onto occupants."
  },
  {
    id: "wall-water-damage-restoration-mckinney-tx",
    title: "Wall Water Damage Restoration McKinney TX",
    shortDesc: "Complete restoration for wet interior and exterior walls, including framing, insulation, vapor barriers, and paint in McKinney.",
    fullDesc: "From multi-room flooding to pipe burst wall cavities, our comprehensive wall restoration services cover moisture extraction, structural stud treatment, fresh insulation, and custom texture and paint restoration.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Full stud cavity remediation", "Batt and blown-in insulation replacement", "Baseboard and trim carpentry", "Custom paint color matching"],
    equipment: ["Thermal Cameras", "Wall Cavity Air Movers", "HEPA Vacuums", "Moisture Meters"],
    process: [
      { step: 1, title: "Wall Moisture Profiling", description: "Mapping water height across all interior and exterior walls." },
      { step: 2, title: "Controlled Access", description: "Opening bottom perimeter to vent stud bays." },
      { step: 3, title: "Antimicrobial Stud Wash", description: "Sanitizing timber framing to kill mold and fungal spores." },
      { step: 4, title: "Drywall & Trim Rebuild", description: "Hanging fresh sheetrock, installing baseboards, and painting." }
    ],
    urgencyWarning: "Wet wall cavities rot wooden bottom plates and loosen foundation anchor bolts over time."
  },
  {
    id: "structural-material-restoration-mckinney-tx",
    title: "Structural Material Restoration McKinney TX",
    shortDesc: "Restoring load-bearing timber, floor joists, concrete slabs, and architectural elements in McKinney, TX.",
    fullDesc: "Water intrusion attacks the core skeleton of your property. We apply engineering-grade drying protocols to load-bearing framing, laminated beams (LVL), and concrete foundations to ensure your home remains safe and sound.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    features: ["Load-bearing framing preservation", "Concrete slab moisture evaporation", "Engineered truss & joist drying", "Structural integrity sign-off"],
    equipment: ["Desiccant Dehumidifiers", "Heavy-Duty Heat Drying Systems", "Concrete Core Moisture Sensors", "Thermal Cameras"],
    process: [
      { step: 1, title: "Structural Load Audit", description: "Checking for sagging beams, warped sill plates, or cracked trusses." },
      { step: 2, title: "Desiccant Deep Drying", description: "Deploying low-humidity desiccant systems to draw deep bound water from wood." },
      { step: 3, title: "Timber Wood Moisture Test", description: "Verifying framing moisture is under 15% before re-enclosure." },
      { step: 4, title: "Structural Repair Sign-Off", description: "Ensuring all load paths meet McKinney residential building codes." }
    ],
    urgencyWarning: "Prolonged saturation of wood joists leads to dry rot fungus (Serpula lacrymans) that eats structural timber."
  },
  {
    id: "water-damaged-flooring-restoration-mckinney-tx",
    title: "Water-Damaged Flooring Restoration McKinney TX",
    shortDesc: "Turn-key repair, refinishing, and replacement for hardwood, tile, carpet, and stone flooring damaged by water in McKinney.",
    fullDesc: "Whether your flooring can be dried in place or requires custom replacement, our skilled flooring craftsmen restore your floors to pre-loss beauty. We source matching hardwoods, high-end carpets, and luxury vinyl plank.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: ["Hardwood refinishing & custom staining", "Tile and grout reinstallation", "Subfloor leveling and prep", "Insurance floor scope coordination"],
    equipment: ["Dustless Floor Sanders", "Moisture Meters", "Pneumatic Nailers", "Leveling Compounds"],
    process: [
      { step: 1, title: "Material Assessment", description: "Inspecting damaged floorboards against undamaged areas for exact match." },
      { step: 2, title: "Subfloor Preparation", description: "Ensuring concrete or plywood subfloor is 100% dry and level." },
      { step: 3, title: "Installation", description: "Precision laying of new flooring with seamless transitions to adjoining rooms." },
      { step: 4, title: "Finishing & Coating", description: "Applying commercial-grade protective clear coats." }
    ],
    urgencyWarning: "Laying new flooring over damp subfloors causes new boards to cup, buckle, and rot immediately."
  },
  {
    id: "water-damaged-wall-restoration-mckinney-tx",
    title: "Water-Damaged Wall Restoration McKinney TX",
    shortDesc: "Complete wall reconstruction, texture matching, and painting after water extraction in McKinney, TX.",
    fullDesc: "We take your walls from bare studs to finished beauty. Our drywallers and finish painters ensure seams are completely invisible, textures match your existing style (smooth, orange peel, knockdown), and paint coats blend seamlessly.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    features: ["Invisible drywall seams", "Exact texture duplication", "Corner-to-corner paint blending", "Baseboard and crown molding re-install"],
    equipment: ["Drywall Taping Tools", "Acoustic Texture Rigs", "Airless Paint Sprayers", "Dust Extractors"],
    process: [
      { step: 1, title: "Framing Prep", description: "Inspecting studs and replacing wet insulation with new R-13/R-19 batts." },
      { step: 2, title: "Hanging Sheetrock", description: "Installing moisture-resistant drywall boards." },
      { step: 3, title: "Taping & Floating", description: "Applying three coats of joint compound sanded smooth." },
      { step: 4, title: "Texture & Paint", description: "Spraying matching texture and applying primer plus two coats of premium paint." }
    ],
    urgencyWarning: "Poorly repaired water-damaged walls reveal ugly seam cracks and visible tape bubbles within months."
  },
  {
    id: "water-damaged-ceiling-restoration-mckinney-tx",
    title: "Water-Damaged Ceiling Restoration McKinney TX",
    shortDesc: "Flawless ceiling rebuilds, acoustic popcorn removal, smooth finish conversions, and seamless paint for McKinney ceilings.",
    fullDesc: "Ceilings demand the highest level of craftsmanship because lighting highlights every imperfection. We replace damaged ceiling sheetrock, reinforce overhead joists, and match popcorn, knockdown, or smooth ceiling textures perfectly.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    features: ["Seamless overhead sheetrock hanging", "Popcorn repair or full removal", "Stain-blocking primer sealing", "Corner-to-corner ceiling paint"],
    equipment: ["Drywall Panel Lifts", "HEPA Sanding Tools", "Texture Rigs", "Commercial Primers"],
    process: [
      { step: 1, title: "Damaged Drywall Cutout", description: "Removing compromised ceiling sections back to solid joist centers." },
      { step: 2, title: "Joist Inspection", description: "Ensuring overhead timber is 100% dry and structurally sound." },
      { step: 3, title: "Hanging & Mudding", description: "Lifting new sheetrock into place and applying lightweight ceiling compound." },
      { step: 4, title: "Prime & Paint", description: "Sealing with stain-blocking primer and flat ceiling white paint." }
    ],
    urgencyWarning: "Water stains bleed right through standard paint if not treated with specialized shellac-based stain blocker."
  },

  // 5. Sanitization, Mold & Contamination Cleanup
  {
    id: "sanitization-mckinney-tx",
    title: "Sanitization Services McKinney TX",
    shortDesc: "Hospital-grade, EPA-registered botanical sanitization for water-damaged residential and commercial spaces in McKinney.",
    fullDesc: "Flood waters carry millions of bacteria, viruses, and microbial spores. We apply hospital-grade botanical antimicrobials (Benefect Botanical) that eliminate 99.99% of pathogens while remaining completely safe for children, pets, and chemical-sensitive occupants.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    features: ["EPA-registered botanical solutions", "Kills 99.99% of bacteria and viruses", "Non-toxic and food-surface safe", "Eliminates musty damp odors"],
    equipment: ["Electrostatic Sprayers", "ULV Cold Foggers", "Botanical Disinfectants", "ATP Surface Meters"],
    process: [
      { step: 1, title: "Surface Cleaning", description: "Removing visible dirt, silt, and residue from affected surfaces." },
      { step: 2, title: "Electrostatic Application", description: "Spraying positively charged antimicrobial mist that wraps 360° around studs." },
      { step: 3, title: "Dwell Time Verification", description: "Allowing full 10-minute active dwell time for 100% pathogen kill." },
      { step: 4, title: "ATP Cleanliness Test", description: "Testing surface bio-luminescence to verify hospital-grade sanitization." }
    ],
    urgencyWarning: "Water from supply leaks turns into bacterial soup within 48 hours without proper antimicrobial wash."
  },
  {
    id: "disinfection-of-affected-areas-mckinney-tx",
    title: "Disinfection of Affected Areas McKinney TX",
    shortDesc: "Comprehensive broad-spectrum disinfection targeting mold spores, sewage pathogens, and flood water bacteria in McKinney.",
    fullDesc: "When water touches building materials, bacteria multiply exponentially. Our disinfection protocol follows CDC and IICRC S500 guidelines, neutralizing dangerous coliform bacteria, fungi, and viruses.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Broad-spectrum biocides", "IICRC S500 compliant", "HEPA air scrubbing filtration", "Protects indoor air quality"],
    equipment: ["ULV Fogging Rigs", "HEPA 500 Air Scrubbers", "Surface Sanitizers", "PPE Ensembles"],
    process: [
      { step: 1, title: "Containment & PPE", description: "Setting up negative pressure containment to protect unaffected rooms." },
      { step: 2, title: "Biocide Application", description: "Fogging and washing affected building materials with broad-spectrum biocide." },
      { step: 3, title: "HEPA Air Scrubbing", description: "Exchanging indoor air 6 times per hour through true 99.97% HEPA filters." },
      { step: 4, title: "Clearance Verification", description: "Verifying zero pathogen residue across all treated areas." }
    ],
    urgencyWarning: "Un-disinfected flood residue leaves dangerous aerosolized endotoxins that trigger asthma and respiratory illnesses."
  },
  {
    id: "odor-control-mckinney-tx",
    title: "Odor Control McKinney TX",
    shortDesc: "Molecular-level odor elimination using hydroxyl generators and thermal fogging to eliminate damp musty smells in McKinney.",
    fullDesc: "Water damage leaves a stubborn, musty odor caused by microbial volatile organic compounds (mVOCs). Scented sprays only mask the smell temporarily. We deploy industrial hydroxyl generators and thermal foggers to neutralize odor molecules at the molecular level.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    features: ["Hydroxyl generator technology", "Safe for occupants and pets during operation", "Penetrates deep into upholstery and framing", "Permanent odor elimination"],
    equipment: ["Hydroxyl Atmospheric Processors", "Thermal Foggers", "Carbon Filter Air Scrubbers", "Ozone Generators"],
    process: [
      { step: 1, title: "Odor Source Elimination", description: "Removing wet, bacteria-laden materials that produce odor gases." },
      { step: 2, title: "Hydroxyl Deployment", description: "Flooding the space with naturally occurring hydroxyl radicals." },
      { step: 3, title: "Molecular Neutralization", description: "Hydroxyls break carbon-hydrogen bonds in odor molecules, rendering them inert." },
      { step: 4, title: "Fresh Air Clearance", description: "Ventilating the building with purified, crisp indoor air." }
    ],
    urgencyWarning: "Damp musty smells are an active sign of living mold colonies releasing volatile chemical gas."
  },
  {
    id: "mold-prevention-after-water-damage-mckinney-tx",
    title: "Mold Prevention After Water Damage McKinney TX",
    shortDesc: "Targeted mold prevention protocols including antimicrobial wash, rapid drying, and HEPA air scrubbing in McKinney.",
    fullDesc: "In McKinney's warm, humid climate, mold spores germinate in as little as 24 to 48 hours following water intrusion. Our emergency mold prevention protocol includes immediate extraction, EPA-registered fungal barriers, and rapid structural dehumidification to halt mold in its tracks.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    features: ["Stops mold before it starts", "Fungistatic microbial barrier coatings", "Sub-45% relative humidity targeting", "Zero mold guarantee"],
    equipment: ["EPA Fungicides", "HEPA 500 Air Scrubbers", "LGR Dehumidifiers", "Thermal Moisture Meters"],
    process: [
      { step: 1, title: "Quick Emergency Service", description: "Removing standing water before mold spores have time to germinate." },
      { step: 2, title: "Fungistatic Barrier", description: "Applying botanical fungistat that prevents spores from anchoring to wood." },
      { step: 3, title: "Targeted Deep Drying", description: "Driving wood moisture levels below the 16% threshold needed for mold life." },
      { step: 4, title: "Spore Scrubbing", description: "Running HEPA air scrubbers to capture ambient airborne spores." }
    ],
    urgencyWarning: "Remediating full-blown mold after 72 hours costs up to 10 times more than immediate emergency water mitigation."
  },
  {
    id: "sewage-contaminated-water-cleanup-mckinney-tx",
    title: "Sewage-Contaminated Water Cleanup McKinney TX",
    shortDesc: "Emergency Category 3 black water extraction, biohazard containment, and complete structural decontamination in McKinney.",
    fullDesc: "Sewage back-ups contain human waste, toxic pathogens (E. coli, Hepatitis, Salmonella), and dangerous chemical runoff. This is classified as Category 3 Black Water and represents a severe health hazard. Our technicians wear full biohazard PPE, isolate the area under negative pressure, extract waste, and sanitize completely.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: ["Level-C Biohazard PPE containment", "Category 3 extraction and disposal", "Complete biological decontamination", "Certified sanitary clearance"],
    equipment: ["Biohazard Extractors", "HEPA Negative Air Machines", "Broad-Spectrum Disinfectants", "ATP Swab Testers"],
    process: [
      { step: 1, title: "Immediate Isolation", description: "Sealing off infected bathrooms and living areas under negative air pressure." },
      { step: 2, title: "Waste Evacuation", description: "Safely pumping out sewage sludge and contaminated water into licensed disposal." },
      { step: 3, title: "Porous Item Removal", description: "Removing contaminated carpet, drywall, and insulation per IICRC S500." },
      { step: 4, title: "Hospital-Grade Wash", description: "Washing framing and subfloors with hospital-grade biocides with verified clearance." }
    ],
    urgencyWarning: "Category 3 sewage contains live blood-borne pathogens and bacteria. Never attempt DIY sewage cleanup."
  },
  {
    id: "contaminated-water-cleanup-mckinney-tx",
    title: "Contaminated Water Cleanup McKinney TX",
    shortDesc: "Professional remediation for Category 2 gray water and Category 3 black water flooding across McKinney, TX.",
    fullDesc: "Water from washing machine overflows, dishwasher discharges, toilet backflows, and external ground runoff contains chemical contaminants, detergents, and bacteria. We safely extract, contain, and decontaminate affected structures.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    features: ["Gray and black water safety protocols", "Chemical detergent neutralization", "Negative pressure containment", "Safe debris hauling"],
    equipment: ["Heavy Extraction Pumps", "HEPA Scrubbers", "Enzyme Digesters", "Antimicrobial Sprayers"],
    process: [
      { step: 1, title: "Contamination Audit", description: "Testing water chemistry and establishing safety boundaries." },
      { step: 2, title: "Controlled Extraction", description: "Extracting contaminated effluent through sealed disposal lines." },
      { step: 3, title: "Enzymatic Sanitization", description: "Applying biological enzyme cleaners to break down organic wastes." },
      { step: 4, title: "Air Scrubbing", description: "Purifying indoor air to remove chemical vapors and biological aerosols." }
    ],
    urgencyWarning: "Category 2 water deteriorates into deadly Category 3 black water in as little as 24 to 48 hours."
  },
  {
    id: "affected-area-containment-mckinney-tx",
    title: "Affected Area Containment McKinney TX",
    shortDesc: "Erecting airtight plastic zip-wall barriers and negative air machines to prevent moisture and spore cross-contamination.",
    fullDesc: "During water mitigation and demolition, airborne mold spores, dust, and humid air can easily spread to clean bedrooms and living areas. We install airtight 6-mil polyethylene containment barriers with zippered access doors and HEPA negative pressure machines.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    features: ["6-mil poly containment barriers", "Zipper entry airlocks", "Negative air pressure differentials", "Zero cross-contamination guarantee"],
    equipment: ["Spring-Loaded Tension Poles", "6-mil Flame-Retardant Poly", "HEPA Negative Air Units", "Differential Manometers"],
    process: [
      { step: 1, title: "Barrier Construction", description: "Sealing doorways and hallways with heavy-duty plastic tension walls." },
      { step: 2, title: "HVAC Sealing", description: "Covering supply registers and return grilles to prevent duct contamination." },
      { step: 3, title: "Negative Pressure Setup", description: "Venting HEPA air outside to keep air pressure inside the zone negative." },
      { step: 4, title: "Pressure Verification", description: "Using digital manometers to verify air flows in, not out." }
    ],
    urgencyWarning: "Without containment, drywall dust and mold spores circulate through your central AC system into every room."
  },

  // 6. Contents, Insurance & Rebuild
  {
    id: "contents-protection-mckinney-tx",
    title: "Contents Protection McKinney TX",
    shortDesc: "Protective pack-out, on-site block elevation, and climate-controlled drying for personal belongings in McKinney.",
    fullDesc: "Your furniture, electronics, family heirlooms, and business documents are vulnerable during a flood. Our contents specialists elevate furniture on aluminum foil blocks, wrap delicate items, and provide secure pack-out to climate-controlled storage facilities.",
    iconName: "Wrench",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    features: ["Furniture elevation on foam/foil blocks", "Secure climate-controlled pack-out", "Detailed photographic inventorying", "Direct insurance contents coverage"],
    equipment: ["Foil and Styrofoam Blocks", "Padded Furniture Blankets", "Stretch Wrap Systems", "Barcode Inventory Software"],
    process: [
      { step: 1, title: "Immediate Elevation", description: "Placing furniture legs on waterproof blocks within 15 minutes of arrival." },
      { step: 2, title: "Barcode Inventory", description: "Photographing, cataloging, and tagging every item for insurance claims." },
      { step: 3, title: "Safe Transport", description: "Moving salvageable contents to our clean, climate-controlled drying vault." },
      { step: 4, title: "Return & Reset", description: "Returning items back to your home once reconstruction is certified complete." }
    ],
    urgencyWarning: "Wooden furniture legs absorb water from wet carpeting, bleeding permanent dark rust and varnish stains into fibers."
  },
  {
    id: "furniture-water-damage-protection-mckinney-tx",
    title: "Furniture Water Damage Protection McKinney TX",
    shortDesc: "Immediate protective elevation, wood furniture drying, and upholstery extraction for water-logged furnishings in McKinney.",
    fullDesc: "Fine wooden dining sets, upholstered sofas, and leather armchairs wick up water quickly. We extract water from upholstery, clean fabrics with botanical sanitizers, and slowly dehumidify solid hardwoods to prevent wood warping and veneer delamination.",
    iconName: "Wrench",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Upholstery vacuum extraction", "Wood furniture salvage protocols", "Prevents wood veneer bubbling", "Stain removal and deodorization"],
    equipment: ["Upholstery Extraction Tools", "Controlled Humidity Chambers", "Gentle Air Movers", "Wood Conditioners"],
    process: [
      { step: 1, title: "Immediate Lifting", description: "Elevating all furniture off wet carpeting to stop moisture wicking." },
      { step: 2, title: "Fabric Extraction", description: "Deep extraction of water from cushions, armrests, and padding." },
      { step: 3, title: "Controlled Moisture Evaporation", description: "Drying solid woods slowly to prevent checking and cracking." },
      { step: 4, title: "Sanitizing Finish", description: "Applying botanical deodorizer to leave fabrics fresh and clean." }
    ],
    urgencyWarning: "Wet sofa padding fosters internal mold colonies that cannot be seen until the cushion turns black and smells foul."
  },
  {
    id: "personal-belongings-drying-mckinney-tx",
    title: "Personal Belongings Drying McKinney TX",
    shortDesc: "Document freeze-drying, electronics decontamination, and textile drying for prized possessions in McKinney, TX.",
    fullDesc: "Irreplaceable family photo albums, legal documents, fine art, and electronics require specialized conservation techniques. We utilize thermal vacuum freeze-drying and ultrasonic cleaning to rescue cherished belongings.",
    iconName: "Wrench",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: ["Document freeze-drying capabilities", "Ultrasonic contents cleaning", "Electronics circuit drying and testing", "Detailed insurance itemization"],
    equipment: ["Vacuum Freeze Dry Chambers", "Ultrasonic Wash Tanks", "Desiccant Vaults", "Ozone Chambers"],
    process: [
      { step: 1, title: "Triage & Freezing", description: "Freezing wet books and documents to stop ink bleed and mold growth." },
      { step: 2, title: "Sublimation Drying", description: "Transforming ice directly into vapor in vacuum chambers without melting." },
      { step: 3, title: "Electronics Decontamination", description: "Cleaning circuit boards with specialized non-conductive solvents." },
      { step: 4, title: "Repackaging", description: "Returning fully restored items in clean, sealed archival boxes." }
    ],
    urgencyWarning: "Paper documents and photographs stick together permanently if not frozen within 24 hours of water exposure."
  },
  {
    id: "water-damaged-material-removal-mckinney-tx",
    title: "Water-Damaged Material Removal McKinney TX",
    shortDesc: "Safe, contained demo and responsible disposal of ruined building materials adhering to McKinney city guidelines.",
    fullDesc: "Non-salvageable materials (saturated wet insulation, buckled particle board, contaminated carpet pad) hold gallons of water and must be removed to allow structural framing to dry. We perform clean, dustless demolition with off-site disposal.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    features: ["Contained demolition", "Heavy-duty debris bagging", "Eco-friendly recycling where possible", "Insurance itemized tear-out logs"],
    equipment: ["Dust Containment Walls", "HEPA Negative Air Units", "Demolition Saws", "Heavy-Duty Disposal Trailers"],
    process: [
      { step: 1, title: "Material Triage", description: "Distinguishing salvageable wood and drywall from items requiring demo." },
      { step: 2, title: "Dustless Cutouts", description: "Making clean laser straight cuts under continuous HEPA suction." },
      { step: 3, title: "Sealed Bagging", description: "Bagging wet insulation and carpet pad inside the containment zone." },
      { step: 4, title: "Haul-Away & Disposal", description: "Hauling debris to licensed McKinney municipal disposal facilities." }
    ],
    urgencyWarning: "Leaving saturated insulation inside walls keeps framing wet indefinitely, rotting bottom sill plates."
  },
  {
    id: "debris-removal-mckinney-tx",
    title: "Debris Removal McKinney TX",
    shortDesc: "Rapid cleanup and removal of storm flood debris, mud, silt, and ruined building components in McKinney, TX.",
    fullDesc: "Storm floods leave behind hazardous mud, silt, tree branches, and ruined personal property. Our crews handle the heavy lifting, clearing contaminated debris, pressure washing sub-slabs, and leaving the site spotless.",
    iconName: "Wrench",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80",
    features: ["Heavy silt and sludge removal", "Pressure washing and extraction", "Rapid site clearance", "City compliant disposal"],
    equipment: ["Commercial Wet Slurry Vacuums", "Hot Water Pressure Washers", "Hauling Trucks", "Sanitizer Rigs"],
    process: [
      { step: 1, title: "Site Triage", description: "Removing large flood debris and sorting hazardous materials." },
      { step: 2, title: "Silt & Mud Slurry Extraction", description: "Vacuuming thick silt layers off concrete and tile surfaces." },
      { step: 3, title: "Hot Water Power Rinse", description: "Rinsing surfaces with 180°F antimicrobial hot water." },
      { step: 4, title: "Final Site Broom-Clean", description: "Leaving the area clean, disinfected, and ready for drying equipment." }
    ],
    urgencyWarning: "Flood silt contains agricultural and roadway runoff with toxic heavy metals and animal bacteria."
  },
  {
    id: "damage-documentation-mckinney-tx",
    title: "Damage Documentation McKinney TX",
    shortDesc: "Thorough forensic documentation including date-stamped photos, FLIR thermal logs, and detailed moisture mapping.",
    fullDesc: "Insurance companies require iron-clad evidence before approving water damage payouts. Our forensic documentation includes timestamped 4K photographs, infrared thermal scans, moisture reading tables, and equipment runtime logs.",
    iconName: "FileText",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["4K high-resolution photo logs", "Timestamped FLIR infrared reports", "Moisture percentage tables", "Audit-proof claims evidence"],
    equipment: ["4K Camera Rigs", "FLIR Thermal Imagers", "Digital Moisture Meters", "Claims Portal Software"],
    process: [
      { step: 1, title: "Initial Condition Photos", description: "Capturing wide-angle and macro photos of standing water and damage." },
      { step: 2, title: "Thermal Survey Overlay", description: "Documenting exact water boundaries before any demolition begins." },
      { step: 3, title: "Daily Psychrometric Logs", description: "Recording GPP drops and drying curves throughout the project." },
      { step: 4, title: "Master Claim Package", description: "Compiling a bound PDF report submitted directly to your insurance adjuster." }
    ],
    urgencyWarning: "Lack of pre-mitigation photo proof is the #1 reason insurance companies cut claim payouts."
  },
  {
    id: "restoration-documentation-for-insurance-mckinney-tx",
    title: "Restoration Documentation for Insurance McKinney TX",
    shortDesc: "Official line-item Xactimate® documentation and direct carrier coordination for seamless claim settlements in McKinney.",
    fullDesc: "We speak the insurance adjuster's language. By utilizing Xactimate®—the gold standard estimating software used by 99% of insurance companies—we provide itemized line-item invoicing that aligns with insurance pricing guidelines for rapid claim approval.",
    iconName: "FileText",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: ["Xactimate® estimating software", "Direct adjuster communication", "Approved unit pricing", "Zero surprise out-of-pocket on approved claims"],
    equipment: ["Xactimate® Estimating Suite", "Matterport 3D Scanners", "Digital Claim Portals", "Insurance Billing Rigs"],
    process: [
      { step: 1, title: "3D Space Mapping", description: "Scanning rooms using Matterport 3D cameras for exact cubic foot calculations." },
      { step: 2, title: "Line-Item Xactimate Scope", description: "Building detailed line items matching current Collin County labor rates." },
      { step: 3, title: "Direct Adjuster Walkthrough", description: "Meeting the field adjuster on-site to review the drying logs together." },
      { step: 4, title: "Direct Carrier Settlement", description: "Billing the insurance company directly so you don't carry financial burdens." }
    ],
    urgencyWarning: "Invoices created without Xactimate line codes face weeks of delays and adjuster price disputes."
  },
  {
    id: "water-damage-repair-coordination-mckinney-tx",
    title: "Water Damage Repair Coordination McKinney TX",
    shortDesc: "End-to-end management coordinating plumbers, electricians, drying technicians, and finish carpenters seamlessly.",
    fullDesc: "Recovering from water damage requires coordination between plumbers to fix leaks, electricians to clear breaker panels, drying crews to mitigate moisture, and carpenters to rebuild. We handle the entire process under one single point of contact.",
    iconName: "Wrench",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    features: ["Single dedicated project manager", "Licensed trade coordination", "Streamlined timelines", "Full accountability"],
    equipment: ["Project Scheduling Software", "Dedicated Job Coordinators", "Direct Trades Network", "Customer Portal"],
    process: [
      { step: 1, title: "Master Project Plan", description: "Creating a step-by-step critical path timeline from emergency call to final walkthrough." },
      { step: 2, title: "Plumbing & Electrical Coordination", description: "Securing permits and managing certified trade repairs." },
      { step: 3, title: "Mitigation to Rebuild Handoff", description: "Transitioning seamlessly from drying crew to reconstruction finish craftsmen." },
      { step: 4, title: "Final Quality Audit", description: "Performing a rigorous 50-point walkthrough before signing off project completion." }
    ],
    urgencyWarning: "Hiring disjointed contractors leads to finger-pointing, scheduling delays, and prolonged displaced living."
  },
  {
    id: "reconstruction-after-water-damage-mckinney-tx",
    title: "Reconstruction After Water Damage McKinney TX",
    shortDesc: "Licensed, full turn-key general contracting and structural reconstruction bringing McKinney properties back to 100% pre-loss state.",
    fullDesc: "Our reconstruction division finishes what our drying team starts. From new custom cabinetry, marble vanities, and white oak flooring to custom trim carpentry and designer paint coats, we rebuild your home better than before disaster struck.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: ["Licensed General Contractor management", "Custom cabinetry & millwork", "Flooring, drywall, and finish paint", "Complete 100% pre-loss restoration guarantee"],
    equipment: ["Carpentry Mobile Workshops", "Cabinetry Installation Rigs", "Precision Tile Saws", "Dustless Finish Sanding Fleets"],
    process: [
      { step: 1, title: "Rebuild Architecture & Planning", description: "Reviewing original floorplans and selecting replacement finishes." },
      { step: 2, title: "Framing, Rough-in & Insulation", description: "Installing fresh insulation, drywall backing, and electrical boxes." },
      { step: 3, title: "Drywall, Trim & Cabinetry", description: "Hanging sheetrock, installing cabinets, crown molding, and doors." },
      { step: 4, title: "Turn-Key Final Handover", description: "Professional deep cleaning, touch-ups, and final owner satisfaction walkthrough." }
    ],
    urgencyWarning: "Choosing inexperienced remodelers without flood reconstruction knowledge risks sealing hidden mold inside new walls."
  }
];
