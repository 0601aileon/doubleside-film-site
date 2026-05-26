import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/lib/constants';
import { getAlternates } from '@/lib/seo';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import InquiryForm from '@/components/shared/inquiry-form';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: t('title'), description: t('subtitle'), alternates: getAlternates(locale, '/contact') };
}

export default async function ContactPage() {
  return (
    <div className="container-custom py-12 md:py-16">
      <div className="max-w-2xl mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Get in touch with our sales team for inquiries, samples, or technical support.
          We typically respond within 24 hours on business days.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3">
          <div className="bg-card border rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-6">Send an Inquiry</h2>
            <InquiryForm />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-muted/30 rounded-xl p-6 space-y-5">
            <h2 className="font-semibold">Contact Information</h2>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Address</p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.address.street}, {siteConfig.address.city},{' '}
                  {siteConfig.address.state}, {siteConfig.address.country}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-sm text-primary hover:underline"
                >
                  {siteConfig.links.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="text-sm text-primary hover:underline"
                >
                  {siteConfig.links.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Response Time</p>
                <p className="text-sm text-muted-foreground">
                  We respond within 24 hours on business days
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-xl p-6">
            <h3 className="font-semibold text-sm mb-3">Why Inquire With Us?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Direct factory pricing
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Free samples available
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Custom specifications welcome
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Technical support team
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                Global shipping available
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
