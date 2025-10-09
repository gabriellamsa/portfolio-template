"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contato";
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
      const newParticles = Array.from({ length: 2000 }).map((_, i) => ({
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

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/seu-usuario",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/seu-perfil",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/seu-usuario",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/seu-usuario",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: "Início", href: isContactPage ? "/#home" : "#home" },
    { name: "Sobre", href: isContactPage ? "/#sobre" : "#sobre" },
    { name: "Serviços", href: isContactPage ? "/#servicos" : "#servicos" },
    { name: "Portfólio", href: isContactPage ? "/#portfolio" : "#portfolio" },
    {
      name: "Metodologia",
      href: isContactPage ? "/#metodologia" : "#metodologia",
    },
  ];

  const services = [
    "Desenvolvimento Web",
    "Landing Pages",
    "E-commerce",
    "Consultoria Digital",
    "Manutenção",
    "SEO & Performance",
  ];

  return (
    <footer
      id="contato"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Animated Particles Background */}
      <div className="absolute inset-0 z-10">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-white/15 rounded-full animate-particle-move"
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

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Logo e Descrição */}
            <div className="md:col-span-1">
              <Link
                href={isContactPage ? "/#home" : "#home"}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-bold text-xl">D</span>
                </div>
                <div>
                  <span className="text-white text-xl font-light">DevWeb</span>
                  <span className="block text-sm text-gray-400">
                    Frontend Developer
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 text-base leading-relaxed">
                Criamos experiências digitais que transformam ideias em
                realidade.
              </p>
              <div className="mt-6">
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300 w-8 h-8"
                      title={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                Navegação
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">
                Serviços
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">Contato</h3>
              <div className="space-y-3">
                <div className="text-gray-400 text-base">
                  <a
                    href="mailto:contato@devweb.com"
                    className="hover:text-white transition-colors duration-300"
                  >
                    contato@devweb.com
                  </a>
                </div>
                <div className="text-gray-400 text-base">
                  <a
                    href="tel:+5511999999999"
                    className="hover:text-white transition-colors duration-300"
                  >
                    +55 (XX) XXXXX-XXXX
                  </a>
                </div>
                <div className="text-gray-400 text-base">
                  <a
                    href="https://maps.google.com/?q=São+Paulo,Brasil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    São Paulo, Brasil
                  </a>
                </div>
                <div className="mt-4">
                  <Link
                    href="/contato"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-gray-400 text-base">
              <p>&copy; 2025 DevWeb. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
