/**
 * YENNIX Product Data Store
 * All product information, material codes, and cross-reference data
 */

const YENNIX_PRODUCTS = [
  // ==================== Component Seals ====================
  {
    id: "yn109",
    model: "YN109",
    slug: "yn109",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "YN109 Component Seal",
    shortName: "YN109",
    replaces: ["John Crane Type 109", "Burgmann M7N", "AESSEAL B05"],
    compatiblePumps: ["KSB", "Grundfos", "Ebara", "Lowara", "Wilo"],
    description: "The YN109 is a versatile component seal designed as a direct replacement for John Crane Type 109 and Burgmann M7N. Its robust design with elastomeric bellows provides excellent shaft followability and is insensitive to shaft deflections.",
    features: [
      "Elastomeric bellows design",
      "Independent of direction of rotation",
      "Shaft protection over entire seal length",
      "Seal face protection during installation",
      "Insensitive to shaft deflections"
    ],
    specs: {
      shaftDiameter: "10–100 mm",
      pressure: "≤ 1.2 MPa (12 bar)",
      temperature: "-30°C to +180°C",
      speed: "≤ 15 m/s"
    },
    dimensions: [
      { d: 18, D1: 32.0, D2: 33.0, L1: 19.5, L2: 7.5 },
      { d: 20, D1: 37.0, D2: 35.0, L1: 21.5, L2: 7.5 },
      { d: 22, D1: 37.0, D2: 37.0, L1: 21.5, L2: 7.5 },
      { d: 24, D1: 42.5, D2: 39.0, L1: 22.5, L2: 7.5 },
      { d: 25, D1: 42.5, D2: 40.0, L1: 23.0, L2: 7.5 },
      { d: 28, D1: 49.0, D2: 43.0, L1: 26.5, L2: 7.5 },
      { d: 30, D1: 49.0, D2: 45.0, L1: 26.5, L2: 7.5 },
      { d: 32, D1: 53.5, D2: 48.0, L1: 27.5, L2: 7.5 },
      { d: 35, D1: 53.5, D2: 51.0, L1: 29.5, L2: 7.5 },
      { d: 38, D1: 58.0, D2: 54.0, L1: 31.0, L2: 8.0 },
      { d: 40, D1: 65.0, D2: 56.0, L1: 33.0, L2: 8.0 },
      { d: 45, D1: 70.0, D2: 61.0, L1: 36.0, L2: 8.0 },
      { d: 50, D1: 75.0, D2: 66.0, L1: 38.0, L2: 8.0 },
      { d: 55, D1: 80.0, D2: 71.0, L1: 40.0, L2: 8.0 },
      { d: 60, D1: 85.0, D2: 76.0, L1: 42.0, L2: 8.0 },
      { d: 65, D1: 92.0, D2: 81.0, L1: 44.0, L2: 8.0 },
      { d: 70, D1: 98.0, D2: 86.0, L1: 46.0, L2: 8.0 },
      { d: 75, D1: 105.0, D2: 96.0, L1: 48.0, L2: 8.0 },
      { d: 80, D1: 112.0, D2: 101.0, L1: 50.0, L2: 8.0 },
      { d: 85, D1: 118.0, D2: 106.0, L1: 52.0, L2: 8.0 },
      { d: 90, D1: 125.0, D2: 111.0, L1: 54.0, L2: 8.0 },
      { d: 95, D1: 132.0, D2: 116.0, L1: 56.0, L2: 8.0 },
      { d: 100, D1: 140.0, D2: 126.0, L1: 58.0, L2: 8.0 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "YN109-A-V-S",
    applications: ["Water treatment", "Chemical processing", "General industrial pumps", "HVAC systems"],
    image: "/images/products/yn109-placeholder.jpg"
  },
  {
    id: "yn21",
    model: "YN21",
    slug: "yn21",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "YN21 Component Seal",
    shortName: "YN21",
    replaces: ["John Crane Type 21", "Flexibox F21"],
    compatiblePumps: ["KSB", "Grundfos", "Lowara", "Wilo", "CAPRARI"],
    description: "The YN21 is a pusher-type component seal designed as a direct replacement for the popular John Crane Type 21. Features a single spring design with O-ring secondary sealing for reliable performance in a wide range of applications.",
    features: [
      "Single spring pusher design",
      "O-ring secondary sealing",
      "Unbalanced, inside-mounted",
      "Direction of rotation independent",
      "Easy installation and maintenance"
    ],
    specs: {
      shaftDiameter: "12–70 mm",
      pressure: "≤ 1.0 MPa (10 bar)",
      temperature: "-20°C to +150°C",
      speed: "≤ 10 m/s"
    },
    dimensions: [
      { d: 12, D1: 24.0, D2: 23.0, L1: 15.0, L2: 6.6 },
      { d: 14, D1: 28.5, D2: 25.0, L1: 17.0, L2: 6.6 },
      { d: 16, D1: 28.5, D2: 27.0, L1: 17.0, L2: 6.6 },
      { d: 18, D1: 32.0, D2: 33.0, L1: 19.5, L2: 7.5 },
      { d: 20, D1: 37.0, D2: 35.0, L1: 21.5, L2: 7.5 },
      { d: 22, D1: 37.0, D2: 37.0, L1: 21.5, L2: 7.5 },
      { d: 24, D1: 42.5, D2: 39.0, L1: 22.5, L2: 7.5 },
      { d: 25, D1: 42.5, D2: 40.0, L1: 23.0, L2: 7.5 },
      { d: 28, D1: 49.0, D2: 43.0, L1: 26.5, L2: 7.5 },
      { d: 30, D1: 49.0, D2: 45.0, L1: 26.5, L2: 7.5 },
      { d: 32, D1: 53.5, D2: 48.0, L1: 27.5, L2: 7.5 },
      { d: 35, D1: 53.5, D2: 51.0, L1: 29.5, L2: 7.5 },
      { d: 38, D1: 58.0, D2: 54.0, L1: 31.0, L2: 8.0 },
      { d: 40, D1: 65.0, D2: 56.0, L1: 33.0, L2: 8.0 },
      { d: 45, D1: 70.0, D2: 61.0, L1: 36.0, L2: 8.0 },
      { d: 50, D1: 75.0, D2: 66.0, L1: 38.0, L2: 8.0 },
      { d: 55, D1: 80.0, D2: 71.0, L1: 40.0, L2: 8.0 },
      { d: 60, D1: 85.0, D2: 76.0, L1: 42.0, L2: 8.0 },
      { d: 65, D1: 92.0, D2: 81.0, L1: 44.0, L2: 8.0 },
      { d: 70, D1: 98.0, D2: 86.0, L1: 46.0, L2: 8.0 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel"]
    },
    defaultCode: "YN21-A-V-S",
    applications: ["Water pumps", "Pool & spa", "Industrial circulation", "Cooling systems"],
    image: "/images/products/yn21-placeholder.jpg"
  },
  {
    id: "yn1",
    model: "YN1",
    slug: "yn1",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "YN1 Component Seal",
    shortName: "YN1",
    replaces: ["Burgmann M7/M7N", "AESSEAL B02", "Vulcan 191"],
    compatiblePumps: ["KSB", "Grundfos", "Ebara", "Lowara", "WILO", "ABS"],
    description: "The YN1 is a single spring bellows seal designed as a replacement for Burgmann M7/M7N series. Provides excellent performance with its elastomeric bellows design that accommodates shaft misalignment and end play.",
    features: [
      "Elastomeric bellows construction",
      "Single spring design",
      "Rotating bellows unit",
      "Wide range of sizes available",
      "Versatile industrial application"
    ],
    specs: {
      shaftDiameter: "20–100 mm",
      pressure: "≤ 1.6 MPa (16 bar)",
      temperature: "-30°C to +200°C",
      speed: "≤ 12 m/s"
    },
    dimensions: [
      { d: 20, D1: 37.0, D2: 35.0, L1: 21.5, L2: 7.5 },
      { d: 22, D1: 37.0, D2: 37.0, L1: 21.5, L2: 7.5 },
      { d: 24, D1: 42.5, D2: 39.0, L1: 22.5, L2: 7.5 },
      { d: 25, D1: 42.5, D2: 40.0, L1: 23.0, L2: 7.5 },
      { d: 28, D1: 49.0, D2: 43.0, L1: 26.5, L2: 7.5 },
      { d: 30, D1: 49.0, D2: 45.0, L1: 26.5, L2: 7.5 },
      { d: 32, D1: 53.5, D2: 48.0, L1: 27.5, L2: 7.5 },
      { d: 35, D1: 53.5, D2: 51.0, L1: 29.5, L2: 7.5 },
      { d: 38, D1: 58.0, D2: 54.0, L1: 31.0, L2: 8.0 },
      { d: 40, D1: 65.0, D2: 56.0, L1: 33.0, L2: 8.0 },
      { d: 45, D1: 70.0, D2: 61.0, L1: 36.0, L2: 8.0 },
      { d: 50, D1: 75.0, D2: 66.0, L1: 38.0, L2: 8.0 },
      { d: 55, D1: 80.0, D2: 71.0, L1: 40.0, L2: 8.0 },
      { d: 60, D1: 85.0, D2: 76.0, L1: 42.0, L2: 8.0 },
      { d: 65, D1: 92.0, D2: 81.0, L1: 44.0, L2: 8.0 },
      { d: 70, D1: 98.0, D2: 86.0, L1: 46.0, L2: 8.0 },
      { d: 75, D1: 105.0, D2: 96.0, L1: 48.0, L2: 8.0 },
      { d: 80, D1: 112.0, D2: 101.0, L1: 50.0, L2: 8.0 },
      { d: 85, D1: 118.0, D2: 106.0, L1: 52.0, L2: 8.0 },
      { d: 90, D1: 125.0, D2: 111.0, L1: 54.0, L2: 8.0 },
      { d: 95, D1: 132.0, D2: 116.0, L1: 56.0, L2: 8.0 },
      { d: 100, D1: 140.0, D2: 126.0, L1: 58.0, L2: 8.0 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)", "K - Kalrez (FFKM)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "YN1-A-V-L",
    applications: ["Chemical processing", "Petrochemical", "Water treatment", "Pulp & paper"],
    image: "/images/products/yn1-placeholder.jpg"
  },
  {
    id: "yn502",
    model: "YN502",
    slug: "yn502",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "YN502 Component Seal",
    shortName: "YN502",
    replaces: ["John Crane Type 502", "Burgmann MG1"],
    compatiblePumps: ["KSB", "Grundfos", "Ebara", "Lowara", "Sulzer"],
    description: "The YN502 is a multi-spring component seal designed to replace John Crane Type 502 and Burgmann MG1. Its multi-spring design provides uniform face loading and excellent stability for demanding applications.",
    features: [
      "Multi-spring design for uniform face loading",
      "O-ring secondary seal",
      "Balanced and unbalanced options",
      "Wide operating range",
      "Interchangeable with major brands"
    ],
    specs: {
      shaftDiameter: "14–100 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +220°C",
      speed: "≤ 20 m/s"
    },
    dimensions: [
      { d: 14, D1: 28.0, D2: 25.0, L1: 18.5, L2: 7.0 },
      { d: 18, D1: 34.0, D2: 31.0, L1: 20.5, L2: 7.0 },
      { d: 20, D1: 38.0, D2: 35.0, L1: 22.5, L2: 7.0 },
      { d: 25, D1: 44.0, D2: 40.0, L1: 24.5, L2: 7.0 },
      { d: 30, D1: 50.0, D2: 45.0, L1: 27.5, L2: 7.5 },
      { d: 35, D1: 56.0, D2: 50.0, L1: 30.0, L2: 7.5 },
      { d: 40, D1: 62.0, D2: 56.0, L1: 33.0, L2: 8.0 },
      { d: 45, D1: 68.0, D2: 62.0, L1: 36.0, L2: 8.0 },
      { d: 50, D1: 75.0, D2: 68.0, L1: 38.0, L2: 8.0 },
      { d: 55, D1: 82.0, D2: 73.0, L1: 40.0, L2: 8.0 },
      { d: 60, D1: 88.0, D2: 80.0, L1: 43.0, L2: 8.0 },
      { d: 70, D1: 100.0, D2: 90.0, L1: 47.0, L2: 8.0 },
      { d: 80, D1: 112.0, D2: 101.0, L1: 51.0, L2: 8.0 },
      { d: 90, D1: 125.0, D2: 112.0, L1: 55.0, L2: 8.0 },
      { d: 100, D1: 140.0, D2: 126.0, L1: 59.0, L2: 8.0 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)", "A - AFLAS"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "YN502-A-V-L",
    applications: ["Petrochemical", "Refining", "Chemical processing", "High-temperature applications"],
    image: "/images/products/yn502-placeholder.jpg"
  },

  // ==================== Cartridge Seals ====================
  {
    id: "yn708",
    model: "YN708",
    slug: "yn708",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "YN708 Cartridge Seal",
    shortName: "YN708",
    replaces: ["John Crane Type 4610", "Burgmann MFL85N"],
    compatiblePumps: ["KSB", "Grundfos", "Flowserve", "Sulzer", "Ruhrpumpen"],
    description: "The YN708 is a single cartridge seal designed as a replacement for John Crane Type 4610. Its pre-assembled cartridge design simplifies installation and eliminates dimensional errors. Ideal for general purpose and chemical applications.",
    features: [
      "Pre-assembled cartridge unit",
      "No dimensional measuring required",
      "Built-in sleeve and gland plate",
      "Single seal configuration",
      "Easy installation and removal"
    ],
    specs: {
      shaftDiameter: "30–80 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +200°C",
      speed: "≤ 15 m/s"
    },
    dimensions: [
      { d: 30, D1: 65.0, D2: 50.0, L1: 52.0, L2: 18.0 },
      { d: 35, D1: 70.0, D2: 55.0, L1: 55.0, L2: 18.0 },
      { d: 40, D1: 78.0, D2: 60.0, L1: 58.0, L2: 18.0 },
      { d: 45, D1: 85.0, D2: 65.0, L1: 62.0, L2: 20.0 },
      { d: 50, D1: 92.0, D2: 70.0, L1: 65.0, L2: 20.0 },
      { d: 55, D1: 100.0, D2: 78.0, L1: 68.0, L2: 20.0 },
      { d: 60, D1: 108.0, D2: 85.0, L1: 72.0, L2: 22.0 },
      { d: 65, D1: 115.0, D2: 92.0, L1: 75.0, L2: 22.0 },
      { d: 70, D1: 122.0, D2: 98.0, L1: 78.0, L2: 22.0 },
      { d: 75, D1: 130.0, D2: 105.0, L1: 82.0, L2: 24.0 },
      { d: 80, D1: 138.0, D2: 112.0, L1: 85.0, L2: 24.0 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)", "K - Kalrez (FFKM)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "YN708-A-V-L",
    applications: ["Chemical pumps", "Refinery pumps", "High-pressure applications", "API 682 compliant"],
    image: "/images/products/yn708-placeholder.jpg"
  },
  {
    id: "yn560",
    model: "YN560",
    slug: "yn560",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "YN560 Cartridge Seal",
    shortName: "YN560",
    replaces: ["Burgmann MG12", "John Crane Type 5610", "AESSEAL CDSA"],
    compatiblePumps: ["KSB", "Grundfos", "Ebara", "Lowara", "Flygt"],
    description: "The YN560 is a cartridge seal designed as a replacement for Burgmann MG12 and John Crane Type 5610. Features a compact design with integrated sleeve, making it ideal for space-constrained installations.",
    features: [
      "Compact cartridge design",
      "Integrated sleeve and gland",
      "Reduced installation space",
      "Multiple seat options",
      "Double seal variant available"
    ],
    specs: {
      shaftDiameter: "25–75 mm",
      pressure: "≤ 2.0 MPa (20 bar)",
      temperature: "-30°C to +180°C",
      speed: "≤ 12 m/s"
    },
    dimensions: [
      { d: 25, D1: 58.0, D2: 44.0, L1: 48.0, L2: 16.0 },
      { d: 30, D1: 65.0, D2: 50.0, L1: 52.0, L2: 18.0 },
      { d: 35, D1: 70.0, D2: 55.0, L1: 55.0, L2: 18.0 },
      { d: 40, D1: 78.0, D2: 60.0, L1: 58.0, L2: 18.0 },
      { d: 45, D1: 85.0, D2: 65.0, L1: 62.0, L2: 20.0 },
      { d: 50, D1: 92.0, D2: 70.0, L1: 65.0, L2: 20.0 },
      { d: 55, D1: 100.0, D2: 78.0, L1: 68.0, L2: 20.0 },
      { d: 60, D1: 108.0, D2: 85.0, L1: 72.0, L2: 22.0 },
      { d: 65, D1: 115.0, D2: 92.0, L1: 75.0, L2: 22.0 },
      { d: 70, D1: 122.0, D2: 98.0, L1: 78.0, L2: 22.0 },
      { d: 75, D1: 130.0, D2: 105.0, L1: 82.0, L2: 24.0 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel"]
    },
    defaultCode: "YN560-A-V-L",
    applications: ["Water treatment", "Chemical processing", "Food & beverage", "Marine applications"],
    image: "/images/products/yn560-placeholder.jpg"
  },
  {
    id: "yn780",
    model: "YN780",
    slug: "yn780",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "YN780 Double Cartridge Seal",
    shortName: "YN780",
    replaces: ["John Crane Type 28LD", "Burgmann SH"],
    compatiblePumps: ["KSB", "Flowserve", "Sulzer", "Ruhrpumpen", "IDP"],
    description: "The YN780 is a double cartridge seal with back-to-back configuration. Designed for API 682 Plan 52 or Plan 53A buffer/barrier fluid systems. Perfect for hazardous and toxic media applications.",
    features: [
      "Double seal back-to-back design",
      "API 682 compliant",
      "Integral barrier fluid connection",
      "Heavy-duty construction",
      "For hazardous/toxic media"
    ],
    specs: {
      shaftDiameter: "30–100 mm",
      pressure: "≤ 4.0 MPa (40 bar)",
      temperature: "-40°C to +250°C",
      speed: "≤ 15 m/s"
    },
    dimensions: [
      { d: 30, D1: 72.0, D2: 55.0, L1: 78.0, L2: 28.0 },
      { d: 35, D1: 78.0, D2: 60.0, L1: 82.0, L2: 28.0 },
      { d: 40, D1: 85.0, D2: 65.0, L1: 86.0, L2: 30.0 },
      { d: 45, D1: 92.0, D2: 72.0, L1: 90.0, L2: 30.0 },
      { d: 50, D1: 100.0, D2: 78.0, L1: 94.0, L2: 32.0 },
      { d: 55, D1: 108.0, D2: 85.0, L1: 98.0, L2: 32.0 },
      { d: 60, D1: 115.0, D2: 92.0, L1: 102.0, L2: 34.0 },
      { d: 70, D1: 128.0, D2: 105.0, L1: 110.0, L2: 36.0 },
      { d: 80, D1: 142.0, D2: 118.0, L1: 118.0, L2: 38.0 },
      { d: 90, D1: 156.0, D2: 132.0, L1: 126.0, L2: 40.0 },
      { d: 100, D1: 170.0, D2: 145.0, L1: 134.0, L2: 42.0 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "K - Kalrez (FFKM)", "A - AFLAS"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276", "M - Monel"]
    },
    defaultCode: "YN780-A-V-L",
    applications: ["Oil & gas", "Petrochemical", "Toxic/hazardous media", "API refinery pumps"],
    image: "/images/products/yn780-placeholder.jpg"
  },

  // ==================== Custom & ODM Seals ====================
  {
    id: "yn-custom-flygt",
    model: "YN-FLYGT",
    slug: "yn-custom-flygt",
    category: "custom-seals",
    categoryName: "Custom & ODM Seals",
    name: "YN-FLYGT Replacement Seals",
    shortName: "YN-FLYGT",
    replaces: ["Flygt 2051", "Flygt 2052", "Flygt 2055", "Xylem original"],
    compatiblePumps: ["Flygt (Xylem)", "ABS", "Grindex"],
    description: "YN-FLYGT series are custom-designed replacement seals for Flygt submersible pumps. Cost-effective alternatives to original Flygt seals, offering equivalent quality at 3-4x lower price.",
    features: [
      "Direct replacement for Flygt pump seals",
      "Cost-effective alternative",
      "Submersible pump specific design",
      "Available for full Flygt pump range",
      "Quick delivery from stock"
    ],
    specs: {
      shaftDiameter: "20–120 mm",
      pressure: "≤ 1.0 MPa (10 bar)",
      temperature: "-10°C to +120°C",
      speed: "≤ 8 m/s"
    },
    dimensions: [],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel"]
    },
    defaultCode: "YN-FLYGT-A-V-L",
    applications: ["Submersible pumps", "Wastewater treatment", "Mining dewatering", "Construction"],
    image: "/images/products/yn-flygt-placeholder.jpg"
  },
  {
    id: "yn-odm-grundfos",
    model: "YN-ODM-GRF",
    slug: "yn-odm-grundfos",
    category: "custom-seals",
    categoryName: "Custom & ODM Seals",
    name: "YN-ODM Grundfos OEM Seals",
    shortName: "YN-ODM-GRF",
    replaces: ["Grundfos original seals", "CR series pump seals"],
    compatiblePumps: ["Grundfos CR", "Grundfos NK", "Grundfos HS"],
    description: "YN-ODM series for Grundfos pumps. Available as OEM replacement seals for Grundfos multistage centrifugal pumps and other popular Grundfos pump models.",
    features: [
      "OEM quality for Grundfos pumps",
      "Full range of Grundfos pump coverage",
      "Material options for different media",
      "Lower cost than original",
      "9 years of OEM supply experience"
    ],
    specs: {
      shaftDiameter: "16–80 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-20°C to +180°C",
      speed: "≤ 15 m/s"
    },
    dimensions: [],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel"]
    },
    defaultCode: "YN-ODM-GRF-A-V-S",
    applications: ["Multistage pumps", "Water supply", "Industrial circulation", "Booster systems"],
    image: "/images/products/yn-odm-grf-placeholder.jpg"
  },

  // ==================== Seal Parts & Accessories ====================
  {
    id: "yn-sleeve",
    model: "YN-SLEEVE",
    slug: "yn-sleeve",
    category: "parts",
    categoryName: "Seal Parts & Accessories",
    name: "Seal Sleeves",
    shortName: "Seal Sleeves",
    replaces: [],
    compatiblePumps: [],
    description: "Replacement seal sleeves for mechanical seals. Available in 304SS, 316SS, and Hastelloy materials. Custom dimensions available upon request.",
    features: [
      "Standard and custom sizes",
      "Multiple material options",
      "Precision machining",
      "Shaft protection",
      "Compatible with major seal brands"
    ],
    specs: {
      shaftDiameter: "10–200 mm",
      pressure: "N/A",
      temperature: "Depends on material",
      speed: "N/A"
    },
    dimensions: [],
    materials: {
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "YN-SLEEVE-L",
    applications: ["Seal repair", "Shaft protection", "OEM replacement"],
    image: "/images/products/yn-sleeve-placeholder.jpg"
  },
  {
    id: "yn-orings",
    model: "YN-ORING",
    slug: "yn-orings",
    category: "parts",
    categoryName: "Seal Parts & Accessories",
    name: "O-Rings & Elastomer Components",
    shortName: "O-Rings",
    replaces: [],
    compatiblePumps: [],
    description: "Quality O-rings and elastomer components for mechanical seal secondary sealing. Available in FKM, EPDM, NBR, FFKM, and AFLAS materials to suit various media and temperature requirements.",
    features: [
      "All standard and metric sizes",
      "Full range of elastomer materials",
      "High-quality compounds",
      "Temperature and chemical resistant",
      "Quick delivery"
    ],
    specs: {
      shaftDiameter: "6–500 mm (ID)",
      pressure: "N/A",
      temperature: "Depends on material (-60 to +327°C)",
      speed: "N/A"
    },
    dimensions: [],
    materials: {
      elastomer: ["V - FKM (Viton) -20 to +200°C", "E - EPDM -50 to +150°C", "B - NBR (Buna-N) -30 to +120°C", "K - Kalrez (FFKM) -20 to +327°C", "A - AFLAS -10 to +230°C"]
    },
    defaultCode: "YN-ORING-V",
    applications: ["Seal secondary sealing", "Pump repair", "Chemical resistant applications", "High-temperature applications"],
    image: "/images/products/yn-orings-placeholder.jpg"
  }
];

// Material Code System
const YENNIX_MATERIAL_CODES = {
  sealFace: {
    "A": { name: "Silicon Carbide (SiC)", description: "Excellent chemical resistance, high hardness, ideal for most applications" },
    "B": { name: "Tungsten Carbide (TC)", description: "Superior wear resistance, good for abrasive media" },
    "C": { name: "Carbon Graphite", description: "Self-lubricating, good for dry running, standard mating face" },
    "D": { name: "Aluminum Oxide (Ceramic)", description: "Cost-effective, good chemical resistance, for general applications" },
    "E": { name: "SiC + Carbon Graphite", description: "Optimal face combination for general purpose" }
  },
  elastomer: {
    "V": { name: "FKM (Viton)", description: "Wide chemical compatibility, -20°C to +200°C" },
    "E": { name: "EPDM", description: "Hot water, steam, alkaline solutions, -50°C to +150°C" },
    "B": { name: "NBR (Buna-N)", description: "Oils, fuels, general purpose, -30°C to +120°C" },
    "K": { name: "FFKM (Kalrez)", description: "Ultimate chemical resistance, -20°C to +327°C" },
    "A": { name: "AFLAS", description: "High temperature + amine resistance, -10°C to +230°C" }
  },
  metal: {
    "S": { name: "304 Stainless Steel", description: "Standard, good corrosion resistance for general applications" },
    "L": { name: "316 Stainless Steel", description: "Superior corrosion resistance, standard for chemical applications" },
    "H": { name: "Hastelloy C276", description: "Excellent corrosion resistance for aggressive media" },
    "M": { name: "Monel 400", description: "Hydrofluoric acid and seawater applications" },
    "T": { name: "Titanium", description: "Lightweight, excellent corrosion resistance for specialized applications" }
  }
};

// Cross-reference data
const YENNIX_CROSS_REF = [
  { brand: "John Crane", models: ["Type 109", "Type 21", "Type 502", "Type 4610", "Type 5610", "Type 28LD"], yennixProducts: ["YN109", "YN21", "YN502", "YN708", "YN560", "YN780"] },
  { brand: "Burgmann (EagleBurgmann)", models: ["M7", "M7N", "MG1", "MG12", "MG13", "MFL85N", "SH"], yennixProducts: ["YN1", "YN109", "YN502", "YN560", "YN708", "YN780"] },
  { brand: "AESSEAL", models: ["B02", "B05", "CDSA"], yennixProducts: ["YN1", "YN109", "YN560"] },
  { brand: "Flowserve", models: ["Type 16", "Type 48"], yennixProducts: ["YN502", "YN708"] },
  { brand: "Vulcan", models: ["191", "192", "193"], yennixProducts: ["YN1", "YN109"] },
  { brand: "Flygt (Xylem)", models: ["2051", "2052", "2055"], yennixProducts: ["YN-FLYGT"] }
];

// Pump brands
const YENNIX_PUMP_BRANDS = [
  "KSB", "Grundfos", "Ebara", "Lowara", "Wilo", "Flygt (Xylem)",
  "Sulzer", "Flowserve", "Ruhrpumpen", "CAPRARI", "ABS", "Grindex",
  "IDP", "Gorman-Rupp", "Alfa Laval"
];

// Helpers
function findProductBySlug(slug) {
  return YENNIX_PRODUCTS.find(p => p.slug === slug);
}

function searchProducts(query, filters) {
  let results = [...YENNIX_PRODUCTS];
  if (query && query.trim()) {
    const q = query.toLowerCase().trim();
    results = results.filter(p =>
      p.model.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.replaces.some(r => r.toLowerCase().includes(q)) ||
      p.compatiblePumps.some(b => b.toLowerCase().includes(q)) ||
      p.applications.some(a => a.toLowerCase().includes(q))
    );
  }
  if (filters && filters.category && filters.category !== 'all') {
    results = results.filter(p => p.category === filters.category);
  }
  if (filters && filters.pumpBrand && filters.pumpBrand !== 'all') {
    results = results.filter(p =>
      p.compatiblePumps.some(b => b.toLowerCase().includes(filters.pumpBrand.toLowerCase()))
    );
  }
  if (filters && filters.shaftMin) {
    results = results.filter(p => {
      const maxD = parseShaftMax(p.specs.shaftDiameter);
      return maxD >= parseInt(filters.shaftMin);
    });
  }
  if (filters && filters.shaftMax) {
    results = results.filter(p => {
      const minD = parseShaftMin(p.specs.shaftDiameter);
      return minD <= parseInt(filters.shaftMax);
    });
  }
  return results;
}

function parseShaftMin(str) {
  const match = str.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

function parseShaftMax(str) {
  const matches = str.match(/(\d+)/g);
  return matches && matches.length >= 2 ? parseInt(matches[matches.length - 1]) : 999;
}

function decodeMaterialCode(code) {
  const parts = code.split('-');
  if (parts.length < 4) return null;
  return {
    model: parts[0],
    sealFace: YENNIX_MATERIAL_CODES.sealFace[parts[1]] || null,
    elastomer: YENNIX_MATERIAL_CODES.elastomer[parts[2]] || null,
    metal: YENNIX_MATERIAL_CODES.metal[parts[3]] || null
  };
}
