"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import DemoLive from "@/components/demo-live/DemoLive";

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: "all", name: "Todos", count: 9 },
    { id: "website", name: "Websites", count: 3 },
    { id: "landing", name: "Landing Page", count: 4 },
    { id: "ecommerce", name: "E-commerce", count: 2 },
  ];

  const projects = [
    {
      title: "E-commerce de Garrafas de Água",
      liveUrl: "https://ecommerce-water-bottle-template-mai.vercel.app/",
      category: "ecommerce",
    },
    {
      title: "AURA - Landing Page de Skincare",
      liveUrl: "https://skincare-template.vercel.app/",
      category: "landing",
    },
    {
      title: "Landing Page SaaS Moderna",
      liveUrl: "https://landing-page-saas-template.vercel.app/",
      category: "landing",
    },
    {
      title: "Travel Journal - Diário de Viagem",
      liveUrl: "https://www.traveljournal.me/pt",
      category: "website",
    },
    {
      title: "AQUAFlow - Garrafa Inteligente",
      liveUrl: "https://water-bottle-template.vercel.app/",
      category: "landing",
    },
    {
      title: "E-commerce de Skincare Premium",
      liveUrl: "https://ecommerce-skincare-template.vercel.app/",
      category: "ecommerce",
    },
    {
      title: "Landing Page de Headphones Premium",
      liveUrl: "https://nextjs-product-landing.vercel.app/",
      category: "landing",
    },
    {
      title: "Paws & Purpose - Adoção de Cães",
      liveUrl: "https://paws-and-purpose.vercel.app/",
      category: "website",
    },
    {
      title: "PurificAR - Realidade Aumentada",
      liveUrl:
        "https://purific-ar-git-master-gabriellamsas-projects.vercel.app/",
      category: "website",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-6xl font-thin text-black mb-6">
              Meu Portfólio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Demonstrações ao vivo dos meus melhores trabalhos
            </p>
          </div>

          {/* Category Filters */}
          <div
            className={`mb-16 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${
                  (index + 1) * 200
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                <DemoLive
                  url={project.liveUrl}
                  title={project.title}
                  className="h-80"
                />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={`text-center transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="bg-gray-50 p-16">
              <h3 className="text-4xl font-light text-black mb-6">
                Tem um projeto em mente?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Vamos transformar sua ideia em uma realidade digital de sucesso
              </p>
              <Link
                href="/contato"
                className="inline-block px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
