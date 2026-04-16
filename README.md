# windows-instalation

Apresentação técnica (estilo slides) sobre **instalação do Windows** — feita com **React + Vite + Tailwind CSS**.

## Começar

```bash
npm ci
npm run dev
```

Depois abra a URL que o Vite mostrar (geralmente `http://localhost:5173`).

## Build / Preview

```bash
npm run build
npm run preview
```

- O build sai em `dist/` (single-file `dist/index.html`).
- Você também pode abrir `dist/index.html` direto no navegador.

## Como Navegar

- Teclado: `←` `→` (ou `↑` `↓`) e `Espaço`
- Mouse: passe o mouse por cima para mostrar os controles (em touch/mobile eles ficam visíveis)

<details>
  <summary><strong>Atalhos</strong> (clique para abrir)</summary>

  - `→` / `↓` / `Espaço`: próximo slide
  - `←` / `↑`: slide anterior
</details>

## Exportar PDF

Dentro da apresentação existe um botão **Exportar PDF** que gera um `apresentacao.pdf` com todos os slides.

<details>
  <summary><strong>Dicas</strong> (clique para abrir)</summary>

  - O PDF é gerado slide a slide (pode demorar alguns segundos).
  - Recomendado exportar no Chrome/Edge (melhor compatibilidade).
</details>

## Editar Conteúdo

O conteúdo principal dos slides fica em:

- `src/slides.ts`

E os templates visuais ficam em:

- `src/components/slides/`

<details>
  <summary><strong>Tipos de slide</strong> (clique para abrir)</summary>

  - `cover`: capa
  - `agenda`: agenda
  - `steps`: passo a passo (cards em grid)
  - `cards`: cards com listas
  - `table`: tabela + dicas
  - `tip`: dicas agrupadas
  - `closing`: fechamento / resumo
</details>

## Estrutura do Projeto

```text
src/
  App.tsx
  slides.ts
  components/
    Navigation.tsx
    Icon.tsx
    WindowsLogo.tsx
    PendriveIcon.tsx
    slides/
  utils/
```

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Export PDF: `html2canvas` + `jspdf`

## Deploy (GitHub Pages)

<details>
  <summary><strong>Publicar como site</strong> (clique para abrir)</summary>

  1. Rode `npm run build`
  2. Configure o GitHub Pages para servir a pasta `dist/` (ou use uma action de deploy)

  Observação: este projeto gera `dist/index.html` single-file (bom para hospedar).
</details>
