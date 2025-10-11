"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface DemoLiveProps {
  url: string;
  title: string;
  className?: string;
}

export default function DemoLive({
  url,
  title,
  className = "",
}: DemoLiveProps) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const generateScreenshot = async () => {
      setIsLoading(true);
      setError(false);

      // Lista de APIs para tentar
      const apis = [
        `https://htmlcsstoimage.com/demo/800x600/${encodeURIComponent(url)}`,
        `https://screenshot.tech/screenshot/${encodeURIComponent(
          url
        )}?width=800&height=600`,
        `https://api.screenshotapi.net/api/v1/screenshot?url=${encodeURIComponent(
          url
        )}&width=800&height=600&format=png&full_page=false`,
      ];

      let success = false;

      for (const apiUrl of apis) {
        try {
          await new Promise((resolve, reject) => {
            const img = new window.Image();
            const timeout = setTimeout(
              () => reject(new Error("Timeout")),
              5000
            );

            img.onload = () => {
              clearTimeout(timeout);
              setImageUrl(apiUrl);
              setIsLoading(false);
              success = true;
              resolve(true);
            };

            img.onerror = () => {
              clearTimeout(timeout);
              reject(new Error("Failed to load"));
            };

            img.src = apiUrl;
          });

          if (success) break;
        } catch (err) {
          console.log(`API falhou: ${apiUrl}`);
          continue;
        }
      }

      if (!success) {
        setError(true);
        setIsLoading(false);
      }
    };

    generateScreenshot();
  }, [url]);

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${className}`}
    >
      {/* Header do Card */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          Demo Live
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="aspect-video bg-gray-100 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-sm text-gray-500">Capturando preview...</p>
          </div>
        </div>
      )}

      {/* Error State - Fallback com iframe */}
      {error && (
        <div className="aspect-video bg-gray-100 relative overflow-hidden">
          <iframe
            src={url}
            className="w-full h-full border-0 scale-50 origin-top-left"
            style={{ width: "200%", height: "200%" }}
            title={`Preview de ${title}`}
            sandbox="allow-scripts allow-same-origin"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 flex items-center gap-2 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4"
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
              Ver Site Completo
            </Link>
          </div>
        </div>
      )}

      {/* Screenshot */}
      {imageUrl && !isLoading && !error && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Preview de ${title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            onError={() => setError(true)}
          />

          {/* Overlay com botão */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
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
              View Live
            </Link>
          </div>
        </div>
      )}

      {/* Footer do Card */}
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
          {title}
        </h3>
        <p className="text-xs text-gray-500 truncate">
          {url.replace(/^https?:\/\//, "")}
        </p>
      </div>
    </div>
  );
}
