import { Product } from '@/types/product';

const products: Product[] = [
  {
    id: 1,
    slug: 'standard-silicone-gel-film',
    name: 'Standard Double-Sided Silicone Gel Perforated Film',
    subtitle: 'All-purpose medical grade silicone gel film for foam dressing manufacturing',
    description: `Our standard double-sided silicone gel perforated film is engineered specifically for foam dressing manufacturers. The film features uniform micro-perforation that ensures optimal breathability and controlled moisture vapor transmission rate (MVTR). Both sides are coated with medical-grade silicone adhesive, providing gentle yet secure adhesion to wound sites while allowing pain-free removal.

Key advantages include consistent adhesive performance across production batches, excellent conformability to body contours, and compatibility with various foam substrates. This film serves as the critical adhesive layer in composite foam dressings.`,
    category: 'medical-grade',
    thickness: '0.3 mm ± 0.05 mm',
    width: '100 mm - 1200 mm',
    length: '50 m - 200 m per roll',
    adhesiveStrength: '≥ 0.8 N/25mm (on stainless steel)',
    temperatureResistance: '-20°C to +80°C',
    shelfLife: '24 months (stored at 25°C / 60% RH)',
    poreSize: '0.5 mm - 2.0 mm (customizable)',
    breathability: '≥ 1500 g/m²/24h (MVTR)',
    specifications: [
      { key: 'products.specs.thickness', value: '0.3 mm ± 0.05 mm' },
      { key: 'products.specs.width', value: '100 - 1200 mm' },
      { key: 'products.specs.adhesiveStrength', value: '≥ 0.8 N/25mm' },
      { key: 'products.specs.temperatureResistance', value: '-20°C to +80°C' },
      { key: 'products.specs.shelfLife', value: '24 months' },
      { key: 'products.specs.poreSize', value: '0.5 - 2.0 mm' },
      { key: 'products.specs.breathability', value: '≥ 1500 g/m²/24h' },
    ],
    images: [
      { url: '/images/products/silicone-film-roll.jpg', alt: 'Silicone gel film roll' },
      { url: '/images/products/silicone-film-closeup.jpg', alt: 'Close-up of perforated silicone gel film' },
      { url: '/images/products/silicone-film-layer.jpg', alt: 'Silicone gel film layer structure' },
    ],
    datasheetPdf: '/files/datasheets/standard-silicone-gel-film.pdf',
    features: [
      'Medical-grade silicone adhesive on both sides',
      'Uniform micro-perforation for optimal breathability',
      'Consistent adhesion across temperature variations',
      'Hypoallergenic and biocompatible',
      'Pain-free removal from wound and skin',
      'Customizable width, thickness, and pore size',
    ],
    applications: ['foam-dressing', 'wound-care', 'medical-tape'],
    isFeatured: true,
    sortOrder: 1,
  },
  {
    id: 2,
    slug: 'high-breathability-silicone-film',
    name: 'High-Breathability Silicone Gel Perforated Film',
    subtitle: 'Enhanced MVTR for advanced wound care applications',
    description: `Our high-breathability variant features an optimized perforation pattern that significantly increases moisture vapor transmission rate (MVTR), making it ideal for advanced wound care products that require enhanced moisture management.

The film maintains excellent barrier properties against external contaminants while allowing excess wound exudate moisture to evaporate effectively. This helps maintain optimal wound healing environment and reduces the risk of maceration.`,
    category: 'medical-grade',
    thickness: '0.25 mm ± 0.05 mm',
    width: '100 mm - 1000 mm',
    length: '50 m - 150 m per roll',
    adhesiveStrength: '≥ 0.6 N/25mm',
    temperatureResistance: '-20°C to +80°C',
    shelfLife: '24 months',
    poreSize: '0.8 mm - 2.5 mm',
    breathability: '≥ 2500 g/m²/24h (MVTR)',
    specifications: [
      { key: 'products.specs.thickness', value: '0.25 mm ± 0.05 mm' },
      { key: 'products.specs.width', value: '100 - 1000 mm' },
      { key: 'products.specs.adhesiveStrength', value: '≥ 0.6 N/25mm' },
      { key: 'products.specs.temperatureResistance', value: '-20°C to +80°C' },
      { key: 'products.specs.shelfLife', value: '24 months' },
      { key: 'products.specs.poreSize', value: '0.8 - 2.5 mm' },
      { key: 'products.specs.breathability', value: '≥ 2500 g/m²/24h' },
    ],
    images: [
      { url: '/images/products/high-breathability-film.jpg', alt: 'High-breathability silicone gel film' },
    ],
    features: [
      'Enhanced MVTR for moisture management',
      'Optimized perforation density',
      'Gentle adhesion suitable for fragile skin',
      'Transparent design for wound monitoring',
      'Compatible with advanced dressing constructions',
    ],
    applications: ['wound-care', 'foam-dressing'],
    isFeatured: true,
    sortOrder: 2,
  },
  {
    id: 3,
    slug: 'industrial-bonding-silicone-film',
    name: 'Industrial Grade Silicone Gel Film',
    subtitle: 'High-tack formulation for industrial bonding and assembly',
    description: `Our industrial grade silicone gel film is formulated with higher adhesive strength for demanding industrial applications. It provides reliable bonding in electronic device assembly, automotive component mounting, and general industrial lamination processes.

The film maintains excellent adhesive performance across a wider temperature range and exhibits superior resistance to UV exposure and humidity compared to standard medical grades.`,
    category: 'industrial-grade',
    thickness: '0.4 mm ± 0.05 mm',
    width: '200 mm - 1500 mm',
    length: '30 m - 100 m per roll',
    adhesiveStrength: '≥ 1.5 N/25mm',
    temperatureResistance: '-40°C to +120°C',
    shelfLife: '18 months',
    poreSize: '1.0 mm - 3.0 mm',
    breathability: '≥ 800 g/m²/24h',
    specifications: [
      { key: 'products.specs.thickness', value: '0.4 mm ± 0.05 mm' },
      { key: 'products.specs.width', value: '200 - 1500 mm' },
      { key: 'products.specs.adhesiveStrength', value: '≥ 1.5 N/25mm' },
      { key: 'products.specs.temperatureResistance', value: '-40°C to +120°C' },
      { key: 'products.specs.shelfLife', value: '18 months' },
      { key: 'products.specs.poreSize', value: '1.0 - 3.0 mm' },
    ],
    images: [
      { url: '/images/products/industrial-film.jpg', alt: 'Industrial grade silicone gel film' },
    ],
    features: [
      'High-tack silicone adhesive formulation',
      'Wide temperature range tolerance',
      'UV and humidity resistant',
      'Available in larger roll widths',
      'Custom liner options available',
    ],
    applications: ['industrial-bonding', 'electronics-protection'],
    isFeatured: true,
    sortOrder: 3,
  },
  {
    id: 4,
    slug: 'thin-film-transdermal',
    name: 'Ultra-Thin Silicone Gel Film for Transdermal Patches',
    subtitle: 'Ultra-thin, conformable film for transdermal drug delivery systems',
    description: `Our ultra-thin silicone gel film is specifically designed for transdermal patch applications where minimal thickness and maximum conformability are critical. The film provides reliable skin adhesion while maintaining the flexibility required for comfortable wear over extended periods.

The medical-grade silicone adhesive is compatible with various drug formulations and exhibits minimal skin irritation even with prolonged wear. Available with customized release liners for automated patch manufacturing lines.`,
    category: 'medical-grade',
    thickness: '0.15 mm ± 0.03 mm',
    width: '50 mm - 500 mm',
    length: '50 m - 200 m per roll',
    adhesiveStrength: '≥ 0.5 N/25mm',
    temperatureResistance: '-20°C to +70°C',
    shelfLife: '24 months',
    poreSize: '0.3 mm - 1.0 mm',
    breathability: '≥ 2000 g/m²/24h',
    specifications: [
      { key: 'products.specs.thickness', value: '0.15 mm ± 0.03 mm' },
      { key: 'products.specs.width', value: '50 - 500 mm' },
      { key: 'products.specs.adhesiveStrength', value: '≥ 0.5 N/25mm' },
      { key: 'products.specs.temperatureResistance', value: '-20°C to +70°C' },
      { key: 'products.specs.shelfLife', value: '24 months' },
      { key: 'products.specs.poreSize', value: '0.3 - 1.0 mm' },
      { key: 'products.specs.breathability', value: '≥ 2000 g/m²/24h' },
    ],
    images: [
      { url: '/images/products/thin-transdermal-film.jpg', alt: 'Ultra-thin silicone gel film for transdermal patches' },
    ],
    features: [
      'Ultra-thin profile for maximum conformability',
      'Medical-grade biocompatible adhesive',
      'Compatible with drug formulations',
      'Custom release liners available',
      'Suitable for automated production lines',
    ],
    applications: ['transdermal-patch', 'wound-care'],
    isFeatured: false,
    sortOrder: 4,
  },
  {
    id: 5,
    slug: 'custom-perforation-silicone-film',
    name: 'Custom Perforation Pattern Silicone Gel Film',
    subtitle: 'Bespoke perforation patterns engineered to your specifications',
    description: `Our custom perforation service allows you to specify exact hole size, pattern, spacing, and density to match your unique application requirements. Whether you need asymmetric patterns, variable density zones, or specialized hole geometries, our engineering team can develop a custom solution.

This service is ideal for innovative medical device manufacturers developing next-generation wound care products with specific fluid management requirements.`,
    category: 'custom',
    thickness: '0.2 mm - 0.5 mm (customizable)',
    width: '50 mm - 1200 mm (customizable)',
    length: 'As required',
    adhesiveStrength: 'Custom formulation',
    temperatureResistance: 'Per specification',
    shelfLife: '24 months',
    poreSize: 'Custom (0.1 mm - 5.0 mm)',
    breathability: 'Engineered to spec',
    specifications: [
      { key: 'products.specs.thickness', value: '0.2 - 0.5 mm (custom)' },
      { key: 'products.specs.width', value: '50 - 1200 mm (custom)' },
      { key: 'products.specs.adhesiveStrength', value: 'Custom formulation' },
      { key: 'products.specs.temperatureResistance', value: 'Per specification' },
      { key: 'products.specs.shelfLife', value: '24 months' },
    ],
    images: [
      { url: '/images/products/custom-perforation.jpg', alt: 'Custom perforation pattern silicone gel film' },
    ],
    features: [
      'Custom hole size, pattern, and density',
      'Variable density zones available',
      'Engineering support for design optimization',
      'Rapid prototyping service',
      'Confidentiality agreements for proprietary designs',
    ],
    applications: ['foam-dressing', 'wound-care', 'medical-tape', 'transdermal-patch'],
    isFeatured: false,
    sortOrder: 5,
  },
  {
    id: 6,
    slug: 'silicone-gel-film-for-medical-tape',
    name: 'Silicone Gel Film for Medical Tape Assembly',
    subtitle: 'Skin-friendly adhesive layer for medical tape and fixation devices',
    description: `Specifically formulated for medical tape assembly, this silicone gel film provides reliable fixation of dressings, catheters, and sensors while ensuring gentle removal without skin trauma. The perforated design allows the skin to breathe, reducing the risk of maceration under the tape.

Ideal for manufacturers of surgical tapes, catheter fixation devices, and sensor/adhesive monitor patches.`,
    category: 'medical-grade',
    thickness: '0.3 mm ± 0.05 mm',
    width: '50 mm - 1000 mm',
    length: '50 m - 200 m per roll',
    adhesiveStrength: '≥ 0.7 N/25mm',
    temperatureResistance: '-20°C to +80°C',
    shelfLife: '24 months',
    poreSize: '0.5 mm - 1.5 mm',
    breathability: '≥ 1800 g/m²/24h',
    specifications: [
      { key: 'products.specs.thickness', value: '0.3 mm ± 0.05 mm' },
      { key: 'products.specs.width', value: '50 - 1000 mm' },
      { key: 'products.specs.adhesiveStrength', value: '≥ 0.7 N/25mm' },
      { key: 'products.specs.temperatureResistance', value: '-20°C to +80°C' },
      { key: 'products.specs.shelfLife', value: '24 months' },
    ],
    images: [
      { url: '/images/products/medical-tape-film.jpg', alt: 'Silicone gel film for medical tape' },
    ],
    features: [
      'Skin-friendly adhesion for sensitive applications',
      'Reduces risk of medical adhesive-related skin injury',
      'Consistent peel adhesion for reliable fixation',
      'Compatible with non-woven and film backings',
      'Available with various liner options',
    ],
    applications: ['medical-tape', 'wound-care'],
    isFeatured: false,
    sortOrder: 6,
  },
];

export async function getFeaturedProducts(): Promise<Product[]> {
  return products.filter((p) => p.isFeatured);
}

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find((p) => p.slug === slug);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return products.filter((p) => p.category === category);
}

export async function getRelatedProducts(productId: number): Promise<Product[]> {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];
  return products
    .filter((p) => p.id !== productId && p.category === product.category)
    .slice(0, 3);
}

export const categories = [
  { id: 1, slug: 'medical-grade', name: 'Medical Grade', description: 'ISO-compliant silicone gel films for medical device manufacturing.' },
  { id: 2, slug: 'industrial-grade', name: 'Industrial Grade', description: 'High-performance films for industrial bonding and assembly.' },
  { id: 3, slug: 'custom', name: 'Custom Solutions', description: 'Bespoke formulations and perforation patterns for unique requirements.' },
];
