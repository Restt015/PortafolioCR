// Categorías de proyectos
export const projectCategories = [
  { id: 'development', label: 'Desarrollo (Práctica)', icon: '💻' },
  { id: 'qa', label: 'QA & Testing', icon: '🧪' },
];

export const projects = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PROYECTOS DE DESARROLLO (Práctica y aprendizaje)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'alarmber',
    title: 'ALARMBER',
    subtitle: 'Proyecto práctico de desarrollo móvil',
    description:
      'Proyecto práctico enfocado en reportes y alertas ciudadanas, desarrollado para ampliar conocimientos en React Native y Expo.',
    longDescription:
      'Aplicación móvil desarrollada como proyecto de aprendizaje. Incluye manejo de reportes con fotos, geolocalización, validación y navegación moderna. Enfocado en arquitectura, buenas prácticas y experiencia técnica.',
    category: 'development',
    featured: true,
    technologies: ['React Native', 'Expo', 'NativeWind', 'Node.js', 'WebSockets'],
    cover: null, // Se usa imagen local: IMG_3924.png
    images: [],
    achievements: [
      'Diseño UI/UX mobile-first con navegación fluida.',
      'Sistema de validación de reportes por administrador.',
      'Chat en tiempo real y notificaciones push.',
      'Geolocalización de incidentes en mapa interactivo.',
    ],
    stack: ['React Native', 'Expo', 'NativeWind', 'Node.js'],
    repoUrl: 'https://github.com/Restt015/alarmber-app',
    demoUrl: 'https://alarmber-app-xkri.vercel.app/',
    detailPath: '/projects/alarmber',
  },
  {
    id: 'jflowg',
    title: 'JFLOWG',
    subtitle: 'Ecommerce y Panel Administrativo',
    description:
      'Tienda online completa con catálogo, filtros, carrito, pagos y dashboard administrativo para gestión de productos y pedidos.',
    longDescription:
      'Plataforma ecommerce full-stack con frontend React, backend Fastify/MongoDB. Incluye autenticación, gestión de inventario, procesamiento de pagos y panel de administración.',
    category: 'development',
    featured: true,
    technologies: ['React', 'Tailwind', 'Fastify', 'MongoDB'],
    cover: null, // Se usa imagen local: jflowg-1-home.jpg
    images: [],
    achievements: [
      'Catálogo con filtros avanzados y búsqueda.',
      'Sistema de carrito y checkout completo.',
      'Dashboard administrativo para CRUD de productos.',
      'Autenticación JWT y roles de usuario.',
    ],
    stack: ['React', 'Tailwind', 'Fastify', 'MongoDB'],
    repoUrl: 'https://github.com/Restt015/Jflowg.git',
    demoUrl: null,
    detailPath: '/projects/jflowg',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROYECTOS QA & TESTING
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'ndc-suite',
    title: 'NDC QA Suite',
    subtitle: 'Copa Airlines',
    description:
      'Automatización de pruebas para servicios NDC cubriendo reservas, asignaciones, pagos y devoluciones.',
    longDescription:
      'Colección avanzada de pruebas manuales y automatizadas para servicios de reserva y revenue management, con pipelines Newman, tableros de resultados y documentación viva.',
    category: 'qa',
    featured: false,
    technologies: ['Postman', 'Newman', 'JavaScript', 'CI/CD', 'REST', 'SOAP'],
    cover: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    ],
    achievements: [
      'Automatización de regresiones con Postman y Newman.',
      'Validaciones REST/SOAP y reportes accionables.',
    ],
    stack: ['Postman', 'Newman', 'JavaScript', 'REST/SOAP'],
    repoUrl: null,
    demoUrl: null,
    detailPath: null,
  },
  {
    id: 'banesco-load-lab',
    title: 'Banesco Load Lab',
    subtitle: 'Performance Testing',
    description:
      'Pruebas de rendimiento para Banca Persona y Empresa, simulando picos de uso reales con dashboards de insights.',
    longDescription:
      'Diseño y ejecución de escenarios complejos con Apache JMeter, integrando métricas en paneles de latencia, throughput y errores críticos.',
    category: 'qa',
    featured: false,
    technologies: ['JMeter', 'Gatling', 'BrowserStack', 'Observabilidad'],
    cover: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80',
    ],
    achievements: [
      'Escenarios de carga y estrés con Apache JMeter.',
      'Identificación de cuellos de botella y optimización.',
    ],
    stack: ['Apache JMeter', 'Gatling', 'BrowserStack'],
    repoUrl: null,
    demoUrl: null,
    detailPath: null,
  },
  {
    id: 'infosgroup-dev-support',
    title: 'InfosGroup Dev Support',
    subtitle: 'Functional Testing',
    description:
      'Estandarización de pruebas funcionales y validaciones UI dentro del programa PFP de InfosGroup.',
    longDescription:
      'Documentación de flujos críticos, checklists reutilizables y automatizaciones ligeras con Selenium/TestComplete para acelerar regresiones.',
    category: 'qa',
    featured: false,
    technologies: ['JavaScript', 'Selenium', 'TestComplete', 'Git'],
    cover: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=900&q=80',
    ],
    achievements: [
      'Documentación de flujos críticos y checklists.',
      'Automatizaciones con JavaScript y Selenium.',
    ],
    stack: ['JavaScript', 'Selenium', 'TestComplete', 'Git'],
    repoUrl: null,
    demoUrl: null,
    detailPath: null,
  },
];

// Helper para obtener proyectos destacados
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

// Helper para obtener proyectos por categoría
export const getProjectsByCategory = (category) =>
  projects.filter((p) => p.category === category);
