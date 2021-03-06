
const adhesives = [
  {
    name: "65-301",
    glue: "cold glue",
    type: "Partial Copolymer Resin",
    image: "",
    description: "ADSPEC 65-301 is a partial copolymer resin that has excellent adhesion to difficult substrates",
    industries: "Folding Cartons, Can Labels, Assembly",
    color: "White",
    packaging: "30, 55 gallon Drums, Totes or Pails",
    advantages: "ADSPEC 65-301 conforms to federal specifications 121.2520 for food packaging",
    "shelf life": "3 months"
  },
  {
    name: '3003',
    glue: "cold glue",
    type: "dextrin",
    image: "images/liquid-drum.jpg", 
    description: "High Tack Dextrin based adhesive with excellent stability, designed for bonding paper and corrugated substrates", 
    industries: "Bag and Box",
    color: "amber",
    packaging: "30, 55 gallon Drums, Totes or Pails",
    advantages: "ADSPEC# 3003 conforms to federal specifications 121.2520 for food packaging",
    "shelf life": "3 months"
  },
  {
    name: '4302',
    glue: "cold glue",
    type: "resin paste",
    image: "",
    description: "ADSPEC 65-301 is a partial copolymer resin that has excellent adhesion to difficult substrates",
    industries: "bag",
    color: "opaque",
    packaging: "30, 55 gallon Drums, Totes or Pails",
    advantages: "ADSPEC# 4302 conforms to federal specification composition requirements of indirect food additive regulations 21 CFR 175.105 ADHESIVES",
    "shelf life": "3 months"
  },
  {
    name: '5525',
    glue: "cold glue",
    type: "Homopolymer",
    image: "",
    description: "ADSPEC# 5525 is formulated synthetic resin emulsion that develops high initial wet tack with good latitude. It machine well",
    industries: "Corrugated",
    color:"Wet-White / Dry Clear",
    packaging: "30, 55 gallon Drums, Totes or Pails",
    advantages: "ADSPEC# 5525 conforms to federal specification composition requirements of indirect food additive regulations 21 CFR 175.105 ADHESIVES",
    "shelf life": "3 months"
  },
  {
    name: '5690',
    glue: "cold glue",
    type: "Homopolymer",
    image: "",
    description: "ADSPEC# 5690 is a fast tacking adhesives developed for tube winding and solid fiber laminating. It is ready for use, but may be diluted with water if desired",
    industries: "Corrugated",
    color: "opaque",
    packaging: "30, 55 gallon Drums, Totes or Pails",
    advantages: "ADSPEC# 5690 conforms to federal specifications 121.2520 for food packaging",
    "shelf life": "3 months"
  },
  {
    name: '5890',
    glue: "cold glue",
    type: "Homopolymer",
    image: "",
    description: "ADSPEC# 5690 is a fast tacking adhesives developed for tube winding and solid fiber laminating. It is ready for use, but may be diluted with water if desired",
    industries: "Corrugated",
    color: "opaque",
    packaging: "30, 55 gallon Drums, Totes or Pails",
    advantages: "ADSPEC# 5690 conforms to federal specifications 121.2520 for food packaging",
    "shelf life": "3 months"
  },
  {
    name: '85-301',
    glue: "cold glue",
    type: "Copolymer",
    image: "",
    description: "ADSPEC# 85-301 is a formulated synthetic resin emulsion that develops excellent initial wet tack with good latitude. It machines well and is used for hard to stick surfaces",
    industries: "Packaging",
    color: "Wet-White / Dry Clear",
    packaging: "30, 55 gallon Drums, Totes or Pails",
    advantages: "ADSPEC# 85-301 confirms to federal specification composition requirements of indirect food additive regulations 21 CFR 175.105 ADHESIVES",
    "shelf life": "3 months"
  },
  {
    name: 'fg3000',
    glue: "pressure sensitive",
    type: "Fugitive Glue",
    image: "",
    description: "Low Tack",
    industries: "",
    color: "clear",
    packaging: "pellets",
    "shelf life": "2 years",
    advantages: ["designed for removable applications like credit card attachments"]
  },
  {
    name: 'fg6500',
    glue: "pressure sensitive",
    type: "Fugitive Glue",
    image: "",
    description: "Mail/Credit Card",
    industries: "",
    color: "white/clear",
    packaging: "",
    "shelf life": "2 years",
    advantages: ["designed for removable applications like credit card attachments"]
  },
  {
    name: 'hm980',
    glue: "hot melt",
    type: "High Temp Heavily Coating Wax Box Case Seal",
    image: "",
    description: "Wax Box Case Seal",
    industries: "Meat and Poultry",
    color: "light yellow",
    packaging: "pellets",
    "shelf life": "2 years",
    advantages: ["Chemically penetrates through coating vs. raising temperatures", "100% Fiber tear on most difficult applications", "Will bond double sided -heavy waxed surfaces", "Excellent thermal stability", "High tack / Fast set", "Freezer grade", "Bonds to a wide range of difficult substrates" ]
  },
  {
    name: 'hm2505',
    glue: "hot melt",
    type: "Low Temp Difficult Coating Case Seal",
    image: "",
    description: "Premium Case Seal",
    industries: "Frozen Foods, Holographic folding cartons",
    color: "light yellow",
    packaging: "pellets",
    "shelf life": "2 years",
    advantages: ["Freezer Grade: Performs extremely well in cold environments", "Safety: The severity of a burn depends on the length of time that the area is held above the burn temperature. For example, 1 gramme of a traditional 350°, F hot melt requires 18 seconds to cool down below 180F, and will be constantly burning during those 18 seconds. Applied at 250°F, only 70°F above the burn temperature, Low Temperature hot Melts will significantly reduce the occurrence of severe burns", "Reduced energy use: Measurements carried out in a production process showed that Low Temperature hot melts requires 33% less energy from the hot melt unit, all along the production cycle. This can produce considerable savings in a multi-line plant. The reduction in energy use will have a positive impact on the environment, and this is an important KPI for many leading food producers and Supermarkets", "Improved Stability: Decrease in the thermal degradation of the adhesive", "Reduced Downtime: Reduce char generated in an adhesive application", "Reduced Maintenance Cost: 100°F difference reduces wear and tear on machinery", "Efficiency: Fast set speeds of Low temp have improve line speeds by 30%"]
  },
  {
    name: 'hm3060',
    glue: "hot melt",
    type: "Low Temp Case Seal",
    image: "",
    description: "Case/Carton Seal",
    industries: "Frozen Foods, Holographic folding cartons",
    color: "yellow/white",
    packaging: "pellets",
    "shelf life": "2 years",
    advantages: ["Safety: The severity of a burn depends on the length of time that the area is held above the burn temperature. For example, 1 gramme of a traditional 350°F hot melt requires 18 seconds to cool down below 180°F, and will be constantly burning during those 18 seconds. Applied at 250°F, only 70°F above the burn temperature, Low Temperature hot Melts will significantly reduce the occurrence of severe burns", "Reduced energy use: Measurements carried out in a production process showed that Low Temperature hot melts requires 33% less energy from the hot melt unit, all along the production cycle. This can produce considerable savings in a multi-line plant. The reduction in energy use will have a positive impact on the environment, and this is an important KPI for many leading food producers and Supermarkets", "Improved Stability: Decrease in the thermal degradation of the adhesive", "Reduced Downtime: Reduce char generated in an adhesive application", "Reduced Maintenance Cost: 100°F difference reduces wear and tear on machinery", "Efficiency: Fast set speeds of Low temp have improve line speeds by 30%"]
  },
  {
    name: 'hm4500',
    glue: "hot melt",
    type: "Low Temp Case Seal",
    image: "",
    description: "High Heat Resistant",
    industries: "",
    color: "light yellow",
    packaging: "pellets",
    "shelf life": "2 years",
    advantages: ["Safety: The severity of a burn depends on the length of time that the area is held above the burn temperature. For example, 1 gramme of a traditional 350°, F hot melt requires 18 seconds to cool down below 180F, and will be constantly burning during those 18 seconds. Applied at 250°F, only 70°F above the burn temperature, Low Temperature hot Melts will significantly reduce the occurrence of severe burns", "Reduced energy use: Measurements carried out in a production process showed that Low Temperature hot melts requires 33% less energy from the hot melt unit, all along the production cycle. This can produce considerable savings in a multi-line plant. The reduction in energy use will have a positive impact on the environment, and this is an important KPI for many leading food producers and Supermarkets", "Improved Stability: Decrease in the thermal degradation of the adhesive"]
  },
  {
    name: 'hm8020',
    glue: "hot melt",
    type: "High Temp-Freezer Grade",
    image: "",
    description: "Case/Carton Seal",
    industries: "Folding carton, Case / Carton Seal, Tray forming",
    color: "light yellow",
    packaging: "pellets",
    "shelf life": "2 years",
    advantages: ["Heat resistant up to 180°F", "Excellent thermal stability", "Good Peal Strength", "Short Set times", "Fast Tact", "Freezer Grade"]
  },
  {
    name: "hsla9085",
    glue: "pressure sensitive",
    type: "pressure sensitive",
    image: "",
    description: "Krones Labelers",
    industries: "",
    color: "clear",
    packaging: "pellets",
    "shelf life": "",
    advantages: ["Designed for Krones Labelers. It is also suitable for laminating, Coating, and Hand Work Applications"]
  },
  {
    name: 'ps160',
    glue: "pressure sensitive",
    type: "pressure sensitive",
    image: "",
    description: "Laminating and Coating",
    industries: "",
    color: "clear",
    packaging: "pellets",
    "shelf life": "2 years",
    advantages: ["ps160 is a Pressure Sensitive Hot Melt designed for laminating, Coating, and Hand Work Applications"]
  },
  {
    name: 'ps505',
    glue: "pressure sensitive",
    type: "pressure sensitive",
    image: "",
    description: "Laminating and Coating",
    industries: "",
    color: "",
    packaging: "pellets",
    advantages: ["Pressure Sensitive Hot Melt designed for laminating, Coating, and Hand Work Applications"],
    "shelf life": "2 years"
  },
  {
    name: 'ps3000',
    glue: "pressure sensitive",
    type: "pressure sensitive",
    image: "",
    description: "Laminating and Coating",
    industries: "",
    color: "clear",
    packaging: "pellets",
    advantages: ["Pressure Sensitive Hot Melt designed for laminating, Coating, and Hand Work Applications"],
    "shelf life": "2 years"
  },
  {
    name: 'sm1523',
    glue: "hot melt",
    type: "Metallocene Hybrid",
    image: "",
    description: "Case/Carton Seal",
    industries: "Folding carton, Case Seal, Corrugated, Tray foriming",
    color: "clear",
    packaging: "pellets",
    advantages: ["Cost Savings 30% less than traditional Metallocene", "Efficiency: Fast set speeds improve line speeds", "Freezer Grade: Performs extremely well in cold environments", "Improved Stability: Decrease in the thermal degradation", "Reduced Downtime: Reduces char generated in an adhesive application"]
  },
  {
    name: 'sm1831',
    glue: "hot melt",
    type: "Metallocene Hybrid",
    image: "",
    description: "Low Temp",
    industries: "Folding carton, Case Seal, Corrugated, Tray foriming",
    color: "clear",
    packaging: "pellets",
    advantages: ["Efficiency: Fast set speeds improve line speeds", "Freezer Grade: Performs extremely well in cold environments", "Improved Stability: Decrease in the thermal degradation", "Reduced Downtime: Reduces char generated in an adhesive application"]
  },
  {
    name: 'sm3150',
    glue: "hot melt",
    type: "Metallocene",
    image: "",
    description: "Case/Carton Seal",
    industries: "Folding carton, Case Seal, Corrugated, Tray foriming",
    color: "clear",
    packaging: "pellets",
    "shelf life": "2 years",
    advantages: ["Improved Stability: Decrease in the thermal degradation of the adhesive", "Reduced Downtime: Reduce char generated in an adhesive application", "Reduced Maintenance Cost: Metallocene Hot Melt never chars", "Efficiency: Fast set speeds of Low temp have improve line speeds by 30%", "Bonds to a wide range of difficult substrates", "Light color will enhance your package appearance", "Odor free, smoke free, user-friendly work environment", "Retain its clarity after many hours of use"]
  },
  {
    name: 'sm7834',
    glue: "hot melt",
    type: "Premium Metallocene",
    image: "",
    description: "Case/Carton Seal",
    industries: "Folding carton, Case Seal, Corrugated, Tray foriming",
    color: "clear",
    packaging: "pellets",
    "shelf life": "",
    advantages: ["Improved Stability: Decrease in the thermal degradation of the adhesive", "Reduced Downtime: Reduce char generated in an adhesive application", "Reduced Maintenance Cost: Metallocene Hot Melt never chars", "Efficiency: Fast set speeds of Low temp have improve line speeds by 30%", "Bonds to a wide range of difficult substrates", "Light color will enhance your package appearance", "Odor free, smoke free, user-friendly work environment", "Retain its clarity after many hours of use"]
  },
]

// const coldGlueApplications = [
//   "AC filters", "automotive", "paper bags", "book binding", "business form", "corrugated boxes", "envelopes", "folding cartons", "furniture", "hygiene products", "insulation", "labeling", "pressure sensitives", "security packaging", "tube winding"
// ]

// const pressureSensitiveApplications = [
//   "automotive adhesives", "foal fabrication", "book binding adhesives", "envelope adhesives", "folding carton adhesives", "bottle labling", "hygiene products", "labeling adhesives", "palletizing adhesives", "security packaging", "woodworking"
// ]

export const getAdhesives = () => {
  return adhesives;
}