import React, { createContext, useContext } from 'react';

export type Language = 'pt' | 'en' | 'it';

// Ordem em que o botão de idioma alterna entre eles.
export const languageOrder: Language[] = ['pt', 'en', 'it'];

export function nextLanguage(language: Language): Language {
  return languageOrder[(languageOrder.indexOf(language) + 1) % languageOrder.length];
}

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

export function LanguageProvider({ children, language, toggleLanguage }: { children: React.ReactNode; language: Language; toggleLanguage: () => void }) {
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const translations = {
  pt: {
    nav: ['Sobre', 'Experiência', 'Projetos', 'Educação', 'Habilidades', 'Contato'],
    hero: {
      title: 'Desenvolvedor Full-Stack · Especialista Back-end · PJ',
      description: 'Tenho 2 anos de experiência atuando com aplicações que atendem dezenas de milhares de usuários ativamente. Construo sistemas web, desktop e mobile robustos e escaláveis.'
    },
    about: {
      title: 'Sobre',
      content: [
        'Engenheiro de software com profundo gosto por lógica de programação e construção de sistemas robustos e escaláveis. Atuo com .NET e Node.js principalmente, utilizando dos principais frameworks do mercado. Possuo experiência em todo o ciclo de desenvolvimento de software, incluindo APIs, sistemas internos, aplicativos mobile e desktop multiplataformas, automações e infraestrutura cloud. Gosto de desafios que me motivem a estudar e aprender diariamente.'
      ]
    },
    experience: {
      title: 'Experiência',
      items: [
        {
          period: 'mar de 2025 — presente',
          company: 'Lab Cinco',
          role: 'Analista de Testes / Desenvolvedor - Remoto',
          description: 'Aplicação de testes em diferentes tipos de sistemas e desenvolvimento de aplicações web e desktop para uso interno da equipe, acelerando e automatizando processos internos.'
        },
        {
          period: 'jul de 2022 — mar de 2025',
          company: 'Lab Cinco',
          role: 'Desenvolvedor de Banco de Dados - Híbrido',
          description: 'Colaborei principalmente com a automação e otimização de processes internos, análise de dados e comportamento de usuários. Desenvolvimento de queries e Stored Procedures. Desenvolvi toda a documentação de um banco de dados que atende mais de 100 mil usuários.'
        },
        {
          period: 'mai de 2021 — jul de 2022',
          company: 'Lab Cinco',
          role: 'Suporte - Presencial',
          description: 'Atendimento e suporte ao cliente e parceiros do aplicativo Bigou Delivery.'
        }
      ]
    },
    projects: {
      title: 'Projetos',
      notAvailable: 'Este projeto não está disponível publicamente.',
      items: [
        {
          title: 'Language Learning Routine',
          description: 'App Android (Linguas Discens) que organiza o estudo de vários idiomas em torno de uma meta semanal de horas: calcula a meta do dia, redistribui o que ficou para trás e acompanha cada idioma até a meta final. Conta com widgets e notificações com ações em segundo plano, gamificação com XP, níveis, conquistas e missões, provas a cada etapa de horas e dados 100% locais com backup completo e migrações versionadas.',
          tags: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Drizzle', 'Zustand', 'Kotlin', 'Jest', 'Maestro', 'Git'],
          year: '2026'
        },
        {
          title: 'Estante Mania',
          link: 'https://github.com/EMarceloCM/Estante-Mania',
          description: 'Livraria virtual com painel administrativo.',
          tags: ['Microsserviços', 'RabbitMQ', 'Docker', 'Blazor', '.NET Core', 'SQLServer', 'Git', 'LINQ'],
          year: '2023'
        },
        {
          title: 'Monitoramento de Concorrência',
          description: 'Web scraper de diferentes plataformas com relatórios estatísticos por plataforma, cidade e estabelecimento.',
          tags: ['Electron', 'TypeScript', 'Javascript', 'MySQL', 'Puppeteer', 'Git'],
          year: '2025'
        },
        {
          title: 'CVRP Algorithms',
          link: 'https://github.com/EMarceloCM/CVRP-Algorithms',
          description: 'Heurísticas e meta-heurísticas para o problema de roteamento de veículos com capacidade (CVRP). Dentre as implementações, a metaheurística ALNS foi capaz de otimizar em 4,05% a melhor solução literária conhecida para uma variante do CVRP, sendo uma nova descoberta de rotas para o problema.',
          tags: ['C#', 'Heurísticas', 'Metaheurísticas', 'Git'],
          year: '2025'
        },
        {
          title: 'Estações RMI',
          link: 'https://github.com/EMarceloCM/RMI',
          description: 'Simulador de estações de controle de áudio utilizando RMI para comunicação entre as estações e o servidor central.',
          tags: ['Java', 'RMI', 'Git'],
          year: '2025'
        },
        {
          title: 'Palpites CS2',
          description: 'Site para um grupo de amigos do Discord dar palpites com pontos virtuais (sem valor real) em partidas profissionais de CS2. Partidas e resultados vêm da Liquipedia, com odds calculadas a partir do ranking oficial da Valve (VRS), liquidação automática, ranking por temporada, loja de personalização de perfil e simulador de Major com Pick\'Em. Login pelo Discord e hospedagem 100% gratuita.',
          tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Better Auth', 'Tailwind', 'Vercel', 'Vitest', 'Git'],
          year: '2026'
        }
      ]
    },
    education: {
      title: 'Educação',
      items: [
        {
          degree: 'Bacharel em Ciência da Computação',
          institution: 'Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas',
          period: '2022 — 2025',
          description: 'Durante o bacharelado desenvolvi projetos práticos em diversas áreas, com destaque para sistemas de heurísticas e metaheurísticas voltadas a otimização de problemas do tipo PRVC. Dentre isso, colaborei para a literatura com uma nova descoberta de rotas para uma variante deste tipo de problema de otimização, utilizando um algoritmo ALNS, otimizando em 4,05% a melhor solução literária conhecida até então em 100% das execuções.'
        },
        {
          degree: 'Técnico em Informática',
          institution: 'Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas',
          period: '2018 — mar de 2021',
          description: 'Curso técnico integrado ao ensino médio. Atuei no desenvolvimento de sistemas web, jogos e banco de dados. Desenvolvi experiências práticas com engenharia de software, montagem e manutenção de computadores e projetos para GameJam.'
        }
      ]
    },
    skills: {
      title: 'Habilidades',
      heading: 'Habilidades & Idiomas',
      categories: [
        {
          category: 'Linguagens',
          items: ['TypeScript', 'JavaScript', 'C#', 'SQL']
        },
        {
          category: 'Frameworks',
          items: ['Node.js', '.NET', 'Angular', 'Express', 'React', 'Blazor', 'Electron', 'EFCore', 'Dapper', 'Identity', 'Sequelize', 'Puppeteer']
        },
        {
          category: 'Ferramentas',
          items: ['Git', 'Jira', 'MySql', 'Redis', 'GraphQL', 'RabbitMQ', 'Docker', 'Unity']
        },
        {
          category: 'Cloud',
          items: ['AWS', 'Azure', 'CI/CD']
        }
      ],
      languages: {
        heading: 'Idiomas',
        items: [
          {
            language: 'Português',
            level: 'Nativo'
          },
          {
            language: 'Inglês',
            level: 'Avançado'
          },
          {
            language: 'Italiano',
            level: 'Intermediário'
          }
        ]
      }
    },
    contact: {
      title: 'Contato',
      heading: 'Vamos Trabalhar Juntos.',
      email: 'edmylsonmarcelo3@gmail.com',
      github: 'https://github.com/EMarceloCM',
      linkedin: 'https://linkedin.com/in/edmylson',
      copyright: 'Todos os direitos reservados',
      designNote: 'Projetado com intenção editorial'
    }
  },
  en: {
    nav: ['About', 'Experience', 'Projects', 'Education', 'Skills', 'Contact'],
    hero: {
      title: 'Full-Stack Developer · Back-end Specialist',
      description: 'I have 2 years of experience working with applications that actively serve tens of thousands of users. I build robust and scalable web, desktop, and mobile systems.'
    },
    about: {
      title: 'About',
      content: [
        'I am a software engineer with a deep appreciation for programming logic and building robust, scalable systems. I work primarily with .NET and Node.js, using the leading frameworks on the market. I have experience in the entire software development cycle, including APIs, internal systems, multi-platform mobile and desktop applications, automation, and cloud infrastructure. I enjoy challenges that motivate me to study and learn every day.'
      ]
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: 'Mar 2025 — Present',
          company: 'Lab Cinco',
          role: 'Test Analyst / Developer - Remote',
          description: 'Testing different types of systems and developing web and desktop applications for internal team use, accelerating and automating internal processes.'
        },
        {
          period: 'Jul 2022 — Mar 2025',
          company: 'Lab Cinco',
          role: 'Database Developer - Hybrid',
          description: 'I mainly collaborated with the automation and optimization of internal processes, data analysis, and user behavior. Development of queries and stored procedures. I developed all the documentation for a database that serves more than 100,000 users.'
        },
        {
          period: 'May 2021 — Jul 2022',
          company: 'Lab Cinco',
          role: 'Support - On-site',
          description: 'Customer and partner support for the Bigou Delivery app.'
        }
      ]
    },
    projects: {
      title: 'Projects',
      notAvailable: 'This project is not publicly available.',
      items: [
        {
          title: 'Language Learning Routine',
          description: 'Android app (Linguas Discens) that organizes the study of several languages around a weekly hour goal: it calculates the daily goal, redistributes what was left behind, and tracks each language up to its final goal. It features home screen widgets and notifications with background actions, gamification with XP, levels, achievements, and missions, exams at each hour milestone, and 100% local data with full backup and versioned migrations.',
          tags: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Drizzle', 'Zustand', 'Kotlin', 'Jest', 'Maestro', 'Git'],
          year: '2026'
        },
        {
          title: 'Estante Mania',
          link: 'https://github.com/EMarceloCM/Estante-Mania',
          description: 'Virtual library with administrative panel.',
          tags: ['Microservices', 'RabbitMQ', 'Docker', 'Blazor', '.NET Core', 'SQL Server', 'Git', 'LINQ'],
          year: '2023'
        },
        {
          title: 'Competition Monitoring',
          description: 'Web scraper from different platforms with statistical reports by platform, city, and establishment.',
          tags: ['Electron', 'TypeScript', 'JavaScript', 'MySQL', 'Puppeteer', 'Git'],
          year: '2025'
        },
        {
          title: 'CVRP Algorithms',
          link: 'https://github.com/EMarceloCM/CVRP-Algorithms',
          description: 'Heuristics and meta-heuristics for the Capacitated Vehicle Routing Problem (CVRP). Among the implementations, the ALNS metaheuristic was able to optimize by 4.05% the best known literary solution for a CVRP variant, being a new route discovery for the problem.',
          tags: ['C#', 'Heuristics', 'Metaheuristics', 'Git'],
          year: '2025'
        },
        {
          title: 'RMI Stations',
          link: 'https://github.com/EMarceloCM/RMI',
          description: 'Audio control station simulator using RMI for communication between stations and the central server.',
          tags: ['Java', 'RMI', 'Git'],
          year: '2025'
        },
        {
          title: 'CS2 Predictions',
          description: 'Website for a group of Discord friends to make predictions with virtual points (no real value) on professional CS2 matches. Matches and results come from Liquipedia, with odds calculated from Valve\'s official team ranking (VRS), automatic settlement, seasonal leaderboards, a profile customization shop, and a Major simulator with Pick\'Em. Discord login and 100% free hosting.',
          tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Better Auth', 'Tailwind', 'Vercel', 'Vitest', 'Git'],
          year: '2026'
        }
      ]
    },
    education: {
      title: 'Education',
      items: [
        {
          degree: 'Bachelor in Computer Science',
          institution: 'Federal Institute of Education, Science and Technology of Southeast Minas',
          period: '2022 — 2025',
          description: 'During the bachelor\'s degree, I developed practical projects in various areas, with emphasis on heuristic and meta-heuristic systems aimed at optimizing PRVC-type problems. Among them, I contributed to the literature with a new route discovery for a variant of this optimization problem, using an ALNS algorithm, optimizing the best literary solution known at the time by 4.05% in 100% of the executions.'
        },
        {
          degree: 'Technical in Informatics',
          institution: 'Federal Institute of Education, Science and Technology of Southeast Minas',
          period: '2018 — Mar 2021',
          description: 'Technical course integrated with high school. I worked on the development of web systems, games, and databases. I developed practical experiences with software engineering, computer assembly and maintenance, and GameJam projects.'
        }
      ]
    },
    skills: {
      title: 'Skills',
      heading: 'Skills & Languages',
      categories: [
        {
          category: 'Languages',
          items: ['TypeScript', 'JavaScript', 'C#', 'SQL']
        },
        {
          category: 'Frameworks',
          items: ['Node.js', '.NET', 'Angular', 'Express', 'React', 'Blazor', 'Electron', 'EF Core', 'Dapper', 'Identity', 'Sequelize', 'Puppeteer']
        },
        {
          category: 'Tools',
          items: ['Git', 'Jira', 'MySQL', 'Redis', 'GraphQL', 'RabbitMQ', 'Docker', 'Unity']
        },
        {
          category: 'Cloud',
          items: ['AWS', 'Azure', 'CI/CD']
        }
      ],
      languages: {
        heading: 'Languages',
        items: [
          {
            language: 'Portuguese',
            level: 'Native'
          },
          {
            language: 'English',
            level: 'Advanced'
          },
          {
            language: 'Italian',
            level: 'Beginner'
          }
        ]
      }
    },
    contact: {
      title: 'Contact',
      heading: "Let's Work Together.",
      email: 'edmylsonmarcelo3@gmail.com',
      github: 'https://github.com/EMarceloCM',
      linkedin: 'https://linkedin.com/in/edmylson',
      copyright: 'All rights reserved',
      designNote: 'Designed with editorial intent'
    }
  },
  it: {
    nav: ['Chi sono', 'Esperienza', 'Progetti', 'Formazione', 'Competenze', 'Contatti'],
    hero: {
      title: 'Sviluppatore Full-Stack · Specialista Back-end',
      description: 'Ho 2 anni di esperienza con applicazioni che servono attivamente decine di migliaia di utenti. Realizzo sistemi web, desktop e mobile robusti e scalabili.'
    },
    about: {
      title: 'Chi sono',
      content: [
        'Sono un ingegnere del software con una profonda passione per la logica di programmazione e per la costruzione di sistemi robusti e scalabili. Lavoro principalmente con .NET e Node.js, utilizzando i principali framework del mercato. Ho esperienza in tutto il ciclo di sviluppo del software, inclusi API, sistemi interni, applicazioni mobile e desktop multipiattaforma, automazioni e infrastruttura cloud. Mi piacciono le sfide che mi motivano a studiare e imparare ogni giorno.'
      ]
    },
    experience: {
      title: 'Esperienza',
      items: [
        {
          period: 'mar 2025 — presente',
          company: 'Lab Cinco',
          role: 'Analista di Test / Sviluppatore - Da remoto',
          description: 'Test di diversi tipi di sistemi e sviluppo di applicazioni web e desktop per uso interno del team, accelerando e automatizzando i processi interni.'
        },
        {
          period: 'lug 2022 — mar 2025',
          company: 'Lab Cinco',
          role: 'Sviluppatore di Database - Ibrido',
          description: 'Ho collaborato principalmente all\'automazione e all\'ottimizzazione dei processi interni, all\'analisi dei dati e del comportamento degli utenti. Sviluppo di query e stored procedure. Ho redatto l\'intera documentazione di un database che serve oltre 100.000 utenti.'
        },
        {
          period: 'mag 2021 — lug 2022',
          company: 'Lab Cinco',
          role: 'Supporto - In sede',
          description: 'Assistenza e supporto a clienti e partner dell\'app Bigou Delivery.'
        }
      ]
    },
    projects: {
      title: 'Progetti',
      notAvailable: 'Questo progetto non è disponibile pubblicamente.',
      items: [
        {
          title: 'Language Learning Routine',
          description: 'App Android (Linguas Discens) che organizza lo studio di più lingue attorno a un obiettivo settimanale di ore: calcola l\'obiettivo del giorno, ridistribuisce ciò che è rimasto indietro e segue ogni lingua fino all\'obiettivo finale. Include widget e notifiche con azioni in background, gamification con XP, livelli, obiettivi e missioni, esami a ogni traguardo di ore e dati 100% locali con backup completo e migrazioni versionate.',
          tags: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Drizzle', 'Zustand', 'Kotlin', 'Jest', 'Maestro', 'Git'],
          year: '2026'
        },
        {
          title: 'Estante Mania',
          link: 'https://github.com/EMarceloCM/Estante-Mania',
          description: 'Libreria virtuale con pannello di amministrazione.',
          tags: ['Microservizi', 'RabbitMQ', 'Docker', 'Blazor', '.NET Core', 'SQL Server', 'Git', 'LINQ'],
          year: '2023'
        },
        {
          title: 'Monitoraggio della Concorrenza',
          description: 'Web scraper di diverse piattaforme con report statistici per piattaforma, città e attività commerciale.',
          tags: ['Electron', 'TypeScript', 'JavaScript', 'MySQL', 'Puppeteer', 'Git'],
          year: '2025'
        },
        {
          title: 'CVRP Algorithms',
          link: 'https://github.com/EMarceloCM/CVRP-Algorithms',
          description: 'Euristiche e metaeuristiche per il problema di instradamento dei veicoli con capacità (CVRP). Tra le implementazioni, la metaeuristica ALNS è riuscita a migliorare del 4,05% la migliore soluzione nota in letteratura per una variante del CVRP, rappresentando una nuova scoperta di percorsi per il problema.',
          tags: ['C#', 'Euristiche', 'Metaeuristiche', 'Git'],
          year: '2025'
        },
        {
          title: 'Stazioni RMI',
          link: 'https://github.com/EMarceloCM/RMI',
          description: 'Simulatore di stazioni di controllo audio che utilizza RMI per la comunicazione tra le stazioni e il server centrale.',
          tags: ['Java', 'RMI', 'Git'],
          year: '2025'
        },
        {
          title: 'Pronostici CS2',
          description: 'Sito per un gruppo di amici su Discord per fare pronostici con punti virtuali (senza valore reale) sulle partite professionistiche di CS2. Partite e risultati provengono da Liquipedia, con quote calcolate dal ranking ufficiale delle squadre di Valve (VRS), liquidazione automatica, classifiche stagionali, negozio di personalizzazione del profilo e simulatore di Major con Pick\'Em. Accesso con Discord e hosting 100% gratuito.',
          tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Better Auth', 'Tailwind', 'Vercel', 'Vitest', 'Git'],
          year: '2026'
        }
      ]
    },
    education: {
      title: 'Formazione',
      items: [
        {
          degree: 'Laurea in Informatica',
          institution: 'Istituto Federale di Educazione, Scienza e Tecnologia del Sud-Est di Minas',
          period: '2022 — 2025',
          description: 'Durante la laurea ho sviluppato progetti pratici in diverse aree, con particolare attenzione ai sistemi euristici e metaeuristici per l\'ottimizzazione di problemi di tipo CVRP. Tra questi, ho contribuito alla letteratura con una nuova scoperta di percorsi per una variante di questo problema di ottimizzazione, utilizzando un algoritmo ALNS che ha migliorato del 4,05% la migliore soluzione nota fino ad allora nel 100% delle esecuzioni.'
        },
        {
          degree: 'Diploma Tecnico in Informatica',
          institution: 'Istituto Federale di Educazione, Scienza e Tecnologia del Sud-Est di Minas',
          period: '2018 — mar 2021',
          description: 'Corso tecnico integrato con la scuola superiore. Ho lavorato allo sviluppo di sistemi web, giochi e database. Ho acquisito esperienza pratica in ingegneria del software, assemblaggio e manutenzione di computer e progetti per GameJam.'
        }
      ]
    },
    skills: {
      title: 'Competenze',
      heading: 'Competenze & Lingue',
      categories: [
        {
          category: 'Linguaggi',
          items: ['TypeScript', 'JavaScript', 'C#', 'SQL']
        },
        {
          category: 'Framework',
          items: ['Node.js', '.NET', 'Angular', 'Express', 'React', 'Blazor', 'Electron', 'EF Core', 'Dapper', 'Identity', 'Sequelize', 'Puppeteer']
        },
        {
          category: 'Strumenti',
          items: ['Git', 'Jira', 'MySQL', 'Redis', 'GraphQL', 'RabbitMQ', 'Docker', 'Unity']
        },
        {
          category: 'Cloud',
          items: ['AWS', 'Azure', 'CI/CD']
        }
      ],
      languages: {
        heading: 'Lingue',
        items: [
          {
            language: 'Portoghese',
            level: 'Madrelingua'
          },
          {
            language: 'Inglese',
            level: 'Avanzato'
          },
          {
            language: 'Italiano',
            level: 'Principiante'
          }
        ]
      }
    },
    contact: {
      title: 'Contatti',
      heading: 'Lavoriamo Insieme.',
      email: 'edmylsonmarcelo3@gmail.com',
      github: 'https://github.com/EMarceloCM',
      linkedin: 'https://linkedin.com/in/edmylson',
      copyright: 'Tutti i diritti riservati',
      designNote: 'Progettato con intento editoriale'
    }
  }
};
