import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

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
      <motion.main initial="hidden" animate="visible" variants={containerVariants} className="space-y-10">
        <motion.section
          variants={containerVariants}
          className="rounded-[32px] border border-softGray bg-gradient-to-br from-softBlue/30 via-white to-softGray/50 p-10 shadow-xl"
        >
          <SectionHeading
            eyebrow="Galeria"
            title="Proyectos en profundidad"
            subtitle="Explora casos completos con detalles tecnicos, capturas y repositorios listos para revisar."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} layout="gallery" />
            ))}
          </div>
        </motion.section>
      </motion.main>
      <Footer />
    </Layout>
  );
}
