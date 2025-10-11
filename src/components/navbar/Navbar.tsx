"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Na página de contato, portfólio e equipe, sempre mostrar fundo branco
  const isContactPage = pathname === "/contato";
  const isPortfolioPage = pathname === "/portfolio";
  const isTeamPage = pathname === "/equipe";
  const shouldShowWhiteBackground =
    isScrolled || isContactPage || isPortfolioPage || isTeamPage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowWhiteBackground
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href={
              isContactPage || isPortfolioPage || isTeamPage
                ? "/#home"
                : "#home"
            }
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative group-hover:opacity-80 transition-opacity duration-300">
              <Image
                src="/wb-logo.png"
                alt="webluma logo"
                fill
                sizes="(max-width: 640px) 32px, 40px"
                priority
                className="object-contain"
              />
            </div>
            <div>
              <span
                className={`text-lg sm:text-xl lg:text-2xl font-light transition-colors duration-300 ${
                  shouldShowWhiteBackground ? "text-black" : "text-white"
                }`}
              >
                web
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 drop-shadow-lg">
                  luma
                </span>
              </span>
              <span
                className={`block text-xs transition-colors duration-300 ${
                  shouldShowWhiteBackground ? "text-gray-500" : "text-white/60"
                }`}
              >
                Web Development
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={
                isContactPage || isPortfolioPage || isTeamPage
                  ? "/#home"
                  : "#home"
              }
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
            >
              Início
            </Link>
            <Link
              href={
                isContactPage || isPortfolioPage || isTeamPage
                  ? "/#sobre"
                  : "#sobre"
              }
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
            >
              Sobre
            </Link>
            <Link
              href={
                isContactPage || isPortfolioPage || isTeamPage
                  ? "/#servicos"
                  : "#servicos"
              }
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
            >
              Serviços
            </Link>
            <Link
              href="/portfolio"
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
            >
              Portfólio
            </Link>
            <Link
              href={
                isContactPage || isPortfolioPage || isTeamPage
                  ? "/#metodologia"
                  : "#metodologia"
              }
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
            >
              Metodologia
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Link
              href="/contato"
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                shouldShowWhiteBackground
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 transition-colors duration-300 ${
                shouldShowWhiteBackground ? "text-black" : "text-white"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link
                href={
                  isContactPage || isPortfolioPage || isTeamPage
                    ? "/#home"
                    : "#home"
                }
                onClick={closeMobileMenu}
                className="block text-black font-medium hover:text-gray-600 transition-colors duration-300"
              >
                Início
              </Link>
              <Link
                href={
                  isContactPage || isPortfolioPage || isTeamPage
                    ? "/#sobre"
                    : "#sobre"
                }
                onClick={closeMobileMenu}
                className="block text-black font-medium hover:text-gray-600 transition-colors duration-300"
              >
                Sobre
              </Link>
              <Link
                href={
                  isContactPage || isPortfolioPage || isTeamPage
                    ? "/#servicos"
                    : "#servicos"
                }
                onClick={closeMobileMenu}
                className="block text-black font-medium hover:text-gray-600 transition-colors duration-300"
              >
                Serviços
              </Link>
              <Link
                href="/portfolio"
                onClick={closeMobileMenu}
                className="block text-black font-medium hover:text-gray-600 transition-colors duration-300"
              >
                Portfólio
              </Link>
              <Link
                href={
                  isContactPage || isPortfolioPage || isTeamPage
                    ? "/#metodologia"
                    : "#metodologia"
                }
                onClick={closeMobileMenu}
                className="block text-black font-medium hover:text-gray-600 transition-colors duration-300"
              >
                Metodologia
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contato"
                  onClick={closeMobileMenu}
                  className="block w-full text-center bg-black text-white py-3 px-6 font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
