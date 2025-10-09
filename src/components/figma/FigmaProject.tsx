"use client";

import { useState, useEffect } from "react";
import { useFigma } from "@/hooks/useFigma";
import { FigmaFile } from "@/lib/figma";

interface FigmaProjectProps {
  fileKey: string;
  accessToken: string;
  title: string;
  description: string;
  technologies: string[];
}

export default function FigmaProject({
  fileKey,
  accessToken,
  title,
  description,
  technologies,
}: FigmaProjectProps) {
  const { getFile, getFileImages, loading, error } = useFigma(accessToken);
  const [, setFile] = useState<FigmaFile | null>(null);
  const [, setImages] = useState<Record<string, string>>({});
  const [thumbnail, setThumbnail] = useState<string>("");

  useEffect(() => {
    const fetchFile = async () => {
      const fileData = await getFile(fileKey);
      if (fileData) {
        setFile(fileData);
        setThumbnail(fileData.thumbnailUrl);

        // Get images for main frames
        const nodeIds = fileData.document.children
          .filter((child) => child.type === "FRAME")
          .slice(0, 3)
          .map((child) => child.id);

        if (nodeIds.length > 0) {
          const imageData = await getFileImages(fileKey, nodeIds);
          if (imageData && imageData.images) {
            setImages(imageData.images);
          }
        }
      }
    };

    if (fileKey && accessToken) {
      fetchFile();
    }
  }, [fileKey, accessToken, getFile, getFileImages]);

  if (loading) {
    return (
      <div className="bg-gray-50 h-full animate-pulse">
        <div className="h-64 bg-gray-200"></div>
        <div className="p-6">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded mb-4"></div>
          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 rounded w-16"></div>
            <div className="h-6 bg-gray-200 rounded w-20"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 h-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500 mb-2">Erro ao carregar projeto</div>
          <div className="text-sm text-gray-400">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 h-full hover:shadow-lg transition-shadow duration-300">
      {/* Project Thumbnail */}
      <div className="h-64 bg-gray-200 relative overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-400 text-4xl">
              <svg
                className="w-12 h-12 mx-auto"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
        )}

        {/* Figma Badge */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600">
          Figma
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500 uppercase tracking-wider">
            Design
          </span>
        </div>

        <h3 className="text-xl font-medium text-black mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
              +{technologies.length - 3}
            </span>
          )}
        </div>

        {/* Figma Link */}
        <a
          href={`https://www.figma.com/file/${fileKey}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-black text-white py-3 px-4 hover:bg-gray-800 transition-colors duration-300"
        >
          Ver no Figma
        </a>
      </div>
    </div>
  );
}
