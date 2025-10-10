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
          [...Array(200)].map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-40 sm:py-24 lg:py-32 pb-12 sm:pb-24 lg:pb-32">
        <div className="max-w-2xl mx-auto text-center">
          {/* Main Content */}
          <div
            className={`transform transition-all duration-2000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-block mb-4 sm:mb-8">
              <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                <span className="text-white/80 text-xs sm:text-sm font-medium">
                  Desenvolvimento Web Profissional
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-thin text-white mb-4 sm:mb-8 leading-tight">
              <span className="block">WEB</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 drop-shadow-lg">
                DEVELOPMENT
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-8 sm:mb-16 max-w-2xl mx-auto leading-relaxed px-4">
              Criamos experiências digitais que transformam ideias em realidade
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-20 px-4">
              <Link
                href="#servicos"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-none hover:bg-white/90 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Começar Projeto
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white hover:bg-white/5 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Ver Trabalhos
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 max-w-2xl mx-auto px-4 mt-8 sm:mt-0">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-1 sm:mb-2">
                  Qualidade
                </div>
                <div className="text-xs sm:text-sm text-white/60">
                  Garantida
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-1 sm:mb-2">
                  Inovação
                </div>
                <div className="text-xs sm:text-sm text-white/60">
                  Constante
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-1 sm:mb-2">
                  Resultados
                </div>
                <div className="text-xs sm:text-sm text-white/60">Reais</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <div
            className={`hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-1000 ${
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
