import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import imgAlarmber from '../assets/IMG_3924.png';
import imgJflowg from '../assets/jflowg-1-home.jpg';
import { getFeaturedProjects } from '../data/projects';

const projectImages = {
  alarmber: imgAlarmber,
  jflowg: imgJflowg,
};

const themes = [
  {
    borderHover: 'hover:border-[#ef4444]/50',
    shadowHover: 'hover:shadow-[0_20px_60px_rgba(239,68,68,0.2)]',
    badgeBg: 'bg-[#ef4444]/10',
    badgeText: 'text-[#ef4444]',
    btnBg: 'bg-[#ef4444]',
    btnHover: 'hover:bg-[#dc2626]',
    shadowBtn: 'shadow-[#ef4444]/30',
    shadowBtnHover: 'hover:shadow-[#ef4444]/40',
  },
  {
    borderHover: 'hover:border-[#3b82f6]/50',
    shadowHover: 'hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]',
    badgeBg: 'bg-[#3b82f6]/10',
    badgeText: 'text-[#3b82f6]',
    btnBg: 'bg-[#3b82f6]',
    btnHover: 'hover:bg-[#2563eb]',
    shadowBtn: 'shadow-[#3b82f6]/30',
    shadowBtnHover: 'hover:shadow-[#3b82f6]/40',
  },
  {
    borderHover: 'hover:border-[#10b981]/50',
    shadowHover: 'hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)]',
    badgeBg: 'bg-[#10b981]/10',
    badgeText: 'text-[#10b981]',
    btnBg: 'bg-[#10b981]',
    btnHover: 'hover:bg-[#059669]',
    shadowBtn: 'shadow-[#10b981]/30',
    shadowBtnHover: 'hover:shadow-[#10b981]/40',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsShowcase() {
  const featuredProjects = getFeaturedProjects();

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
          subtitle="Proyectos de desarrollo para práctica y aprendizaje técnico."
        />

        <div className="mt-10 flex flex-col gap-6">
          {featuredProjects.map((project, index) => {
            const theme = themes[index % themes.length];
            const imgSrc = project.cover || projectImages[project.id];
            
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`flex flex-col gap-6 rounded-3xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 shadow-lg transition-all duration-300 hover:scale-[1.01] ${theme.borderHover} ${theme.shadowHover} md:flex-row md:items-center lg:p-8`}
                whileHover={{ y: -4 }}
              >
                {imgSrc && (
                  <motion.img
                    src={imgSrc}
                    alt={`${project.title} preview`}
                    className="h-48 w-full rounded-2xl object-cover shadow-lg md:h-40 md:w-72 lg:h-52 lg:w-80"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-white lg:text-3xl">{project.title}</h3>
                    {project.subtitle && (
                      <span className={`rounded-full ${theme.badgeBg} px-3 py-1 text-xs font-medium ${theme.badgeText}`}>
                        {project.subtitle}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm font-medium ${theme.badgeText}`}>
                    {project.technologies?.slice(0, 3).join(' • ') || 'Desarrollo'}
                  </p>
                  <p className="leading-relaxed text-[#d4d4d4]">
                    {project.description}
                  </p>
                  <Link
                    to={project.detailPath || `/projects/${project.id}`}
                    className={`inline-flex items-center gap-2 rounded-full ${theme.btnBg} px-6 py-3 text-base font-semibold text-white shadow-lg ${theme.shadowBtn} transition-all hover:scale-105 ${theme.btnHover} hover:shadow-xl ${theme.shadowBtnHover}`}
                  >
                    Ver más
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
}

