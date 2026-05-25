'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import LanguageSwitcher from './language-switcher';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'nav.home' },
  { href: '/products', label: 'nav.products' },
  { href: '/applications', label: 'nav.applications' },
  { href: '/about', label: 'nav.about' },
  { href: '/faq', label: 'nav.faq' },
  { href: '/blog', label: 'nav.blog' },
] as const;

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">SG</span>
          </div>
          <span className="hidden sm:inline-block text-lg font-semibold tracking-tight">
            Silicone Gel Film
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                )}
              >
                {t(item.label as any)}
              </Link>
            );
          })}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button size="sm" className="hidden sm:inline-flex">
              {t('nav.contact')}
            </Button>
          </Link>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="lg:hidden inline-flex items-center justify-center rounded-lg border border-transparent h-8 w-8 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors cursor-pointer">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'px-3 py-2.5 text-base font-medium rounded-md transition-colors',
                        isActive
                          ? 'text-primary bg-primary/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      )}
                    >
                      {t(item.label as any)}
                    </Link>
                  );
                })}
                <div className="mt-4 pt-4 border-t">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full">{t('nav.contact')}</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
