"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer:
        "O prazo varia conforme a complexidade do projeto. Sites institucionais simples levam de 2-4 semanas, landing pages de 1-2 semanas, e e-commerces completos de 6-12 semanas. Sempre entregamos no prazo acordado.",
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer:
        "Sim! Oferecemos 3 meses de suporte gratuito incluído em todos os projetos. Após esse período, disponibilizamos planos de manutenção mensal para garantir que seu site sempre funcione perfeitamente.",
    },
    {
      question: "Posso fazer alterações no site depois de pronto?",
      answer:
        "Claro! Durante o período de suporte, alterações simples são gratuitas. Para mudanças mais complexas, oferecemos serviços de atualização com preços justos e transparentes.",
    },
    {
      question: "O site será responsivo para mobile?",
      answer:
        "Sim! Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência perfeita em desktops, tablets e smartphones. Testamos em todos os dispositivos.",
    },
    {
      question: "Vocês fazem SEO no site?",
      answer:
        "Sim! Implementamos otimizações básicas de SEO em todos os projetos, incluindo meta tags, estrutura semântica e performance. Para SEO avançado, oferecemos serviços especializados.",
    },
    {
      question: "Qual é o processo de pagamento?",
      answer:
        "Trabalhamos com 50% de entrada para iniciar o projeto e 50% na entrega. Para projetos maiores, podemos dividir em mais parcelas. Aceitamos PIX, cartão e boleto.",
    },
    {
      question: "Vocês criam conteúdo para o site?",
      answer:
        "Oferecemos criação de conteúdo como serviço adicional. Podemos escrever textos, selecionar imagens e até mesmo fazer fotos profissionais, dependendo do seu orçamento.",
    },
    {
      question: "O site ficará no ar imediatamente?",
      answer:
        "Após a aprovação final, fazemos o deploy e o site fica no ar em até 24 horas. Fornecemos todas as instruções de acesso e gerenciamento do seu site.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-thin text-black mb-4 sm:mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Tire suas dúvidas sobre nossos serviços e processos
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg transform transition-all duration-1000 delay-${
                  (index + 1) * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex justify-between items-start sm:items-center hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-base sm:text-lg font-medium text-black pr-3 sm:pr-4 leading-tight">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 transition-transform duration-300 flex-shrink-0 mt-1 sm:mt-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-4 sm:px-8 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center mt-12 sm:mt-16 transform transition-all duration-1000 delay-900 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-light text-black mb-3 sm:mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Entre em contato conosco e esclareça todas as suas questões
              </p>
              <Link
                href="/contato"
                className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
