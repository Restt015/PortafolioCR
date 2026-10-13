import ink1 from '../assets/inkbyrafa-1-inicio.jpg';
import ink2 from '../assets/inkbyrafa-2-artista.jpg';
import ink3 from '../assets/inkbyrafa-3-servicios.jpg';
import ink4 from '../assets/inkbyrafa-4-obra.jpg';
import ink5 from '../assets/inkbyrafa-5-proceso.jpg';
import ink6 from '../assets/inkbyrafa-6-estilos.jpg';
import ink7 from '../assets/inkbyrafa-7-reservar.jpg';
import col1 from '../assets/collette-1-inicio.jpg';
import col2 from '../assets/collette-2-colecciones.jpg';
import col3 from '../assets/collette-3-catalogo.jpg';
import col4 from '../assets/collette-4-producto.jpg';
import col5 from '../assets/collette-5-carrito.jpg';
import col6 from '../assets/collette-6-nosotros.jpg';
import col7 from '../assets/collette-7-contacto.jpg';
import col8 from '../assets/collette-8-login.jpg';
import jf1 from '../assets/jflowg-1-home.jpg';
import jf2 from '../assets/jflowg-2-catalogo.jpg';
import jf3 from '../assets/jflowg-3-login.jpg';
import jf4 from '../assets/register.jpg';
import jf5 from '../assets/jflowg-4-carrito.jpg';
import jf6 from '../assets/jflowg-5-payment.jpg';
import jf7 from '../assets/jflowg-6-dashboard.jpg';
import jf8 from '../assets/jflowg-7-crud.jpg';
import jf9 from '../assets/crud2.jpg';
import jf10 from '../assets/devoluciones y ordenes .jpg';
import al1 from '../assets/alarmber-1.jpg';
import al2 from '../assets/alarmber-2.jpg';
import al3 from '../assets/alarmber-3.jpg';
import al4 from '../assets/alarmber-4.jpg';
import al5 from '../assets/alarmber-5.jpg';
import al6 from '../assets/alarmber-6.jpg';
import al7 from '../assets/alarmber-7.jpg';
import al8 from '../assets/alarmber-8.jpg';

