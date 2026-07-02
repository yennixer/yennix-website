/**
 * YENNIX Product Data Store
 * All product information, material codes, and cross-reference data
 */

const YENNIX_PRODUCTS = [
  // ==================== Component Seals ====================
  {
    id: "m6",
    model: "M6",
    slug: "m6",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "M6 Inch-Size Component Seal",
    shortName: "M6",
    replaces: [],
    compatiblePumps: [],
    description: "The M6 is a compact component seal designed for inch-size shafts. Engineered for small pumps and rotating equipment in the North American market, it provides reliable sealing in a lightweight, easy-to-install package.",
    features: [
      "Inch-size shaft design (3/8\" to 1\")",
      "Compact footprint for space-constrained installations",
      "Elastomeric bellows construction",
      "Independent of direction of rotation",
      "Ideal for small centrifugal pumps"
    ],
    specs: {
      shaftDiameter: '0.375"–1.0" (inch)',
      pressure: "≤ 1.0 MPa (10 bar)",
      temperature: "-20°C to +150°C",
      speed: "≤ 10 m/s"
    },
    dimensions: [
      { d: "0.375", D1: 24, D2: 22.2, L1: 16.7, L2: 6.3, L: 23 },
      { d: "0.5", D1: 27, D2: 25.4, L1: 16.7, L2: 8, L: 24.7 },
      { d: "0.625", D1: 31, D2: 31.8, L1: 18.3, L2: 10.3, L: 28.6 },
      { d: "0.75", D1: 35, D2: 35, L1: 18.3, L2: 10.3, L: 28.6 },
      { d: "0.875", D1: 36.3, D2: 38.1, L1: 20.7, L2: 11.1, L: 31.7 },
      { d: "1", D1: 43.5, D2: 41.3, L1: 20.7, L2: 11, L: 31.7 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel"]
    },
    defaultCode: "M6-A-V-S",
    applications: ["Small centrifugal pumps", "HVAC systems", "Pool & spa", "General industrial"],
    image: "/images/products/m6.jpg"
  },
  {
    id: "m7n",
    model: "M7N",
    slug: "m7n",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "M7N Elastomeric Bellows Seal",
    shortName: "M7N",
    replaces: [],
    compatiblePumps: [],
    description: "The M7N is an elastomeric bellows mechanical seal designed as a direct replacement for Burgmann M7N. Its robust bellows design provides excellent shaft followability and is insensitive to shaft deflections, making it ideal for a wide range of industrial pump applications.",
    features: [
      "Elastomeric bellows construction",
      "Independent of direction of rotation",
      "Shaft protection over entire seal length",
      "Insensitive to shaft deflections",
      "Wide size range from 22 to 100 mm"
    ],
    specs: {
      shaftDiameter: "22.0–100.0 mm",
      pressure: "≤ 1.2 MPa (12 bar)",
      temperature: "-30°C to +180°C",
      speed: "≤ 15 m/s"
    },
    dimensions: [
      { d: 22, D1: 37, D2: 37, L1: 26, L2: 11.5, TotalWL: 37.5 },
      { d: 24, D1: 39, D2: 39, L1: 28.5, L2: 11.5, TotalWL: 40 },
      { d: 25, D1: 40, D2: 40, L1: 28.5, L2: 11.5, TotalWL: 40 },
      { d: 28, D1: 43, D2: 43, L1: 31, L2: 11.5, TotalWL: 42.5 },
      { d: 30, D1: 45, D2: 45, L1: 31, L2: 11.5, TotalWL: 42.5 },
      { d: 32, D1: 47, D2: 48, L1: 31, L2: 11.5, TotalWL: 42.5 },
      { d: 33, D1: 48, D2: 48, L1: 31, L2: 11.5, TotalWL: 42.5 },
      { d: 35, D1: 50, D2: 50, L1: 31, L2: 11.5, TotalWL: 42.5 },
      { d: 38, D1: 55, D2: 56, L1: 31, L2: 14, TotalWL: 45 },
      { d: 40, D1: 57, D2: 58, L1: 31, L2: 14, TotalWL: 45 },
      { d: 43, D1: 60, D2: 61, L1: 31, L2: 14, TotalWL: 45 },
      { d: 45, D1: 62, D2: 63, L1: 31, L2: 14, TotalWL: 45 },
      { d: 48, D1: 65, D2: 66, L1: 31, L2: 14, TotalWL: 45 },
      { d: 50, D1: 67, D2: 70, L1: 32.5, L2: 15, TotalWL: 47.5 },
      { d: 53, D1: 70, D2: 73, L1: 32.5, L2: 15, TotalWL: 47.5 },
      { d: 55, D1: 72, D2: 75, L1: 32.5, L2: 15, TotalWL: 47.5 },
      { d: 58, D1: 79, D2: 78, L1: 37.5, L2: 15, TotalWL: 52.5 },
      { d: 60, D1: 81, D2: 80, L1: 37.5, L2: 15, TotalWL: 52.5 },
      { d: 63, D1: 84, D2: 83, L1: 37.5, L2: 15, TotalWL: 52.5 },
      { d: 65, D1: 86, D2: 85, L1: 37.5, L2: 15, TotalWL: 52.5 },
      { d: 68, D1: 89, D2: 90, L1: 34.5, L2: 18, TotalWL: 52.5 },
      { d: 70, D1: 91, D2: 92, L1: 42, L2: 18, TotalWL: 60 },
      { d: 75, D1: 99, D2: 97, L1: 42, L2: 18, TotalWL: 60 },
      { d: 80, D1: 104, D2: 105, L1: 41.8, L2: 18.2, TotalWL: 60 },
      { d: 85, D1: 109, D2: 110, L1: 41.8, L2: 18.2, TotalWL: 60 },
      { d: 90, D1: 114, D2: 115, L1: 46.8, L2: 18.2, TotalWL: 65 },
      { d: 95, D1: 119, D2: 120, L1: 47.8, L2: 17.2, TotalWL: 65 },
      { d: 100, D1: 124, D2: 125, L1: 47.8, L2: 17.2, TotalWL: 65 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "M7N-A-V-S",
    applications: ["Water treatment", "Chemical processing", "General industrial pumps", "HVAC systems"],
    image: "/images/products/m7n.jpg"
  },
  {
    id: "m74d",
    model: "M74D",
    slug: "m74d",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "M74D Double Component Seal",
    shortName: "M74D",
    replaces: [],
    compatiblePumps: [],
    description: "The M74D is a double mechanical seal in back-to-back arrangement, designed for applications requiring enhanced safety and zero leakage. Suitable for hazardous, toxic, or high-pressure media where double sealing is mandatory.",
    features: [
      "Double seal back-to-back arrangement",
      "Enhanced safety for hazardous media",
      "Elastomeric bellows on both seal faces",
      "Direction of rotation independent",
      "Suitable for buffer/barrier fluid systems"
    ],
    specs: {
      shaftDiameter: "25.0–100.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-30°C to +180°C",
      speed: "≤ 12 m/s"
    },
    dimensions: [
      { d: 25, D1: 40, D2: 40, L1: 38, L2: 11.5, L: 61 },
      { d: 28, D1: 43, D2: 43, L1: 39, L2: 11.5, L: 62 },
      { d: 30, D1: 45, D2: 45, L1: 39, L2: 11.5, L: 62 },
      { d: 32, D1: 48, D2: 47, L1: 39, L2: 11.5, L: 62 },
      { d: 33, D1: 48, D2: 48, L1: 39, L2: 11.5, L: 62 },
      { d: 35, D1: 50, D2: 50, L1: 39, L2: 11.5, L: 62 },
      { d: 38, D1: 56, D2: 55, L1: 41, L2: 14, L: 69 },
      { d: 40, D1: 58, D2: 57, L1: 42, L2: 14, L: 70 },
      { d: 43, D1: 61, D2: 60, L1: 42, L2: 14, L: 70 },
      { d: 45, D1: 63, D2: 62, L1: 42, L2: 14, L: 70 },
      { d: 48, D1: 66, D2: 65, L1: 42, L2: 14, L: 70 },
      { d: 50, D1: 70, D2: 67, L1: 43, L2: 15, L: 73 },
      { d: 53, D1: 73, D2: 70, L1: 43, L2: 15, L: 73 },
      { d: 55, D1: 75, D2: 72, L1: 43, L2: 15, L: 73 },
      { d: 58, D1: 78, D2: 79, L1: 56, L2: 15, L: 86 },
      { d: 60, D1: 80, D2: 81, L1: 56, L2: 15, L: 86 },
      { d: 63, D1: 83, D2: 84, L1: 55, L2: 15, L: 85 },
      { d: 65, D1: 85, D2: 86, L1: 55, L2: 15, L: 85 },
      { d: 68, D1: 90, D2: 89, L1: 55, L2: 18, L: 91 },
      { d: 70, D1: 92, D2: 91, L1: 56, L2: 18, L: 92 },
      { d: 75, D1: 97, D2: 99, L1: 56, L2: 18, L: 92 },
      { d: 80, D1: 105, D2: 104, L1: 56, L2: 18.2, L: 92.4 },
      { d: 85, D1: 110, D2: 109, L1: 56, L2: 18.2, L: 92.4 },
      { d: 90, D1: 115, D2: 114, L1: 56, L2: 18.2, L: 92.4 },
      { d: 95, D1: 120, D2: 119, L1: 56, L2: 17.2, L: 90.4 },
      { d: 100, D1: 125, D2: 124, L1: 56, L2: 17.2, L: 90.4 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "M74D-A-V-L",
    applications: ["Chemical processing", "Toxic/hazardous media", "Petrochemical", "API 682 applications"],
    image: "/images/products/m74d.jpg"
  },
  {
    id: "m58u",
    model: "M58U",
    slug: "m58u",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "M58U High-Pressure Component Seal",
    shortName: "M58U",
    replaces: [],
    compatiblePumps: [],
    description: "The M58U is a high-pressure component seal engineered for demanding applications. Its robust construction with enhanced face loading provides reliable sealing under elevated pressure conditions, making it suitable for high-pressure pump services.",
    features: [
      "High-pressure rated design",
      "Enhanced face loading mechanism",
      "Elastomeric bellows construction",
      "O-ring secondary sealing",
      "Wide operating range for demanding services"
    ],
    specs: {
      shaftDiameter: "22.0–100.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-30°C to +200°C",
      speed: "≤ 15 m/s"
    },
    dimensions: [
      { d: 22, D1: 36, D2: 37, L1: 24, L2: 13.5, L: 37.5 },
      { d: 24, D1: 38, D2: 39, L1: 26.7, L2: 13.3, L: 40 },
      { d: 25, D1: 39, D2: 40, L1: 27, L2: 13, L: 40 },
      { d: 28, D1: 42, D2: 43, L1: 30, L2: 12.5, L: 42.5 },
      { d: 30, D1: 44, D2: 45, L1: 30.5, L2: 12, L: 42.5 },
      { d: 32, D1: 46, D2: 48, L1: 30.5, L2: 12, L: 42.5 },
      { d: 33, D1: 47, D2: 48, L1: 30.5, L2: 12, L: 42.5 },
      { d: 35, D1: 49, D2: 50, L1: 30.5, L2: 12, L: 42.5 },
      { d: 38, D1: 54, D2: 56, L1: 32, L2: 13, L: 45 },
      { d: 40, D1: 56, D2: 58, L1: 32, L2: 13, L: 45 },
      { d: 43, D1: 59, D2: 61, L1: 32, L2: 13, L: 45 },
      { d: 45, D1: 61, D2: 63, L1: 32, L2: 13, L: 45 },
      { d: 48, D1: 64, D2: 66, L1: 32, L2: 13, L: 45 },
      { d: 50, D1: 66, D2: 70, L1: 34, L2: 13.5, L: 47.5 },
      { d: 53, D1: 69, D2: 73, L1: 34, L2: 13.5, L: 47.5 },
      { d: 55, D1: 71, D2: 75, L1: 34, L2: 13.5, L: 47.5 },
      { d: 58, D1: 78, D2: 78, L1: 39, L2: 13.5, L: 52.5 },
      { d: 60, D1: 80, D2: 80, L1: 39, L2: 13.5, L: 52.5 },
      { d: 63, D1: 83, D2: 83, L1: 39, L2: 13.5, L: 52.5 },
      { d: 65, D1: 85, D2: 85, L1: 39, L2: 13.5, L: 52.5 },
      { d: 68, D1: 88, D2: 90, L1: 39, L2: 13.5, L: 52.5 },
      { d: 70, D1: 90, D2: 92, L1: 45.5, L2: 14.5, L: 60 },
      { d: 75, D1: 95, D2: 97, L1: 45.5, L2: 14.5, L: 60 },
      { d: 80, D1: 104, D2: 105, L1: 45, L2: 15, L: 60 },
      { d: 85, D1: 109, D2: 110, L1: 45, L2: 15, L: 60 },
      { d: 90, D1: 114, D2: 115, L1: 50, L2: 15, L: 65 },
      { d: 95, D1: 119, D2: 120, L1: 50, L2: 15, L: 65 },
      { d: 100, D1: 124, D2: 125, L1: 50, L2: 15, L: 65 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "M58U-A-V-L",
    applications: ["High-pressure pumps", "Chemical processing", "Petrochemical", "Refining"],
    image: "/images/products/m58u.jpg"
  },
  {
    id: "m59u",
    model: "M59U",
    slug: "m59u",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "M59U High-Pressure Component Seal",
    shortName: "M59U",
    replaces: [],
    compatiblePumps: [],
    description: "The M59U is a high-pressure component seal sharing the same dimension platform as the M58U. It features a balanced design optimized for high-pressure service, providing reliable performance in critical pump applications.",
    features: [
      "High-pressure balanced design",
      "Same dimension platform as M58U",
      "Elastomeric bellows construction",
      "O-ring secondary sealing",
      "Optimized for critical pump services"
    ],
    specs: {
      shaftDiameter: "22.0–100.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-30°C to +200°C",
      speed: "≤ 15 m/s"
    },
    dimensions: [
      { d: 22, D1: 36, D2: 37, L1: 24, L2: 13.5, L: 37.5 },
      { d: 24, D1: 38, D2: 39, L1: 26.7, L2: 13.3, L: 40 },
      { d: 25, D1: 39, D2: 40, L1: 27, L2: 13, L: 40 },
      { d: 28, D1: 42, D2: 43, L1: 30, L2: 12.5, L: 42.5 },
      { d: 30, D1: 44, D2: 45, L1: 30.5, L2: 12, L: 42.5 },
      { d: 32, D1: 46, D2: 48, L1: 30.5, L2: 12, L: 42.5 },
      { d: 33, D1: 47, D2: 48, L1: 30.5, L2: 12, L: 42.5 },
      { d: 35, D1: 49, D2: 50, L1: 30.5, L2: 12, L: 42.5 },
      { d: 38, D1: 54, D2: 56, L1: 32, L2: 13, L: 45 },
      { d: 40, D1: 56, D2: 58, L1: 32, L2: 13, L: 45 },
      { d: 43, D1: 59, D2: 61, L1: 32, L2: 13, L: 45 },
      { d: 45, D1: 61, D2: 63, L1: 32, L2: 13, L: 45 },
      { d: 48, D1: 64, D2: 66, L1: 32, L2: 13, L: 45 },
      { d: 50, D1: 66, D2: 70, L1: 34, L2: 13.5, L: 47.5 },
      { d: 53, D1: 69, D2: 73, L1: 34, L2: 13.5, L: 47.5 },
      { d: 55, D1: 71, D2: 75, L1: 34, L2: 13.5, L: 47.5 },
      { d: 58, D1: 78, D2: 78, L1: 39, L2: 13.5, L: 52.5 },
      { d: 60, D1: 80, D2: 80, L1: 39, L2: 13.5, L: 52.5 },
      { d: 63, D1: 83, D2: 83, L1: 39, L2: 13.5, L: 52.5 },
      { d: 65, D1: 85, D2: 85, L1: 39, L2: 13.5, L: 52.5 },
      { d: 68, D1: 88, D2: 90, L1: 39, L2: 13.5, L: 52.5 },
      { d: 70, D1: 90, D2: 92, L1: 45.5, L2: 14.5, L: 60 },
      { d: 75, D1: 95, D2: 97, L1: 45.5, L2: 14.5, L: 60 },
      { d: 80, D1: 104, D2: 105, L1: 45, L2: 15, L: 60 },
      { d: 85, D1: 109, D2: 110, L1: 45, L2: 15, L: 60 },
      { d: 90, D1: 114, D2: 115, L1: 50, L2: 15, L: 65 },
      { d: 95, D1: 119, D2: 120, L1: 50, L2: 15, L: 65 },
      { d: 100, D1: 124, D2: 125, L1: 50, L2: 15, L: 65 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "M59U-A-V-L",
    applications: ["High-pressure pumps", "Chemical processing", "Petrochemical", "Refining"],
    image: "/images/products/m59u.jpg"
  },
  {
    id: "mg01",
    model: "MG01",
    slug: "mg01",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "MG01 Multi-Spring Component Seal",
    shortName: "MG01",
    replaces: [],
    compatiblePumps: [],
    description: "The MG01 is a multi-spring component seal designed for reliable performance across a wide range of operating conditions. Its multi-spring mechanism provides uniform face loading and excellent stability, making it suitable for general-purpose and chemical applications.",
    features: [
      "Multi-spring design for uniform face loading",
      "O-ring secondary seal",
      "Rotating and stationary seat options",
      "Wide operating range",
      "Compact installation length"
    ],
    specs: {
      shaftDiameter: "10.0–100.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +220°C",
      speed: "≤ 20 m/s"
    },
    dimensions: [
      { d: 10, D1: 24, D2: 21, L1: 21.6, L2: 6.6 },
      { d: 12, D1: 24, D2: 23, L1: 21.6, L2: 6.6 },
      { d: 14, D1: 28.5, D2: 25, L1: 23.6, L2: 6.6 },
      { d: 16, D1: 28.5, D2: 27, L1: 23.6, L2: 6.6 },
      { d: 18, D1: 32, D2: 33, L1: 27, L2: 7.5 },
      { d: 20, D1: 37, D2: 35, L1: 29, L2: 7.5 },
      { d: 22, D1: 37, D2: 37, L1: 29, L2: 7.5 },
      { d: 24, D1: 42.5, D2: 39, L1: 30, L2: 7.5 },
      { d: 25, D1: 42.5, D2: 40, L1: 30.5, L2: 7.5 },
      { d: 28, D1: 49, D2: 43, L1: 34, L2: 7.5 },
      { d: 30, D1: 49, D2: 45, L1: 34, L2: 7.5 },
      { d: 32, D1: 53.5, D2: 48, L1: 35, L2: 7.5 },
      { d: 33, D1: 53.5, D2: 48, L1: 35, L2: 7.5 },
      { d: 35, D1: 57, D2: 50, L1: 36, L2: 7.5 },
      { d: 38, D1: 59, D2: 56, L1: 39, L2: 9 },
      { d: 40, D1: 62, D2: 58, L1: 39, L2: 9 },
      { d: 43, D1: 65.5, D2: 61, L1: 39, L2: 9 },
      { d: 45, D1: 68, D2: 63, L1: 39, L2: 9 },
      { d: 48, D1: 70.5, D2: 66, L1: 39.5, L2: 9 },
      { d: 50, D1: 74, D2: 70, L1: 40, L2: 9.5 },
      { d: 53, D1: 78.5, D2: 73, L1: 44, L2: 11 },
      { d: 55, D1: 81, D2: 75, L1: 46, L2: 11 },
      { d: 58, D1: 85.5, D2: 78, L1: 48, L2: 11 },
      { d: 60, D1: 88.5, D2: 80, L1: 49, L2: 11 },
      { d: 65, D1: 93.5, D2: 85, L1: 51, L2: 11 },
      { d: 68, D1: 96.5, D2: 90, L1: 51.3, L2: 11.3 },
      { d: 70, D1: 99.5, D2: 92, L1: 51.3, L2: 11.3 },
      { d: 75, D1: 107, D2: 97, L1: 51.3, L2: 11.3 },
      { d: 80, D1: 112, D2: 105, L1: 52, L2: 12 },
      { d: 85, D1: 120, D2: 110, L1: 55, L2: 14 },
      { d: 90, D1: 126.5, D2: 115, L1: 59, L2: 14 },
      { d: 95, D1: 131.5, D2: 120, L1: 60, L2: 14 },
      { d: 100, D1: 136.5, D2: 125, L1: 61, L2: 14 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)", "A - AFLAS"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "MG01-A-V-L",
    applications: ["Chemical processing", "Petrochemical", "Water treatment", "General industrial pumps"],
    image: "/images/products/mg01.jpg"
  },
  {
    id: "mg02",
    model: "MG02",
    slug: "mg02",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "MG02 Multi-Spring Component Seal",
    shortName: "MG02",
    replaces: [],
    compatiblePumps: [],
    description: "The MG02 is a multi-spring component seal with extended installation length, sharing the same face geometry as the MG01. Designed for applications requiring longer seal chambers, it provides the same reliable multi-spring performance with additional flexibility in installation.",
    features: [
      "Multi-spring design for uniform face loading",
      "Extended installation length variant",
      "O-ring secondary seal",
      "Same face geometry as MG01",
      "Compatible with longer seal chambers"
    ],
    specs: {
      shaftDiameter: "10.0–100.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +220°C",
      speed: "≤ 20 m/s"
    },
    dimensions: [
      { d: 10, D1: 24, D2: 21, L1: 32.5, L2: 6.6 },
      { d: 12, D1: 24, D2: 23, L1: 32.5, L2: 6.6 },
      { d: 14, D1: 28.5, D2: 25, L1: 35, L2: 6.6 },
      { d: 16, D1: 28.5, D2: 27, L1: 35, L2: 6.6 },
      { d: 18, D1: 32, D2: 33, L1: 37.5, L2: 7.5 },
      { d: 20, D1: 37, D2: 35, L1: 37.5, L2: 7.5 },
      { d: 22, D1: 37, D2: 37, L1: 37.5, L2: 7.5 },
      { d: 24, D1: 42.5, D2: 39, L1: 40, L2: 7.5 },
      { d: 25, D1: 42.5, D2: 40, L1: 40, L2: 7.5 },
      { d: 28, D1: 49, D2: 43, L1: 42.5, L2: 7.5 },
      { d: 30, D1: 49, D2: 45, L1: 42.5, L2: 7.5 },
      { d: 32, D1: 53.5, D2: 48, L1: 42.5, L2: 7.5 },
      { d: 33, D1: 53.5, D2: 48, L1: 42.5, L2: 7.5 },
      { d: 35, D1: 57, D2: 50, L1: 42.5, L2: 7.5 },
      { d: 38, D1: 59, D2: 56, L1: 45, L2: 9 },
      { d: 40, D1: 62, D2: 58, L1: 45, L2: 9 },
      { d: 43, D1: 65.5, D2: 61, L1: 45, L2: 9 },
      { d: 45, D1: 68, D2: 63, L1: 45, L2: 9 },
      { d: 48, D1: 70.5, D2: 66, L1: 45, L2: 9 },
      { d: 50, D1: 74, D2: 70, L1: 47.5, L2: 9.5 },
      { d: 53, D1: 78.5, D2: 73, L1: 47.5, L2: 11 },
      { d: 55, D1: 81, D2: 75, L1: 47.5, L2: 11 },
      { d: 58, D1: 85.5, D2: 78, L1: 52.5, L2: 11 },
      { d: 60, D1: 88.5, D2: 80, L1: 52.5, L2: 11 },
      { d: 65, D1: 93.5, D2: 85, L1: 52.5, L2: 11 },
      { d: 68, D1: 96.5, D2: 90, L1: 52.5, L2: 11.3 },
      { d: 70, D1: 99.5, D2: 92, L1: 60, L2: 11.3 },
      { d: 75, D1: 107, D2: 97, L1: 60, L2: 11.3 },
      { d: 80, D1: 112, D2: 105, L1: 60, L2: 12 },
      { d: 85, D1: 120, D2: 110, L1: 60, L2: 14 },
      { d: 90, D1: 126.5, D2: 115, L1: 65, L2: 14 },
      { d: 95, D1: 131.5, D2: 120, L1: 65, L2: 14 },
      { d: 100, D1: 136.5, D2: 125, L1: 65, L2: 14 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)", "A - AFLAS"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "MG02-A-V-L",
    applications: ["Chemical processing", "Petrochemical", "Water treatment", "General industrial pumps"],
    image: "/images/products/mg02.jpg"
  },
  {
    id: "mg03",
    model: "MG03",
    slug: "mg03",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "MG03 Multi-Spring Component Seal",
    shortName: "MG03",
    replaces: [],
    compatiblePumps: [],
    description: "The MG03 is a multi-spring component seal with the longest installation length in the MG series. Sharing the same compact face design, it accommodates the deepest seal chambers while maintaining the reliable multi-spring sealing performance.",
    features: [
      "Multi-spring design for uniform face loading",
      "Longest installation length in MG series",
      "O-ring secondary seal",
      "Same face geometry as MG01/MG02",
      "Accommodates deep seal chambers"
    ],
    specs: {
      shaftDiameter: "10.0–100.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +220°C",
      speed: "≤ 20 m/s"
    },
    dimensions: [
      { d: 10, D1: 24, D2: 21, L1: 40, L2: 6.6 },
      { d: 12, D1: 24, D2: 23, L1: 40, L2: 6.6 },
      { d: 14, D1: 28.5, D2: 25, L1: 40, L2: 6.6 },
      { d: 16, D1: 28.5, D2: 27, L1: 40, L2: 6.6 },
      { d: 18, D1: 32, D2: 33, L1: 45, L2: 7.5 },
      { d: 20, D1: 37, D2: 35, L1: 45, L2: 7.5 },
      { d: 22, D1: 37, D2: 37, L1: 45, L2: 7.5 },
      { d: 24, D1: 42.5, D2: 39, L1: 50, L2: 7.5 },
      { d: 25, D1: 42.5, D2: 40, L1: 50, L2: 7.5 },
      { d: 28, D1: 49, D2: 43, L1: 50, L2: 7.5 },
      { d: 30, D1: 49, D2: 45, L1: 55, L2: 7.5 },
      { d: 32, D1: 53.5, D2: 48, L1: 55, L2: 7.5 },
      { d: 33, D1: 53.5, D2: 48, L1: 55, L2: 7.5 },
      { d: 35, D1: 57, D2: 50, L1: 55, L2: 7.5 },
      { d: 38, D1: 59, D2: 56, L1: 55, L2: 9 },
      { d: 40, D1: 62, D2: 58, L1: 55, L2: 9 },
      { d: 43, D1: 65.5, D2: 61, L1: 60, L2: 9 },
      { d: 45, D1: 68, D2: 63, L1: 60, L2: 9 },
      { d: 48, D1: 70.5, D2: 66, L1: 60, L2: 9 },
      { d: 50, D1: 74, D2: 70, L1: 60, L2: 9.5 },
      { d: 53, D1: 78.5, D2: 73, L1: 70, L2: 11 },
      { d: 55, D1: 81, D2: 75, L1: 70, L2: 11 },
      { d: 58, D1: 85.5, D2: 78, L1: 70, L2: 11 },
      { d: 60, D1: 88.5, D2: 80, L1: 70, L2: 11 },
      { d: 65, D1: 93.5, D2: 85, L1: 80, L2: 11 },
      { d: 68, D1: 96.5, D2: 90, L1: 80, L2: 11.3 },
      { d: 70, D1: 99.5, D2: 92, L1: 80, L2: 11.3 },
      { d: 75, D1: 107, D2: 97, L1: 80, L2: 11.3 },
      { d: 80, D1: 112, D2: 105, L1: 90, L2: 12 },
      { d: 85, D1: 120, D2: 110, L1: 90, L2: 14 },
      { d: 90, D1: 126.5, D2: 115, L1: 90, L2: 14 },
      { d: 95, D1: 131.5, D2: 120, L1: 90, L2: 14 },
      { d: 100, D1: 136.5, D2: 125, L1: 90, L2: 14 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)", "A - AFLAS"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "MG03-A-V-L",
    applications: ["Chemical processing", "Petrochemical", "Water treatment", "General industrial pumps"],
    image: "/images/products/mg03.jpg"
  },
  {
    id: "mj92n",
    model: "MJ92N",
    slug: "mj92n",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "MJ92N Metal Bellows Seal",
    shortName: "MJ92N",
    replaces: [],
    compatiblePumps: [],
    description: "The MJ92N is a metal bellows mechanical seal designed as a direct replacement for Burgmann M92N. Its welded metal bellows construction eliminates dynamic O-rings, providing exceptional reliability in high-temperature and corrosive environments.",
    features: [
      "Welded metal bellows construction",
      "No dynamic O-rings — reduced hang-up risk",
      "High-temperature capability",
      "Direction of rotation independent",
      "Excellent chemical resistance"
    ],
    specs: {
      shaftDiameter: "18.0–100.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +400°C",
      speed: "≤ 20 m/s"
    },
    dimensions: [
      { d: 18, D1: 33, D2: 32, L1: 30.7, L2: 7, TotalWL: 37.7 },
      { d: 20, D1: 35, D2: 34, L1: 30.7, L2: 7, TotalWL: 37.7 },
      { d: 22, D1: 37, D2: 36, L1: 30.7, L2: 7, TotalWL: 37.7 },
      { d: 24, D1: 39, D2: 38, L1: 33.2, L2: 7, TotalWL: 40.2 },
      { d: 25, D1: 40, D2: 39, L1: 33.2, L2: 7, TotalWL: 40.2 },
      { d: 28, D1: 43, D2: 42, L1: 35.7, L2: 7, TotalWL: 42.7 },
      { d: 30, D1: 45, D2: 44, L1: 35.7, L2: 7, TotalWL: 42.7 },
      { d: 32, D1: 48, D2: 46, L1: 35.7, L2: 7, TotalWL: 42.7 },
      { d: 33, D1: 48, D2: 47, L1: 35.7, L2: 7, TotalWL: 42.7 },
      { d: 35, D1: 50, D2: 49, L1: 35.7, L2: 7, TotalWL: 42.7 },
      { d: 38, D1: 56, D2: 54, L1: 37.2, L2: 8, TotalWL: 45.2 },
      { d: 40, D1: 58, D2: 56, L1: 37.2, L2: 8, TotalWL: 45.2 },
      { d: 43, D1: 61, D2: 59, L1: 37.2, L2: 8, TotalWL: 45.2 },
      { d: 45, D1: 63, D2: 61, L1: 37.2, L2: 8, TotalWL: 45.2 },
      { d: 48, D1: 66, D2: 64, L1: 37.2, L2: 8, TotalWL: 45.2 },
      { d: 50, D1: 70, D2: 66, L1: 38.2, L2: 9.5, TotalWL: 47.7 },
      { d: 53, D1: 73, D2: 69, L1: 38.2, L2: 9.5, TotalWL: 47.7 },
      { d: 55, D1: 75, D2: 71, L1: 38.2, L2: 9.5, TotalWL: 47.7 },
      { d: 58, D1: 78, D2: 78, L1: 42.2, L2: 10.5, TotalWL: 52.7 },
      { d: 60, D1: 80, D2: 80, L1: 42.2, L2: 10.5, TotalWL: 52.7 },
      { d: 63, D1: 83, D2: 83, L1: 42.2, L2: 10.5, TotalWL: 52.7 },
      { d: 65, D1: 85, D2: 85, L1: 42.2, L2: 10.5, TotalWL: 52.7 },
      { d: 68, D1: 90, D2: 88, L1: 41.7, L2: 11, TotalWL: 52.7 },
      { d: 70, D1: 92, D2: 90, L1: 48.7, L2: 11.5, TotalWL: 60.2 },
      { d: 75, D1: 97, D2: 99, L1: 48.7, L2: 11.5, TotalWL: 60.2 },
      { d: 80, D1: 105, D2: 104, L1: 48.7, L2: 11.5, TotalWL: 60.2 },
      { d: 85, D1: 110, D2: 109, L1: 48.7, L2: 11.5, TotalWL: 60.2 },
      { d: 90, D1: 115, D2: 114, L1: 52.2, L2: 13, TotalWL: 65.2 },
      { d: 95, D1: 120, D2: 119, L1: 52.2, L2: 13, TotalWL: 65.2 },
      { d: 100, D1: 125, D2: 124, L1: 52.2, L2: 13, TotalWL: 65.2 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "G - Graphite"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "MJ92N-A-V-L",
    applications: ["High-temperature pumps", "Refining", "Petrochemical", "Hot oil service"],
    image: "/images/products/mj92n.jpg"
  },
  {
    id: "mr3",
    model: "MR3",
    slug: "mr3",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "MR3 Spring-Loaded Component Seal",
    shortName: "MR3",
    replaces: [],
    compatiblePumps: [],
    description: "The MR3 is a spring-loaded component seal with O-ring secondary sealing, designed for reliable performance in general-purpose pump applications. Its simple, robust construction ensures easy installation and long service life.",
    features: [
      "Single spring pusher design",
      "O-ring secondary sealing",
      "Unbalanced, inside-mounted",
      "Direction of rotation independent",
      "Easy installation and maintenance"
    ],
    specs: {
      shaftDiameter: "10.0–40.0 mm",
      pressure: "≤ 1.0 MPa (10 bar)",
      temperature: "-20°C to +150°C",
      speed: "≤ 10 m/s"
    },
    dimensions: [
      { d: 10, D1: 20, D2: 18.1, L1: 15, L2: 5.5, TotalWL: 20.5 },
      { d: 12, D1: 22, D2: 20.6, L1: 18, L2: 5.5, TotalWL: 23.5 },
      { d: 14, D1: 25, D2: 23.1, L1: 22, L2: 6, TotalWL: 28 },
      { d: 15, D1: 29, D2: 26.9, L1: 22, L2: 7, TotalWL: 29 },
      { d: 16, D1: 29, D2: 26.9, L1: 23, L2: 7, TotalWL: 30 },
      { d: 17, D1: 29, D2: 26.9, L1: 23, L2: 7, TotalWL: 30 },
      { d: 18, D1: 33, D2: 30.9, L1: 24, L2: 8, TotalWL: 32 },
      { d: 19, D1: 33, D2: 30.9, L1: 25, L2: 8, TotalWL: 33 },
      { d: 20, D1: 33, D2: 30.9, L1: 25, L2: 8, TotalWL: 33 },
      { d: 21, D1: 38, D2: 35.4, L1: 25, L2: 8, TotalWL: 33 },
      { d: 22, D1: 38, D2: 35.4, L1: 25, L2: 8, TotalWL: 33 },
      { d: 23, D1: 38, D2: 35.4, L1: 27, L2: 8, TotalWL: 35 },
      { d: 24, D1: 38, D2: 35.4, L1: 27, L2: 8, TotalWL: 35 },
      { d: 25, D1: 40, D2: 38.2, L1: 27, L2: 8.5, TotalWL: 35.5 },
      { d: 28, D1: 46, D2: 43.3, L1: 29, L2: 9, TotalWL: 38 },
      { d: 29, D1: 46, D2: 43.3, L1: 30, L2: 9, TotalWL: 39 },
      { d: 30, D1: 46, D2: 43.3, L1: 30, L2: 9, TotalWL: 39 },
      { d: 32, D1: 46, D2: 43.3, L1: 30, L2: 9, TotalWL: 39 },
      { d: 33, D1: 48, D2: 53.5, L1: 39, L2: 11.5, TotalWL: 50.5 },
      { d: 35, D1: 50, D2: 53.5, L1: 39, L2: 11.5, TotalWL: 50.5 },
      { d: 38, D1: 56, D2: 60.5, L1: 39, L2: 11.5, TotalWL: 50.5 },
      { d: 40, D1: 58, D2: 60.5, L1: 39, L2: 11.5, TotalWL: 50.5 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel"]
    },
    defaultCode: "MR3-A-V-S",
    applications: ["Water pumps", "Industrial circulation", "Cooling systems", "General purpose pumps"],
    image: "/images/products/mr3.jpg"
  },
  {
    id: "mu3",
    model: "MU3",
    slug: "mu3",
    category: "component-seals",
    categoryName: "Component Seals",
    name: "MU3 Chemical Component Seal",
    shortName: "MU3",
    replaces: [],
    compatiblePumps: [],
    description: "The MU3 is a chemical service component seal designed for aggressive media and corrosive environments. Its compact design with PTFE or elastomeric secondary sealing options makes it ideal for chemical pumps and similar demanding applications.",
    features: [
      "Chemical-resistant design",
      "PTFE and elastomer secondary seal options",
      "Compact installation length",
      "Balanced seal face geometry",
      "Suitable for corrosive media"
    ],
    specs: {
      shaftDiameter: "10.0–40.0 mm",
      pressure: "≤ 1.6 MPa (16 bar)",
      temperature: "-20°C to +180°C",
      speed: "≤ 12 m/s"
    },
    dimensions: [
      { d: 10, D1: 20, D2: 21, L1: 15, L2: 7, TotalWL: 22 },
      { d: 12, D1: 22, D2: 23, L1: 18, L2: 7, TotalWL: 25 },
      { d: 14, D1: 25, D2: 25, L1: 22, L2: 7, TotalWL: 29 },
      { d: 16, D1: 29, D2: 27, L1: 23, L2: 7, TotalWL: 30 },
      { d: 18, D1: 33, D2: 33, L1: 24, L2: 10, TotalWL: 34 },
      { d: 20, D1: 33, D2: 35, L1: 25, L2: 10, TotalWL: 35 },
      { d: 22, D1: 38, D2: 37, L1: 25, L2: 10, TotalWL: 35 },
      { d: 24, D1: 38, D2: 39, L1: 27, L2: 10, TotalWL: 37 },
      { d: 25, D1: 40, D2: 40, L1: 27, L2: 10, TotalWL: 37 },
      { d: 28, D1: 46, D2: 43, L1: 29, L2: 10, TotalWL: 39 },
      { d: 30, D1: 46, D2: 45, L1: 30, L2: 10, TotalWL: 40 },
      { d: 32, D1: 46, D2: 48, L1: 30, L2: 10, TotalWL: 40 },
      { d: 33, D1: 48, D2: 48, L1: 39, L2: 10, TotalWL: 49 },
      { d: 35, D1: 50, D2: 50, L1: 39, L2: 10, TotalWL: 49 },
      { d: 38, D1: 58, D2: 56, L1: 42, L2: 13, TotalWL: 55 },
      { d: 40, D1: 58, D2: 58, L1: 42, L2: 13, TotalWL: 55 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)", "K - Kalrez (FFKM)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "MU3-A-V-L",
    applications: ["Chemical pumps", "Corrosive media", "Pharmaceutical", "Acid and alkali service"],
    image: "/images/products/mu3.jpg"
  },
  // ==================== Cartridge Seals ====================
  {
    id: "m680",
    model: "M680",
    slug: "m680",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "M680 Spring Cartridge Seal",
    shortName: "M680",
    replaces: [],
    compatiblePumps: [],
    description: "The M680 is a spring-loaded cartridge seal available in both inch and metric shaft sizes. Its pre-assembled cartridge design simplifies installation and eliminates dimensional errors, while the multiple spring mechanism provides uniform face loading for reliable performance.",
    features: [
      "Pre-assembled cartridge unit",
      "Available in inch and metric sizes",
      "Multiple spring mechanism for uniform face loading",
      "No dimensional measuring required",
      "Includes sleeve and gland plate"
    ],
    specs: {
      shaftDiameter: "18.0–105.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +220°C",
      speed: "≤ 20 m/s"
    },
    dimensions: [
      { d: 18, D1: 32, D2: 0, L1: 27.5, L2: 0 },
      { d: 20, D1: 33.3, D2: 0, L1: 27.5, L2: 0 },
      { d: 22, D1: 36, D2: 0, L1: 27.5, L2: 0 },
      { d: 24, D1: 38.1, D2: 0, L1: 30, L2: 0 },
      { d: 25, D1: 39, D2: 0, L1: 30, L2: 0 },
      { d: 28, D1: 42, D2: 0, L1: 32.5, L2: 0 },
      { d: 30, D1: 44, D2: 0, L1: 32.5, L2: 0 },
      { d: 32, D1: 46, D2: 0, L1: 32.5, L2: 0 },
      { d: 33, D1: 47, D2: 0, L1: 32.5, L2: 0 },
      { d: 35, D1: 49.2, D2: 0, L1: 32.5, L2: 0 },
      { d: 38, D1: 52.4, D2: 0, L1: 34, L2: 0 },
      { d: 40, D1: 55.6, D2: 0, L1: 34, L2: 0 },
      { d: 43, D1: 58.7, D2: 0, L1: 34, L2: 0 },
      { d: 45, D1: 58.7, D2: 0, L1: 34, L2: 0 },
      { d: 48, D1: 61.9, D2: 0, L1: 34, L2: 0 },
      { d: 50, D1: 65.1, D2: 0, L1: 34.5, L2: 0 },
      { d: 53, D1: 68.3, D2: 0, L1: 34.5, L2: 0 },
      { d: 55, D1: 71, D2: 0, L1: 34.5, L2: 0 },
      { d: 60, D1: 74.6, D2: 0, L1: 39.5, L2: 0 },
      { d: 65, D1: 84.1, D2: 0, L1: 38.5, L2: 0 },
      { d: 70, D1: 87.3, D2: 0, L1: 45, L2: 0 },
      { d: 75, D1: 95.3, D2: 0, L1: 45, L2: 0 },
      { d: 80, D1: 98.4, D2: 0, L1: 44.5, L2: 0 },
      { d: 85, D1: 104.8, D2: 0, L1: 44.5, L2: 0 },
      { d: 90, D1: 108, D2: 0, L1: 49.5, L2: 0 },
      { d: 95, D1: 114.3, D2: 0, L1: 49.5, L2: 0 },
      { d: 100, D1: 120.7, D2: 0, L1: 49.5, L2: 0 },
      { d: 105, D1: 131.7, D2: 0, L1: 48.3, L2: 0 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "M680-A-V-L",
    applications: ["General industrial pumps", "Chemical processing", "Water treatment", "API 682 compliant"],
    image: "/images/products/m680.jpg"
  },
  {
    id: "m2100s",
    model: "M2100S",
    slug: "m2100s",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "M2100S Cartridge Seal",
    shortName: "M2100S",
    replaces: [],
    compatiblePumps: [],
    description: "The M2100S is a cartridge seal with short installation length variant. Its pre-assembled design ensures correct installation without field measuring, while the compact length makes it ideal for space-constrained seal chambers.",
    features: [
      "Pre-assembled cartridge unit",
      "Short installation length (S variant)",
      "O-ring secondary sealing",
      "No dimensional measuring required",
      "Easy installation and removal"
    ],
    specs: {
      shaftDiameter: "10.0–100.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +220°C",
      speed: "≤ 20 m/s"
    },
    dimensions: [
      { d: 10, D1: 20, D2: 22, L1: 20, L2: 5 },
      { d: 12, D1: 22, D2: 23, L1: 21, L2: 6 },
      { d: 14, D1: 24, D2: 25, L1: 21, L2: 6 },
      { d: 16, D1: 26, D2: 27, L1: 21, L2: 6 },
      { d: 18, D1: 32, D2: 33, L1: 26, L2: 6 },
      { d: 20, D1: 34, D2: 35, L1: 26, L2: 6 },
      { d: 22, D1: 36, D2: 37, L1: 26, L2: 6 },
      { d: 24, D1: 38, D2: 39, L1: 26, L2: 6 },
      { d: 25, D1: 39, D2: 40, L1: 26, L2: 6 },
      { d: 28, D1: 42, D2: 43, L1: 32, L2: 6 },
      { d: 30, D1: 44, D2: 45, L1: 33, L2: 7 },
      { d: 32, D1: 46, D2: 48, L1: 33, L2: 7 },
      { d: 33, D1: 47, D2: 48, L1: 33, L2: 7 },
      { d: 35, D1: 49, D2: 50, L1: 34, L2: 8 },
      { d: 38, D1: 54, D2: 56, L1: 38, L2: 8 },
      { d: 40, D1: 56, D2: 58, L1: 38, L2: 8 },
      { d: 43, D1: 59, D2: 61, L1: 38, L2: 8 },
      { d: 45, D1: 61, D2: 63, L1: 38, L2: 8 },
      { d: 48, D1: 64, D2: 66, L1: 40, L2: 10 },
      { d: 50, D1: 66, D2: 70, L1: 40, L2: 10 },
      { d: 53, D1: 69, D2: 73, L1: 40, L2: 10 },
      { d: 55, D1: 71, D2: 75, L1: 40, L2: 10 },
      { d: 58, D1: 78, D2: 78, L1: 43, L2: 10 },
      { d: 60, D1: 80, D2: 80, L1: 45, L2: 12 },
      { d: 63, D1: 83, D2: 83, L1: 45, L2: 12 },
      { d: 65, D1: 85, D2: 85, L1: 45, L2: 12 },
      { d: 68, D1: 88, D2: 90, L1: 45, L2: 12 },
      { d: 70, D1: 90, D2: 92, L1: 45, L2: 12 },
      { d: 75, D1: 99, D2: 97, L1: 52, L2: 12 },
      { d: 80, D1: 104, D2: 105, L1: 52.5, L2: 12.5 },
      { d: 85, D1: 109, D2: 110, L1: 54.2, L2: 14 },
      { d: 90, D1: 114, D2: 115, L1: 54.2, L2: 14 },
      { d: 95, D1: 119, D2: 120, L1: 54.2, L2: 14 },
      { d: 100, D1: 124, D2: 125, L1: 54.2, L2: 14 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)", "A - AFLAS"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "M2100S-A-V-L",
    applications: ["Chemical pumps", "General industrial", "Water treatment", "Refining"],
    image: "/images/products/m2100s.jpg"
  },
  {
    id: "m2100n",
    model: "M2100N",
    slug: "m2100n",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "M2100N Cartridge Seal",
    shortName: "M2100N",
    replaces: [],
    compatiblePumps: [],
    description: "The M2100N is a cartridge seal with normal/standard installation length variant. Sharing the same face geometry as the M2100S, it provides the standard seal chamber fit for a wide range of pump models.",
    features: [
      "Pre-assembled cartridge unit",
      "Standard installation length (N variant)",
      "O-ring secondary sealing",
      "No dimensional measuring required",
      "Compatible with standard seal chambers"
    ],
    specs: {
      shaftDiameter: "10.0–100.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +220°C",
      speed: "≤ 20 m/s"
    },
    dimensions: [
      { d: 10, D1: 20, D2: 22, L1: 40, L2: 5 },
      { d: 12, D1: 22, D2: 23, L1: 40, L2: 6 },
      { d: 14, D1: 24, D2: 25, L1: 40, L2: 6 },
      { d: 16, D1: 26, D2: 27, L1: 40, L2: 6 },
      { d: 18, D1: 32, D2: 33, L1: 45, L2: 6 },
      { d: 20, D1: 34, D2: 35, L1: 45, L2: 6 },
      { d: 22, D1: 36, D2: 37, L1: 45, L2: 6 },
      { d: 24, D1: 38, D2: 39, L1: 50, L2: 6 },
      { d: 25, D1: 39, D2: 40, L1: 50, L2: 6 },
      { d: 28, D1: 42, D2: 43, L1: 50, L2: 6 },
      { d: 30, D1: 44, D2: 45, L1: 55, L2: 7 },
      { d: 32, D1: 46, D2: 48, L1: 55, L2: 7 },
      { d: 33, D1: 47, D2: 48, L1: 55, L2: 7 },
      { d: 35, D1: 49, D2: 50, L1: 55, L2: 8 },
      { d: 38, D1: 54, D2: 56, L1: 55, L2: 8 },
      { d: 40, D1: 56, D2: 58, L1: 55, L2: 8 },
      { d: 43, D1: 59, D2: 61, L1: 60, L2: 8 },
      { d: 45, D1: 61, D2: 63, L1: 60, L2: 8 },
      { d: 48, D1: 64, D2: 66, L1: 60, L2: 10 },
      { d: 50, D1: 66, D2: 70, L1: 60, L2: 10 },
      { d: 53, D1: 69, D2: 73, L1: 70, L2: 10 },
      { d: 55, D1: 71, D2: 75, L1: 70, L2: 10 },
      { d: 58, D1: 78, D2: 78, L1: 70, L2: 10 },
      { d: 60, D1: 80, D2: 80, L1: 70, L2: 12 },
      { d: 63, D1: 83, D2: 83, L1: 70, L2: 12 },
      { d: 65, D1: 85, D2: 85, L1: 80, L2: 12 },
      { d: 68, D1: 88, D2: 90, L1: 80, L2: 12 },
      { d: 70, D1: 90, D2: 92, L1: 80, L2: 12 },
      { d: 75, D1: 99, D2: 97, L1: 80, L2: 12 },
      { d: 80, D1: 104, D2: 105, L1: 90, L2: 12.5 },
      { d: 85, D1: 109, D2: 110, L1: 91.7, L2: 14 },
      { d: 90, D1: 114, D2: 115, L1: 91.7, L2: 14 },
      { d: 95, D1: 119, D2: 120, L1: 91.7, L2: 14 },
      { d: 100, D1: 124, D2: 125, L1: 91.7, L2: 14 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)", "A - AFLAS"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "M2100N-A-V-L",
    applications: ["Chemical pumps", "General industrial", "Water treatment", "Refining"],
    image: "/images/products/m2100n.jpg"
  },
  {
    id: "m2100k",
    model: "M2100K",
    slug: "m2100k",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "M2100K Cartridge Seal",
    shortName: "M2100K",
    replaces: [],
    compatiblePumps: [],
    description: "The M2100K is a cartridge seal with extended installation length variant. Designed for deeper seal chambers, it shares the same reliable face geometry as the M2100 series while providing additional insertion depth.",
    features: [
      "Pre-assembled cartridge unit",
      "Extended installation length (K variant)",
      "O-ring secondary sealing",
      "No dimensional measuring required",
      "Accommodates deep seal chambers"
    ],
    specs: {
      shaftDiameter: "10.0–100.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +220°C",
      speed: "≤ 20 m/s"
    },
    dimensions: [
      { d: 10, D1: 20, D2: 22, L1: 32.5, L2: 5 },
      { d: 12, D1: 22, D2: 23, L1: 32.5, L2: 6 },
      { d: 14, D1: 24, D2: 25, L1: 35, L2: 6 },
      { d: 16, D1: 26, D2: 27, L1: 35, L2: 6 },
      { d: 18, D1: 32, D2: 33, L1: 37.5, L2: 6 },
      { d: 20, D1: 34, D2: 35, L1: 37.5, L2: 6 },
      { d: 22, D1: 36, D2: 37, L1: 37.5, L2: 6 },
      { d: 24, D1: 38, D2: 39, L1: 40, L2: 6 },
      { d: 25, D1: 39, D2: 40, L1: 40, L2: 6 },
      { d: 28, D1: 42, D2: 43, L1: 42.5, L2: 6 },
      { d: 30, D1: 44, D2: 45, L1: 42.5, L2: 7 },
      { d: 32, D1: 46, D2: 48, L1: 42.5, L2: 7 },
      { d: 33, D1: 47, D2: 48, L1: 42.5, L2: 7 },
      { d: 35, D1: 49, D2: 50, L1: 42.5, L2: 8 },
      { d: 38, D1: 54, D2: 56, L1: 45, L2: 8 },
      { d: 40, D1: 56, D2: 58, L1: 45, L2: 8 },
      { d: 43, D1: 59, D2: 61, L1: 45, L2: 8 },
      { d: 45, D1: 61, D2: 63, L1: 45, L2: 8 },
      { d: 48, D1: 64, D2: 66, L1: 45, L2: 10 },
      { d: 50, D1: 66, D2: 70, L1: 47.5, L2: 10 },
      { d: 53, D1: 69, D2: 73, L1: 47.5, L2: 10 },
      { d: 55, D1: 71, D2: 75, L1: 47.5, L2: 10 },
      { d: 58, D1: 78, D2: 78, L1: 52.5, L2: 10 },
      { d: 60, D1: 80, D2: 80, L1: 52.5, L2: 12 },
      { d: 63, D1: 83, D2: 83, L1: 52.5, L2: 12 },
      { d: 65, D1: 85, D2: 85, L1: 52.5, L2: 12 },
      { d: 68, D1: 88, D2: 90, L1: 52.5, L2: 12 },
      { d: 70, D1: 90, D2: 92, L1: 60, L2: 12 },
      { d: 75, D1: 99, D2: 97, L1: 60, L2: 12 },
      { d: 80, D1: 104, D2: 105, L1: 60, L2: 12.5 },
      { d: 85, D1: 109, D2: 110, L1: 61.7, L2: 14 },
      { d: 90, D1: 114, D2: 115, L1: 66.7, L2: 14 },
      { d: 95, D1: 119, D2: 120, L1: 66.7, L2: 14 },
      { d: 100, D1: 124, D2: 125, L1: 66.7, L2: 14 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)", "A - AFLAS"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "M2100K-A-V-L",
    applications: ["Chemical pumps", "General industrial", "Water treatment", "Refining"],
    image: "/images/products/m2100k.jpg"
  },
  {
    id: "mt21",
    model: "MT21",
    slug: "mt21",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "MT21 Inch-Size Cartridge Seal",
    shortName: "MT21",
    replaces: [],
    compatiblePumps: [],
    description: "The MT21 is an inch-size cartridge seal designed for the North American pump market. Its pre-assembled cartridge design eliminates field measuring and installation errors, while the inch-size shaft range covers the most common pump models.",
    features: [
      "Inch-size shaft design (3/8\" to 3\")",
      "Pre-assembled cartridge unit",
      "No dimensional measuring required",
      "O-ring secondary sealing",
      "Ideal for North American pump models"
    ],
    specs: {
      shaftDiameter: '0.375"–3.0" (inch)',
      pressure: "≤ 2.0 MPa (20 bar)",
      temperature: "-30°C to +180°C",
      speed: "≤ 15 m/s"
    },
    dimensions: [
      { d: "0.375", D1: 21.5, D2: 22.2, L1: 22.2, L2: 6.3, L: 28.5 },
      { d: "0.5", D1: 23, D2: 25.4, L1: 22.2, L2: 8, L: 30.2 },
      { d: "0.625", D1: 26.5, D2: 31.8, L1: 22.2, L2: 10.3, L: 32.5 },
      { d: "0.75", D1: 30.5, D2: 35, L1: 22.2, L2: 10.3, L: 32.5 },
      { d: "0.875", D1: 34.5, D2: 38.1, L1: 24, L2: 10.3, L: 34.3 },
      { d: "1", D1: 40, D2: 41.3, L1: 25.4, L2: 11, L: 36.4 },
      { d: "1.125", D1: 44.5, D2: 44.5, L1: 27, L2: 11, L: 38 },
      { d: "1.25", D1: 47, D2: 47.7, L1: 27, L2: 11, L: 38 },
      { d: "1.375", D1: 51.5, D2: 50.8, L1: 28.5, L2: 11, L: 39.5 },
      { d: "1.5", D1: 55, D2: 54, L1: 28.5, L2: 11, L: 39.5 },
      { d: "1.625", D1: 58, D2: 60.3, L1: 35, L2: 12.7, L: 47.7 },
      { d: "1.75", D1: 61.5, D2: 63.5, L1: 35, L2: 12.7, L: 47.7 },
      { d: "1.875", D1: 65.5, D2: 66.7, L1: 38, L2: 12.7, L: 50.7 },
      { d: "2", D1: 70, D2: 69.9, L1: 38, L2: 12.7, L: 50.7 },
      { d: "2.125", D1: 75, D2: 76.2, L1: 43, L2: 14.3, L: 57.3 },
      { d: "2.25", D1: 79, D2: 79.4, L1: 43, L2: 14.3, L: 57.3 },
      { d: "2.375", D1: 82, D2: 82.6, L1: 46, L2: 14.3, L: 60.3 },
      { d: "2.5", D1: 86, D2: 85.7, L1: 46, L2: 14.3, L: 60.3 },
      { d: "2.625", D1: 91.5, D2: 85.7, L1: 49, L2: 16, L: 65 },
      { d: "2.75", D1: 93, D2: 88.9, L1: 49, L2: 16, L: 65 },
      { d: "2.875", D1: 99, D2: 95.3, L1: 52.5, L2: 16, L: 68.5 },
      { d: "3", D1: 99, D2: 98.4, L1: 52.5, L2: 16, L: 68.5 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel"]
    },
    defaultCode: "MT21-A-V-S",
    applications: ["North American pumps", "Chemical processing", "Water treatment", "General industrial"],
    image: "/images/products/mt21.jpg"
  },
  {
    id: "mt21d",
    model: "MT21D",
    slug: "mt21d",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "MT21D Metric Cartridge Seal",
    shortName: "MT21D",
    replaces: [],
    compatiblePumps: [],
    description: "The MT21D is the metric version of the MT21 cartridge seal. Designed for European and Asian pump models, it shares the same reliable cartridge design with metric shaft sizing for seamless integration.",
    features: [
      "Metric shaft design (16 to 75 mm)",
      "Pre-assembled cartridge unit",
      "No dimensional measuring required",
      "Same design as MT21 in metric sizing",
      "Wide range of pump compatibility"
    ],
    specs: {
      shaftDiameter: "16.0–75.0 mm",
      pressure: "≤ 2.0 MPa (20 bar)",
      temperature: "-30°C to +180°C",
      speed: "≤ 15 m/s"
    },
    dimensions: [
      { d: 16, D1: 26.5, D2: 27, L1: 25.7, L2: 10.3, L: 36 },
      { d: 18, D1: 30.5, D2: 33, L1: 27.2, L2: 10.3, L: 37.5 },
      { d: 20, D1: 34.5, D2: 35, L1: 27.2, L2: 10.3, L: 37.5 },
      { d: 22, D1: 40, D2: 37, L1: 27.2, L2: 11, L: 38.2 },
      { d: 24, D1: 40, D2: 39, L1: 29, L2: 11, L: 40 },
      { d: 25, D1: 40.2, D2: 40, L1: 29, L2: 11, L: 40 },
      { d: 28, D1: 47, D2: 43, L1: 31.5, L2: 11, L: 42.5 },
      { d: 30, D1: 47, D2: 45, L1: 31.5, L2: 11, L: 42.5 },
      { d: 32, D1: 50.5, D2: 48, L1: 31.5, L2: 11, L: 42.5 },
      { d: 33, D1: 51.5, D2: 48, L1: 31.5, L2: 11, L: 42.5 },
      { d: 35, D1: 55, D2: 50, L1: 31.5, L2: 11, L: 42.5 },
      { d: 38, D1: 58, D2: 56, L1: 34, L2: 11, L: 45 },
      { d: 40, D1: 61.5, D2: 58, L1: 32.3, L2: 12.7, L: 45 },
      { d: 43, D1: 61.5, D2: 61, L1: 32.3, L2: 12.7, L: 45 },
      { d: 45, D1: 61.5, D2: 63, L1: 32.3, L2: 12.7, L: 45 },
      { d: 48, D1: 65.5, D2: 66, L1: 32.3, L2: 12.7, L: 45 },
      { d: 50, D1: 70, D2: 70, L1: 34.8, L2: 12.7, L: 47.5 },
      { d: 53, D1: 74, D2: 73, L1: 33.3, L2: 14.3, L: 47.599999999999994 },
      { d: 55, D1: 76, D2: 75, L1: 33.3, L2: 14.3, L: 47.599999999999994 },
      { d: 58, D1: 79, D2: 78, L1: 38.3, L2: 14.3, L: 52.599999999999994 },
      { d: 60, D1: 82, D2: 80, L1: 38.3, L2: 14.3, L: 52.599999999999994 },
      { d: 63, D1: 86, D2: 83, L1: 38.3, L2: 14.3, L: 52.599999999999994 },
      { d: 65, D1: 87, D2: 85, L1: 36, L2: 16, L: 52 },
      { d: 68, D1: 91.5, D2: 90, L1: 36, L2: 16, L: 52 },
      { d: 70, D1: 93, D2: 92, L1: 44, L2: 16, L: 60 },
      { d: 73, D1: 99, D2: 93, L1: 44, L2: 16, L: 60 },
      { d: 75, D1: 99, D2: 97, L1: 44, L2: 16, L: 60 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel"]
    },
    defaultCode: "MT21D-A-V-S",
    applications: ["European/Asian pumps", "Chemical processing", "Water treatment", "General industrial"],
    image: "/images/products/mt21d.jpg"
  },
  {
    id: "mt32",
    model: "MT32",
    slug: "mt32",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "MT32 Cartridge Seal",
    shortName: "MT32",
    replaces: [],
    compatiblePumps: [],
    description: "The MT32 is a compact cartridge seal designed for small to medium pump sizes. Its pre-assembled design with integrated sleeve ensures correct installation, while the compact dimensions make it suitable for space-constrained applications.",
    features: [
      "Pre-assembled cartridge unit",
      "Compact design for small pumps",
      "O-ring secondary sealing",
      "Integrated sleeve",
      "Easy installation and removal"
    ],
    specs: {
      shaftDiameter: "10.0–80.0 mm",
      pressure: "≤ 1.6 MPa (16 bar)",
      temperature: "-20°C to +180°C",
      speed: "≤ 12 m/s"
    },
    dimensions: [
      { d: 10, D1: 20, D2: 19.2, L1: 16.9, L2: 6.6 },
      { d: 12, D1: 22, D2: 21.6, L1: 17.4, L2: 5.6 },
      { d: 14, D1: 24, D2: 24.6, L1: 17.4, L2: 5.6 },
      { d: 16, D1: 26, D2: 28, L1: 17.4, L2: 7.5 },
      { d: 18, D1: 31, D2: 30, L1: 20.5, L2: 8 },
      { d: 20, D1: 34, D2: 36, L1: 22, L2: 8 },
      { d: 22, D1: 36, D2: 35, L1: 23.5, L2: 7.5 },
      { d: 24, D1: 38, D2: 38, L1: 25, L2: 7.5 },
      { d: 25, D1: 39, D2: 38, L1: 26.5, L2: 7.5 },
      { d: 28, D1: 42, D2: 42, L1: 26.5, L2: 9 },
      { d: 30, D1: 44, D2: 45, L1: 26.5, L2: 10.5 },
      { d: 32, D1: 46, D2: 48, L1: 28.5, L2: 10.5 },
      { d: 35, D1: 49, D2: 52, L1: 28.5, L2: 11 },
      { d: 38, D1: 54, D2: 55, L1: 32.2, L2: 10.3 },
      { d: 40, D1: 56, D2: 58, L1: 34.7, L2: 10.8 },
      { d: 45, D1: 61, D2: 64, L1: 39.2, L2: 11.6 },
      { d: 48, D1: 61, D2: 68.4, L1: 44.7, L2: 11.6 },
      { d: 50, D1: 66, D2: 69.3, L1: 45.7, L2: 11.6 },
      { d: 55, D1: 71, D2: 75.4, L1: 49, L2: 13.3 },
      { d: 58, D1: 78, D2: 78.4, L1: 55, L2: 13.3 },
      { d: 60, D1: 79, D2: 80.4, L1: 55, L2: 13.3 },
      { d: 65, D1: 85, D2: 85.4, L1: 54.3, L2: 13 },
      { d: 68, D1: 88, D2: 91.5, L1: 56.3, L2: 13.7 },
      { d: 70, D1: 90, D2: 92, L1: 56.3, L2: 13 },
      { d: 75, D1: 98, D2: 99, L1: 56.3, L2: 14 },
      { d: 80, D1: 103, D2: 104, L1: 59.3, L2: 15 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel"]
    },
    defaultCode: "MT32-A-V-S",
    applications: ["Small centrifugal pumps", "Water treatment", "Chemical processing", "General industrial"],
    image: "/images/products/mt32.jpg"
  },
  {
    id: "mt37",
    model: "MT37",
    slug: "mt37",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "MT37 Cartridge Seal",
    shortName: "MT37",
    replaces: [],
    compatiblePumps: [],
    description: "The MT37 is a cartridge seal sharing the same dimension platform as the MT32. Designed for medium to large pump sizes, it provides the same reliable cartridge sealing performance with extended size coverage.",
    features: [
      "Pre-assembled cartridge unit",
      "Same platform as MT32",
      "O-ring secondary sealing",
      "Integrated sleeve",
      "Extended size range"
    ],
    specs: {
      shaftDiameter: "10.0–80.0 mm",
      pressure: "≤ 1.6 MPa (16 bar)",
      temperature: "-20°C to +180°C",
      speed: "≤ 12 m/s"
    },
    dimensions: [
      { d: 10, D1: 20, D2: 19.2, L1: 16.9, L2: 6.6 },
      { d: 12, D1: 22, D2: 21.6, L1: 17.4, L2: 5.6 },
      { d: 14, D1: 24, D2: 24.6, L1: 17.4, L2: 5.6 },
      { d: 16, D1: 26, D2: 28, L1: 17.4, L2: 7.5 },
      { d: 18, D1: 31, D2: 30, L1: 20.5, L2: 8 },
      { d: 20, D1: 34, D2: 36, L1: 22, L2: 8 },
      { d: 22, D1: 36, D2: 35, L1: 23.5, L2: 7.5 },
      { d: 24, D1: 38, D2: 38, L1: 25, L2: 7.5 },
      { d: 25, D1: 39, D2: 38, L1: 26.5, L2: 7.5 },
      { d: 28, D1: 42, D2: 42, L1: 26.5, L2: 9 },
      { d: 30, D1: 44, D2: 45, L1: 26.5, L2: 10.5 },
      { d: 32, D1: 46, D2: 48, L1: 28.5, L2: 10.5 },
      { d: 35, D1: 49, D2: 52, L1: 28.5, L2: 11 },
      { d: 38, D1: 54, D2: 55, L1: 32.2, L2: 10.3 },
      { d: 40, D1: 56, D2: 58, L1: 34.7, L2: 10.8 },
      { d: 45, D1: 61, D2: 64, L1: 39.2, L2: 11.6 },
      { d: 48, D1: 61, D2: 68.4, L1: 44.7, L2: 11.6 },
      { d: 50, D1: 66, D2: 69.3, L1: 45.7, L2: 11.6 },
      { d: 55, D1: 71, D2: 75.4, L1: 49, L2: 13.3 },
      { d: 58, D1: 78, D2: 78.4, L1: 55, L2: 13.3 },
      { d: 60, D1: 79, D2: 80.4, L1: 55, L2: 13.3 },
      { d: 65, D1: 85, D2: 85.4, L1: 54.3, L2: 13 },
      { d: 68, D1: 88, D2: 91.5, L1: 56.3, L2: 13.7 },
      { d: 70, D1: 90, D2: 92, L1: 56.3, L2: 13 },
      { d: 75, D1: 98, D2: 99, L1: 56.3, L2: 14 },
      { d: 80, D1: 103, D2: 104, L1: 59.3, L2: 15 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel"]
    },
    defaultCode: "MT37-A-V-S",
    applications: ["Medium centrifugal pumps", "Water treatment", "Chemical processing", "General industrial"],
    image: "/images/products/mt37.jpg"
  },
  {
    id: "mt80",
    model: "MT80",
    slug: "mt80",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "MT80 Cartridge Seal",
    shortName: "MT80",
    replaces: [],
    compatiblePumps: [],
    description: "The MT80 is a cartridge seal designed for heavy-duty industrial pump applications. Its robust pre-assembled construction ensures reliable sealing performance in demanding operating conditions.",
    features: [
      "Pre-assembled cartridge unit",
      "Heavy-duty construction",
      "O-ring secondary sealing",
      "No dimensional measuring required",
      "Designed for demanding applications"
    ],
    specs: {
      shaftDiameter: "Contact us for details",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +220°C",
      speed: "≤ 20 m/s"
    },
    dimensions: [],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "MT80-A-V-L",
    applications: ["Heavy-duty pumps", "Chemical processing", "Petrochemical", "Refining"],
    image: "/images/products/mt80.jpg"
  },
  {
    id: "mt560dc",
    model: "MT560DC",
    slug: "mt560dc",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "MT560DC Double Cartridge Seal",
    shortName: "MT560DC",
    replaces: [],
    compatiblePumps: [],
    description: "The MT560DC is a double cartridge seal designed for submersible pump applications. It features separate inboard and outboard seal configurations with various seat types (vulcanized and cup) for optimal performance in pump shaft sealing arrangements.",
    features: [
      "Double cartridge seal design",
      "Separate inboard and outboard configurations",
      "Multiple seat type options (vulcanized / cup)",
      "Designed for submersible pump applications",
      "Configurable pump shaft arrangements"
    ],
    specs: {
      shaftDiameter: "25–50 mm (per shaft)",
      pressure: "≤ 1.6 MPa (16 bar)",
      temperature: "-20°C to +150°C",
      speed: "≤ 10 m/s"
    },
    dimensions: [],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel"]
    },
    defaultCode: "MT560DC-A-V-S",
    applications: ["Submersible pumps", "Wastewater treatment", "Mining dewatering", "Flygt-type pumps"],
    image: "/images/products/mt560dc.jpg"
  },
  {
    id: "mt560d",
    model: "MT560D",
    slug: "mt560d",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "MT560D Double Cartridge Seal",
    shortName: "MT560D",
    replaces: [],
    compatiblePumps: [],
    description: "The MT560D is a double cartridge seal designed for demanding double-seal applications. It provides dual barrier protection for hazardous and toxic media services, ensuring zero emissions to the environment.",
    features: [
      "Double cartridge seal design",
      "Dual barrier protection",
      "Pre-assembled unit",
      "For hazardous/toxic media",
      "API 682 compliant"
    ],
    specs: {
      shaftDiameter: "Contact us for details",
      pressure: "≤ 4.0 MPa (40 bar)",
      temperature: "-40°C to +250°C",
      speed: "≤ 15 m/s"
    },
    dimensions: [],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "K - Kalrez (FFKM)"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "MT560D-A-V-L",
    applications: ["Hazardous media", "Toxic service", "API refinery pumps", "Double-seal applications"],
    image: "/images/products/mt560d.jpg"
  },
  {
    id: "mt502",
    model: "MT502",
    slug: "mt502",
    category: "cartridge-seals",
    categoryName: "Cartridge Seals",
    name: "MT502 Cartridge Seal",
    shortName: "MT502",
    replaces: [],
    compatiblePumps: [],
    description: "The MT502 is a cartridge seal designed for a wide range of pump applications. Its pre-assembled cartridge unit simplifies installation and ensures correct seal setting, while the robust construction provides reliable sealing across demanding operating conditions.",
    features: [
      "Pre-assembled cartridge unit",
      "No dimensional measuring required",
      "Wide size range from 14 to 100 mm",
      "O-ring secondary sealing",
      "Easy installation and removal"
    ],
    specs: {
      shaftDiameter: "14.0–100.0 mm",
      pressure: "≤ 2.5 MPa (25 bar)",
      temperature: "-40°C to +220°C",
      speed: "≤ 20 m/s"
    },
    dimensions: [
      { d: 14, D1: 24, D2: 25, L1: 23, L2: 12, L: 35 },
      { d: 16, D1: 26, D2: 27, L1: 23, L2: 12, L: 35 },
      { d: 18, D1: 32, D2: 33, L1: 24, L2: 13.5, L: 37.5 },
      { d: 20, D1: 34, D2: 35, L1: 24, L2: 13.5, L: 37.5 },
      { d: 22, D1: 36, D2: 37, L1: 24, L2: 13.5, L: 37.5 },
      { d: 24, D1: 38, D2: 39, L1: 26.7, L2: 13.3, L: 40 },
      { d: 25, D1: 39, D2: 40, L1: 27, L2: 13, L: 40 },
      { d: 28, D1: 42, D2: 43, L1: 30, L2: 12.5, L: 42.5 },
      { d: 30, D1: 44, D2: 45, L1: 30.5, L2: 12, L: 42.5 },
      { d: 32, D1: 46, D2: 48, L1: 30.5, L2: 12, L: 42.5 },
      { d: 33, D1: 47, D2: 48, L1: 30.5, L2: 12, L: 42.5 },
      { d: 35, D1: 49, D2: 50, L1: 30.5, L2: 12, L: 42.5 },
      { d: 38, D1: 54, D2: 56, L1: 32, L2: 13, L: 45 },
      { d: 40, D1: 56, D2: 58, L1: 32, L2: 13, L: 45 },
      { d: 43, D1: 59, D2: 61, L1: 32, L2: 13, L: 45 },
      { d: 45, D1: 61, D2: 63, L1: 32, L2: 13, L: 45 },
      { d: 48, D1: 64, D2: 66, L1: 32, L2: 13, L: 45 },
      { d: 50, D1: 66, D2: 70, L1: 34, L2: 13.5, L: 47.5 },
      { d: 53, D1: 69, D2: 73, L1: 34, L2: 13.5, L: 47.5 },
      { d: 55, D1: 71, D2: 75, L1: 34, L2: 13.5, L: 47.5 },
      { d: 58, D1: 78, D2: 78, L1: 39, L2: 13.5, L: 52.5 },
      { d: 60, D1: 80, D2: 80, L1: 39, L2: 13.5, L: 52.5 },
      { d: 63, D1: 83, D2: 83, L1: 39, L2: 13.5, L: 52.5 },
      { d: 65, D1: 85, D2: 85, L1: 39, L2: 13.5, L: 52.5 },
      { d: 68, D1: 88, D2: 90, L1: 39, L2: 13.5, L: 52.5 },
      { d: 70, D1: 89, D2: 92, L1: 45.5, L2: 14.5, L: 60 },
      { d: 75, D1: 96, D2: 97, L1: 45.5, L2: 14.5, L: 60 },
      { d: 80, D1: 104, D2: 105, L1: 45, L2: 15, L: 60 },
      { d: 85, D1: 108, D2: 110, L1: 45, L2: 15, L: 60 },
      { d: 90, D1: 114, D2: 115, L1: 50, L2: 15, L: 65 },
      { d: 95, D1: 118, D2: 120, L1: 50, L2: 15, L: 65 },
      { d: 100, D1: 124, D2: 125, L1: 50, L2: 15, L: 65 }
    ],
    materials: {
      sealFace: ["A - Silicon Carbide (SiC)", "B - Tungsten Carbide (TC)", "C - Carbon Graphite"],
      elastomer: ["V - FKM (Viton)", "E - EPDM", "B - NBR (Buna-N)", "A - AFLAS"],
      metal: ["S - 304 Stainless Steel", "L - 316 Stainless Steel", "H - Hastelloy C276"]
    },
    defaultCode: "MT502-A-V-L",
    applications: ["Chemical pumps", "Petrochemical", "Refining", "General industrial"],
    image: "/images/products/mt502.jpg"
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
  { brand: "Burgmann (EagleBurgmann)", models: ["M7N", "M92N", "MG1", "MG12", "MG13"], yennixProducts: ["M7N", "MJ92N", "MG01", "MG02", "MG03"] },
  { brand: "John Crane", models: ["Type 1", "Type 21", "Type 502", "Type 4610"], yennixProducts: ["MR3", "MT502"] },
  { brand: "AESSEAL", models: ["B02", "B05", "CDSA"], yennixProducts: ["M7N", "M680"] },
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
