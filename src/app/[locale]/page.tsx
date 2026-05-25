import HeroSection from '@/components/home/hero-section';
import ProductOverview from '@/components/home/product-overview';
import ApplicationShowcase from '@/components/home/application-showcase';
import CertificationBar from '@/components/home/certification-bar';
import CompanyStats from '@/components/home/company-stats';
import WhyChooseUs from '@/components/home/why-choose-us';
import CTABanner from '@/components/home/cta-banner';
import { getFeaturedProducts } from '@/data/products';
import { getApplications } from '@/data/applications';

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();
  const applications = await getApplications();

  return (
    <>
      <HeroSection />
      <CertificationBar />
      <CompanyStats />
      <ProductOverview products={featuredProducts} />
      <WhyChooseUs />
      <ApplicationShowcase applications={applications} />
      <CTABanner />
    </>
  );
}
