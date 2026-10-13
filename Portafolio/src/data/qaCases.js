// Experiencia en QA. Cada entrada es también un caso con su propia página (/qa/:id).
export const qaCases = [
  {
    id: 'copa-ndc',
    company: 'Copa Airlines',
    role: 'Analista de Pruebas (QA)',
    period: 'Ene 2024 – Actualidad',
    title: 'Regresión de APIs NDC',
    summary:
      'Pruebas funcionales y de regresión sobre las APIs con las que los canales indirectos reservan y emiten boletos.',
    context:
      'Los canales indirectos de Copa Airlines reservan y emiten boletos a través de servicios NDC (New Distribution Capability, el estándar de IATA), versión 11.6. Cada entrega tiene que mantener estables esos flujos.',
    scope: [
      'Reservaciones y emisiones aéreas',
      'Asignación de asientos, pagos, reembolsos y cambios de itinerario',
      'Integración entre servicios REST y SOAP',
    ],
    approach: [
      'Diseño casos de prueba alineados a los criterios de aceptación.',
      'Ejecuto pruebas funcionales, de integración y de regresión sobre las APIs.',
      'Automatizo las regresiones con colecciones de Postman y las corro con Newman.',
      'Registro cada error en un seguimiento que comparten QA y desarrollo.',
    ],
    outcome:
      'Reportes de Newman que convierten los resultados técnicos en validaciones claras para los líderes de proyecto, y un seguimiento de errores que deja ver patrones de fallos y acorta los tiempos de corrección en cada entrega.',
    testTypes: ['Funcionales', 'Regresión', 'Integración'],
    tools: ['Postman', 'Newman', 'REST', 'SOAP'],
  },
  {
    id: 'banesco-rendimiento',
    company: 'Banesco Panamá',
    role: 'QA Tester',
    period: 'Ene 2024 – Dic 2024',
    title: 'Carga y estrés en banca en línea',
    summary:
      'Pruebas de carga y estrés con Apache JMeter sobre las plataformas de Banca Persona y Banca Empresa.',
    context:
      'Banca Persona y Banca Empresa tienen que responder bien cuando muchos clientes entran a la vez. Formé parte del equipo que evaluaba su rendimiento y estabilidad.',
    scope: [
      'Plataforma de Banca Persona',
      'Plataforma de Banca Empresa',
      'Integración entre sistemas financieros',
    ],
    approach: [
      'Diseñé simulaciones de alta concurrencia en Apache JMeter.',
      'Ejecuté pruebas de carga y estrés midiendo tiempos de respuesta bajo demanda extrema.',
      'Analicé los resultados para ubicar los cuellos de botella.',
      'Ejecuté pruebas de integración para detectar inconsistencias en las transacciones.',
    ],
    outcome:
      'Informes técnicos con los cuellos de botella identificados, que el equipo de desarrollo usó como guía para optimizar las plataformas.',
    testTypes: ['Carga', 'Estrés', 'Integración'],
    tools: ['Apache JMeter'],
  },
  {
    id: 'infosgroup-practica',
    company: 'InfosGroup',
    role: 'Becario de práctica profesional (PFP)',
    period: 'Ene 2024 – Dic 2024',
    title: 'Práctica profesional en QA y desarrollo',
    summary:
      'Apoyo a los equipos de QA y de desarrollo: pruebas funcionales y automatizadas sobre flujos críticos.',
    context:
      'Durante la práctica profesional apoyé tanto al área de QA como a la de desarrollo en los proyectos que me asignaron, dentro de equipos que trabajan con metodologías ágiles.',
    scope: [
      'Flujos críticos de los proyectos asignados',
      'Validación de módulos junto al equipo de desarrollo',
      'Documentación de procesos de calidad',
    ],
    approach: [
      'Ejecuté pruebas funcionales y automatizadas.',
      'Verifiqué los flujos críticos para detectar inconsistencias temprano.',
      'Apoyé a desarrollo en mantenimiento básico y validación de módulos.',
      'Documenté los procesos siguiendo los estándares del equipo.',
    ],
    outcome:
      'Bases técnicas en QA y en desarrollo, y la práctica de trabajar con entregas cortas en un equipo ágil.',
    testTypes: ['Funcionales', 'Automatizadas'],
    tools: ['JavaScript', 'Selenium', 'TestComplete'],
  },
];

export const getQaCase = (id) => qaCases.find((c) => c.id === id);
