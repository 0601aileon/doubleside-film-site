import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Application } from '@/data/applications';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ApplicationShowcase({ applications }: { applications: Application[] }) {
  const t = useTranslations('home.applications');

  return (
    <section className="bg-white">
      <div className="container-custom py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.slice(0, 6).map((app) => (
            <Link
              key={app.slug}
              href={`/applications/${app.slug}`}
              className="group relative rounded-xl border bg-card p-6 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="h-6 w-6 rounded-full bg-primary/20" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {app.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{app.subtitle}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/applications">
            <Button variant="outline" className="gap-2">
              {t('viewAll') || 'View All Applications'} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
