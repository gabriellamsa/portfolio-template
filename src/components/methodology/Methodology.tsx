"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Methodology() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Análise & Planejamento",
      description:
        "Entendemos profundamente o seu negócio, seus objetivos e o público-alvo para criar uma estratégia digital sólida e personalizada.",
    },
    {
      number: "02",
      title: "Design & Prototipagem",
      description:
        "Transformamos a estratégia em layouts visuais modernos e intuitivos, garantindo uma experiência de usuário excepcional.",
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description:
        "Convertemos o design aprovado em código limpo, robusto e otimizado, utilizando as tecnologias mais modernas do mercado.",
    },
    {
      number: "04",
      title: "Entrega & Suporte",
      description:
        "Após a aprovação final, lançamos seu projeto e oferecemos suporte contínuo para garantir o sucesso e a evolução da sua presença digital.",
    },
  ];

  return (
    <section id="metodologia" className="py-32 bg-gray-50">
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
              Nossa Metodologia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo transparente e eficiente para garantir o sucesso do
              seu projeto
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
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
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-8">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-light">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-light text-black mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="bg-black text-white p-16">
              <h3 className="text-4xl font-light mb-6">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Vamos aplicar nossa metodologia comprovada para criar um projeto
                que gere resultados reais
              </p>
              <Link
                href="#servicos"
                className="inline-block px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Iniciar Projeto Agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
