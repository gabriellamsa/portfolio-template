"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Na página de contato, sempre mostrar fundo branco
  const isContactPage = pathname === "/contato";
  const shouldShowWhiteBackground = isScrolled || isContactPage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowWhiteBackground
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={isContactPage ? "/#home" : "#home"}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-black rounded flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <span
                className={`text-2xl font-light transition-colors duration-300 ${
                  shouldShowWhiteBackground ? "text-black" : "text-white"
                }`}
              >
                DevWeb
              </span>
              <span
                className={`block text-xs transition-colors duration-300 ${
                  shouldShowWhiteBackground ? "text-gray-500" : "text-white/60"
                }`}
              >
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={isContactPage ? "/#home" : "#home"}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
            >
              Início
            </Link>
            <Link
              href={isContactPage ? "/#sobre" : "#sobre"}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
            >
              Sobre
            </Link>
            <Link
              href={isContactPage ? "/#servicos" : "#servicos"}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
            >
              Serviços
            </Link>
            <Link
              href={isContactPage ? "/#portfolio" : "#portfolio"}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
            >
              Portfólio
            </Link>
            <Link
              href={isContactPage ? "/#metodologia" : "#metodologia"}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
            >
              Metodologia
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contato"
              className={`px-6 py-3 font-medium transition-all duration-300 transform hover:scale-105 ${
                shouldShowWhiteBackground
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`p-2 transition-colors duration-300 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
