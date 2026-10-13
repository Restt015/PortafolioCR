import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { getSiteProject, siteProjects } from '../data/siteProjects';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function SiteProjectPage({ projectId }) {
  const project = getSiteProject(projectId);
  const next = siteProjects[(siteProjects.indexOf(project) + 1) % siteProjects.length];
  const [lead, ...rest] = project.gallery;

  return (
    <Layout>
      <Header />
      <motion.main initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
        <motion.section
          variants={fadeUp}
          className="mt-6 rounded-[32px] border border-[#1f1f1f] bg-[#111111] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.6)] sm:p-9"
        >
          <Link to="/projects" className="text-sm font-medium text-[#d4d4d4] transition hover:text-white">
            <span aria-hidden="true">←</span> Proyectos
          </Link>
          <h1 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">{project.title}</h1>
          <p className="mt-2 text-lg font-medium text-[#93c5fd]">{project.kind}</p>
          <p className="mt-4 max-w-[65ch] text-lg text-[#d4d4d4]">{project.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold">
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-5 py-3 text-white transition hover:bg-[#1d4ed8]"
            >
              Ver el sitio en vivo
              <span aria-hidden="true">↗</span>
            </a>
            <span className="font-normal text-[#a3a3a3]">{project.siteLabel}</span>
          </div>

          <figure className="mt-8">
            <img
              src={lead.src}
              alt={`${project.title}: ${lead.caption}`}
              width={1440}
              height={900}
              className="h-auto w-full rounded-2xl border border-[#262626]"
            />
            <figcaption className="mt-3 text-sm text-[#a3a3a3]">{lead.caption}</figcaption>
          </figure>
        </motion.section>

        <motion.section
          variants={fadeUp}
          className="mt-8 grid gap-8 rounded-[28px] border border-[#1f1f1f] bg-[#111111] p-6 shadow-lg sm:p-8 md:grid-cols-[2fr_1fr]"
        >
          <div>
            <h2 className="text-2xl font-semibold text-white">Lo que construí</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#d4d4d4] marker:text-[#3b82f6]">
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Tecnologías</h2>
            <p className="mt-4 text-[#d4d4d4]">{project.stack.join(', ')}.</p>
            <h2 className="mt-6 text-2xl font-semibold text-white">Mi rol</h2>
            <p className="mt-4 text-[#d4d4d4]">Diseño y desarrollo del sitio completo.</p>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          className="mt-8 rounded-[28px] border border-[#1f1f1f] bg-[#111111] p-6 shadow-lg sm:p-8"
        >
          <h2 className="text-2xl font-semibold text-white">Recorrido por el sitio</h2>
          <div className="mt-6 grid gap-x-5 gap-y-8 md:grid-cols-2">
            {rest.map((shot) => (
              <figure key={shot.src}>
                <img
                  src={shot.src}
                  alt={`${project.title}: ${shot.caption}`}
                  width={1440}
                  height={900}
                  loading="lazy"
                  className="h-auto w-full rounded-xl border border-[#262626]"
                />
                <figcaption className="mt-3 text-sm text-[#a3a3a3]">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </motion.section>

        <motion.nav
          variants={fadeUp}
          aria-label="Más proyectos"
          className="mt-8 flex flex-wrap items-center justify-between gap-4 px-2 text-sm font-semibold"
        >
          <Link to={`/projects/${next.id}`} className="text-[#93c5fd] transition hover:text-white">
            Siguiente proyecto: {next.title} <span aria-hidden="true">→</span>
          </Link>
          <a href="/#contact" className="text-[#d4d4d4] transition hover:text-white">
            Contacto
          </a>
        </motion.nav>
      </motion.main>
      <Footer />
    </Layout>
  );
}
