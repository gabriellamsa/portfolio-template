"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { generateProjectJsonLd, generateBreadcrumbJsonLd } from "@/lib/jsonld";
import { portfolioProjectsData } from "@/config/seo";

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: "all", name: "Todos", count: 6 },
    { id: "website", name: "Websites", count: 2 },
    { id: "landing", name: "Landing Page", count: 2 },
    { id: "ecommerce", name: "E-commerce", count: 2 },
  ];

  const projects = [
    {
      title: "E-commerce de Garrafas de Água",
      description:
        "Desenvolvimento de uma loja virtual moderna e responsiva para venda de garrafas de água personalizadas.",
      image: "/images/portfolio-1.jpg",
      category: "ecommerce",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      liveUrl: "https://ecommerce-water-bottle-template-mai.vercel.app/",
    },
    {
      title: "Website Institucional para Consultoria",
      description:
        "Criação de um site elegante e informativo para uma consultoria de negócios, focado em apresentar serviços e captar clientes.",
      image: "/images/portfolio-2.jpg",
      category: "website",
      tags: ["React", "Styled Components", "Node.js"],
      liveUrl: "https://consultoria-template-main.vercel.app/",
    },
    {
      title: "Landing Page para Evento de Tecnologia",
      description:
        "Desenvolvimento de uma landing page de alta conversão para um evento de tecnologia, com formulário de inscrição e countdown.",
      image: "/images/portfolio-3.jpg",
      category: "landing",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://landing-page-evento-template-main.vercel.app/",
    },
    {
      title: "Plataforma de Gerenciamento de Projetos",
      description:
        "Construção de uma plataforma web robusta para gerenciamento de projetos, com dashboards interativos e controle de tarefas.",
      image: "/images/portfolio-4.jpg",
      category: "website",
      tags: ["Next.js", "TypeScript", "GraphQL"],
      liveUrl: "https://gerenciamento-projetos-template-main.vercel.app/",
    },
    {
      title: "Landing Page de Produto Digital",
      description:
        "Criação de uma landing page otimizada para venda de curso online, com design persuasivo e alta taxa de conversão.",
      image: "/images/portfolio-5.jpg",
      category: "landing",
      tags: ["WordPress", "Elementor", "SEO"],
      liveUrl: "https://landing-produto-digital-template.vercel.app/",
    },
    {
      title: "E-commerce de Roupas Esportivas",
      description:
        "Desenvolvimento de uma loja virtual completa para venda de roupas esportivas, com sistema de carrinho e checkout seguro.",
      image: "/images/portfolio-6.jpg",
      category: "ecommerce",
      tags: ["Vue.js", "Firebase", "API REST"],
      liveUrl: "https://ecommerce-roupas-esportivas-template.vercel.app/",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const projectsJsonLd = portfolioProjectsData.map((project) =>
    generateProjectJsonLd(project)
  );
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Início", url: "https://webluma.com" },
    { name: "Portfólio", url: "https://webluma.com/portfolio" },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={[...projectsJsonLd, breadcrumbJsonLd]} />
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
              Uma seleção dos meus melhores trabalhos, demonstrando paixão por
              design e desenvolvimento
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
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.category === "ecommerce"
                            ? "bg-green-100 text-green-800"
                            : project.category === "landing"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {project.category === "ecommerce"
                          ? "E-commerce"
                          : project.category === "landing"
                          ? "Landing Page"
                          : "Website"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300"
                      >
                        Ver Projeto
                      </Link>
                    </div>
                  </div>
                </div>
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
