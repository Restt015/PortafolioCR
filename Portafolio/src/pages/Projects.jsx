import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import imgPreview from '../assets/jflowg-1-home.jpg';

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
            eyebrow="Proyectos Destacados"
            title="Explora mis ultimos proyectos"
            subtitle="Preview rapida del proyecto JFLOWG."
            align="center"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <motion.div variants={containerVariants}>
              <ProjectCard
                project={{
                  id: 'jflowg',
                  title: 'JFLOWG – Ecommerce y Panel Administrativo',
                  description: 'Tienda completa con gestion de productos, pedidos, usuarios y dashboard administrativo.',
                  cover: imgPreview,
                  technologies: ['React', 'Tailwind', 'Fastify', 'MongoDB'],
                  repoUrl: null,
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
