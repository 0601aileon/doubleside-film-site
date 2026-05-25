import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Award, CheckCircle, FlaskConical, Factory, Shield, Users } from 'lucide-react';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-blue-400/10 text-blue-200 border-blue-400/30">
              About Us
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Your Trusted Partner in Silicone Gel Film Manufacturing
            </h1>
            <p className="mt-4 text-lg text-blue-100/80">
              With over 12 years of experience, we specialize in R&D and production of
              double-sided silicone gel perforated films for medical and industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Story</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Founded in Shenzhen, China, we have grown from a small specialty film producer
                to a globally recognized manufacturer of silicone gel perforated films. Our
                state-of-the-art facility, dedicated R&D team, and rigorous quality management
                system ensure consistent product quality across every batch.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We serve over 500 clients in 50+ countries, providing customized solutions for
                foam dressing manufacturers, medical device companies, and industrial partners.
              </p>
            </div>
            <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center">
              <Factory className="h-20 w-20 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="bg-muted/30 border-y py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Quality Control</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              From incoming raw material inspection to in-process monitoring and final product
              testing, every batch undergoes rigorous quality checks.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Raw Material Inspection', desc: 'All incoming materials are tested for purity and consistency.' },
              { icon: FlaskConical, title: 'In-Process Monitoring', desc: 'Real-time monitoring of coating thickness, perforation quality, and adhesion.' },
              { icon: CheckCircle, title: 'Final Product Testing', desc: 'Each batch tested for adhesive strength, breathability, and dimensional accuracy.' },
              { icon: Award, title: 'Certification Compliance', desc: 'ISO 13485, ISO 10993 biocompatibility, and CE marking compliance.' },
            ].map((item) => (
              <Card key={item.title} className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center mb-10">
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'ISO 13485:2016', desc: 'Medical device quality management system' },
              { name: 'ISO 10993', desc: 'Biological evaluation of medical devices' },
              { name: 'CE Marking', desc: 'European medical device compliance' },
              { name: 'FDA Registration', desc: 'US FDA establishment registration' },
            ].map((cert) => (
              <div key={cert.name} className="text-center p-6 border rounded-xl">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-blue-700 py-16 text-center">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Partner With Us</h2>
          <p className="mt-3 text-blue-100">
            Contact our team to discuss your requirements and discover how we can support your production.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
