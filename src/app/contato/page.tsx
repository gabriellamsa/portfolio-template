"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    topic: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    // Gerar partículas apenas no cliente para evitar erro de hidratação
    const generateParticles = () => {
      const newParticles = Array.from({ length: 200 }).map((_, i) => ({
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
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log("Formulário enviado:", formData);
  };

  const topics = [
    "Site Institucional",
    "Landing Page",
    "E-commerce",
    "Consultoria",
    "Manutenção",
    "Outro",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center py-24">
          <div className="max-w-2xl mx-auto text-center px-4">
            <div className="bg-white rounded-lg p-12 shadow-xl border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-light text-black mb-4">
                Mensagem Enviada com Sucesso!
              </h1>
              <p className="text-gray-600 mb-8">
                Obrigado pelo seu interesse! Entraremos em contato em até 24
                horas.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                Voltar para o Início
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-black mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tem dúvidas sobre nossos serviços? Quer solicitar um orçamento ou
              compartilhar feedback? Adoraríamos ouvir de você.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-6">
                Informações de Contato
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Somos uma equipe especializada em desenvolvimento web. Seu
                feedback nos ajuda a criar soluções cada vez melhores para
                nossos clientes.
              </p>

              <div className="space-y-8">
                {/* Contact Method */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Envie-nos uma mensagem
                    </h3>
                    <p className="text-gray-600">
                      Responderemos em até 24 horas
                    </p>
                  </div>
                </div>

                {/* Help Topics */}
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Com o que podemos ajudar:
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Orçamentos para projetos web
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Dúvidas sobre nossos serviços
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Sugestões de melhorias
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      Feedback geral
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-black rounded-lg p-8 shadow-xl relative overflow-hidden">
              {/* Animated Particles Background */}
              <div className="absolute inset-0 z-0">
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute bg-white/10 rounded-full animate-particle-move"
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
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Envie-nos uma Mensagem
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white/10 text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white/10 text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Assunto */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Breve descrição da sua mensagem"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white/10 text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Tópico */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Tópico
                    </label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white/10 text-white"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <option
                        value=""
                        style={{ backgroundColor: "#1f2937", color: "white" }}
                      >
                        Selecione um tópico (opcional)
                      </option>
                      {topics.map((topic) => (
                        <option
                          key={topic}
                          value={topic}
                          style={{ backgroundColor: "#1f2937", color: "white" }}
                        >
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Conte-nos como podemos ajudá-lo..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white/10 text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-3 px-6 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
