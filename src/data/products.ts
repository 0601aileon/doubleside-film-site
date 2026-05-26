import { Product } from '@/types/product';

const products: Product[] = [
  {
    id: 1,
    slug: 'standard-silicone-gel-film',
    name: 'Standard Double-Sided Silicone Gel Perforated Film',
    nameZh: '标准型双面有机硅凝胶涂布微孔膜',
    subtitle: 'All-purpose medical grade silicone gel film for foam dressing manufacturing',
    subtitleZh: '适用于泡沫敷料制造的多功能医用级有机硅凝胶膜',
    description: `Our standard double-sided silicone gel perforated film is engineered specifically for foam dressing manufacturers. The film features uniform micro-perforation that ensures optimal breathability and controlled moisture vapor transmission rate (MVTR). Both sides are coated with medical-grade silicone adhesive, providing gentle yet secure adhesion to wound sites while allowing pain-free removal.

Key advantages include consistent adhesive performance across production batches, excellent conformability to body contours, and compatibility with various foam substrates. This film serves as the critical adhesive layer in composite foam dressings.`,
    descriptionZh: `我们的标准型双面有机硅凝胶涂布微孔膜专为泡沫敷料制造商设计。薄膜具有均匀的微孔，确保最佳的透气性和可控的水蒸气透过率。两面均涂覆医用级有机硅粘合剂，对伤口部位提供温和而牢固的粘附，同时可实现无痛移除。

主要优势包括批次间稳定的粘附性能、优异的身体轮廓贴合性以及与各种泡沫基材的兼容性。该薄膜是复合泡沫敷料中关键的粘合层。`,
    category: 'medical-grade',
    categoryNameZh: '医用级',
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
    featuresZh: [
      '两面涂覆医用级有机硅粘合剂',
      '均匀微孔确保最佳透气性',
      '温度变化下粘附力稳定',
      '低致敏性和生物相容性',
      '可从伤口和皮肤上无痛移除',
      '可定制宽度、厚度和孔径',
    ],
    applications: ['foam-dressing', 'wound-care', 'medical-tape'],
    isFeatured: true,
    sortOrder: 1,
  },
  {
    id: 2,
    slug: 'high-breathability-silicone-film',
    name: 'High-Breathability Silicone Gel Perforated Film',
    nameZh: '高透气型有机硅凝胶涂布微孔膜',
    subtitle: 'Enhanced MVTR for advanced wound care applications',
    subtitleZh: '增强型水蒸气透过率，适用于高级伤口护理',
    description: `Our high-breathability variant features an optimized perforation pattern that significantly increases moisture vapor transmission rate (MVTR), making it ideal for advanced wound care products that require enhanced moisture management.

The film maintains excellent barrier properties against external contaminants while allowing excess wound exudate moisture to evaporate effectively. This helps maintain optimal wound healing environment and reduces the risk of maceration.`,
    descriptionZh: `我们的高透气型产品采用优化的微孔图案，显著提高水蒸气透过率，是高级伤口护理产品中需要增强湿气管理能力的理想选择。

薄膜在维持优异的外部污染物屏障性能的同时，允许伤口多余渗液有效蒸发，有助于保持最佳的伤口愈合环境并降低浸渍风险。`,
    category: 'medical-grade',
    categoryNameZh: '医用级',
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
    featuresZh: [
      '增强型水蒸气透过率，优化湿气管理',
      '优化的微孔密度',
      '温和粘附，适合脆弱皮肤',
      '透明设计便于伤口观察',
      '兼容高级敷料结构',
    ],
    applications: ['wound-care', 'foam-dressing'],
    isFeatured: true,
    sortOrder: 2,
  },
  {
    id: 3,
    slug: 'industrial-bonding-silicone-film',
    name: 'Industrial Grade Silicone Gel Film',
    nameZh: '工业级有机硅凝胶膜',
    subtitle: 'High-tack formulation for industrial bonding and assembly',
    subtitleZh: '高粘性配方，适用于工业粘接与装配',
    description: `Our industrial grade silicone gel film is formulated with higher adhesive strength for demanding industrial applications. It provides reliable bonding in electronic device assembly, automotive component mounting, and general industrial lamination processes.

The film maintains excellent adhesive performance across a wider temperature range and exhibits superior resistance to UV exposure and humidity compared to standard medical grades.`,
    descriptionZh: `我们的工业级有机硅凝胶膜采用更高粘附强度的配方，适用于严苛的工业应用。它为电子设备组装、汽车部件安装和一般工业复合工艺提供可靠的粘接。

与标准医用级相比，该薄膜在更宽的温度范围内保持优异的粘附性能，并表现出优异的耐紫外线和耐湿性。`,
    category: 'industrial-grade',
    categoryNameZh: '工业级',
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
    featuresZh: [
      '高粘性有机硅粘合剂配方',
      '宽温度范围耐受性',
      '耐紫外线和耐湿性',
      '可提供更大幅宽',
      '可定制离型膜选项',
    ],
    applications: ['industrial-bonding', 'electronics-protection'],
    isFeatured: true,
    sortOrder: 3,
  },
  {
    id: 4,
    slug: 'thin-film-transdermal',
    name: 'Ultra-Thin Silicone Gel Film for Transdermal Patches',
    nameZh: '超薄型有机硅凝胶膜（透皮贴片用）',
    subtitle: 'Ultra-thin, conformable film for transdermal drug delivery systems',
    subtitleZh: '适用于透皮给药系统的超薄贴合型薄膜',
    description: `Our ultra-thin silicone gel film is specifically designed for transdermal patch applications where minimal thickness and maximum conformability are critical. The film provides reliable skin adhesion while maintaining the flexibility required for comfortable wear over extended periods.

The medical-grade silicone adhesive is compatible with various drug formulations and exhibits minimal skin irritation even with prolonged wear. Available with customized release liners for automated patch manufacturing lines.`,
    descriptionZh: `我们的超薄有机硅凝胶膜专为透皮贴片应用设计，对于这类应用，极小厚度和最大贴合性至关重要。薄膜提供可靠的皮肤粘附力，同时保持长时间舒适佩戴所需的柔韧性。

医用级有机硅粘合剂与多种药物配方兼容，即使长时间佩戴也仅产生极小的皮肤刺激。可提供定制离型膜以适应自动化贴片生产线。`,
    category: 'medical-grade',
    categoryNameZh: '医用级',
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
    featuresZh: [
      '超薄设计，最大贴合性',
      '医用级生物相容性粘合剂',
      '与药物配方兼容',
      '可提供定制离型膜',
      '适用于自动化生产线',
    ],
    applications: ['transdermal-patch', 'wound-care'],
    isFeatured: false,
    sortOrder: 4,
  },
  {
    id: 5,
    slug: 'custom-perforation-silicone-film',
    name: 'Custom Perforation Pattern Silicone Gel Film',
    nameZh: '定制微孔图案有机硅凝胶膜',
    subtitle: 'Bespoke perforation patterns engineered to your specifications',
    subtitleZh: '按您的规格量身定制的微孔图案',
    description: `Our custom perforation service allows you to specify exact hole size, pattern, spacing, and density to match your unique application requirements. Whether you need asymmetric patterns, variable density zones, or specialized hole geometries, our engineering team can develop a custom solution.

This service is ideal for innovative medical device manufacturers developing next-generation wound care products with specific fluid management requirements.`,
    descriptionZh: `我们的定制微孔服务允许您指定确切的孔径、图案、间距和密度，以满足您独特的应用需求。无论您需要非对称图案、可变密度区域还是特殊孔几何形状，我们的工程团队都能开发定制解决方案。

该服务非常适合创新型医疗器械制造商开发具有特定渗液管理需求的下一代伤口护理产品。`,
    category: 'custom',
    categoryNameZh: '定制方案',
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
    featuresZh: [
      '定制孔径、图案和密度',
      '可变密度区域可选',
      '设计优化工程支持',
      '快速打样服务',
      '可签保密协议保护专有设计',
    ],
    applications: ['foam-dressing', 'wound-care', 'medical-tape', 'transdermal-patch'],
    isFeatured: false,
    sortOrder: 5,
  },
  {
    id: 6,
    slug: 'silicone-gel-film-for-medical-tape',
    name: 'Silicone Gel Film for Medical Tape Assembly',
    nameZh: '医用胶带组装用有机硅凝胶膜',
    subtitle: 'Skin-friendly adhesive layer for medical tape and fixation devices',
    subtitleZh: '适用于医用胶带和固定器械的亲肤粘合层',
    description: `Specifically formulated for medical tape assembly, this silicone gel film provides reliable fixation of dressings, catheters, and sensors while ensuring gentle removal without skin trauma. The perforated design allows the skin to breathe, reducing the risk of maceration under the tape.

Ideal for manufacturers of surgical tapes, catheter fixation devices, and sensor/adhesive monitor patches.`,
    descriptionZh: `这款有机硅凝胶膜专为医用胶带组装配制，可牢固固定敷料、导管和传感器，同时确保轻柔移除而不损伤皮肤。微孔设计使皮肤能够透气，降低胶带下浸渍的风险。

适用于手术胶带、导管固定装置和传感器/监护贴片的制造商。`,
    category: 'medical-grade',
    categoryNameZh: '医用级',
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
    featuresZh: [
      '亲肤粘附，适用于敏感应用',
      '降低医用粘合剂相关皮肤损伤风险',
      '稳定的剥离力，确保可靠固定',
      '兼容无纺布和薄膜基材',
      '提供多种离型膜选项',
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
  { id: 1, slug: 'medical-grade', name: 'Medical Grade', nameZh: '医用级', description: 'ISO-compliant silicone gel films for medical device manufacturing.', descriptionZh: '符合 ISO 标准的医疗器械制造用有机硅凝胶膜。' },
  { id: 2, slug: 'industrial-grade', name: 'Industrial Grade', nameZh: '工业级', description: 'High-performance films for industrial bonding and assembly.', descriptionZh: '用于工业粘接和装配的高性能薄膜。' },
  { id: 3, slug: 'custom', name: 'Custom Solutions', nameZh: '定制方案', description: 'Bespoke formulations and perforation patterns for unique requirements.', descriptionZh: '针对特殊需求的定制配方和微孔图案。' },
];
