import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function ProjectsShowcase() {
  return (
    <motion.section
      id="projects"
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div
        variants={sectionVariants}
        className="rounded-[32px] border border-softGray bg-white/90 p-10 shadow-sm"
      >
        <SectionHeading
          eyebrow="Seleccion"
          title="Casos recientes"
          subtitle="Un vistazo a los productos donde conecte estrategia, diseno y codigo."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
