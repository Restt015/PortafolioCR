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
      className="py-12 sm:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div
        variants={sectionVariants}
        className="rounded-[32px] border border-[#1f1f1f] bg-[#111111] p-8 shadow-lg sm:p-10 lg:p-12"
      >
        <SectionHeading
          eyebrow="Proyectos"
          title="Proyectos destacados"
          subtitle="Preview rapido de JFLOWG y ALARMBER."
        />

        {/* JFLOWG Card */}
        <motion.div
          variants={sectionVariants}
          className="mt-10 flex flex-col gap-6 rounded-3xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:border-[#3b82f6]/50 hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)] md:flex-row md:items-center lg:p-8"
          whileHover={{ y: -4 }}
        >
          <motion.img
            src={imgPreview}
            alt="JFLOWG preview"
            className="h-48 w-full rounded-2xl object-cover shadow-lg md:h-40 md:w-72 lg:h-52 lg:w-80"
            initial={{ opacity: 0.8 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-white lg:text-3xl">JFLOWG – Ecommerce y Panel Administrativo</h3>
            <p className="leading-relaxed text-[#d4d4d4]">
              Tienda completa con catalogo, filtros, login, carrito, pagos y dashboard administrativo.
            </p>
            <Link
              to="/projects/jflowg"
              className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#3b82f6]/30 transition-all hover:scale-105 hover:bg-[#2563eb] hover:shadow-xl hover:shadow-[#3b82f6]/40"
            >
              Ver más
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>

        {/* ALARMBER Card */}
        <motion.div
          variants={sectionVariants}
          className="mt-6 flex flex-col gap-6 rounded-3xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:border-[#3b82f6]/50 hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)] md:flex-row md:items-center lg:p-8"
          whileHover={{ y: -4 }}
        >
          <motion.img
            src={imgPreview} // Using JFLOWG image as placeholder
            alt="ALARMBER preview"
            className="h-48 w-full rounded-2xl object-cover shadow-lg md:h-40 md:w-72 lg:h-52 lg:w-80"
            initial={{ opacity: 0.8 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-white lg:text-3xl">ALARMBER – App de Reportes de Personas Desaparecidas</h3>
            <p className="leading-relaxed text-[#d4d4d4]">
              Aplicación móvil intuitiva para crear, visualizar y gestionar reportes de personas desaparecidas. Diseñada con interfaz estilo Uber, validación de reportes y navegación fluida.
            </p>
            <Link
              to="/projects/alarmber"
              className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#3b82f6]/30 transition-all hover:scale-105 hover:bg-[#2563eb] hover:shadow-xl hover:shadow-[#3b82f6]/40"
            >
              Ver más
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
