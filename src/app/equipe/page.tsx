"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function EquipePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "GA",
      role: "Frontend React Developer",
      description:
        "Especialista em React, Next.js e design de interfaces. Apaixonada por criar experiências digitais que transformam ideias em realidade.",
      image: "/images/team-gabriella.jpg",
      skills: ["React", "Next.js", "TypeScript", "UI/UX Design"],
    },
    {
      name: "JP",
      role: "Lead Full Stack Developer",
      description:
        "Desenvolvedor experiente com foco em soluções completas e escaláveis. Especialista em criar sistemas robustos e eficientes.",
      image: "/images/team-john.jpg",
      skills: ["JavaScript", "Node.js", "Python", "Database Design"],
    },
  ];

  const values = [
    {
      title: "Inovação",
      description:
        "Sempre buscamos as melhores tecnologias e metodologias para entregar soluções únicas.",
    },
    {
      title: "Colaboração",
      description:
        "Trabalhamos em equipe para garantir que cada projeto seja uma obra-prima coletiva.",
    },
    {
      title: "Foco em Resultados",
      description:
        "Cada linha de código e cada pixel são pensados para gerar resultados reais para nossos clientes.",
    },
    {
      title: "Aprendizado Contínuo",
      description:
        "Estamos sempre estudando e evoluindo para oferecer o que há de melhor no mercado.",
    },
  ];

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
            <h1 className="text-6xl font-thin text-black mb-6">Nossa Equipe</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as mentes criativas e os talentos por trás de cada projeto
              que ilumina o mundo digital
            </p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
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
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-medium text-black mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4 font-medium">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div
            className={`mb-20 transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-black mb-6">
                Nossos Valores
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Os princípios que guiam nosso trabalho e definem nossa cultura
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-xl font-medium text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={`text-center transform transition-all duration-1000 delay-1200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="bg-gray-50 p-16 rounded-lg">
              <h3 className="text-4xl font-light text-black mb-6">
                Pronto para trabalhar conosco?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Vamos criar algo incrível juntos e iluminar o mundo digital
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-block px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                  Começar Projeto
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-block px-8 py-4 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Ver Nossos Trabalhos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
