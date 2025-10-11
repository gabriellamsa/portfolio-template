"use client";

import { useState } from "react";
import DemoLive from "@/components/demo-live/DemoLive";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function DemoLivePage() {
  const [url, setUrl] = useState("https://skincare-template.vercel.app/");

  const demoSites = [
    {
      title: "AURA Skincare",
      url: "https://skincare-template.vercel.app/",
    },
    {
      title: "E-commerce Water Bottle",
      url: "https://ecommerce-water-bottle-template-mai.vercel.app/",
    },
    {
      title: "SaaS Landing Page",
      url: "https://landing-page-saas-template.vercel.app/",
    },
    {
      title: "Travel Journal",
      url: "https://www.traveljournal.me/pt",
    },
    {
      title: "Water Bottle Template",
      url: "https://water-bottle-template.vercel.app/",
    },
    {
      title: "Headphones Landing",
      url: "https://nextjs-product-landing.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-32 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-thin text-black mb-4">
              Demo Live Cards
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Screenshots dinâmicos em tempo real dos sites
            </p>
          </div>

          {/* URL Input */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Teste com sua URL:</h3>
              <div className="flex gap-4">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://exemplo.com"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Demo Card */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Preview Dinâmico:
            </h3>
            <div className="max-w-md mx-auto">
              <DemoLive url={url} title="Site Personalizado" />
            </div>
          </div>

          {/* Grid de Sites */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Nossos Projetos:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demoSites.map((site, index) => (
                <DemoLive key={index} url={site.url} title={site.title} />
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Características do Demo Live
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Tempo Real</h4>
                <p className="text-sm text-gray-600">
                  Screenshots atualizados automaticamente
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Sem Backend</h4>
                <p className="text-sm text-gray-600">
                  Funciona totalmente no frontend
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Design Moderno</h4>
                <p className="text-sm text-gray-600">
                  Cards elegantes com hover effects
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Link Direto</h4>
                <p className="text-sm text-gray-600">
                  Botão para acessar o site original
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
