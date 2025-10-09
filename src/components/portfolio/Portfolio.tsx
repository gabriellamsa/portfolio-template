"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import FigmaProject from "@/components/figma/FigmaProject";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  // Figma Access Token - você pode obter um Personal Access Token no Figma
  const figmaToken = process.env.NEXT_PUBLIC_FIGMA_TOKEN || "";

  const projects = [
    {
      title: "FlowSync - Gestão de Tarefas com IA",
      category: "Landing Page",
      description:
        "Plataforma inteligente de gestão de tarefas com IA para otimizar fluxo de trabalho e aumentar produtividade.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      results: ["Interface moderna", "Performance otimizada", "UX intuitiva"],
      liveUrl: "https://landing-page-saas-template.vercel.app/",
      figmaKey: "", // Adicione a chave do arquivo Figma aqui
    },
    {
      title: "AURA Skincare - Cuidados Naturais",
      category: "Landing Page",
      description:
        "Landing page elegante para marca de skincare natural com foco em conversão e design minimalista.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
      results: ["Design elegante", "Alta conversão", "Mobile-first"],
      liveUrl: "https://skincare-template.vercel.app/",
    },
    {
      title: "AQUAFlow - Garrafa Inteligente",
      category: "Landing Page",
      description:
        "Landing page para garrafa inteligente com design minimalista e foco em hidratação.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      results: ["Design minimalista", "Interatividade", "Performance"],
      liveUrl: "https://water-bottle-template.vercel.app/",
    },
    {
      title: "Travel Journal - Site de Viagens",
      category: "Website Completo",
      description:
        "Site completo de viagens com funcionalidades avançadas, blog integrado e sistema de compartilhamento.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
      ],
      results: [
        "Site em produção",
        "Funcionalidades completas",
        "SEO otimizado",
      ],
      liveUrl: "https://www.traveljournal.me/pt",
    },
    {
      title: "E-commerce Skincare",
      category: "E-commerce",
      description:
        "Loja virtual completa para produtos de skincare com carrinho, pagamentos e painel administrativo.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "Prisma",
      ],
      results: ["E-commerce completo", "Pagamentos integrados", "Admin panel"],
      liveUrl: "https://ecommerce-skincare-template.vercel.app/",
    },
    {
      title: "E-commerce Water Bottle",
      category: "E-commerce",
      description:
        "Loja virtual para garrafas inteligentes com sistema de pagamento, gestão de produtos e design responsivo.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "Prisma",
      ],
      results: ["Loja funcional", "Pagamentos seguros", "Gestão completa"],
      liveUrl: "https://ecommerce-water-bottle-template-mai.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-6xl font-thin text-black mb-6">
              Meu Portfólio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma seleção dos meus melhores trabalhos, demonstrando paixão por
              design e desenvolvimento
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
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
                {/* Render Figma Project if figmaKey exists, otherwise render regular project */}
                {project.figmaKey && figmaToken ? (
                  <FigmaProject
                    fileKey={project.figmaKey}
                    accessToken={figmaToken}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                  />
                ) : (
                  <div className="bg-gray-50 h-full hover:shadow-lg transition-shadow duration-300">
                    {/* Project Image */}
                    <div className="h-64 bg-gray-200 relative overflow-hidden">
                      <iframe
                        src={project.liveUrl}
                        className="absolute inset-0 w-full h-full border-0 transform scale-75"
                        title={`Live demo - ${project.title}`}
                        loading="lazy"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-500 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-medium text-black mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 3 && (
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Results */}
                      <div className="space-y-2 mb-6">
                        {project.results
                          .slice(0, 2)
                          .map((result, resultIndex) => (
                            <div
                              key={resultIndex}
                              className="flex items-center text-gray-600 text-sm"
                            >
                              <div className="w-1 h-1 bg-black rounded-full mr-2"></div>
                              {result}
                            </div>
                          ))}
                      </div>

                      {/* CTA */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-black text-white py-3 px-4 hover:bg-gray-800 transition-colors duration-300"
                      >
                        Ver Projeto
                      </a>
                    </div>
                  </div>
                )}
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
                href="#contato"
                className="inline-block px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Iniciar Projeto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
