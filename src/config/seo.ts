import {
  OrganizationData,
  WebsiteData,
  ServiceData,
  ProjectData,
  PersonData,
  ContactPageData,
} from '@/lib/jsonld';

// Organization data for Webluma
export const organizationData: OrganizationData = {
  name: "Webluma",
  description: "Criamos experiências digitais luminosas que transformam ideias em realidade. Sites modernos, landing pages e e-commerce com design único e alta conversão.",
  url: "https://webluma.com",
  logo: "https://webluma.com/webluma-logo.png",
  address: {
    streetAddress: "Rua das Flores, 123",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01234-567",
    addressCountry: "BR",
  },
  contactPoint: {
    telephone: "+55-11-99999-9999",
    contactType: "customer service",
    email: "contato@webluma.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/webluma",
    "https://www.instagram.com/webluma",
    "https://github.com/webluma",
  ],
};

// Website data
export const websiteData: WebsiteData = {
  name: "Webluma | Desenvolvimento Web que Ilumina seu Negócio",
  description: "Criamos experiências digitais luminosas que transformam ideias em realidade. Sites modernos, landing pages e e-commerce com design único e alta conversão.",
  url: "https://webluma.com",
  publisher: "Webluma",
  potentialAction: {
    target: "https://webluma.com/search?q={search_term_string}",
    queryInput: "required name=search_term_string",
  },
};

// Services data
export const servicesData: ServiceData[] = [
  {
    name: "Desenvolvimento de Sites Institucionais",
    description: "Criação de sites modernos e responsivos para empresas que desejam uma presença digital profissional e impactante.",
    provider: "Webluma",
    areaServed: "Brasil",
    serviceType: "Web Development",
  },
  {
    name: "Landing Pages de Alta Conversão",
    description: "Desenvolvimento de landing pages otimizadas para conversão, com design persuasivo e estratégias de marketing digital.",
    provider: "Webluma",
    areaServed: "Brasil",
    serviceType: "Landing Page Development",
  },
  {
    name: "E-commerce Completo",
    description: "Criação de lojas virtuais completas com sistema de pagamento, gestão de produtos e experiência de compra otimizada.",
    provider: "Webluma",
    areaServed: "Brasil",
    serviceType: "E-commerce Development",
  },
  {
    name: "Consultoria em Desenvolvimento Web",
    description: "Orientação estratégica para projetos web, análise de performance e recomendações para melhorar resultados digitais.",
    provider: "Webluma",
    areaServed: "Brasil",
    serviceType: "Web Consulting",
  },
];

// Team members data
export const teamMembersData: PersonData[] = [
  {
    name: "Gabriella",
    jobTitle: "Frontend React Developer",
    description: "Especialista em React, Next.js e design de interfaces. Apaixonada por criar experiências digitais que transformam ideias em realidade.",
    image: "https://webluma.com/images/team-gabriella.jpg",
    worksFor: "Webluma",
    knowsAbout: ["React", "Next.js", "TypeScript", "UI/UX Design", "Frontend Development"],
  },
  {
    name: "João Pedro",
    jobTitle: "Lead Full Stack Developer",
    description: "Desenvolvedor experiente com foco em soluções completas e escaláveis. Especialista em criar sistemas robustos e eficientes.",
    image: "https://webluma.com/images/team-john.jpg",
    worksFor: "Webluma",
    knowsAbout: ["JavaScript", "Node.js", "Python", "Database Design", "Full Stack Development"],
  },
];

