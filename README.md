# GM Elétrica – Astro

Site institucional desenvolvido com [Astro](https://astro.build) para apresentar os serviços da GM Elétrica, enfatizando a importância de instalações corretas e a paleta preto/amarela da marca.

## Recursos principais
- Landing page com hero, cards de serviços ilustrados por trabalhadores e diferenciais técnicos
- Layout responsivo, tema escuro com destaques em amarelo e navegação mobile com menu hamburguer
- Seção de contato com formulário e dados editáveis (substitua pelos oficiais da empresa)
- Metadados básicos de SEO e script de navegação embutido

## Scripts disponíveis

```bash
npm install        # garante dependências atualizadas
npm run dev        # modo desenvolvimento com hot reload
npm run build      # gera versão estática de produção em dist/
npm run preview    # testa build localmente
```

## Estrutura principal
- [src/pages/index.astro](src/pages/index.astro) – landing com visão geral e CTAs
- [src/pages/servicos.astro](src/pages/servicos.astro) – detalhes dos serviços oferecidos
- [src/pages/processo.astro](src/pages/processo.astro) – passo a passo técnico para instalação segura
- [src/pages/diferenciais.astro](src/pages/diferenciais.astro) – benefícios, estatísticas e certificações
- [src/pages/contato.astro](src/pages/contato.astro) – formulário e dados de contato editáveis
- [src/styles/global.css](src/styles/global.css) – estilos globais e responsividade
- [public/](public) – favicon e futuros ativos estáticos

## Próximos passos sugeridos
1. Atualizar telefone, e-mail e endereço fictícios na seção de contato.
2. Adicionar imagens ou ilustrações em `public/` e referenciar na página.
3. Considerar integrações com formulários (Formspree, Resend, etc.) ou um CTA que direcione diretamente ao WhatsApp.

## Deploy

### Opção 1: Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. O Vercel detectará automaticamente o projeto Astro
4. Deploy automático a cada push na branch `main`

### Opção 2: Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Importe o repositório do GitHub
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy automático configurado

### Opção 3: GitHub Pages
```bash
npm run build
# Fazer deploy da pasta dist/ para gh-pages
```

**Status:** ✅ Build passando | 📱 Mobile otimizado | 🚀 Pronto para produção
