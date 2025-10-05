"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Projeto em Desenvolvimento",
      category: "Em Breve",
      description:
        "Este é um projeto que estou desenvolvendo para demonstrar minhas habilidades em desenvolvimento web. Em breve você poderá ver o resultado final aqui.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      results: ["Design responsivo", "Performance otimizada", "Código limpo"],
      link: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Projeto em Desenvolvimento",
      category: "Em Breve",
      description:
        "Outro projeto que estou criando para expandir meu portfólio e demonstrar diferentes abordagens de desenvolvimento web moderno.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      results: ["Design moderno", "SEO otimizado", "Acessibilidade"],
      link: "#",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Projeto em Desenvolvimento",
      category: "Em Breve",
      description:
        "Mais um projeto que estou desenvolvendo para mostrar diferentes aspectos do meu trabalho e as tecnologias que domino.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      results: ["Interface intuitiva", "Código escalável", "Manutenção fácil"],
      link: "#",
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
              Meu Portfólio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Projetos em Desenvolvimento
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Aqui você encontrará alguns dos projetos que estou desenvolvendo.
              Cada projeto é uma oportunidade de aprender e aplicar novas
              tecnologias para criar soluções digitais inovadoras.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 transform transition-all duration-1000 delay-${
                  (index + 1) * 200
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <svg
                          className="w-8 h-8 text-slate-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-600 font-medium">
                        Preview do projeto
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <svg
                      className="w-4 h-4 text-slate-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    {project.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center text-sm text-cyan-600 font-medium"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={project.link}
                    className={`group/btn block w-full text-center bg-gradient-to-r ${project.color} text-white py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25`}
                  >
                    Ver projeto completo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={`text-center transform transition-all duration-1000 delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Quer trabalhar comigo?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Vamos criar algo incrível juntos. Entre em contato e vamos
                discutir como posso ajudar a transformar sua ideia em realidade.
              </p>
              <Link
                href="#contato"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Solicitar Orçamento
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
