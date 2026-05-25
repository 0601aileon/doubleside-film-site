import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { format } from 'date-fns';

type Props = { params: Promise<{ locale: string; slug: string }> };

// Same articles data, in production would come from a CMS
const articles: Record<string, {
  title: string;
  content: string[];
  date: string;
  category: string;
  readTime: string;
  author?: string;
}> = {
  'understanding-silicone-gel-perforated-film': {
    title: 'Understanding Silicone Gel Perforated Film: A Complete Guide for Manufacturers',
    date: '2026-01-15',
    category: 'Technical Guide',
    readTime: '8 min read',
    author: 'Technical Team',
    content: [
      'Silicone gel perforated film is a specialized material that combines the unique properties of silicone gel with precision micro-perforation technology. This combination creates a versatile adhesive layer used extensively in medical and industrial applications.',
      'What is Silicone Gel Perforated Film?\n\nSilicone gel is a cross-linked polymer with unique viscoelastic properties. Unlike acrylic adhesives, silicone gel maintains its adhesive properties across a wide temperature range and can be removed without leaving residue. When manufactured as a thin film with uniform micro-perforations, it becomes breathable while maintaining its barrier properties.',
      'Key Properties\n\n• Biocompatibility: Medical-grade silicone gel is hypoallergenic and safe for prolonged skin contact.\n• Breathability: The perforation pattern allows moisture vapor transmission, preventing maceration.\n• Consistent Adhesion: Silicone gel provides gentle yet secure adhesion that remains stable over time.\n• Temperature Resistance: Performance is maintained from -20°C to +80°C (medical grade).\n• Conformability: The thin film conforms to irregular surfaces and body contours.',
      'Manufacturing Process\n\nThe production of silicone gel perforated film involves several precise steps:\n\n1. Silicone Formulation: Medical-grade silicone is compounded with cross-linking agents and catalysts.\n2. Coating: The silicone is coated onto a release liner at a controlled thickness.\n3. Curing: The coated film passes through heated ovens to achieve complete cross-linking.\n4. Perforation: Micro-holes are created using precision mechanical or laser perforation.\n5. Lamination: A second liner is applied for double-sided protection.\n6. Slitting: Master rolls are slit to customer-specified widths.\n7. Quality Testing: Each batch undergoes rigorous testing for adhesion, thickness, and perforation uniformity.',
      'Applications\n\nSilicone gel perforated film is primarily used in:\n\n• Foam Dressing Manufacturing: As the adhesive layer between foam and wound contact layer.\n• Medical Tapes: Skin-friendly fixation tapes for dressings, catheters, and sensors.\n• Transdermal Patches: As the drug-in-adhesive matrix for transdermal delivery systems.\n• Industrial Bonding: High-temperature bonding applications requiring clean removal.\n\nContact our technical team to discuss your specific application requirements.'
    ],
  },
  'choosing-the-right-adhesive-film-foam-dressing': {
    title: 'How to Choose the Right Silicone Gel Film for Your Foam Dressing Production',
    date: '2026-02-20',
    category: 'Application Guide',
    readTime: '6 min read',
    content: [
      'Selecting the right silicone gel film is crucial for foam dressing performance. This guide covers the key parameters to consider.',
      'Thickness Considerations\n\nThe thickness of the silicone gel film affects both adhesion and conformability:\n\n• 0.15 mm: Ultra-thin, maximum conformability, ideal for transdermal patches.\n• 0.25-0.30 mm: Standard range, good balance of adhesion and flexibility for most foam dressings.\n• 0.40-0.50 mm: Higher adhesive mass, better gap filling, suitable for uneven surfaces.',
      'Perforation Patterns\n\nThe perforation pattern determines breathability and fluid handling:\n\n• Small pores (0.3-0.8 mm): Lower MVTR, suitable for low-exudate wounds.\n• Medium pores (1.0-1.5 mm): Balanced breathability, ideal for standard foam dressings.\n• Large pores (2.0-3.0 mm): High MVTR, designed for heavily exuding wounds.\n\nCustom patterns can be engineered for specific fluid management requirements.',
      'Adhesive Strength\n\n• Gentle (0.3-0.5 N/25mm): For fragile skin, pediatric, and geriatric applications.\n• Standard (0.6-1.0 N/25mm): General purpose foam dressing fixation.\n• Strong (1.0-1.5 N/25mm): High-shear applications requiring robust fixation.',
      'Quality Indicators\n\nLook for these quality indicators when sourcing silicone gel film:\n\n• Consistent thickness across the full roll width\n• Uniform perforation without tear propagation\n• Clean die-cutting without adhesive ooze\n• Reliable peel adhesion values batch to batch\n• Complete cure without tackiness on the liner side\n\nRequest samples from potential suppliers and evaluate these parameters in your own production process.'
    ],
  },
  'silicone-gel-vs-acrylic-adhesive-wound-care': {
    title: 'Silicone Gel vs. Acrylic Adhesive in Wound Care: Key Differences and Benefits',
    date: '2026-03-10',
    category: 'Industry Insight',
    readTime: '5 min read',
    content: [
      'When selecting an adhesive for wound care products, manufacturers typically choose between silicone gel and acrylic adhesives. Each has distinct characteristics that make it suitable for different applications.',
      'Silicone Gel Advantages\n\n• Atraumatic Removal: Silicone gel adheres to dry skin but not to moist wound beds, enabling pain-free dressing changes.\n• Hypoallergenic: Virtually zero risk of contact dermatitis or allergic reactions.\n• Consistent Performance: Adhesion remains stable across temperature and humidity variations.\n• No Residue: Removes cleanly without adhesive residue on skin or wound.\n• Re-positionable: Dressings can be adjusted during application without losing adhesion.',
      'Acrylic Adhesive Advantages\n\n• Higher Tack: Provides immediate, strong adhesion upon contact.\n• Cost-Effective: Generally less expensive than silicone gel.\n• Longer History: Well-established formulation and manufacturing processes.\n• Higher Shear Strength: Better suited for high-stress fixation applications.',
      'When to Choose Silicone Gel\n\nChoose silicone gel adhesive when:\n• The dressing will be changed frequently (atraumatic removal is critical)\n• Patient skin integrity is a concern (geriatric, neonatal, or fragile skin)\n• The wound bed is delicate and should not be disturbed\n• Consistent performance across varied conditions is required',
      'When to Choose Acrylic\n\nAcrylic adhesives may be preferred when:\n• Maximum initial tack is needed for device fixation\n• Cost is the primary consideration\n• The application does not require frequent repositioning or removal\n• The adhesive will not contact sensitive skin directly',
      'Many modern dressings combine both technologies, using silicone gel for the wound contact layer and acrylic for the peripheral adhesive border. This hybrid approach leverages the benefits of both adhesive types.'
    ],
  },
  'quality-control-standards-silicone-gel-film': {
    title: 'Quality Control Standards for Medical Grade Silicone Gel Film Manufacturing',
    date: '2026-04-05',
    category: 'Technical Guide',
    readTime: '7 min read',
    content: [
      'Quality control is paramount in medical-grade silicone gel film manufacturing. This article outlines the key testing standards and procedures that ensure consistent product quality.',
      'Raw Material Testing\n\nEvery incoming batch of silicone raw materials undergoes:\n• Viscosity and rheology testing\n• Purity analysis (gas chromatography)\n• Pot life and cure rate verification\n• Platinum catalyst activity assay (for addition-cure systems)\n\nOnly materials that meet specification are released to production.',
      'In-Process Quality Control\n\nDuring the coating and curing process, these parameters are continuously monitored:\n\n• Coating thickness: Measured online using beta or laser gauges (±2% tolerance)\n• Oven temperature profile: Verified at multiple zones\n• Line speed: Maintained within ±1% of setpoint\n• Cure completion: Tested by solvent rub and loop tack tests\n\nReal-time data logging ensures complete traceability.',
      'Perforation Quality\n\nPerforation quality is verified using automated vision inspection:\n\n• Hole diameter: Measured with ±0.05 mm accuracy\n• Hole spacing: Verified across the full width\n• Pattern registration: Confirmed for repeatability\n• Edge quality: Inspected for tears or incomplete perforation\n\nStatistical process control (SPC) charts track perforation quality trends.',
      'Final Product Testing\n\nEvery production batch is tested for:\n\n• 180° Peel Adhesion (ASTM D3330 / ISO 29862)\n• Thickness Profile (ASTM D3652)\n• MVTR (ASTM E96 / ISO 2528)\n• Gel Fraction (Soxhlet extraction for cure completeness)\n• Bioburden Testing (ISO 11737)\n\nResults are documented in a Certificate of Analysis (CoA) provided with each shipment.',
      'Shelf Life Validation\n\nAccelerated aging studies per ASTM F1980 are conducted to establish and validate shelf life claims. Real-time aging studies run in parallel for ongoing verification. Our standard products carry a 24-month shelf life under recommended storage conditions (15-25°C, 40-60% RH).'
    ],
  },
  'custom-perforation-patterns-silicone-film': {
    title: 'Custom Perforation Patterns: Optimizing Silicone Gel Film for Specialized Applications',
    date: '2026-05-12',
    category: 'Technical Guide',
    readTime: '6 min read',
    content: [
      'Standard perforation patterns work well for many applications, but specialized products often require custom perforation designs. This article explores the possibilities and considerations for custom patterns.',
      'Why Custom Perforation?\n\nStandard perforation patterns are designed for general-purpose applications. Custom patterns allow manufacturers to:\n\n• Optimize fluid handling for specific wound types\n• Create variable breathability zones within a single dressing\n• Match pattern density to anatomical locations\n• Enhance aesthetic appeal for consumer-facing products\n• Enable unique functional properties (e.g., directional fluid wicking)',
      'Pattern Design Parameters\n\nCustom perforation patterns can vary:\n\n• Hole Geometry: Round, oval, slot, or custom shapes\n• Pattern Layout: Staggered, aligned, radial, or asymmetric\n• Density Gradient: Variable hole density across the film\n• Zone Design: Different patterns in different areas\n• Edge Treatment: Solid (unperforated) edges for seal integrity',
      'Manufacturing Capabilities\n\nOur custom perforation capabilities include:\n\n• Hole Size: 0.1 mm to 5.0 mm\n• Pattern Repeat: Unlimited design possibilities\n• Registration Accuracy: ±0.1 mm\n• Maximum Width: Up to 1200 mm\n• Minimum Solid Margin: 3 mm from edge',
      'Development Process\n\n1. Requirements Definition: Our engineering team works with you to define performance targets.\n2. Prototype Design: CAD design of the perforation pattern.\n3. Sample Production: Small-scale samples for evaluation.\n4. Performance Testing: MVTR, adhesion, and fluid handling validation.\n5. Production Scale-Up: Pattern transfer to production tooling.\n\nThe entire process typically takes 2-4 weeks for standard custom patterns.',
      'Ready to explore custom perforation for your product? Contact our technical team to discuss your requirements. We handle all designs under strict confidentiality agreements.'
    ],
  },
};

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <article className="container-custom py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link href="/blog">
          <Button variant="ghost" className="gap-2 mb-8 -ml-3">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Badge variant="secondary">{article.category}</Badge>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {format(new Date(article.date), 'MMM d, yyyy')}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{article.title}</h1>
          {article.author && (
            <p className="mt-4 text-sm text-muted-foreground">By {article.author}</p>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-sm md:prose-base max-w-none">
          {article.content.map((section, i) => {
            const lines = section.split('\n');
            // Check if first line looks like a heading
            if (lines[0].endsWith('\r')) lines[0] = lines[0].replace('\r', '');
            const isHeading = lines[0].length < 100 &&
              (section === article.content[0] ||
               (lines[0].endsWith(':') || lines[0].endsWith('?\n') || lines[0].endsWith('?') ||

                !lines[0].includes('  ')) &&
               lines.length > 1);

            if (isHeading) {
              const heading = lines[0];
              const rest = lines.slice(1).join('\n').trim();
              return (
                <div key={i} className="mb-8">
                  <h2 className="text-xl font-semibold mt-8 mb-4">{heading}</h2>
                  {rest && (
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {rest}
                    </div>
                  )}
                </div>
              );
            }

            // Check for bullet list
            if (lines.some(l => l.trim().startsWith('•') || l.trim().startsWith('-'))) {
              return (
                <div key={i} className="mb-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section}
                </div>
              );
            }

            return (
              <p key={i} className="mb-6 text-muted-foreground leading-relaxed">
                {section}
              </p>
            );
          })}
        </div>

        {/* Share */}
        <div className="mt-12 pt-8 border-t flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Share2 className="h-4 w-4" />
            <span>Share this article</span>
          </div>
          <div className="flex gap-2">
            <Link href="/contact">
              <Button variant="outline" size="sm">Contact Us</Button>
            </Link>
            <Link href="/products">
              <Button size="sm">Our Products</Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
