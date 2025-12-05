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
    <motion.section id="hero" variants={sectionVariants} initial="hidden" animate="visible" className="py-12 sm:py-16">
      <motion.div
        variants={sectionVariants}
        className="flex flex-col gap-8 rounded-[32px] border border-[#1f1f1f] bg-[#111111] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.5)] sm:p-10 md:flex-row md:items-center lg:gap-12 lg:p-12"
      >
        <div className="flex-1 space-y-8">
          <motion.div variants={sectionVariants}>
            <Tag>{role}</Tag>
          </motion.div>
          <div className="space-y-6">
            <motion.h1 variants={sectionVariants} className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {name}
              <span className="mt-2 block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] bg-clip-text text-transparent">
                {punchline}
              </span>
            </motion.h1>
            <motion.p variants={sectionVariants} className="text-base leading-relaxed text-[#d4d4d4] sm:text-lg lg:text-xl">
              {description}
            </motion.p>
          </div>
          <motion.div variants={sectionVariants} className="flex flex-wrap gap-4 text-sm font-semibold">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={primaryAction.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-6 py-3.5 text-base text-white shadow-lg shadow-[#3b82f6]/30 transition-all hover:bg-[#2563eb] hover:shadow-xl hover:shadow-[#3b82f6]/40"
            >
              {primaryAction.label}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={secondaryAction.href}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#3b82f6] px-6 py-3.5 text-base text-[#3b82f6] transition-all hover:bg-[#3b82f6]/10"
            >
              {secondaryAction.label}
            </motion.a>
          </motion.div>
        </div>
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <motion.div
            variants={sectionVariants}
            className="relative overflow-hidden rounded-3xl border border-[#1f1f1f] bg-[#111111] shadow-2xl"
          >
            <img src={profileImg} alt={`Retrato de ${name}`} className="h-80 w-full object-cover object-center sm:h-96 lg:h-[28rem]" />
            {!!metrics.length && (
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-6 border-t border-[#3b82f6]/30 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 text-sm text-white backdrop-blur-sm">
                {metrics.map((metric) => (
                  <div key={metric.label} className="min-w-[120px] flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">{metric.label}</p>
                    <p className="mt-1 text-lg font-bold">{metric.value}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
          {!!spotlight.length && (
            <motion.div
              variants={sectionVariants}
              className="rounded-3xl border border-[#1f1f1f] bg-[#111111] p-6 shadow-inner lg:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#3b82f6]/80">Enfoque actual</p>
              <ul className="mt-5 space-y-3 text-sm text-[#d4d4d4]">
                {spotlight.map((item) => (
                  <motion.li key={item} className="flex gap-3" whileHover={{ x: 4 }}>
                    <span aria-hidden="true" className="mt-0.5 text-[#3b82f6]">
                      →
                    </span>
                    <span className="leading-relaxed">{item}</span>
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
