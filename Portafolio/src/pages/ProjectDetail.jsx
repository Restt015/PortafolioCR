import { useMemo } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { projects } from '../data/projects';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
  },
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => projects.find((item) => item.id === projectId), [projectId]);

  if (!project) {
    return (
      <Layout>
        <Header />
        <main className="rounded-[32px] border border-softGray bg-white/80 p-10 text-center text-slate-600">
          <p>No encontre este proyecto.</p>
          <Link to="/projects" className="mt-6 inline-flex rounded-full bg-slate-900 px-4 py-2 text-white">
            Volver a proyectos
          </Link>
        </main>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <motion.main initial="hidden" animate="visible" variants={containerVariants} className="space-y-10">
        <motion.section
          variants={containerVariants}
          className="rounded-[32px] border border-softGray bg-white/90 p-10 shadow-xl"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <motion.div variants={containerVariants} className="flex-1 space-y-4">
              <motion.h1 variants={containerVariants} className="text-4xl font-semibold text-slate-900">
                {project.title}
              </motion.h1>
              <motion.p variants={containerVariants} className="text-slate-600">
                {project.longDescription}
              </motion.p>
              <motion.ul variants={containerVariants} className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-softGray bg-softBlue/40 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </motion.ul>
              <motion.div variants={containerVariants} className="flex gap-3">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
                >
                  Volver
                </button>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Repositorio
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex-1 space-y-4 rounded-3xl border border-softBlue bg-softBlue/20 p-4"
            >
              {project.images.map((image, index) => (
                <motion.div
                  key={image}
                  className="overflow-hidden rounded-2xl border border-white/70 bg-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <img src={image} alt={`${project.title} captura ${index + 1}`} className="w-full object-cover" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </motion.main>
      <Footer />
    </Layout>
  );
}
