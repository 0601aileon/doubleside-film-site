import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getApplications } from '@/data/applications';
import { localizeApplications } from '@/lib/localize';
import { getAlternates } from '@/lib/seo';
import { ArrowRight } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'applications' });
  return { title: t('title'), description: t('subtitle'), alternates: getAlternates(locale, '/applications') };
}

export default async function ApplicationsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'applications' });
  const applications = localizeApplications(await getApplications(), locale);

  return (
    <div className="container-custom py-12 md:py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {t('title')}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <Link
            key={app.slug}
            href={`/applications/${app.slug}`}
            className="group rounded-xl border bg-card p-6 hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <div className="h-6 w-6 rounded-full bg-primary/20" />
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {app.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{app.subtitle}</p>
            <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              {t('learnMore')} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
