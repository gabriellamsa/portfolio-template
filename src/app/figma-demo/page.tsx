"use client";

import { useState } from "react";
import { getFigmaAuthUrl, extractFileKey } from "@/config/figma";
import FigmaProject from "@/components/figma/FigmaProject";

export default function FigmaDemo() {
  const [accessToken, setAccessToken] = useState("");
  const [figmaUrl, setFigmaUrl] = useState("");
  const [fileKey, setFileKey] = useState("");

  const handleAuth = () => {
    const authUrl = getFigmaAuthUrl();
    window.open(authUrl, "_blank");
  };

  const handleUrlChange = (url: string) => {
    setFigmaUrl(url);
    const key = extractFileKey(url);
    if (key) {
      setFileKey(key);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-black mb-6">
            Integração Figma API
          </h1>

          <div className="space-y-6">
            {/* Token Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Personal Access Token do Figma:
              </label>
              <input
                type="password"
                value={accessToken}
                onChange={(e) => setAccessToken(e.target.value)}
                placeholder="Cole seu token aqui..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Obtenha seu token em: Figma → Settings → Personal Access Tokens
              </p>
            </div>

            {/* URL Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL do Projeto Figma:
              </label>
              <input
                type="url"
                value={figmaUrl}
                onChange={(e) => handleUrlChange(e.target.value)}
                placeholder="https://www.figma.com/file/ABC123/Meu-Projeto"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {fileKey && (
                <p className="text-sm text-green-600 mt-1">
                  ✅ File Key extraído: {fileKey}
                </p>
              )}
            </div>

            {/* Auth Button */}
            <div>
              <button
                onClick={handleAuth}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                🔐 Autenticar com OAuth2
              </button>
            </div>
          </div>
        </div>

        {/* Demo Project */}
        {accessToken && fileKey && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">
              Projeto Carregado do Figma:
            </h2>

            <FigmaProject
              fileKey={fileKey}
              accessToken={accessToken}
              title="Meu Projeto Figma"
              description="Projeto carregado diretamente da API do Figma com thumbnails e metadados em tempo real."
              technologies={["Figma", "API", "Design"]}
            />
          </div>
        )}

        {/* Instructions */}
        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            📋 Como usar:
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Obtenha um Personal Access Token no Figma</li>
            <li>Cole o token no campo acima</li>
            <li>Cole a URL do seu projeto Figma</li>
            <li>Veja o projeto carregado automaticamente!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
