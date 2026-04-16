# windows-instalation

Uma apresentacao tecnica (estilo slides) sobre **instalacao do Windows 10/11**, do pendrive bootavel ate os ajustes finais.

Se voce trabalha com TI, formatacao, suporte ou so quer instalar o Windows do jeito certo, a ideia aqui e guiar o processo com boas praticas: BIOS/UEFI, particionamento, instalacao limpa, drivers essenciais e otimizacao basica.

## Conteudo

- [Comecar](#comecar)
- [Build / Preview](#build--preview)
- [Como navegar](#como-navegar)
- [Exportar PDF](#exportar-pdf)
- [Editar conteudo](#editar-conteudo)
- [Sobre a apresentacao](#sobre-a-apresentacao-para-o-publico)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Stack](#stack)
- [Deploy](#deploy-github-pages)

## Comecar

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
- Voce tambem pode abrir `dist/index.html` direto no navegador.

## Como navegar

- Teclado: `<-` `->` (ou `cima` `baixo`) e `Espaco`
- Mouse: passe o mouse por cima para mostrar os controles (em touch/mobile eles ficam visiveis)

<details>
  <summary><strong>Atalhos</strong> (clique para abrir)</summary>

  - `->` / `baixo` / `Espaco`: proximo slide
  - `<-` / `cima`: slide anterior
</details>

## Exportar PDF

Dentro da apresentacao existe um botao **Exportar PDF** que gera um `apresentacao.pdf` com todos os slides.

<details>
  <summary><strong>Dicas</strong> (clique para abrir)</summary>

  - O PDF e gerado slide a slide (pode demorar alguns segundos).
  - Recomendado exportar no Chrome/Edge (melhor compatibilidade).
</details>

## Editar conteudo

O conteudo principal dos slides fica em:

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

## Sobre a apresentacao (para o publico)

O objetivo e ser direto e pratico: voce acompanha um fluxo completo de instalacao do Windows com foco em evitar erros comuns (boot errado, particao incorreta, drivers faltando) e terminar com um sistema pronto para uso.

Para apresentar para outras pessoas, o roteiro segue um caminho claro:

- pre-requisitos e download da ISO
- criacao do pendrive bootavel
- configuracao de boot (BIOS/UEFI)
- instalacao e particionamento
- pos-instalacao (drivers, otimizacao e monitoramento)

## Estrutura do projeto

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

  Observacao: este projeto gera `dist/index.html` single-file (bom para hospedar).
</details>

