import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/lib/constants';
import { Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">SG</span>
              </div>
              <span className="text-lg font-semibold">Silicone Gel Film</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional manufacturer of double-sided silicone gel perforated film for medical
              and industrial applications. ISO 13485 certified.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/products', label: t('nav.products') },
                { href: '/applications', label: t('nav.applications') },
                { href: '/about', label: t('nav.about') },
                { href: '/faq', label: t('nav.faq') },
                { href: '/blog', label: t('nav.blog') },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Products
            </h3>
            <ul className="space-y-3">
              {[
                { slug: 'standard-silicone-gel-film', name: 'Standard Silicone Gel Film' },
                { slug: 'high-breathability-silicone-film', name: 'High-Breathability Film' },
                { slug: 'industrial-bonding-silicone-film', name: 'Industrial Grade Film' },
                { slug: 'custom-perforation-silicone-film', name: 'Custom Solutions' },
              ].map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              {t('contact.info.title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city},{' '}
                  {siteConfig.address.country}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{siteConfig.links.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{siteConfig.links.phone}</span>
                </a>
              </li>
            </ul>
            <Link href="/contact">
              <span className="text-sm font-medium text-primary hover:underline">
                {t('common.contactUs')} →
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. {t('common.allRightsReserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
