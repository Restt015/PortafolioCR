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
    <motion.section id="hero" variants={sectionVariants} initial="hidden" animate="visible" className="py-10">
      <motion.div
        variants={sectionVariants}
        className="flex flex-col gap-6 rounded-[28px] border border-[#1f1f1f] bg-[#111111] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.5)] md:flex-row md:items-center"
      >
        <div className="flex-1 space-y-6">
          <motion.div variants={sectionVariants}>
            <Tag>{role}</Tag>
          </motion.div>
          <div className="space-y-4">
            <motion.h1 variants={sectionVariants} className="text-4xl font-semibold text-white sm:text-4xl">
              {name}
              <span className="block text-sky-500">{punchline}</span>
            </motion.h1>
            <motion.p variants={sectionVariants} className="text-base text-[#d4d4d4] sm:text-lg">
              {description}
            </motion.p>
          </div>
          <motion.div variants={sectionVariants} className="flex flex-wrap gap-3 text-sm font-semibold">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={primaryAction.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-5 py-2.5 text-white transition hover:bg-[#2563eb]"
            >
              {primaryAction.label}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={secondaryAction.href}
              className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6] px-5 py-2.5 text-[#3b82f6] transition hover:bg-[#111111]"
            >
              {secondaryAction.label}
            </motion.a>
          </motion.div>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <motion.div
            variants={sectionVariants}
            className="relative overflow-hidden rounded-3xl border border-[#1f1f1f] bg-[#111111]"
          >
            <img src={profileImg} alt={`Retrato de ${name}`} className="h-80 w-full object-cover object-center sm:h-96" />
            {!!metrics.length && (
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-4 border-t border-[#3b82f6]/30 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 text-sm text-white">
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
              className="rounded-3xl border border-[#1f1f1f] bg-[#111111] p-6 shadow-inner"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4d4d4]">Enfoque actual</p>
              <ul className="mt-4 space-y-3 text-sm text-[#d4d4d4]">
                {spotlight.map((item) => (
                  <motion.li key={item} className="flex gap-3" whileHover={{ x: 4 }}>
                    <span aria-hidden="true" className="text-[#3b82f6]">
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
