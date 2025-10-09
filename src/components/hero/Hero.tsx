"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {mounted &&
          [...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
      </div>

      {/* Dynamic Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div
            className={`transform transition-all duration-2000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-block mb-8">
              <div className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                <span className="text-white/80 text-sm font-medium">
                  Desenvolvimento Web Profissional
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-8xl md:text-9xl font-thin text-white mb-8 leading-none">
              <span className="block">WEB</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                DEVELOPMENT
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed">
              Criamos experiências digitais que transformam ideias em realidade
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Link
                href="/contato"
                className="px-8 py-4 bg-white text-black font-semibold rounded-none hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
              >
                Começar Projeto
              </Link>
              <Link
                href="#portfolio"
                className="px-8 py-4 border border-white/30 text-white hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
              >
                Ver Trabalhos
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-light text-white mb-2">50+</div>
                <div className="text-sm text-white/60">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-white mb-2">100%</div>
                <div className="text-sm text-white/60">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-white mb-2">5+</div>
                <div className="text-sm text-white/60">Anos</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
