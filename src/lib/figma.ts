// Figma API Configuration
export const FIGMA_CONFIG = {
  clientId: process.env.NEXT_PUBLIC_FIGMA_CLIENT_ID || '',
  clientSecret: process.env.FIGMA_CLIENT_SECRET || '',
  baseUrl: 'https://api.figma.com/v1',
};

// Figma API Types
export interface FigmaFile {
  document: {
    id: string;
    name: string;
    type: string;
    children: FigmaNode[];
  };
  components: Record<string, unknown>;
  styles: Record<string, unknown>;
  name: string;
  lastModified: string;
  thumbnailUrl: string;
  version: string;
}

export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  visible: boolean;
  children?: FigmaNode[];
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  fills?: unknown[];
  strokes?: unknown[];
  effects?: unknown[];
}

export interface FigmaImage {
  images: Record<string, string>;
  status: number;
  error: boolean;
}

// Figma API Functions
export class FigmaAPI {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  // Get file information
  async getFile(fileKey: string): Promise<FigmaFile> {
    const response = await fetch(`${FIGMA_CONFIG.baseUrl}/files/${fileKey}`, {
      headers: {
        'X-Figma-Token': this.accessToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status}`);
    }

    return response.json();
  }

  // Get file images
  async getFileImages(fileKey: string, nodeIds: string[]): Promise<FigmaImage> {
    const response = await fetch(`${FIGMA_CONFIG.baseUrl}/images/${fileKey}`, {
      method: 'POST',
      headers: {
        'X-Figma-Token': this.accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ids: nodeIds,
        format: 'png',
        scale: 2,
      }),
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status}`);
    }

    return response.json();
  }

  // Get file comments
  async getFileComments(fileKey: string) {
    const response = await fetch(`${FIGMA_CONFIG.baseUrl}/files/${fileKey}/comments`, {
      headers: {
        'X-Figma-Token': this.accessToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status}`);
    }

    return response.json();
  }

  // Get file versions
  async getFileVersions(fileKey: string) {
    const response = await fetch(`${FIGMA_CONFIG.baseUrl}/files/${fileKey}/versions`, {
      headers: {
        'X-Figma-Token': this.accessToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status}`);
    }

    return response.json();
  }
}

// OAuth2 Helper Functions
export const getFigmaAuthUrl = (): string => {
  const params = new URLSearchParams({
    client_id: FIGMA_CONFIG.clientId,
    redirect_uri: `${window.location.origin}/api/figma/callback`,
    scope: 'file_read',
    state: 'random_state_string',
  });

  return `https://www.figma.com/oauth?${params.toString()}`;
};

// Utility function to extract file key from Figma URL
export const extractFileKey = (figmaUrl: string): string | null => {
  const match = figmaUrl.match(/figma\.com\/file\/([a-zA-Z0-9]+)/);
  return match ? match[1] : null;
};
