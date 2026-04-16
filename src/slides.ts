export interface SlideContent {
  id: number;
  type:
    | "cover"
    | "agenda"
    | "section"
    | "steps"
    | "cards"
    | "table"
    | "tip"
    | "closing";
  title: string;
  subtitle?: string;
  accent: string;
  icon: string;
  content?: unknown;
}

export const slides: SlideContent[] = [
  // ─── CAPA ───────────────────────────────────────────────────────────────────
  {
    id: 0,
    type: "cover",
    title: "Instalação do Windows",
    subtitle: "Do zero à produção — Guia Técnico Completo",
    accent: "#0078D4",
    icon: "🪟",
    content: {
      tags: ["Pendrive Bootável", "Partições", "Drivers", "Otimização", "Monitoramento"],
      author: "Guia Técnico Profissional",
      version: "Windows 10 / 11",
    },
  },

  // ─── AGENDA ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    type: "agenda",
    title: "Agenda",
    subtitle: "O que vamos cobrir hoje",
    accent: "#0078D4",
    icon: "📋",
    content: {
      items: [
        { num: "01", label: "Pré-requisitos & Download da ISO", icon: "💿" },
        { num: "02", label: "Criação do Pendrive Bootável", icon: "PENDRIVE" },
        { num: "03", label: "BIOS / UEFI — Configurando o Boot", icon: "⚙️" },
        { num: "04", label: "Instalação Passo a Passo", icon: "🛠️" },
        { num: "05", label: "Particionamento de Disco", icon: "💾" },
        { num: "06", label: "Primeiras Configurações Pós-Install", icon: "✅" },
        { num: "07", label: "Drivers Essenciais & Monitoramento", icon: "📡" },
        { num: "08", label: "Otimização do Sistema", icon: "🚀" },
      ],
    },
  },

  // ─── SLIDE 02 — PRÉ-REQUISITOS ───────────────────────────────────────────────
  {
    id: 2,
    type: "cards",
    title: "Pré-requisitos & Download da ISO",
    subtitle: "O que você precisa antes de começar",
    accent: "#0078D4",
    icon: "💿",
    content: {
      cards: [
        {
          icon: "🖥️",
          title: "Requisitos Mínimos (Win 11)",
          items: [
            "CPU: 1 GHz dual-core 64-bit",
            "RAM: 4 GB",
            "Armazenamento: 64 GB",
            "TPM 2.0 + Secure Boot",
            "DirectX 12 / WDDM 2.x",
          ],
        },
        {
          icon: "💿",
          title: "Download Oficial da ISO",
          items: [
            "Acesse microsoft.com/software-download",
            "Escolha Windows 10 ou 11",
            "Idioma: Português (Brasil)",
            "Arquitetura: x64 (64-bit)",
            "Verifique o hash SHA-256",
          ],
        },
        {
          icon: "PENDRIVE",
          title: "Materiais Necessários",
          items: [
            "Pendrive ≥ 8 GB (16 GB recomendado)",
            "ISO do Windows baixada",
            "Rufus 4.x ou MediaCreationTool",
            "Acesso à BIOS/UEFI",
            "Conexão à internet pós-install",
          ],
        },
      ],
    },
  },

  // ─── SLIDE 03 — PENDRIVE BOOTÁVEL ────────────────────────────────────────────
  {
    id: 3,
    type: "steps",
    title: "Criando o Pendrive Bootável",
    subtitle: "Com Rufus — método recomendado",
    accent: "#E74C3C",
    icon: "PENDRIVE",
    content: {
      tool: "Rufus 4.x",
      toolUrl: "rufus.ie",
      steps: [
        {
          num: "01",
          title: "Baixe e abra o Rufus",
          desc: "Execute como Administrador. O Rufus é portátil — não precisa instalar.",
          tip: "rufus.ie → Download → Rufus X.X",
        },
        {
          num: "02",
          title: "Selecione o dispositivo",
          desc: "Em 'Dispositivo', escolha o seu pendrive. Atenção: todos os dados serão apagados!",
          tip: "Verifique a letra da unidade antes de prosseguir.",
        },
        {
          num: "03",
          title: "Selecione a ISO",
          desc: "Clique em 'SELECIONAR' e aponte para o arquivo .iso do Windows baixado.",
          tip: "Rufus detecta automaticamente o esquema de partição.",
        },
        {
          num: "04",
          title: "Configure partição e sistema de destino",
          desc: "Para máquinas modernas: Esquema GPT + Sistema de destino UEFI (sem CSM).",
          tip: "Para HDs antigos com MBR, use esquema MBR + BIOS ou UEFI-CSM.",
        },
        {
          num: "05",
          title: "Formato do sistema de arquivos",
          desc: "Mantenha NTFS. Clique em INICIAR e aguarde (~10 min).",
          tip: "Opção 'Remoção estendida de dados' não é necessária.",
        },
        {
          num: "06",
          title: "Pendrive pronto!",
          desc: "Rufus exibirá 'PRONTO'. O pendrive está bootável e pode ser usado.",
          tip: "Ejete o pendrive com segurança antes de remover.",
        },
      ],
    },
  },

  // ─── SLIDE 04 — BIOS / UEFI ──────────────────────────────────────────────────
  {
    id: 4,
    type: "cards",
    title: "BIOS / UEFI — Configurando o Boot",
    subtitle: "Acesse as configurações de inicialização",
    accent: "#8E44AD",
    icon: "⚙️",
    content: {
      cards: [
        {
          icon: "⌨️",
          title: "Teclas de Acesso à BIOS",
          items: [
            "Dell: F2 ou F12",
            "HP: F10 ou ESC",
            "ASUS: F2 ou Del",
            "Gigabyte: Del ou F12",
            "MSI: Del ou F11",
            "Lenovo: F1, F2 ou Fn+F2",
          ],
        },
        {
          icon: "🔐",
          title: "Configurações UEFI Importantes",
          items: [
            "Secure Boot → Enabled (Win 11)",
            "TPM 2.0 → Enabled (fTPM/PTT)",
            "Fast Boot → Disabled (temporário)",
            "CSM → Disabled (UEFI puro)",
            "XMP/DOCP → Enabled (performance RAM)",
          ],
        },
        {
          icon: "📂",
          title: "Boot Order",
          desc: "Ajuste a ordem de boot para o pendrive ter prioridade.",
          items: [
            "Vá em Boot → Boot Priority",
            "Mova o pendrive para 1ª posição",
            "Salve com F10 → Yes",
            "Reinicie com pendrive inserido",
            "Alternativa: Boot Menu (F12/F11)",
          ],
        },
      ],
    },
  },

  // ─── SLIDE 05 — INSTALAÇÃO ───────────────────────────────────────────────────
  {
    id: 5,
    type: "steps",
    title: "Instalação Passo a Passo",
    subtitle: "Processo completo do Setup do Windows",
    accent: "#27AE60",
    icon: "🛠️",
    content: {
      tool: "Windows Setup",
      toolUrl: "",
      steps: [
        {
          num: "01",
          title: "Tela inicial do Setup",
          desc: "Selecione Idioma, Formato de hora e Teclado. Clique em 'Avançar' → 'Instalar agora'.",
          tip: "Idioma: Português (Brasil) | Teclado: ABNT2",
        },
        {
          num: "02",
          title: "Chave de produto",
          desc: "Insira a chave ou clique em 'Não tenho a chave' para ativar depois.",
          tip: "A chave pode estar vinculada à conta Microsoft ou na etiqueta do PC.",
        },
        {
          num: "03",
          title: "Escolha a edição",
          desc: "Selecione Home ou Pro conforme a licença. Pro é recomendado para uso profissional.",
          tip: "Windows Pro permite BitLocker, RDP e políticas de grupo.",
        },
        {
          num: "04",
          title: "Tipo de instalação",
          desc: "Escolha 'Personalizada: Instalar somente o Windows' para instalação limpa.",
          tip: "Nunca use 'Atualizar' ao instalar do zero.",
        },
        {
          num: "05",
          title: "Particionamento",
          desc: "Selecione ou crie partições. Para SSD limpo, selecione o espaço não alocado.",
          tip: "Veja o slide de particionamento para detalhes avançados.",
        },
        {
          num: "06",
          title: "Instalação automática",
          desc: "O Windows copia arquivos e reinicia automaticamente (~15–30 min).",
          tip: "Remova o pendrive quando o PC reiniciar pela primeira vez.",
        },
      ],
    },
  },

  // ─── SLIDE 06 — PARTICIONAMENTO ──────────────────────────────────────────────
  {
    id: 6,
    type: "table",
    title: "Particionamento de Disco",
    subtitle: "Estrutura recomendada para instalação profissional",
    accent: "#F39C12",
    icon: "💾",
    content: {
      intro:
        "Um particionamento correto separa o sistema operacional dos dados pessoais, facilita backups e melhora a performance.",
      table: {
        headers: ["Partição", "Tipo", "Tamanho", "Finalidade"],
        rows: [
          ["EFI System", "FAT32", "100–500 MB", "Bootloader UEFI (criada automaticamente)"],
          ["MSR", "Reservada", "16 MB", "Microsoft Reserved (GPT)"],
          ["Windows (C:)", "NTFS", "80–120 GB mín.", "Sistema Operacional"],
          ["Dados (D:)", "NTFS", "Resto do disco", "Documentos, downloads, projetos"],
          ["Recovery", "NTFS", "~1 GB", "Ambiente de recuperação WinRE"],
        ],
      },
      tips: [
        "Use SSDs NVMe para o sistema (C:) — velocidade até 5× maior que SATA",
        "Mantenha pelo menos 15% do disco C: livre para performance do sistema",
        "HDDs mecânicos são ideais para armazenamento em massa (D:)",
        "Use o Gerenciamento de Disco pós-instalação para ajustar partições",
      ],
    },
  },

  // ─── SLIDE 07 — PÓS INSTALAÇÃO ───────────────────────────────────────────────
  {
    id: 7,
    type: "steps",
    title: "Primeiras Configurações Pós-Install",
    subtitle: "Configure o Windows corretamente logo após a instalação",
    accent: "#16A085",
    icon: "✅",
    content: {
      tool: "Windows OOBE",
      toolUrl: "",
      steps: [
        {
          num: "01",
          title: "Conta & Região",
          desc: "Configure região, idioma do teclado e conta local ou Microsoft.",
          tip: "Conta local: clique 'Opções de entrada' → 'Conta offline'",
        },
        {
          num: "02",
          title: "Windows Update",
          desc: "Vá em Configurações → Windows Update e instale TODAS as atualizações.",
          tip: "Reinicie quantas vezes for necessário. Mantenha o sistema atualizado.",
        },
        {
          num: "03",
          title: "Ativação do Windows",
          desc: "Configurações → Sistema → Ativação. Insira a chave ou conecte-se à conta Microsoft.",
          tip: "slmgr /ato no CMD como Admin força a ativação.",
        },
        {
          num: "04",
          title: "Instale os Drivers",
          desc: "Baixe drivers diretamente do fabricante (chipset, GPU, áudio, rede).",
          tip: "Nunca use CDs de driver antigos — baixe sempre do site oficial.",
        },
        {
          num: "05",
          title: "Configure o Windows Defender",
          desc: "Mantenha o Defender ativo. Configure exclusões apenas para ferramentas de dev.",
          tip: "Ative a Proteção em Tempo Real e o SmartScreen.",
        },
        {
          num: "06",
          title: "Crie um ponto de restauração",
          desc: "Pesquise 'Criar ponto de restauração' → Configurar → Criar.",
          tip: "Faça isso após instalar todos os drivers e programas essenciais.",
        },
      ],
    },
  },

  // ─── SLIDE 08 — DRIVERS ──────────────────────────────────────────────────────
  {
    id: 8,
    type: "cards",
    title: "Drivers Essenciais",
    subtitle: "Instale na ordem correta para evitar conflitos",
    accent: "#2980B9",
    icon: "🔧",
    content: {
      cards: [
        {
          icon: "🧩",
          title: "1. Chipset (PRIMEIRO)",
          items: [
            "AMD: AMD Chipset Driver (amd.com)",
            "Intel: INF Chipset Driver (intel.com)",
            "Instale ANTES de qualquer outro driver",
            "Reinicie após instalar",
            "Habilita comunicação correta dos barramentos",
          ],
        },
        {
          icon: "🖥️",
          title: "2. GPU (Placa de Vídeo)",
          items: [
            "NVIDIA: GeForce Experience ou Drive.exe",
            "AMD: Adrenalin Software",
            "Intel: Intel Arc Control",
            "Use DDU (Display Driver Uninstaller) para reinstalar",
            "Instale só o driver, não o bloatware extra",
          ],
        },
        {
          icon: "🔊",
          title: "3. Áudio & Rede",
          items: [
            "Realtek Audio: realtek.com",
            "Intel/Killer: site da placa-mãe",
            "LAN: driver da placa-mãe",
            "Wi-Fi: fabricante do adaptador",
            "Bluetooth: intel.com ou site do fabricante",
          ],
        },
      ],
    },
  },

  // ─── SLIDE 09 — MONITORAMENTO ─────────────────────────────────────────────────
  {
    id: 9,
    type: "cards",
    title: "Ferramentas de Monitoramento",
    subtitle: "Monitore hardware, temperatura e performance em tempo real",
    accent: "#C0392B",
    icon: "📡",
    content: {
      cards: [
        {
          icon: "🌡️",
          title: "HWiNFO64",
          badge: "⭐ Recomendado",
          items: [
            "Monitoramento completo de hardware",
            "Temperatura CPU, GPU, NVMe, VRM",
            "Tensões, clocks e uso em tempo real",
            "Integração com RivaTuner/Afterburner",
            "Gratuito — hwinfo.com",
          ],
        },
        {
          icon: "📊",
          title: "MSI Afterburner",
          badge: "⭐ Recomendado",
          items: [
            "OSD na tela durante jogos e testes",
            "Monitoramento via RivaTuner Statistics",
            "Controle de velocidade dos fans da GPU",
            "Overclock e undervolt da GPU",
            "Gratuito — msi.com/Landing/afterburner",
          ],
        },
        {
          icon: "⚡",
          title: "Outras Ferramentas Úteis",
          items: [
            "CPU-Z — info detalhada de CPU/RAM",
            "GPU-Z — dados completos da GPU",
            "CrystalDiskInfo — saúde dos discos S.M.A.R.T",
            "Speccy — resumo geral do sistema",
            "ThrottleStop — gerenciar throttling da CPU",
          ],
        },
      ],
    },
  },

  // ─── SLIDE 10 — OTIMIZAÇÃO ───────────────────────────────────────────────────
  {
    id: 10,
    type: "steps",
    title: "Otimização do Sistema",
    subtitle: "Melhore performance, estabilidade e velocidade de inicialização",
    accent: "#E67E22",
    icon: "🚀",
    content: {
      tool: "Windows + PowerShell",
      toolUrl: "",
      steps: [
        {
          num: "01",
          title: "Desative programas na inicialização",
          desc: "Ctrl+Shift+Esc → Inicializar → Desative o que não for essencial.",
          tip: "Mantenha: Defender, drivers de áudio, iCloud se usar.",
        },
        {
          num: "02",
          title: "Plano de energia: Alto Desempenho",
          desc: "Painel de Controle → Opções de Energia → Alto Desempenho ou Máximo Desempenho.",
          tip: "Para notebooks: use 'Balanceado' na bateria.",
        },
        {
          num: "03",
          title: "Desative efeitos visuais",
          desc: "sysdm.cpl → Avançado → Desempenho → Ajustar para melhor desempenho.",
          tip: "Mantenha 'Suavizar bordas das fontes da tela' ativado.",
        },
        {
          num: "04",
          title: "Otimização de SSD / HDD",
          desc: "Desfragmentador do Windows → Otimizar (SSDs: TRIM automático).",
          tip: "Nunca desfragmente SSDs manualmente — o Windows gerencia automaticamente.",
        },
        {
          num: "05",
          title: "Limpeza de disco e sistema",
          desc: "cleanmgr.exe → 'Limpar arquivos do sistema' → marque tudo.",
          tip: "Apaga arquivos temporários, logs e instalações antigas do Windows.",
        },
        {
          num: "06",
          title: "Serviços desnecessários",
          desc: "services.msc → Desative: SysMain (HDD antigo), Connected User Experiences...",
          tip: "Cuidado: não desative serviços sem saber o impacto no sistema.",
        },
      ],
    },
  },

  // ─── SLIDE 11 — BÔNUS DICAS ──────────────────────────────────────────────────
  {
    id: 11,
    type: "tip",
    title: "Dicas de Ouro",
    subtitle: "Boas práticas de profissionais de TI",
    accent: "#8E44AD",
    icon: "💡",
    content: {
      tips: [
        {
          icon: "🔐",
          title: "Segurança",
          items: [
            "Ative o BitLocker em discos com dados sensíveis",
            "Configure o Windows Hello (PIN, biometria)",
            "Use senhas fortes e 2FA na conta Microsoft",
            "Mantenha o Windows Update sempre ativo",
          ],
        },
        {
          icon: "💾",
          title: "Backup & Recuperação",
          items: [
            "Use o Histórico de Arquivos para backup automático",
            "Crie imagem do sistema com Backup do Windows",
            "Considere Macrium Reflect (gratuito) para imagens",
            "Regra 3-2-1: 3 cópias, 2 mídias, 1 offsite",
          ],
        },
        {
          icon: "🚀",
          title: "Performance Avançada",
          items: [
            "Ative XMP/DOCP na BIOS para a RAM rodar na frequência correta",
            "Use Game Mode para priorizar CPU em jogos",
            "Desative Xbox Game Bar se não usar",
            "Hardware-Accelerated GPU Scheduling (HAGS) para GPUs modernas",
          ],
        },
      ],
    },
  },

  // ─── SLIDE 12 — FECHAMENTO ───────────────────────────────────────────────────
  {
    id: 12,
    type: "closing",
    title: "Resumo da Jornada",
    subtitle: "Do pendrive ao sistema otimizado",
    accent: "#0078D4",
    icon: "🪟",
    content: {
      steps: [
        { icon: "💿", label: "ISO Oficial" },
        { icon: "PENDRIVE", label: "Pendrive Bootável" },
        { icon: "⚙️", label: "BIOS/UEFI" },
        { icon: "🛠️", label: "Instalação" },
        { icon: "💾", label: "Partições" },
        { icon: "🔧", label: "Drivers" },
        { icon: "📡", label: "Monitoramento" },
        { icon: "🚀", label: "Otimização" },
      ],
      message: "Um sistema bem instalado é a base de toda infraestrutura de TI de qualidade.",
      hashtags: ["#Windows", "#SysAdmin", "#TI", "#Instalação"],
    },
  },
];
