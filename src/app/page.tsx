import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import FAQ from "@/components/faq/FAQ";
import Methodology from "@/components/methodology/Methodology";
import Footer from "@/components/footer/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  generateServiceJsonLd,
  generateFAQJsonLd,
  generateBreadcrumbJsonLd,
} from "@/lib/jsonld";
import { servicesData, faqData } from "@/config/seo";

export default function Home() {
  const servicesJsonLd = servicesData.map((service) =>
    generateServiceJsonLd(service)
  );
  const faqJsonLd = generateFAQJsonLd(faqData);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Início", url: "https://webluma.com" },
  ]);

  return (
    <main className="min-h-screen">
      <JsonLd data={[...servicesJsonLd, faqJsonLd, breadcrumbJsonLd]} />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Methodology />
      <FAQ />
      <Footer />
    </main>
  );
}
