"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "Figma" },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-black mb-4 sm:mb-6">
              Sobre Nós
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Somos especialistas em criar soluções digitais que fazem a
              diferença
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12 sm:mb-16 lg:mb-20">
            {/* Left Content */}
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-4 sm:mb-6">
                Nossa História
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Começamos com uma visão simples: transformar ideias complexas em
                experiências digitais elegantes e funcionais.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Hoje, somos uma equipe dedicada a criar soluções que não apenas
                impressionam visualmente, mas que geram resultados reais para
                nossos clientes.
              </p>
              <Link
                href="/equipe"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
              >
                Conhecer Equipe
              </Link>
            </div>

            {/* Right Content */}
            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-gray-50 p-6 sm:p-8 lg:p-12">
                <h4 className="text-xl sm:text-2xl font-light text-black mb-6 sm:mb-8">
                  Nossos Valores
                </h4>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h5 className="text-base sm:text-lg font-medium text-black mb-2">
                      Inovação
                    </h5>
                    <p className="text-sm sm:text-base text-gray-600">
                      Sempre buscamos as tecnologias mais modernas
                    </p>
                  </div>
                  <div>
                    <h5 className="text-base sm:text-lg font-medium text-black mb-2">
                      Qualidade
                    </h5>
                    <p className="text-sm sm:text-base text-gray-600">
                      Cada projeto é tratado com excelência
                    </p>
                  </div>
                  <div>
                    <h5 className="text-base sm:text-lg font-medium text-black mb-2">
                      Transparência
                    </h5>
                    <p className="text-sm sm:text-base text-gray-600">
                      Comunicação clara em todas as etapas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-6 sm:mb-12 text-center">
              Tecnologias
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 lg:gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-2 sm:mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                      {skill.name === "React" && (
                        <img
                          src="https://skillicons.dev/icons?i=react"
                          alt="React"
                          className="w-8 h-8"
                        />
                      )}
                      {skill.name === "Next.js" && (
                        <img
                          src="https://skillicons.dev/icons?i=next"
                          alt="Next.js"
                          className="w-8 h-8"
                        />
                      )}
                      {skill.name === "TypeScript" && (
                        <img
                          src="https://skillicons.dev/icons?i=ts"
                          alt="TypeScript"
                          className="w-8 h-8"
                        />
                      )}
                      {skill.name === "Tailwind CSS" && (
                        <img
                          src="https://skillicons.dev/icons?i=tailwind"
                          alt="Tailwind CSS"
                          className="w-8 h-8"
                        />
                      )}
                      {skill.name === "Node.js" && (
                        <img
                          src="https://skillicons.dev/icons?i=nodejs"
                          alt="Node.js"
                          className="w-8 h-8"
                        />
                      )}
                      {skill.name === "Figma" && (
                        <img
                          src="https://skillicons.dev/icons?i=figma"
                          alt="Figma"
                          className="w-8 h-8"
                        />
                      )}
                    </div>
                  </div>
                  <h4 className="text-xs sm:text-base font-medium text-black">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
