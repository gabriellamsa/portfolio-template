"use client";

import { useState, useEffect } from 'react';
import { FigmaAPI, FigmaFile, FigmaImage } from '@/lib/figma';

export const useFigma = (accessToken: string) => {
  const [api, setApi] = useState<FigmaAPI | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (accessToken) {
      setApi(new FigmaAPI(accessToken));
    }
  }, [accessToken]);

  const getFile = async (fileKey: string): Promise<FigmaFile | null> => {
    if (!api) return null;
    
    setLoading(true);
    setError(null);
    
    try {
      const file = await api.getFile(fileKey);
      return file;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getFileImages = async (fileKey: string, nodeIds: string[]): Promise<FigmaImage | null> => {
    if (!api) return null;
    
    setLoading(true);
    setError(null);
    
    try {
      const images = await api.getFileImages(fileKey, nodeIds);
      return images;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getFileComments = async (fileKey: string) => {
    if (!api) return null;
    
    setLoading(true);
    setError(null);
    
    try {
      const comments = await api.getFileComments(fileKey);
      return comments;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    api,
    loading,
    error,
    getFile,
    getFileImages,
    getFileComments,
  };
};