// format: 'desktop' (captura 1440×900), 'small' (captura ~600 px de ancho) o 'phone' (captura 720×1561)
export const projects = [
  {
    id: 'ink-by-rafa',
    title: 'Ink by Rafa',
    kind: 'Sitio web para un tatuador',
    practice: false,
    description:
      'La obra de un tatuador de Ciudad de Panamá ordenada por estilo, y una reserva en 6 pasos que cierra la fianza por WhatsApp.',
    summary:
      'Sitio de Rafa, tatuador residente de Inkside en Obarrio, Ciudad de Panamá. Muestra su obra por estilo y lleva al cliente de la idea a la cita sin crear una cuenta.',
    siteUrl: 'https://tattorafa-s1xw.vercel.app/',
    siteLabel: 'tattorafa-s1xw.vercel.app',
    repoUrl: null,
    stack: ['Next.js', 'React', 'Vercel'],
    built: [
      'Portada con carrusel de piezas en perspectiva',
      'Galería de 46 piezas con filtro por estilo y vista de cerca',
      'Página de tipos de tatuaje con 10 estilos',
      'Reserva en 6 pasos: datos, tatuaje, presupuesto, fecha, salud y confirmación',
      'Cierre de la fianza por WhatsApp con los datos ya escritos',
    ],
    format: 'desktop',
    cover: [ink1],
    gallery: [
      { src: ink1, caption: 'Portada: el nombre, las piezas y un solo botón para agendar.' },
      { src: ink2, caption: 'Sobre mí: quién es Rafa y cuánto lleva tatuando en Panamá.' },
      { src: ink3, caption: 'Servicios: una fila por estilo.' },
      { src: ink4, caption: 'Mi obra: las fotos tal como las publica en Instagram.' },
      { src: ink5, caption: 'Proceso: primero la idea, después la fecha.' },
      { src: ink6, caption: 'Tipos de tatuaje: la obra ordenada por estilo.' },
      { src: ink7, caption: 'Reserva: primer paso del formulario, sin cuenta ni contraseña.' },
    ],
  },
  {
    id: 'floristeria-collette',
    title: 'Floristería Collette',
    kind: 'Tienda en línea para una floristería',
    practice: false,
    description:
      'Tienda en línea de una floristería en Panamá: catálogo por ocasión, ficha de producto con inventario, carrito y cuentas de cliente.',
    summary:
      'Tienda en línea de una floristería en Panamá. El cliente recorre el catálogo por ocasión, revisa cada arreglo con su precio y disponibilidad, y compra desde el carrito.',
    siteUrl: 'http://100.63.55.198/',
    siteLabel: '100.63.55.198',
    repoUrl: null,
    stack: ['Next.js', 'React'],
    built: [
      'Portada con accesos por ocasión: cumpleaños, amor y aniversario, condolencias',
      'Catálogo con más de 20 categorías, orden por precio y filtro de disponibilidad',
      'Ficha de producto con precio, inventario y compra directa',
      'Carrito y cuentas de cliente con correo o Google',
      'Contacto con formulario, horarios y acceso directo a WhatsApp',
    ],
    format: 'desktop',
    cover: [col1],
    gallery: [
      { src: col1, caption: 'Portada: tres ocasiones para entrar directo al catálogo.' },
      { src: col2, caption: 'Colecciones: cada categoría con su propia ilustración.' },
      { src: col3, caption: 'Catálogo: categorías, orden por precio y rangos.' },
      { src: col4, caption: 'Producto: precio, inventario disponible y compra.' },
      { src: col5, caption: 'Carrito vacío, con salida hacia los productos.' },
      { src: col6, caption: 'Nosotros: historia, misión y valores de la floristería.' },
      { src: col7, caption: 'Contacto: datos, horarios y formulario.' },
      { src: col8, caption: 'Inicio de sesión con correo o con Google.' },
    ],
  },
  {
    id: 'jflowg',
    title: 'JFLOWG',
    kind: 'Tienda en línea con panel administrativo',
    practice: true,
    description:
      'Ecommerce full-stack: catálogo con filtros, carrito, pagos y un panel para administrar productos, pedidos y devoluciones.',
    summary:
      'Ecommerce full-stack que construí para practicar el flujo completo de una tienda: del catálogo al pago, y del pedido a su gestión en el panel administrativo.',
    siteUrl: null,
    siteLabel: null,
    repoUrl: 'https://github.com/Restt015/Jflowg',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Fastify', 'MongoDB', 'Axios'],
    built: [
      'Interfaz completa en React y Tailwind CSS',
      'Catálogo con filtros por categoría y búsqueda',
      'Carrito con Context API, checkout y pagos',
      'API REST con Fastify y MongoDB',
      'Inicio de sesión, registro y perfil con devoluciones',
      'Panel administrativo de productos, pedidos y usuarios',
    ],
    format: 'small',
    cover: [jf1],
    gallery: [
      { src: jf1, caption: 'Inicio de la tienda.' },
      { src: jf2, caption: 'Catálogo con filtros por categoría.' },
      { src: jf3, caption: 'Inicio de sesión.' },
      { src: jf4, caption: 'Registro de cuenta.' },
      { src: jf5, caption: 'Carrito de compras.' },
      { src: jf6, caption: 'Pago del pedido.' },
      { src: jf7, caption: 'Panel administrativo.' },
      { src: jf8, caption: 'Gestión de productos.' },
      { src: jf9, caption: 'Edición de un producto.' },
      { src: jf10, caption: 'Pedidos y devoluciones.' },
    ],
  },
  {
    id: 'alarmber',
    title: 'Alarmber',
    kind: 'App móvil de alertas por personas desaparecidas',
    practice: true,
    description:
      'App móvil para reportar personas desaparecidas y seguir las alertas activas, con recursos de emergencia a un toque.',
    summary:
      'App móvil para reportar personas desaparecidas y seguir las alertas activas de la zona. La construí para practicar React Native y Expo con un problema real.',
    siteUrl: 'https://alarmber-app-xkri.vercel.app/',
    siteLabel: 'Vista web en Vercel',
    repoUrl: 'https://github.com/Restt015/alarmber-app',
    stack: ['React Native', 'Expo', 'Expo Router', 'React Native Paper', 'NativeWind'],
    built: [
      'Reporte con foto, última ubicación, descripción física y vestimenta',
      'Listado de alertas activas con búsqueda y estado de cada caso',
      'Notificaciones de alertas cercanas y del avance de un reporte',
      'Validación de los reportes por un administrador',
      'Recursos de ayuda con números de emergencia',
      'Registro, inicio de sesión y perfil de usuario',
    ],
    format: 'phone',
    cover: [al1, al2, al8],
    gallery: [
      { src: al1, caption: 'Inicio: accesos rápidos y noticias.' },
      { src: al2, caption: 'Alertas activas, con el estado de cada caso.' },
      { src: al8, caption: 'Nuevo reporte: foto, datos y última ubicación.' },
      { src: al3, caption: 'Notificaciones de alertas y reportes.' },
      { src: al4, caption: 'Recursos de ayuda y números de emergencia.' },
      { src: al5, caption: 'Perfil y configuración.' },
      { src: al6, caption: 'Inicio de sesión.' },
      { src: al7, caption: 'Registro de cuenta.' },
    ],
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);
