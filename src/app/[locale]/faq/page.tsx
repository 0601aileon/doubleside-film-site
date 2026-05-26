import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { faqs } from '@/data/faqs';
import { localizeFAQs } from '@/lib/localize';
import { getAlternates } from '@/lib/seo';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { JsonLdFAQ } from '@/components/seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq' });
  return { title: t('title'), description: t('subtitle'), alternates: getAlternates(locale, '/faq') };
}

const categories = ['product', 'ordering', 'technical', 'company'] as const;

const categoryLabels: Record<string, { en: string; zh: string }> = {
  product: { en: 'Product', zh: '产品相关' },
  ordering: { en: 'Ordering & Shipping', zh: '订购与发货' },
  technical: { en: 'Technical', zh: '技术相关' },
  company: { en: 'Company', zh: '公司相关' },
};

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq' });
  const ct = await getTranslations({ locale, namespace: 'common' });
  const localizedFaqs = localizeFAQs(faqs, locale);

  return (
    <div className="container-custom py-12 md:py-16">
      <JsonLdFAQ items={localizedFaqs.map(f => ({ question: f.question, answer: f.answer }))} />
      <div className="max-w-2xl mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t('title')}</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-8">
          {categories.map((category) => {
            const categoryFaqs = localizedFaqs.filter((f) => f.category === category);
            if (categoryFaqs.length === 0) return null;

            const label = locale === 'zh' ? categoryLabels[category]?.zh : categoryLabels[category]?.en;

            return (
              <div key={category}>
                <h2 className="text-xl font-semibold mb-4">
                  {label || category}
                </h2>
                <Accordion className="border rounded-xl divide-y">
                  {categoryFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={String(faq.id)} className="px-6">
                      <AccordionTrigger className="text-left text-sm font-medium py-4 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-muted/30 rounded-xl p-6 text-center">
              <MessageCircle className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{t('title')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('subtitle')}
              </p>
              <Link href="/contact">
                <Button className="w-full gap-2">
                  {ct('contactUs')} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
