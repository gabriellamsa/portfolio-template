"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-sm font-medium">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                  Sobre Nossa Equipe
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    Equipe Especializada em Desenvolvimento Web
                  </span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Somos uma equipe pequena e especializada, focada em criar
                  soluções digitais que realmente funcionam para o seu negócio.
                  Cada projeto é desenvolvido com atenção aos detalhes e foco em
                  resultados.
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4 text-slate-700">
                <p>
                  Nossa equipe é formada por desenvolvedores especializados em
                  tecnologias modernas como Next.js, React e TypeScript.
                  Trabalhamos de forma colaborativa para entregar projetos que
                  superam as expectativas dos nossos clientes.
                </p>
                <p>
                  Cada membro da equipe traz uma expertise única, permitindo que
                  ofereçamos soluções completas desde o design até a
                  implementação e manutenção dos projetos. Acreditamos que o
                  trabalho em equipe gera resultados excepcionais.
                </p>
                <p>
                  Nosso diferencial está na atenção aos detalhes, comunicação
                  transparente e compromisso com a entrega de projetos que
                  realmente agregam valor ao negócio dos nossos clientes.
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  Tecnologias que dominamos:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "Node.js",
                    "Git",
                    "Figma",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  href="#contato"
                  className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Vamos trabalhar juntos
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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

            {/* Visual */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-slate-200">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-600 font-medium">
                        Sua foto aqui
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Equipe Pequena
                      </div>
                      <div className="text-xs text-slate-500">
                        Grande Resultado
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        Especialistas
                      </div>
                      <div className="text-xs text-slate-500">
                        em Tecnologia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
