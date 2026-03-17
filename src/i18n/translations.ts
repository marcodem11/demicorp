export type Locale = 'it' | 'en';

export const translations = {
  it: {
    nav: {
      home: 'Home',
      services: 'Servizi',
      about: 'Chi Siamo',
      projects: 'Progetti',
      team: 'Team',
      contact: 'Contatti',
      cta: 'Parliamone',
    },
    hero: {
      badge: 'Plasmiamo il Futuro',
      subtitle: 'Innovation Beyond Limits',
      description:
        "Pionieri nell'automazione AI, nello sviluppo di videogiochi 3D e nella creazione di software che ridefinisce il possibile.",
      ctaPrimary: 'Scopri i Servizi',
      ctaSecondary: 'Contattaci',
      scroll: 'Scrolla',
    },
    services: {
      label: 'I nostri servizi',
      title1: 'Cosa ',
      title2: 'Facciamo',
      subtitle: 'Tre pilastri di eccellenza tecnologica per portare la tua visione nel futuro',
      ai: {
        title: 'AI Automation',
        subtitle: 'Intelligenza che lavora per te',
        description:
          "Progettiamo sistemi di automazione basati su intelligenza artificiale che trasformano processi complessi in flussi automatizzati, efficienti e scalabili. Chatbot, workflow automation, AI-driven pipelines.",
        features: ['Workflow Automation', 'NLP & Chatbot', 'n8n Pipelines', 'OpenAI Integration'],
      },
      game: {
        title: '3D Game Development',
        subtitle: 'Mondi che prendono vita',
        description:
          "Creiamo esperienze di gioco immersive con grafica 3D all'avanguardia. Dal concept al deploy, sviluppiamo videogiochi che spingono i limiti della tecnologia e dell'immaginazione.",
        features: ['Unity 3D', 'Multiplayer', 'Open World', 'Cross-Platform'],
      },
      software: {
        title: 'Software Development',
        subtitle: 'Codice che cambia tutto',
        description:
          "Sviluppiamo soluzioni software custom su misura — da web app enterprise a piattaforme SaaS, da app mobile a sistemi cloud-native. Performance e scalabilità al primo posto.",
        features: ['Web & Mobile Apps', 'SaaS Platforms', 'Cloud & DevOps', 'API Development'],
      },
      learnMore: 'Scopri di più',
    },
    about: {
      label: 'Chi siamo',
      title1: 'Il Futuro è ',
      title2: 'Già Qui',
      p1: '<strong>Demicorp</strong> nasce dalla visione di un futuro in cui la tecnologia non è solo uno strumento, ma un\'estensione del pensiero umano.',
      p2: 'Fondata da Marco De Michele, full-stack developer con oltre 5 anni di esperienza nello sviluppo software e specializzato in soluzioni AI-driven, automazione e sviluppo di prodotti digitali moderni.',
      p3: 'Dalla Puglia operiamo a livello globale, combinando competenze in intelligenza artificiale, sviluppo software full-stack e creazione di esperienze 3D immersive per costruire il domani.',
      stat1: { value: '5+', suffix: '', label: 'Anni Exp.' },
      stat2: { value: '24', suffix: '/7', label: 'Innovazione' },
      stat3: { value: '∞', suffix: '', label: 'Ambizione' },
      valuesTitle1: 'I Nostri ',
      valuesTitle2: 'Valori',
      values: [
        { number: '01', title: 'Innovazione Radicale', description: "Non seguiamo i trend — li creiamo. Ogni progetto è un'opportunità per ridefinire lo standard." },
        { number: '02', title: 'Eccellenza Tecnica', description: 'Codice pulito, architetture scalabili, performance estreme. Zero compromessi sulla qualità.' },
        { number: '03', title: 'Visione Futura', description: 'Costruiamo oggi le soluzioni che il mondo userà domani. AI, 3D, cloud-native — siamo pronti.' },
        { number: '04', title: 'Impatto Reale', description: 'La tecnologia ha senso solo se crea valore. Ogni riga di codice risolve un problema concreto.' },
      ],
    },
    projects: {
      label: 'Portfolio',
      title1: 'I Nostri ',
      title2: 'Progetti',
      subtitle: 'Showcase di innovazione — ogni progetto è una dimostrazione delle nostre capacità',
      explore: 'Esplora Progetto',
      items: [
        {
          title: 'City Vault',
          category: '3D Game — Unity',
          description:
            "Videogioco 3D RPG multiplayer sviluppato in Unity. Un mondo open-world dove i giocatori possono costruire, esplorare e interagire in tempo reale. Ispirato a VRChat, The Sims e RPG classici — con grafica immersiva e sistema di building avanzato.",
          tech: ['Unity 3D', 'C#', 'Netcode', 'Blender', 'Multiplayer'],
          metrics: { genre: 'RPG', mode: 'Multiplayer', world: 'Open World' },
        },
        {
          title: 'AI Website Generator',
          category: 'AI Automation — SaaS',
          description:
            "Piattaforma full-stack che genera e pubblica automaticamente siti web production-ready con input minimo. Workflow automatizzato per configurazione, deployment e gestione dell'infrastruttura. Architettura SaaS scalabile.",
          tech: ['Next.js', 'Node.js', 'OpenAI', 'Docker', 'CI/CD'],
          metrics: { type: 'SaaS', ai: 'GPT-Powered', deploy: 'Auto' },
        },
        {
          title: 'Batcomputer AI',
          category: 'AI Assistant',
          description:
            "Assistente personale AI ispirato all'universo Batman, progettato per gestire workflow quotidiani, note e produttività. AI conversazionale, task automation e organizzazione intelligente dei dati in tempo reale.",
          tech: ['TypeScript', 'OpenAI', 'React', 'Node.js', 'NLP'],
          metrics: { ai: 'Conversational', tasks: 'Automated', data: 'Real-time' },
        },
        {
          title: 'AI Video Pipeline',
          category: 'AI Automation — n8n',
          description:
            "Pipeline completamente automatizzata per produzione e pubblicazione video tramite n8n. Da un messaggio Telegram genera video con ChatGPT per script, Veo per creazione video e Creatomate per editing. Pubblicazione automatica su YouTube.",
          tech: ['n8n', 'ChatGPT', 'Veo', 'Creatomate', 'Telegram API'],
          metrics: { flow: 'End-to-End', publish: 'YouTube', input: 'Telegram' },
        },
      ],
    },
    team: {
      label: 'Il team',
      title1: 'Le Menti ',
      title2: 'Dietro Demicorp',
      subtitle: "Talento, visione e determinazione al servizio dell'innovazione",
      ceo: {
        name: 'Marco De Michele',
        role: 'Founder & CEO',
        description:
          "Full-Stack Developer con oltre 5 anni di esperienza e 3+ anni professionali. Specializzato in soluzioni AI-driven, automazione e sviluppo di prodotti digitali moderni. Ha lavorato in aziende come Corsi.it, Loomnia e SMED, costruendo piattaforme SaaS, app mobile, dashboard enterprise e software medicale. Laureando in Informatica all'Università di Bari.",
        skills: ['React / Vue / Angular', 'Node.js / Laravel', 'AI & Automation', 'Unity 3D / Game Dev', 'Flutter / React Native', 'Docker / CI/CD'],
      },
      hiringTitle: 'Vuoi far parte del team?',
      hiringDesc: 'Cerchiamo menti brillanti pronte a costruire il futuro con noi',
      hiringCta: 'Candidati Ora',
    },
    contact: {
      label: 'Contattaci',
      title1: 'Iniziamo a ',
      title2: 'Costruire',
      subtitle: "Hai un'idea? Parliamone. Trasformiamo la tua visione in realtà.",
      readyTitle: 'Pronto a fare il salto?',
      readyDesc:
        "Che tu abbia bisogno di automazione AI, un videogioco 3D, o una piattaforma software custom — siamo qui per trasformare le tue idee più ambiziose in realtà.",
      email: 'marcodemicheleta01@outlook.it',
      location: 'Puglia, Italia — Worldwide',
      availability: '24/7 — Sempre operativi',
      labelName: 'Nome',
      labelEmail: 'Email',
      labelService: 'Servizio',
      labelMessage: 'Messaggio',
      placeholderName: 'Il tuo nome',
      placeholderEmail: 'la@tua.email',
      placeholderService: 'Seleziona un servizio',
      placeholderMessage: 'Raccontaci la tua idea...',
      serviceAi: 'AI Automation',
      serviceGame: '3D Game Development',
      serviceSoftware: 'Software Development',
      serviceOther: 'Altro',
      submit: 'Invia Messaggio',
      successMsg: 'Messaggio inviato! Ti ricontatteremo presto.',
    },
    footer: {
      desc: "Pionieri nell'automazione AI, nello sviluppo di videogiochi 3D e nella creazione di software che ridefinisce il possibile. Innovation Beyond Limits.",
      navTitle: 'Navigazione',
      servicesTitle: 'Servizi',
    },
    loading: 'Caricamento esperienza',
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      projects: 'Projects',
      team: 'Team',
      contact: 'Contact',
      cta: "Let's Talk",
    },
    hero: {
      badge: 'Shaping the Future',
      subtitle: 'Innovation Beyond Limits',
      description:
        'Pioneers in AI automation, 3D game development, and creating software that redefines the possible.',
      ctaPrimary: 'Explore Services',
      ctaSecondary: 'Contact Us',
      scroll: 'Scroll',
    },
    services: {
      label: 'Our services',
      title1: 'What We ',
      title2: 'Do',
      subtitle: 'Three pillars of technological excellence to bring your vision to the future',
      ai: {
        title: 'AI Automation',
        subtitle: 'Intelligence working for you',
        description:
          'We design AI-driven automation systems that transform complex processes into automated, efficient and scalable workflows. Chatbots, workflow automation, AI-driven pipelines.',
        features: ['Workflow Automation', 'NLP & Chatbot', 'n8n Pipelines', 'OpenAI Integration'],
      },
      game: {
        title: '3D Game Development',
        subtitle: 'Worlds that come alive',
        description:
          'We create immersive gaming experiences with cutting-edge 3D graphics. From concept to deploy, we develop games that push the boundaries of technology and imagination.',
        features: ['Unity 3D', 'Multiplayer', 'Open World', 'Cross-Platform'],
      },
      software: {
        title: 'Software Development',
        subtitle: 'Code that changes everything',
        description:
          'We develop custom software solutions — from enterprise web apps to SaaS platforms, from mobile apps to cloud-native systems. Performance and scalability first.',
        features: ['Web & Mobile Apps', 'SaaS Platforms', 'Cloud & DevOps', 'API Development'],
      },
      learnMore: 'Learn more',
    },
    about: {
      label: 'About us',
      title1: 'The Future is ',
      title2: 'Already Here',
      p1: '<strong>Demicorp</strong> was born from the vision of a future where technology is not just a tool, but an extension of human thought.',
      p2: 'Founded by Marco De Michele, a full-stack developer with 5+ years of software development experience, specialized in AI-driven solutions, automation, and modern digital product development.',
      p3: 'From Puglia, Italy, we operate globally, combining expertise in artificial intelligence, full-stack development, and immersive 3D experiences to build tomorrow.',
      stat1: { value: '5+', suffix: '', label: 'Years Exp.' },
      stat2: { value: '24', suffix: '/7', label: 'Innovation' },
      stat3: { value: '∞', suffix: '', label: 'Ambition' },
      valuesTitle1: 'Our ',
      valuesTitle2: 'Values',
      values: [
        { number: '01', title: 'Radical Innovation', description: "We don't follow trends — we create them. Every project is an opportunity to redefine the standard." },
        { number: '02', title: 'Technical Excellence', description: 'Clean code, scalable architectures, extreme performance. Zero compromises on quality.' },
        { number: '03', title: 'Future Vision', description: "We build today the solutions the world will use tomorrow. AI, 3D, cloud-native — we're ready." },
        { number: '04', title: 'Real Impact', description: 'Technology only makes sense if it creates value. Every line of code solves a real problem.' },
      ],
    },
    projects: {
      label: 'Portfolio',
      title1: 'Our ',
      title2: 'Projects',
      subtitle: 'Innovation showcase — every project demonstrates our capabilities',
      explore: 'Explore Project',
      items: [
        {
          title: 'City Vault',
          category: '3D Game — Unity',
          description:
            'Multiplayer 3D RPG game built with Unity. An open-world experience where players can build, explore and interact in real-time. Inspired by VRChat, The Sims, and classic RPGs — with immersive graphics and advanced building system.',
          tech: ['Unity 3D', 'C#', 'Netcode', 'Blender', 'Multiplayer'],
          metrics: { genre: 'RPG', mode: 'Multiplayer', world: 'Open World' },
        },
        {
          title: 'AI Website Generator',
          category: 'AI Automation — SaaS',
          description:
            'Full-stack platform that automatically generates and deploys production-ready websites with minimal user input. Automated workflow for configuration, deployment, and infrastructure management. Scalable SaaS architecture.',
          tech: ['Next.js', 'Node.js', 'OpenAI', 'Docker', 'CI/CD'],
          metrics: { type: 'SaaS', ai: 'GPT-Powered', deploy: 'Auto' },
        },
        {
          title: 'Batcomputer AI',
          category: 'AI Assistant',
          description:
            'AI-powered personal assistant inspired by the Batman universe, designed to manage daily workflows, notes, and productivity. Conversational AI, task automation, and intelligent real-time data organization.',
          tech: ['TypeScript', 'OpenAI', 'React', 'Node.js', 'NLP'],
          metrics: { ai: 'Conversational', tasks: 'Automated', data: 'Real-time' },
        },
        {
          title: 'AI Video Pipeline',
          category: 'AI Automation — n8n',
          description:
            'Fully automated video production and publishing pipeline using n8n. From a Telegram message to auto-generated videos with ChatGPT for scripts, Veo for video creation, and Creatomate for editing. Auto-published to YouTube.',
          tech: ['n8n', 'ChatGPT', 'Veo', 'Creatomate', 'Telegram API'],
          metrics: { flow: 'End-to-End', publish: 'YouTube', input: 'Telegram' },
        },
      ],
    },
    team: {
      label: 'The team',
      title1: 'The Minds ',
      title2: 'Behind Demicorp',
      subtitle: 'Talent, vision, and determination at the service of innovation',
      ceo: {
        name: 'Marco De Michele',
        role: 'Founder & CEO',
        description:
          "Full-Stack Developer with 5+ years of experience and 3+ years professional. Specialized in AI-driven solutions, automation, and modern digital product development. Worked at companies like Corsi.it, Loomnia, and SMED, building SaaS platforms, mobile apps, enterprise dashboards, and medical software. Computer Science student at University of Bari.",
        skills: ['React / Vue / Angular', 'Node.js / Laravel', 'AI & Automation', 'Unity 3D / Game Dev', 'Flutter / React Native', 'Docker / CI/CD'],
      },
      hiringTitle: 'Want to join the team?',
      hiringDesc: 'We are looking for brilliant minds ready to build the future with us',
      hiringCta: 'Apply Now',
    },
    contact: {
      label: 'Contact us',
      title1: "Let's Start ",
      title2: 'Building',
      subtitle: 'Have an idea? Let\'s talk. We turn your vision into reality.',
      readyTitle: 'Ready to make the leap?',
      readyDesc:
        'Whether you need AI automation, a 3D game, or a custom software platform — we are here to turn your most ambitious ideas into reality.',
      email: 'marcodemicheleta01@outlook.it',
      location: 'Puglia, Italy — Worldwide',
      availability: '24/7 — Always operational',
      labelName: 'Name',
      labelEmail: 'Email',
      labelService: 'Service',
      labelMessage: 'Message',
      placeholderName: 'Your name',
      placeholderEmail: 'your@email.com',
      placeholderService: 'Select a service',
      placeholderMessage: 'Tell us about your idea...',
      serviceAi: 'AI Automation',
      serviceGame: '3D Game Development',
      serviceSoftware: 'Software Development',
      serviceOther: 'Other',
      submit: 'Send Message',
      successMsg: 'Message sent! We will get back to you soon.',
    },
    footer: {
      desc: 'Pioneers in AI automation, 3D game development, and creating software that redefines the possible. Innovation Beyond Limits.',
      navTitle: 'Navigation',
      servicesTitle: 'Services',
    },
    loading: 'Loading experience',
  },
} as const;

export type Translations = typeof translations.it;
