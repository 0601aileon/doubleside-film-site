import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getAlternates } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  return { title: t('title'), description: t('subtitle'), alternates: getAlternates(locale, '/blog') };
}

// Blog articles defined inline for MVP
const articles = [
  {
    slug: 'understanding-silicone-gel-perforated-film',
    title: 'Understanding Silicone Gel Perforated Film: A Complete Guide for Manufacturers',
    excerpt: 'Learn about the properties, manufacturing process, and applications of double-sided silicone gel perforated film for medical and industrial use.',
    date: '2026-01-15',
    category: 'Technical Guide',
    readTime: '8 min read',
  },
  {
    slug: 'choosing-the-right-adhesive-film-foam-dressing',
    title: 'How to Choose the Right Silicone Gel Film for Your Foam Dressing Production',
    excerpt: 'A comprehensive guide to selecting the correct thickness, perforation pattern, and adhesive strength for foam dressing manufacturing.',
    date: '2026-02-20',
    category: 'Application Guide',
    readTime: '6 min read',
  },
  {
    slug: 'silicone-gel-vs-acrylic-adhesive-wound-care',
    title: 'Silicone Gel vs. Acrylic Adhesive in Wound Care: Key Differences and Benefits',
    excerpt: 'Compare the performance characteristics of silicone gel and acrylic adhesives for medical wound care applications.',
    date: '2026-03-10',
    category: 'Industry Insight',
    readTime: '5 min read',
  },
  {
    slug: 'quality-control-standards-silicone-gel-film',
    title: 'Quality Control Standards for Medical Grade Silicone Gel Film Manufacturing',
    excerpt: 'An overview of the testing methods and quality standards that ensure consistent performance in medical-grade silicone gel films.',
    date: '2026-04-05',
    category: 'Technical Guide',
    readTime: '7 min read',
  },
  {
    slug: 'custom-perforation-patterns-silicone-film',
    title: 'Custom Perforation Patterns: Optimizing Silicone Gel Film for Specialized Applications',
    excerpt: 'How custom perforation patterns can enhance the performance of silicone gel films for specific medical and industrial applications.',
    date: '2026-05-12',
    category: 'Technical Guide',
    readTime: '6 min read',
  },
];

export default async function BlogPage() {
  return (
    <div className="container-custom py-12 md:py-16">
      <div className="max-w-2xl mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Blog & Resources</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Industry insights, technical guides, and company updates for medical device and industrial manufacturers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.slug} className="flex flex-col border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{article.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {format(new Date(article.date), 'MMM d, yyyy')}
                </span>
                <span>{article.readTime}</span>
              </div>
              <CardTitle className="text-lg leading-snug">{article.title}</CardTitle>
              <CardDescription className="mt-2">{article.excerpt}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Link href={`/blog/${article.slug}`}>
                <Button variant="ghost" className="gap-1 px-0 hover:px-0">
                  Read More <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
