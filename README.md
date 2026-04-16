# windows-instalation

Apresentação técnica (estilo slides) sobre **instalação do Windows 10/11**, do pendrive bootável até os ajustes finais.

Se você trabalha com TI, suporte, formatação de computadores ou quer instalar o Windows com mais segurança, esta apresentação organiza o processo em um fluxo claro, com boas práticas e pontos de atenção.

<a id="conteudo"></a>
## Conteúdo

- [Sobre a apresentação](#sobre)
- [Começar](#comecar)
- [Build e preview](#build)
- [Como navegar](#navegar)
- [Exportar PDF](#pdf)
- [Editar conteúdo](#editar)
- [Estrutura do projeto](#estrutura)
- [Stack](#stack)
- [Deploy (GitHub Pages)](#deploy)

<a id="sobre"></a>
## Sobre a apresentação (para o público)

Instalar o Windows parece simples, mas pequenos erros no caminho custam caro: boot configurado errado, instalação em modo incorreto (UEFI/Legacy), particionamento mal feito, drivers faltando e desempenho abaixo do esperado.

O objetivo desta apresentação é guiar do início ao fim, com foco em:

- preparar o pendrive bootável e a ISO correta
- configurar BIOS/UEFI e ordem de boot com segurança
- executar uma instalação limpa e particionar o disco do jeito certo
- finalizar com drivers essenciais, otimização básica e monitoramento

<a id="comecar"></a>
## Começar

Requisitos: Node.js (LTS recomendado) e npm.

```bash
npm ci
npm run dev
```

Depois, abra a URL que o Vite mostrar (geralmente `http://localhost:5173`).

<a id="build"></a>
## Build e preview

```bash
npm run build
npm run preview
```

- O build sai em `dist/` (arquivo único: `dist/index.html`).
- Você também pode abrir `dist/index.html` direto no navegador.

<a id="navegar"></a>
## Como navegar

- Teclado: `<-` `->` (ou `cima` `baixo`) e `Espaço`
- Mouse: mova o mouse por cima para mostrar os controles (em touch/mobile eles ficam visíveis)

<details>
  <summary><strong>Atalhos</strong> (clique para abrir)</summary>

  - `->` / `baixo` / `Espaço`: próximo slide
  - `<-` / `cima`: slide anterior
</details>

<a id="pdf"></a>
## Exportar PDF

Dentro da apresentação existe um botão **Exportar PDF** que gera um `apresentacao.pdf` com todos os slides.

<details>
  <summary><strong>Dicas</strong> (clique para abrir)</summary>

  - O PDF é gerado slide a slide; em máquinas mais lentas pode demorar alguns segundos.
  - Recomendamos exportar no Chrome/Edge (melhor compatibilidade).
</details>

<a id="editar"></a>
## Editar conteúdo

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

<a id="estrutura"></a>
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

<a id="stack"></a>
## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Export PDF: `html2canvas` + `jspdf`

<a id="deploy"></a>
## Deploy (GitHub Pages)

<details>
  <summary><strong>Publicar como site</strong> (clique para abrir)</summary>

  1. Rode `npm run build`
  2. Configure o GitHub Pages para servir a pasta `dist/` (ou use uma action de deploy)

  Observação: este projeto gera `dist/index.html` single-file (bom para hospedar).
</details>
