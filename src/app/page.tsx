import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import FAQ from "@/components/faq/FAQ";
import Methodology from "@/components/methodology/Methodology";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Methodology />
      <FAQ />
      <Footer />
    </main>
  );
}
