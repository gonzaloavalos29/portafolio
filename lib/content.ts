// ============================================================================
//  CONTENIDO DEL PORTFOLIO — Gonzalo Matías Avalos
//  Todo el contenido sale de acá. Cada texto tiene su versión es / en.
// ============================================================================

export type Locale = "es" | "en";

export type Bilingual = { es: string; en: string };

export type Project = {
  title: string;
  description: Bilingual;
  tags: string[];
  repo?: string;
  demo?: string;
};

export type SkillGroup = {
  category: Bilingual;
  items: string[];
};

export type Experience = {
  role: Bilingual;
  company: string;
  period: Bilingual;
  bullets: Bilingual[];
};

export type Education = {
  title: Bilingual;
  place: string;
  period: Bilingual;
};

export type Certification = {
  title: string;
  issuer: string;
  period: Bilingual;
  detail: Bilingual;
};

// --- Datos personales -------------------------------------------------------

export const profile = {
  name: "Gonzalo Avalos",
  role: {
    es: "Desarrollador Fullstack",
    en: "Fullstack Developer",
  } as Bilingual,
  tagline: {
    es: "Construyo soluciones web escalables con arquitectura limpia, y exploro Machine Learning, IA y Cloud.",
    en: "I build scalable web solutions with clean architecture, and explore Machine Learning, AI and Cloud.",
  } as Bilingual,
  email: "gonzalo0avalos@gmail.com",
  phone: "+54 11 2893-8088",
  location: {
    es: "Quilmes, Buenos Aires, Argentina",
    en: "Quilmes, Buenos Aires, Argentina",
  } as Bilingual,
  socials: {
    github: "https://github.com/gonzaloavalos29",
    linkedin: "https://www.linkedin.com/in/gonzalomatiasavalos",
    twitter: "",
  },
  // Poné tu CV en public/cv.pdf y dejá esto en "/cv.pdf" para mostrar el botón.
  resumeUrl: "",
  // Tu foto: guardala en public/profile.jpg (o cambiá la ruta). "" para ocultar.
  avatar: "/profile.jpg",
};

// --- Sobre mí ---------------------------------------------------------------

export const about: Bilingual = {
  es: "Estudiante avanzado de Informática y Desarrollador Fullstack con experiencia práctica en Desarrollo Web y Ciencia de Datos. Tengo un historial comprobado en la construcción de soluciones escalables, desde aplicaciones web con arquitectura limpia hasta MVPs de Machine Learning. Me apasiona la tecnología Cloud, la IA y el aprendizaje continuo.",
  en: "Advanced Computer Science student and Fullstack Developer with hands-on experience in Web Development and Data Science. I have a proven track record building scalable solutions, from web applications with clean architecture to Machine Learning MVPs. I'm passionate about Cloud technology, AI and continuous learning.",
};

// --- Experiencia ------------------------------------------------------------

export const experiences: Experience[] = [
  {
    role: { es: "Desarrollador Web Fullstack", en: "Fullstack Web Developer" },
    company: "ForIT Software Factory",
    period: { es: "Feb. 2026 — Presente", en: "Feb. 2026 — Present" },
    bullets: [
      {
        es: "Desarrollé una plataforma interna de reconocimiento de empleados usando React, Tailwind CSS y Arquitectura Limpia.",
        en: "Built an internal employee recognition platform using React, Tailwind CSS and Clean Architecture.",
      },
      {
        es: "Contribuí a un proyecto real con cliente, desarrollando una plataforma de E-commerce.",
        en: "Contributed to a real client project, developing an E-commerce platform.",
      },
      {
        es: "Trabajé en un entorno monorepo con herramientas estándar de la industria: Docker, Git, ESLint, pnpm/Yarn y Node.js.",
        en: "Worked in a monorepo environment with industry-standard tooling: Docker, Git, ESLint, pnpm/Yarn and Node.js.",
      },
      {
        es: "Colaboré con el equipo aplicando buenas prácticas de codificación y diseño de software modular.",
        en: "Collaborated with the team applying coding best practices and modular software design.",
      },
    ],
  },
];

// --- Proyectos --------------------------------------------------------------

