import { motion } from 'framer-motion';
import { heroContent } from '../data/profile';
import Tag from '../components/ui/Tag';
import profileImg from '../assets/profile.jpeg';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  const {
    name,
    role,
    punchline,
    description,
    primaryAction,
    secondaryAction,
    spotlight = [],
    metrics = [],
  } = heroContent;

  return (
    <motion.section id="hero" variants={sectionVariants} initial="hidden" animate="visible" className="py-16">
      <motion.div
        variants={sectionVariants}
        className="flex flex-col gap-10 rounded-[32px] border border-softBlue bg-white/90 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.12)] md:flex-row md:items-center"
      >
        <div className="flex-1 space-y-6">
          <motion.div variants={sectionVariants}>
            <Tag>{role}</Tag>
          </motion.div>
          <div className="space-y-4">
            <motion.h1 variants={sectionVariants} className="text-4xl font-semibold text-slate-900 sm:text-5xl">
              {name}
              <span className="block text-sky-500">{punchline}</span>
            </motion.h1>
            <motion.p variants={sectionVariants} className="text-base text-slate-600 sm:text-lg">
              {description}
            </motion.p>
          </div>
          <motion.div variants={sectionVariants} className="flex flex-wrap gap-3 text-sm font-semibold">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={primaryAction.href}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700"
            >
              {primaryAction.label}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={secondaryAction.href}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-slate-700 transition hover:bg-softGray"
            >
              {secondaryAction.label}
            </motion.a>
          </motion.div>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <motion.div
            variants={sectionVariants}
            className="relative overflow-hidden rounded-3xl border border-softGray bg-softBlue/40"
          >
            <img src={profileImg} alt={`Retrato de ${name}`} className="h-80 w-full object-cover object-center sm:h-96" />
            {!!metrics.length && (
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-4 border-t border-white/40 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-transparent p-6 text-sm text-white">
                {metrics.map((metric) => (
                  <div key={metric.label} className="min-w-[120px] flex-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">{metric.label}</p>
                    <p className="text-base font-semibold">{metric.value}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
          {!!spotlight.length && (
            <motion.div
              variants={sectionVariants}
              className="rounded-3xl border border-softGray bg-softBlue/30 p-6 shadow-inner"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Enfoque actual</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {spotlight.map((item) => (
                  <motion.li key={item} className="flex gap-3" whileHover={{ x: 4 }}>
                    <span aria-hidden="true" className="text-sky-500">
                      -
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}
