import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { experience } from '../data/experience';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Experience() {
  const items = experience.slice(0, 3);

  return (
    <motion.section
      id="experience"
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
          eyebrow="Experiencia"
          title="Trayectoria y stack"
          subtitle="QA y desarrollo con foco en productos digitales."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              className="group rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-6 text-sm text-[#d4d4d4] shadow-sm transition-all duration-300 hover:scale-[1.03] hover:border-[#3b82f6]/50 hover:bg-[#111111] hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)]"
              whileHover={{ y: -6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#3b82f6]/70">{item.period}</p>
              <p className="mt-2 text-lg font-bold text-white">{item.role}</p>
              <p className="mt-1 text-sm text-[#d4d4d4]">{item.company}</p>
              <p className="mt-4 line-clamp-3 leading-relaxed">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
