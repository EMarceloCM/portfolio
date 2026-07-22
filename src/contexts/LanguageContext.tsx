import React, { createContext, useContext } from 'react';

export type Language = 'en' | 'pt';

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
      title: 'Desenvolvedor Full-Stack · PJ',
      description: 'Tenho 2+ anos de experiência profissional com diferentes aplicações que atendem dezenas de milhares de usuários ativamente, utilizando dos principais frameworks do mercado e atendendo a diversos clientes.'
    },
    about: {
      title: 'Sobre',
      content: [
        'Engenheiro de software atuante em todo o ciclo de desenvolvimento, incluindo APIs, interfaces, sistemas internos, aplicativos mobile e desktop multiplataformas, containers, automações e infraestrutura cloud. Atendi a diversos clientes ao longo desses anos em diversos setores, adquirindo ampla experiência. Possuo profundo gosto por lógica de programação e pela construção de sistemas robustos e escaláveis, além de desafios que me motivem a estudar e aprender diariamente.'
      ]
    },
    experience: {
      title: 'Experiência',
      items: [
        {
          period: 'mai de 2026 — presente',
          company: 'Lab Cinco',
          role: 'Desenvolvedor Full Stack',
          description: 'Responsável pela criação de novas soluções e pela manutenção de sistemas já existentes, garantindo desempenho, escalabilidade e qualidade de código. Atuo no desenvolvimento de aplicações web, desktop e mobile, utilizando tecnologias como Node.js, NestJS, Angular, Vue.js, Vuex, Electron e Titanium, criando interfaces modernas, APIs robustas e soluções multiplataforma alinhadas às necessidades do negócio.\n\nPrincipais atividades:\n\n- Desenvolvimento de novos sistemas e funcionalidades.\n- Manutenção corretiva, evolutiva e preventiva de aplicações existentes.\n- Desenvolvimento e integração de APIs REST.\n- Criação e manutenção de aplicações web com Angular, Vue.js e React.\n- Desenvolvimento de aplicações desktop multiplataforma com Electron.\n- Manutenção e evolução de aplicações mobile desenvolvidas com Titanium.\n- Otimização de desempenho, correção de bugs e refatoração de código.\n- Participação na definição de arquiteturas e soluções técnicas.\n- Colaboração com equipes multidisciplinares durante todo o ciclo de desenvolvimento.\n- Análise de requisitos e implementação de melhorias contínuas nos sistemas.'
        },
        {
          period: 'mar de 2025 — mai de 2026',
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
          company: 'Bigou Delivery',
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
          title: 'Ping — App de Entregas',
          link: 'https://emarcelocm.github.io/delivery-driver-landing-page/',
          description: 'Aplicativo universal de entregas que unifica todas as plataformas de delivery em um único app para entregadores. Landing page de apresentação com telas reais do app, seção de recursos, financeiro com saque via Pix e fluxo de como funciona.',
          tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Prisma', 'JWT'],
          year: '2026'
        },
        {
          title: 'Encurtador de URLs',
          description: 'Plataforma de encurtamento de URLs com painel de gestão e métricas. Conta com autenticação JWT, organização de links por tags, geração de QR Code e dashboards de acesso com gráficos por período, geolocalização e dispositivo.',
          tags: ['Vue.js', 'Vuex', 'Vuetify', 'Node.js', 'Express', 'MySQL', 'JWT', 'Docker', 'Bitbucket'],
          year: '2026'
        },
        {
          title: 'Site Paróquia do Rosário',
          description: 'Site institucional de uma paróquia com área administrativa integrada a uma API REST. Reúne páginas de comunidades, horários de missa, sacramentos, agenda de eventos e notícias com paginação, além de um painel administrativo.',
          tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'API REST', 'JWT', 'PM2'],
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
          items: ['Node.js', 'NestJS', '.NET', 'Angular', 'AngularJS', 'Vue.js', 'Vuex', 'Nuxt.js', 'React.js', 'Express', 'Blazor', 'Electron.js', 'Titanium Mobile', 'EFCore', 'Dapper', 'Identity', 'Sequelize', 'Puppeteer']
        },
        {
          category: 'Ferramentas',
          items: ['Git', 'Bitbucket', 'JIRA', 'API REST', 'MySql', 'Redis', 'GraphQL', 'RabbitMQ', 'Docker', 'Unity']
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
            level: 'Iniciante'
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
      description: 'I have 2+ years of professional experience with a range of applications that actively serve tens of thousands of users, using the leading frameworks on the market and serving a diverse client base.'
    },
    about: {
      title: 'About',
      content: [
        'I am a software engineer working across the entire development cycle, including APIs, interfaces, internal systems, multi-platform mobile and desktop applications, containers, automation, and cloud infrastructure. Over these years I have served clients across many different sectors, gaining broad experience. I have a deep appreciation for programming logic and for building robust, scalable systems, as well as for challenges that motivate me to study and learn every day.'
      ]
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: 'May 2026 — Present',
          company: 'Lab Cinco',
          role: 'Full Stack Developer',
          description: 'Responsible for developing new solutions and maintaining existing systems, ensuring performance, scalability, and code quality. I work on web, desktop, and mobile applications using technologies such as Node.js, NestJS, Angular, Vue.js, Vuex, Electron, and Titanium, building modern user interfaces, robust APIs, and cross-platform solutions aligned with business needs.\n\nKey Responsibilities:\n\n- Developing new systems and features.\n- Performing corrective, adaptive, and preventive maintenance on existing applications.\n- Designing, developing, and integrating RESTful APIs.\n- Building and maintaining web applications with Angular and Vue.js.\n- Developing cross-platform desktop applications with Electron.\n- Maintaining and enhancing legacy mobile applications built with Titanium.\n- Optimizing application performance, troubleshooting issues, and refactoring code.\n- Participating in the definition of software architecture and technical solutions.\n- Collaborating with cross-functional teams throughout the entire development lifecycle.\n- Analyzing requirements and implementing continuous improvements across systems.'
        },
        {
          period: 'Mar 2025 — May 2026',
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
          company: 'Bigou Delivery',
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
          title: 'Ping — Delivery App',
          link: 'https://emarcelocm.github.io/delivery-driver-landing-page/',
          description: 'Universal delivery app that unifies all delivery platforms into a single app for couriers. Presentation landing page with real app screens, features section, earnings with Pix withdrawal, and a how-it-works flow.',
          tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Prisma', 'JWT'],
          year: '2026'
        },
        {
          title: 'URL Shortener',
          description: 'URL shortening platform with a management panel and analytics. Features JWT authentication, link organization by tags, QR Code generation, and access dashboards with charts by period, geolocation, and device.',
          tags: ['Vue.js', 'Vuex', 'Vuetify', 'Node.js', 'Express', 'MySQL', 'JWT', 'Docker', 'Bitbucket'],
          year: '2026'
        },
        {
          title: 'Rosário Parish Website',
          description: 'Institutional website for a parish with an admin area integrated with a REST API. It brings together pages for communities, mass schedules, sacraments, event calendar, and paginated news, plus a full admin panel.',
          tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST API', 'JWT', 'PM2'],
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
          items: ['Node.js', 'NestJS', '.NET', 'Angular', 'AngularJS', 'Vue.js', 'Vuex', 'Nuxt.js', 'React.js', 'Express', 'Blazor', 'Electron.js', 'Titanium Mobile', 'EF Core', 'Dapper', 'Identity', 'Sequelize', 'Puppeteer']
        },
        {
          category: 'Tools',
          items: ['Git', 'Bitbucket', 'JIRA', 'REST API', 'MySQL', 'Redis', 'GraphQL', 'RabbitMQ', 'Docker', 'Unity']
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
  }
};
