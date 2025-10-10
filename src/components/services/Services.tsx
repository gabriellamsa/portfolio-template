"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      width: number;
      height: number;
      left: number;
      top: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);

    // Gerar partículas apenas no cliente para evitar erro de hidratação
    const generateParticles = () => {
      const newParticles = Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 2,
      }));
      setParticles(newParticles);
    };

    generateParticles();

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Sites Institucionais",
      description:
        "Criação de websites profissionais e modernos para empresas que buscam presença online impactante e credibilidade no mercado.",
      features: [
        "Design responsivo e moderno",
        "SEO otimizado para Google",
        "Velocidade de carregamento otimizada",
        "Suporte técnico completo",
      ],
      price: "A partir de R$",
    },
    {
      title: "Landing Pages",
      description:
        "Desenvolvimento de landing pages de alta conversão, focadas em capturar leads e impulsionar suas campanhas de marketing digital.",
      features: [
        "Design persuasivo e otimizado",
        "Formulários de captura estratégicos",
        "Analytics e tracking integrado",
        "A/B Testing para otimização",
      ],
      price: "A partir de R$",
    },
    {
      title: "E-commerce",
      description:
        "Criação de lojas virtuais completas e seguras, com todas as funcionalidades necessárias para você vender seus produtos online.",
      features: [
        "Sistema de pagamento seguro",
        "Gestão completa de produtos",
        "Painel administrativo intuitivo",
        "Relatórios de vendas detalhados",
      ],
      price: "A partir de R$",
    },
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
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
              Nossos Serviços
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Oferecemos soluções digitais personalizadas para impulsionar o seu
              negócio
            </p>
          </div>

          {/* Services - Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
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
                <div className="bg-white p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-light text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-base text-gray-600"
                      >
                        <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-2xl font-light text-black mb-4">
                      {service.price}
                    </p>
                    <Link
                      href="/contato"
                      className="block w-full text-center bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors duration-300"
                    >
                      Solicitar Orçamento
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services - Mobile Carousel */}
          <div className="sm:hidden mb-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={false}
              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !bg-gray-300 !opacity-100",
                bulletActiveClass: "swiper-pagination-bullet-active !bg-black",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="services-swiper"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 h-full shadow-lg rounded-lg">
                    <h3 className="text-xl font-light text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-xl font-light text-black mb-3">
                        {service.price}
                      </p>
                      <Link
                        href="/contato"
                        className="block w-full text-center bg-black text-white py-2 px-4 hover:bg-gray-800 transition-colors duration-300 text-sm"
                      >
                        Solicitar Orçamento
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* CTA Section */}
          <div
            className={`text-center transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="bg-black text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              {/* Animated Particles Background */}
              <div className="absolute inset-0 z-0">
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute bg-white/30 rounded-full animate-particle-move"
                    style={{
                      width: `${particle.width}px`,
                      height: `${particle.height}px`,
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      animationDuration: `${particle.duration}s`,
                      animationDelay: `${particle.delay}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6">
                  Não encontrou o que procura?
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Entre em contato para uma solução personalizada
                </p>
                <Link
                  href="/contato"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
                >
                  Falar com Especialista
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
