import { motion } from 'framer-motion';
import { heroContent } from '../data/profile';
import Tag from '../components/ui/Tag';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 } },
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
        className="relative flex flex-col gap-10 rounded-[40px] border border-[#ffffff08] bg-[#0d0d0d]/80 backdrop-blur-3xl p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)] sm:p-12 md:flex-row md:items-center lg:gap-16 xl:p-16"
      >
        <div className="flex-1 space-y-10 z-10">
          <motion.div variants={sectionVariants}>
            <Tag>{role}</Tag>
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1 variants={sectionVariants} className="text-4xl font-extrabold tracking-tight leading-[1.1] text-white sm:text-5xl lg:text-[4rem]">
              {name}
              <span className="mt-4 block text-3xl sm:text-4xl lg:text-[2.75rem] bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent pb-2">
                {punchline}
              </span>
            </motion.h1>
            <motion.p variants={sectionVariants} className="max-w-xl text-base leading-relaxed text-[#a3a3a3] sm:text-lg lg:text-xl font-light">
              {description}
            </motion.p>
          </div>
          
          <motion.div variants={sectionVariants} className="flex flex-wrap gap-5 text-sm font-semibold pt-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={primaryAction.href}
              className="inline-flex items-center justify-center min-w-[140px] gap-2 rounded-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-8 py-4 text-base text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)]"
            >
              {primaryAction.label}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={secondaryAction.href}
              className="inline-flex items-center justify-center min-w-[140px] gap-2 rounded-full border border-[#3b82f6]/50 bg-[#3b82f6]/5 px-8 py-4 text-base text-[#60a5fa] backdrop-blur-sm transition-all hover:bg-[#3b82f6]/10 hover:border-[#3b82f6] hover:text-[#93c5fd]"
            >
              {secondaryAction.label}
            </motion.a>
          </motion.div>
        </div>

        <div className="relative flex flex-1 flex-col justify-center gap-6 lg:gap-8 w-full max-w-lg mx-auto md:mx-0">
          {/* Subtle glowing orb behind cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#3b82f6]/20 rounded-full blur-[100px] z-0 pointer-events-none" />

          {!!metrics.length && (
            <motion.div
              variants={sectionVariants}
              whileHover={{ y: -5 }}
              className="group relative z-10 grid grid-cols-2 gap-y-8 gap-x-6 rounded-[28px] border border-[#ffffff10] bg-gradient-to-b from-[#1c1c1c]/90 to-[#111111]/90 backdrop-blur-xl p-8 shadow-2xl transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
            >
              {metrics.map((metric, index) => (
                <div key={metric.label} className={index === 2 ? 'col-span-2 pt-2 border-t border-[#ffffff0a] group-hover:border-[#3b82f6]/20 transition-colors' : ''}>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#60a5fa]/80 mb-2">{metric.label}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{metric.value}</p>
                </div>
              ))}
            </motion.div>
          )}
          
          {!!spotlight.length && (
            <motion.div
              variants={sectionVariants}
              whileHover={{ y: -5 }}
              className="relative z-10 rounded-[28px] border border-[#ffffff10] bg-gradient-to-b from-[#1c1c1c]/90 to-[#111111]/90 backdrop-blur-xl p-8 shadow-2xl transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#60a5fa]/80">Enfoque actual</p>
              </div>
              
              <ul className="space-y-4 text-sm sm:text-base text-[#a3a3a3]">
                {spotlight.map((item) => (
                  <motion.li key={item} className="flex gap-4 group" whileHover={{ x: 6 }}>
                    <span aria-hidden="true" className="mt-0.5 text-[#3b82f6] transition-transform group-hover:scale-125">
                      →
                    </span>
                    <span className="leading-relaxed font-light transition-colors group-hover:text-[#d4d4d4]">{item}</span>
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
