import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { getApplicationBySlug } from '@/data/applications';
import { localizeApplication } from '@/lib/localize';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Props = { params: Promise<{ locale: string; slug: string }> };

export default async function ApplicationDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const rawApp = await getApplicationBySlug(slug);
  if (!rawApp) notFound();
  const app = localizeApplication(rawApp, locale);

  const t = await getTranslations({ locale, namespace: 'applications' });
  const ct = await getTranslations({ locale, namespace: 'common' });

  return (
    <div className="container-custom py-12 md:py-16">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">{ct('backToHome')}</Link>
        <span>/</span>
        <Link href="/applications" className="hover:text-foreground">{t('title')}</Link>
        <span>/</span>
        <span className="text-foreground">{app.title}</span>
      </nav>

      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{app.title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{app.subtitle}</p>

        <div className="prose prose-sm max-w-none text-muted-foreground">
          <p className="leading-relaxed">{app.description}</p>
        </div>

        {app.processSteps && app.processSteps.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6">{t('title')}</h2>
            <div className="space-y-6">
              {app.processSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    {i < app.processSteps!.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              {t('cta')} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
