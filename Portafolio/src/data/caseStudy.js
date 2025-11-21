export const ecommerceCaseStudy = {
  id: 'case-study',
  title: 'Ecommerce full-stack',
  intro:
    'Disene un ecommerce end-to-end con una arquitectura por capas que une un frontend modular en React/Context API y un backend Fastify/MongoDB pensado para escalar sin sacrificar la experiencia.',
  sections: [
    {
      title: 'Frontend modular y visualizaciones',
      body:
        'Construi la interfaz con React, Tailwind CSS y Axios, creando componentes reutilizables para dashboards, tablas, modales y layouts responsivos. Incremente la toma de decisiones con graficos de Chart.js.',
      highlights: [
        'Design system propio con tokens y variantes reutilizables.',
        'Integracion con Context API para manejar estado global y evitar prop drilling.',
      ],
    },
    {
      title: 'Dominio del producto y experiencia de compra',
      body:
        'El carrito inteligente evita duplicados, controla cantidades y sincroniza la sesion del usuario para continuar compras desde cualquier dispositivo. Las fichas soportan variantes (talla, precio, fotos) y exponen informacion consistente gracias al modelado en Mongoose.',
      highlights: [
        'Populate para relacionar usuarios, favoritos y carrito en una sola respuesta.',
        'Sistema de ordenes con tracking de estados y devoluciones.',
      ],
    },
    {
      title: 'Backend preparado para crecer',
      body:
        'Desarrolle la API con Node.js, Fastify y MongoDB organizando routes, controllers, services y models. Defini endpoints REST para usuarios, productos, carrito, favoritos, ordenes y devoluciones con validaciones y manejo centralizado de errores.',
      highlights: [
        'Middlewares de seguridad y respuesta uniforme para el cliente.',
        'Pruebas de integracion que validan la comunicacion frontend-backend via Axios.',
      ],
    },
    {
      title: 'Operaciones y panel administrativo',
      body:
        'El panel admin ofrece CRUD completo para productos y usuarios, ademas de dashboards con KPIs y graficos. La UI prioriza claridad visual para el equipo comercial, manteniendose fiel a la paleta blanco/rojo.',
      highlights: [
        'Tablas enriquecidas con filtros, paginacion y acciones inline.',
        'Modales de confirmacion y formularios validados para evitar errores operativos.',
      ],
    },
  ],
  closing:
    'Descripcion para el portafolio: Ecommerce full-stack con arquitectura por capas que combina React, Tailwind, Context API y Chart.js en el frontend con una API Fastify/MongoDB respaldada por rutas REST robustas, carrito inteligente, variantes de producto, ordenes trackeables y panel admin con CRUD completo.',
};
