import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import imgAlarmber from '../assets/IMG_3924.png';
import imgJflowg from '../assets/jflowg-1-home.jpg';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
  },
};

export default function ProjectsPage() {
  return (
    <Layout>
      <Header />
      <motion.main initial="hidden" animate="visible" variants={containerVariants} className="space-y-8">
        <motion.section
          variants={containerVariants}
          className="rounded-[24px] border border-[#1f1f1f] bg-[#111111] p-7 shadow-xl"
        >
          <SectionHeading
            eyebrow="Proyectos de Desarrollo"
            title="Proyectos de práctica y aprendizaje"
            subtitle="Aplicaciones desarrolladas para ampliar conocimientos técnicos."
            align="center"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* ALARMBER - Proyecto de práctica */}
            <motion.div variants={containerVariants}>
              <ProjectCard
                project={{
                  id: 'alarmber',
                  title: 'ALARMBER – Desarrollo móvil',
                  description: 'Proyecto práctico enfocado en reportes ciudadanos. Desarrollado para ampliar conocimientos en React Native y Expo.',
                  cover: imgAlarmber,
                  technologies: ['React Native', 'Expo', 'NativeWind', 'Node.js'],
                  repoUrl: 'https://github.com/Restt015/alarmber-app',
                }}
                layout="gallery"
                ctaTo="/projects/alarmber"
              />
            </motion.div>

            {/* JFLOWG - Proyecto de práctica */}
            <motion.div variants={containerVariants}>
              <ProjectCard
                project={{
                  id: 'jflowg',
                  title: 'JFLOWG – Desarrollo web',
                  description: 'Proyecto de ecommerce full-stack para practicar React, APIs REST y gestión de bases de datos.',
                  cover: imgJflowg,
                  technologies: ['React', 'Tailwind', 'Fastify', 'MongoDB'],
                  repoUrl: 'https://github.com/Restt015/Jflowg.git',
                }}
                layout="gallery"
                ctaTo="/projects/jflowg"
              />
            </motion.div>
          </div>
        </motion.section>
      </motion.main>
      <Footer />
    </Layout>
  );
}