// Portfolio projects data
export const portfolioProjectsData: ProjectData[] = [
  {
    name: "E-commerce de Garrafas de Água",
    description: "Desenvolvimento de uma loja virtual moderna e responsiva para venda de garrafas de água personalizadas.",
    url: "https://ecommerce-water-bottle-template-mai.vercel.app/",
    image: "https://webluma.com/images/portfolio-1.jpg",
    creator: "Webluma",
    dateCreated: "2024-01-15",
    keywords: ["Next.js", "Tailwind CSS", "Stripe", "E-commerce", "React"],
    category: "E-commerce",
  },
  {
    name: "Website Institucional para Consultoria",
    description: "Criação de um site elegante e informativo para uma consultoria de negócios, focado em apresentar serviços e captar clientes.",
    url: "https://consultoria-template-main.vercel.app/",
    image: "https://webluma.com/images/portfolio-2.jpg",
    creator: "Webluma",
    dateCreated: "2024-02-10",
    keywords: ["React", "Styled Components", "Node.js", "Website", "Institucional"],
    category: "Website",
  },
  {
    name: "Landing Page para Evento de Tecnologia",
    description: "Desenvolvimento de uma landing page de alta conversão para um evento de tecnologia, com formulário de inscrição e countdown.",
    url: "https://landing-page-evento-template-main.vercel.app/",
    image: "https://webluma.com/images/portfolio-3.jpg",
    creator: "Webluma",
    dateCreated: "2024-03-05",
    keywords: ["HTML", "CSS", "JavaScript", "Landing Page", "Evento"],
    category: "Landing Page",
  },
  {
    name: "Plataforma de Gerenciamento de Projetos",
    description: "Construção de uma plataforma web robusta para gerenciamento de projetos, com dashboards interativos e controle de tarefas.",
    url: "https://gerenciamento-projetos-template-main.vercel.app/",
    image: "https://webluma.com/images/portfolio-4.jpg",
    creator: "Webluma",
    dateCreated: "2024-03-20",
    keywords: ["Next.js", "TypeScript", "GraphQL", "Plataforma", "Gerenciamento"],
    category: "Website",
  },
  {
    name: "Landing Page de Produto Digital",
    description: "Criação de uma landing page otimizada para venda de curso online, com design persuasivo e alta taxa de conversão.",
    url: "https://landing-produto-digital-template.vercel.app/",
    image: "https://webluma.com/images/portfolio-5.jpg",
    creator: "Webluma",
    dateCreated: "2024-04-12",
    keywords: ["WordPress", "Elementor", "SEO", "Produto Digital", "Curso Online"],
    category: "Landing Page",
  },
  {
    name: "E-commerce de Roupas Esportivas",
    description: "Desenvolvimento de uma loja virtual completa para venda de roupas esportivas, com sistema de carrinho e checkout seguro.",
    url: "https://ecommerce-roupas-esportivas-template.vercel.app/",
    image: "https://webluma.com/images/portfolio-6.jpg",
    creator: "Webluma",
    dateCreated: "2024-04-28",
    keywords: ["Vue.js", "Firebase", "API REST", "Roupas Esportivas", "E-commerce"],
    category: "E-commerce",
  },
];

// Contact page data
export const contactPageData: ContactPageData = {
  name: "Contato - Webluma",
  description: "Entre em contato conosco para solicitar um orçamento ou esclarecer dúvidas sobre nossos serviços de desenvolvimento web.",
  url: "https://webluma.com/contato",
  mainEntity: "Webluma",
};

// FAQ data
export const faqData = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto. Sites institucionais simples levam de 2-4 semanas, enquanto e-commerces complexos podem levar de 6-12 semanas.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Oferecemos 3 meses de suporte gratuito após a entrega do projeto, incluindo correções de bugs e pequenos ajustes.",
  },
  {
    question: "Os sites são responsivos para mobile?",
    answer: "Todos os nossos projetos são desenvolvidos com design responsivo, garantindo uma experiência perfeita em desktop, tablet e mobile.",
  },
  {
    question: "Vocês trabalham com SEO?",
    answer: "Sim! Todos os nossos sites são otimizados para mecanismos de busca, incluindo estrutura semântica, meta tags e performance otimizada.",
  },
  {
    question: "Qual é o processo de desenvolvimento?",
    answer: "Nosso processo inclui: briefing, wireframes, design, desenvolvimento, testes e entrega. Mantemos você informado em cada etapa.",
  },
  {
    question: "Vocês oferecem hospedagem?",
    answer: "Sim! Oferecemos serviços de hospedagem confiáveis e rápidos, com suporte técnico especializado para manter seu site sempre online.",
  },
];
