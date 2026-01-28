// Company Information
export const COMPANY = {
  name: 'OXY Technologies',
  tagline: 'Producing Excellence | Delivering Solutions',
  parentCompany: 'Oxygen Group',
  email: 'info@oxytechnologies.com',
  phone: '+91-XXXXXXXXXX',
  address: 'Industrial Area, City, State, India',
};

// Navigation Menu
export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Automation', path: '/automation' },
  { label: 'Contracting', path: '/contracting' },
  { label: 'Industries', path: '/industries' },
  { label: 'Projects', path: '/projects' },
  { label: 'Facility', path: '/facility' },
  { label: 'Leadership', path: '/leadership' },
  { label: 'Contact', path: '/contact' },
];

// Statistics
export const STATS = [
  { value: '500+', label: 'Projects Executed' },
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Industrial Clients' },
  { value: '10+', label: 'Industries Served' },
];

// Core Services
export const CORE_SERVICES = [
  {
    title: 'Panel Manufacturing',
    description: 'PCC, MCC, PLC, VFD, APFC Panels with premium quality',
    icon: 'Box',
  },
  {
    title: 'Automation Solutions',
    description: 'PLC, SCADA, HMI, VFD systems for industrial automation',
    icon: 'Cpu',
  },
  {
    title: 'Turnkey Projects',
    description: 'Complete SITC solutions from design to commissioning',
    icon: 'Building2',
  },
  {
    title: 'System Integration',
    description: 'Authorized Schneider Electric System Integrator',
    icon: 'Network',
  },
];

// Industries
export const INDUSTRIES = [
  { name: 'Oil & Gas', icon: 'Droplet', description: 'HPCL, IOCL, BPCL, Reliance' },
  { name: 'Healthcare', icon: 'Heart', description: 'Hospitals & Medical Facilities' },
  { name: 'Cement', icon: 'Building', description: 'Cement Manufacturing Plants' },
  { name: 'Sugar', icon: 'Factory', description: 'Sugar Mills & Processing' },
  { name: 'Paper', icon: 'FileText', description: 'Paper Manufacturing Units' },
  { name: 'Infrastructure', icon: 'HardHat', description: 'Large-scale Infrastructure Projects' },
];

// Products
export const PRODUCTS = [
  {
    id: 'pcc',
    name: 'PCC - Power Control Center',
    shortDesc: 'High-quality power distribution and control panels',
    specs: [
      'Rating: Up to 6300A',
      'Voltage: Up to 690V AC',
      'IP Rating: IP42 to IP65',
      'Standards: IEC 61439',
    ],
    applications: ['Power Distribution', 'Motor Control', 'Industrial Plants'],
  },
  {
    id: 'mcc',
    name: 'MCC - Motor Control Center',
    shortDesc: 'Precision motor control solutions for industrial applications',
    specs: [
      'Rating: Up to 4000A',
      'Type: Fixed/Drawout',
      'Protection: Overload, Short Circuit',
      'Standards: IEC 61439-2',
    ],
    applications: ['Motor Control', 'Pump Stations', 'Manufacturing Plants'],
  },
  {
    id: 'plc-imcc',
    name: 'PLC & IMCC Panels',
    shortDesc: 'Intelligent motor control with PLC integration',
    specs: [
      'PLC: Schneider, Siemens, Allen Bradley',
      'Communication: Modbus, Profibus, Ethernet',
      'HMI: Touch screen interface',
      'Control: Automated process control',
    ],
    applications: ['Process Automation', 'Smart Manufacturing', 'SCADA Integration'],
  },
  {
    id: 'vfd',
    name: 'VFD Panels',
    shortDesc: 'Variable frequency drives for efficient motor control',
    specs: [
      'Power: 0.5 HP to 500 HP',
      'Brand: Schneider, ABB, Siemens',
      'Features: Energy saving, Soft start',
      'Protection: Complete electrical protection',
    ],
    applications: ['HVAC Systems', 'Pumps & Compressors', 'Conveyors'],
  },
  {
    id: 'apfc',
    name: 'APFC Panels',
    shortDesc: 'Automatic power factor correction for energy efficiency',
    specs: [
      'Range: 25 KVAR to 2000 KVAR',
      'Control: Microprocessor based',
      'Steps: Multi-step switching',
      'Accuracy: ±0.001 PF',
    ],
    applications: ['Power Factor Improvement', 'Energy Saving', 'Industrial Loads'],
  },
  {
    id: 'busduct',
    name: 'Bus Ducts & Rising Mains',
    shortDesc: 'Compact power distribution solutions',
    specs: [
      'Rating: Up to 6300A',
      'Type: Sandwich/Continuous',
      'Material: Aluminum/Copper',
      'IP Rating: IP55/IP65',
    ],
    applications: ['High-rise Buildings', 'Data Centers', 'Industrial Complexes'],
  },
];

// Contracting Process Steps
export const CONTRACTING_STEPS = [
  {
    step: 1,
    title: 'Site Visit',
    description: 'Initial assessment and requirement analysis',
    icon: 'MapPin',
  },
  {
    step: 2,
    title: 'Site Survey',
    description: 'Detailed technical survey and measurements',
    icon: 'Ruler',
  },
  {
    step: 3,
    title: 'Design & Drawings',
    description: 'Engineering design and AutoCAD drawings',
    icon: 'PenTool',
  },
  {
    step: 4,
    title: 'Procurement',
    description: 'Quality material sourcing and procurement',
    icon: 'ShoppingCart',
  },
  {
    step: 5,
    title: 'Installation',
    description: 'Professional on-site installation',
    icon: 'Wrench',
  },
  {
    step: 6,
    title: 'Testing & Commissioning',
    description: 'Complete testing and quality assurance',
    icon: 'CheckCircle',
  },
  {
    step: 7,
    title: 'Handover',
    description: 'Documentation and project handover',
    icon: 'FileCheck',
  },
];

// Leadership Team
export const LEADERSHIP = [
  {
    name: 'Group Head',
    role: 'Chairman & Managing Director',
    description: '25+ years in electrical industry leadership',
  },
  {
    name: 'Technical Head',
    role: 'Chief Technical Officer',
    description: 'Expert in automation and system integration',
  },
  {
    name: 'Finance Head',
    role: 'Chief Financial Officer',
    description: 'Strategic financial planning and operations',
  },
];
