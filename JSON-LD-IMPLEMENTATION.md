# Implementação JSON-LD - Webluma

Este documento descreve a implementação completa do JSON-LD (JavaScript Object Notation for Linked Data) no projeto Webluma para melhorar o SEO e fornecer dados estruturados para mecanismos de busca.

## 📁 Estrutura de Arquivos

```
src/
├── lib/
│   └── jsonld.ts                 # Utilitários para geração de JSON-LD
├── components/
│   └── seo/
│       └── JsonLd.tsx           # Componente para renderizar JSON-LD
├── config/
│   └── seo.ts                   # Dados específicos da Webluma
└── app/
    ├── layout.tsx               # JSON-LD global (Organization + Website)
    ├── page.tsx                 # JSON-LD da página inicial
    ├── portfolio/page.tsx       # JSON-LD do portfólio
    ├── equipe/page.tsx          # JSON-LD da equipe
    └── contato/page.tsx         # JSON-LD de contato
```

## 🎯 Tipos de Dados Estruturados Implementados

### 1. **Organization** (Layout Global)

- Informações da empresa Webluma
- Endereço, telefone, email
- Redes sociais (sameAs)
- Logo da empresa

### 2. **Website** (Layout Global)

- Informações do site
- Ação de busca potencial
- Editor/publisher

### 3. **Services** (Página Inicial)

- Serviços oferecidos pela Webluma
- Descrição de cada serviço
- Área de atendimento
- Tipo de serviço

### 4. **FAQ** (Página Inicial)

- Perguntas e respostas frequentes
- Estrutura otimizada para rich snippets

### 5. **CreativeWork/Projects** (Portfólio)

- Projetos desenvolvidos
- URLs dos projetos
- Imagens, descrições
- Palavras-chave e categorias

### 6. **Person** (Equipe)

- Informações dos membros da equipe
- Cargos e especialidades
- Conhecimentos técnicos

### 7. **ContactPage** (Contato)

- Página de contato específica
- Entidade principal (Webluma)

### 8. **LocalBusiness** (Contato)

- Informações de negócio local
- Horário de funcionamento
- Faixa de preço

### 9. **BreadcrumbList** (Todas as páginas)

- Navegação estruturada
- Posição hierárquica das páginas

## 🛠️ Como Usar

### Adicionando JSON-LD a uma Nova Página

1. **Importe os utilitários necessários:**

```typescript
import JsonLd from "@/components/seo/JsonLd";
import { generateXXXJsonLd } from "@/lib/jsonld";
import { dataXXX } from "@/config/seo";
```

2. **Gere o JSON-LD:**

```typescript
const jsonLd = generateXXXJsonLd(dataXXX);
```

3. **Renderize o componente:**

```tsx
return (
  <div>
    <JsonLd data={jsonLd} />
    {/* Seu conteúdo */}
  </div>
);
```

### Adicionando Novos Dados

1. **Atualize `/src/config/seo.ts`** com os novos dados
2. **Use as funções utilitárias** em `/src/lib/jsonld.ts`
3. **Adicione o componente JsonLd** na página desejada

## 📊 Benefícios para SEO

### Rich Snippets

- **FAQ**: Perguntas e respostas aparecem diretamente nos resultados de busca
- **Breadcrumbs**: Navegação estruturada nos resultados
- **Organization**: Informações da empresa em rich snippets
- **Projects**: Projetos podem aparecer com imagens e descrições

### Melhor Indexação

- Mecanismos de busca entendem melhor o conteúdo
- Relacionamentos entre entidades ficam claros
- Contexto semântico é preservado

### Dados Estruturados

- Google Search Console pode validar os dados
- Ferramentas de SEO podem analisar a estrutura
- Melhor compreensão do conteúdo por IA

## 🔍 Validação

### Google Rich Results Test

1. Acesse: https://search.google.com/test/rich-results
2. Cole a URL da página
3. Verifique se os dados estruturados são reconhecidos

### Schema.org Validator

1. Acesse: https://validator.schema.org/
2. Cole o JSON-LD gerado
3. Valide a estrutura

### Google Search Console

1. Acesse a seção "Melhorias"
2. Verifique "Dados estruturados"
3. Monitore erros e sugestões

## 📝 Exemplo de JSON-LD Gerado

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Webluma",
  "description": "Criamos experiências digitais luminosas...",
  "url": "https://webluma.com",
  "logo": "https://webluma.com/webluma-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua das Flores, 123",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01234-567",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-99999-9999",
    "contactType": "customer service",
    "email": "contato@webluma.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/webluma",
    "https://www.instagram.com/webluma",
    "https://github.com/webluma"
  ]
}
```

## 🚀 Próximos Passos

1. **Atualizar URLs reais** quando o site estiver em produção
2. **Adicionar mais dados estruturados** conforme necessário
3. **Monitorar performance** no Google Search Console
4. **Expandir para outras páginas** do site
5. **Implementar dados dinâmicos** para projetos futuros

## 📚 Recursos Úteis

- [Schema.org Documentation](https://schema.org/)
- [Google Structured Data Guidelines](https://developers.google.com/search/docs/guides/intro-structured-data)
- [JSON-LD Specification](https://json-ld.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
