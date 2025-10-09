// Figma Configuration
export const FIGMA_CONFIG = {
  // Suas credenciais do Figma (do .env.local)
  clientId: process.env.NEXT_PUBLIC_FIGMA_CLIENT_ID || '',
  clientSecret: process.env.FIGMA_CLIENT_SECRET || '',
  
  // URLs base da API
  baseUrl: 'https://api.figma.com/v1',
  authUrl: 'https://www.figma.com/oauth',
  
  // Scopes necessários
  scopes: ['file_read'],
  
  // Redirect URI (ajuste conforme seu domínio)
  redirectUri: typeof window !== 'undefined' 
    ? `${window.location.origin}/api/figma/callback`
    : 'http://localhost:3000/api/figma/callback',
};

// Função para gerar URL de autenticação
export const getFigmaAuthUrl = (): string => {
  const params = new URLSearchParams({
    client_id: FIGMA_CONFIG.clientId,
    redirect_uri: FIGMA_CONFIG.redirectUri,
    scope: FIGMA_CONFIG.scopes.join(' '),
    state: 'random_state_string',
  });

  return `${FIGMA_CONFIG.authUrl}?${params.toString()}`;
};

// Função para extrair file key de URL do Figma
export const extractFileKey = (figmaUrl: string): string | null => {
  const match = figmaUrl.match(/figma\.com\/file\/([a-zA-Z0-9]+)/);
  return match ? match[1] : null;
};

// Exemplo de URLs do Figma (substitua pelos seus projetos)
export const EXAMPLE_FIGMA_PROJECTS = [
  {
    title: "Meu Projeto 1",
    fileKey: "ABC123DEF456", // Substitua pela chave real do seu arquivo
    description: "Design system completo para aplicação web",
    technologies: ["Figma", "Design System", "UI/UX"],
  },
  {
    title: "Meu Projeto 2", 
    fileKey: "GHI789JKL012", // Substitua pela chave real do seu arquivo
    description: "Landing page com prototipagem interativa",
    technologies: ["Figma", "Prototyping", "Responsive"],
  },
];
