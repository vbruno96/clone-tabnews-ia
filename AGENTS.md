# AGENTS.md

Contexto para agentes de IA que trabalham neste repositório.

## O que é este projeto

Clone do [TabNews](https://tabnews.com.br) — plataforma brasileira de conteúdo
focada em tecnologia, semelhante a um Hacker News em português. O projeto é
desenvolvido com auxílio de agentes de IA como parte do curso [curso.dev](https://curso.dev).

## Objetivo final

Replicar as funcionalidades centrais do TabNews:
- Publicação e listagem de conteúdo (posts/notícias)
- Sistema de autenticação e perfis de usuário
- Votação e comentários
- Feed e ranking de conteúdo

## Stack e arquitetura

- **Framework**: Next.js com App Router (pasta `app/`)
- **Linguagem**: JavaScript (sem TypeScript por ora)
- **Estilo**: CSS global via `app/globals.css`
- **Renderização**: SSR/SSG via Next.js — preferir Server Components por padrão

## Estrutura de diretórios

```
app/              → Rotas e páginas (Next.js App Router)
  layout.js       → Layout raiz (fontes, metadata global)
  page.js         → Página inicial
public/           → Assets estáticos
```

Novas features devem seguir a convenção do App Router:
- Páginas → `app/<rota>/page.js`
- Layouts de seção → `app/<rota>/layout.js`
- Componentes reutilizáveis → `app/components/`
- Lógica de servidor / API → `app/api/<rota>/route.js`

## Comandos úteis

```bash
npm run dev      # Servidor de desenvolvimento local
npm run build    # Build de produção
npm run start    # Servidor de produção (após build)
```

## Convenções de código

- Componentes React em **camelCase** para arquivos (`page.js`, `layout.js`)
- Usar `"use client"` apenas quando necessário (interatividade no browser)
- Preferir Server Components para tudo que não precise de estado/hooks
- CSS colocado próximo ao componente ou em `globals.css` se for global

## Contexto do curso

Este projeto segue a metodologia do [curso.dev](https://curso.dev), onde o
TabNews original serve como referência de produto. Decisões de arquitetura
devem ser tomadas pensando em **aprendizado progressivo** e **boas práticas
de engenharia de software**.
