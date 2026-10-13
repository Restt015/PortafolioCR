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

// Sitios web desarrollados para negocios reales (capturas a 1440×900)
export const siteProjects = [
  {
    id: 'ink-by-rafa',
    title: 'Ink by Rafa',
    kind: 'Sitio web para un tatuador',
    summary:
      'Sitio de Rafa, tatuador residente de Inkside en Obarrio, Ciudad de Panamá. Muestra su obra por estilo y lleva al cliente de la idea a la cita sin crear una cuenta.',
    siteUrl: 'https://tattorafa-s1xw.vercel.app/',
    siteLabel: 'tattorafa-s1xw.vercel.app',
    stack: ['Next.js', 'React', 'Vercel'],
    built: [
      'Portada con carrusel de piezas en perspectiva',
      'Galería de 46 piezas con filtro por estilo y vista de cerca',
      'Página de tipos de tatuaje con 10 estilos',
      'Reserva en 6 pasos: datos, tatuaje, presupuesto, fecha, salud y confirmación',
      'Cierre de la fianza por WhatsApp con los datos ya escritos',
    ],
    cover: ink1,
    gallery: [
      { src: ink1, caption: 'Portada: el nombre, las piezas y un solo botón para agendar.' },
      { src: ink2, caption: 'Sobre mí: quién es Rafa y cuánto lleva tatuando en Panamá.' },
      { src: ink3, caption: 'Servicios: una fila por estilo, sin tarjetas.' },
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
    summary:
      'Tienda en línea de una floristería en Panamá. El cliente recorre el catálogo por ocasión, revisa cada arreglo con su precio y disponibilidad, y compra desde el carrito.',
    siteUrl: 'http://100.63.55.198/',
    siteLabel: '100.63.55.198',
    stack: ['Next.js', 'React'],
    built: [
      'Portada con accesos por ocasión: cumpleaños, amor y aniversario, condolencias',
      'Catálogo con más de 20 categorías, orden por precio y filtro de disponibilidad',
      'Ficha de producto con precio, inventario y compra directa',
      'Carrito y cuentas de cliente con correo o Google',
      'Contacto con formulario, horarios y acceso directo a WhatsApp',
    ],
    cover: col1,
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
];

export const getSiteProject = (id) => siteProjects.find((p) => p.id === id);