export const projects: Project[] = [
  {
    title: "ChurnInsight — Predicción de abandono",
    description: {
      es: "MVP de Machine Learning desarrollado en un hackaton para predecir la intención de abandono de clientes. Hice el Análisis Exploratorio (EDA), limpieza de datos y entrenamiento de modelos (Random Forest, Regresión Logística), e integré el modelo en una API REST con Spring Boot. Prioricé F1-Score y Recall para minimizar falsos negativos.",
      en: "Machine Learning MVP built during a hackathon to predict customer churn. I handled Exploratory Data Analysis (EDA), data cleaning and model training (Random Forest, Logistic Regression), and integrated the model into a Spring Boot REST API. I prioritized F1-Score and Recall to minimize false negatives.",
    },
    tags: ["Python", "Machine Learning", "Spring Boot", "Java", "REST API"],
    repo: "",
    demo: "",
  },
  {
    title: "Food Orders",
    description: {
      es: "App fullstack de pedidos de comida con catálogo, carrito y panel de órdenes. Backend con Prisma y una capa de servicios en el frontend, testeado con Vitest y React Testing Library.",
      en: "Fullstack food ordering app with catalog, cart and orders panel. Prisma backend and a frontend service layer, tested with Vitest and React Testing Library.",
    },
    tags: ["Next.js", "Prisma", "TypeScript", "Vitest"],
    repo: "",
    demo: "",
  },
];

// --- Skills -----------------------------------------------------------------

export const skills: SkillGroup[] = [
  {
    category: { es: "Lenguajes", en: "Languages" },
    items: ["Python", "JavaScript", "Java", "C# .NET", "SQL"],
  },
  {
    category: { es: "Frameworks y librerías", en: "Frameworks & Libraries" },
    items: ["React", "Node.js", "Spring Boot", "Tailwind CSS"],
  },
  {
    category: { es: "Datos y ML", en: "Data & ML" },
    items: ["Machine Learning", "SQL Server", "SQLite", "ETL", "Pandas"],
  },
  {
    category: { es: "Herramientas", en: "Tools" },
    items: ["Docker", "Git", "ESLint", "pnpm / Yarn"],
  },
];

// --- Educación --------------------------------------------------------------

export const education: Education[] = [
  {
    title: { es: "Licenciatura en Informática", en: "BSc in Computer Science" },
    place: "Universidad Nacional de La Plata",
    period: { es: "2023 — Presente", en: "2023 — Present" },
  },
];

// --- Certificaciones --------------------------------------------------------

export const certifications: Certification[] = [
  {
    title: "Iniciación a la Programación con Python",
    issuer: "Talento Tech — Agencia de Habilidades para el Futuro",
    period: { es: "Mar. 2026 — Presente", en: "Mar. 2026 — Present" },
    detail: {
      es: "Lógica de programación, algoritmos y estructuras de datos. Bases de datos relacionales con SQLite3 y operaciones CRUD.",
      en: "Programming logic, algorithms and data structures. Relational databases with SQLite3 and CRUD operations.",
    },
  },
  {
    title: "ONE Tech Foundation G8 — Data Science",
    issuer: "Oracle + Alura LATAM",
    period: { es: "Dic. 2024 — Ago. 2025", en: "Dec. 2024 — Aug. 2025" },
    detail: {
      es: "Modelado de datos con Python, ETL, estadística y Machine Learning.",
      en: "Data modeling with Python, ETL, statistics and Machine Learning.",
    },
  },
  {
    title: "Programa Tu Empleo",
    issuer: "Fundación Empujar",
    period: { es: "Feb. 2025 — Jul. 2025", en: "Feb. 2025 — Jul. 2025" },
    detail: {
      es: "140 horas de formación en inserción laboral, comunicación y trabajo en equipo.",
      en: "140 hours of training in job readiness, communication and teamwork.",
    },
  },
];

// --- Textos de la UI --------------------------------------------------------

export const ui = {
  nav: {
    about: { es: "Sobre mí", en: "About" },
    experience: { es: "Experiencia", en: "Experience" },
    skills: { es: "Skills", en: "Skills" },
    projects: { es: "Proyectos", en: "Projects" },
    education: { es: "Formación", en: "Education" },
    contact: { es: "Contacto", en: "Contact" },
  },
  hero: {
    cta: { es: "Ver proyectos", en: "View projects" },
    contact: { es: "Contactame", en: "Get in touch" },
  },
  sections: {
    about: { es: "Sobre mí", en: "About me" },
    experience: { es: "Experiencia", en: "Experience" },
    skills: { es: "Lo que sé hacer", en: "What I do" },
    projects: { es: "Proyectos", en: "Projects" },
    education: { es: "Formación y certificaciones", en: "Education & certifications" },
    contact: { es: "Trabajemos juntos", en: "Let's work together" },
  },
  contact: {
    subtitle: {
      es: "¿Tenés un proyecto o una oportunidad? Escribime.",
      en: "Got a project or an opportunity? Drop me a line.",
    },
    button: { es: "Enviar email", en: "Send email" },
  },
  project: {
    code: { es: "Código", en: "Code" },
    live: { es: "Demo", en: "Live" },
  },
  education: {
    studies: { es: "Estudios", en: "Studies" },
    certs: { es: "Certificaciones", en: "Certifications" },
  },
  resume: { es: "Descargar CV", en: "Download CV" },
  footerRights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
};
