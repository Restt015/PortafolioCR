import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import imgPreview from '../assets/jflowg-1-home.jpg';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ProjectsShowcase() {
  return (
    <motion.section
      id="projects"
      className="py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div
        variants={sectionVariants}
        className="rounded-[24px] border border-[#1f1f1f] bg-[#111111] p-7 shadow-sm"
      >
        <SectionHeading
          eyebrow="Proyectos Destacados"
          title=" Mis Proyectos"
          
        />

        <motion.div
          variants={sectionVariants}
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4 md:flex-row md:items-center"
          whileHover={{ y: -3 }}
        >
          <motion.img
            src={imgPreview}
            alt="JFLOWG preview"
            className="h-36 w-full rounded-xl object-cover md:h-32 md:w-60"
            initial={{ opacity: 0.8 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-semibold text-white">JFLOWG – Ecommerce y Panel Administrativo</h3>
            <p className="text-sm text-[#d4d4d4]">
              Tienda completa con catalogo, filtros, login, carrito, pagos y dashboard administrativo.
            </p>
            <Link
              to="/projects/jflowg"
              className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2563eb]"
            >
              Ver mas
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </motion.div>

        {/* New ALARMBER Card */}
        <motion.div
          variants={sectionVariants}
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4 md:flex-row md:items-center"
          whileHover={{ y: -3 }}
        >
          <motion.img
            src={imgPreview} // Using JFLOWG image as placeholder
            alt="ALARMBER preview"
            className="h-36 w-full rounded-xl object-cover md:h-32 md:w-60"
            initial={{ opacity: 0.8 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-semibold text-white">ALARMBER – App de Reportes de Personas Desaparecidas</h3>
            <p className="text-sm text-[#d4d4d4]">
              Aplicación móvil intuitiva para crear, visualizar y gestionar reportes de personas desaparecidas. Diseñada con interfaz estilo Uber, validación de reportes y navegación fluida.
            </p>
            <Link
              to="/projects/alarmber"
              className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2563eb]"
            >
              Ver más
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
