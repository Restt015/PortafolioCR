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
      className="py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div
        variants={sectionVariants}
        className="rounded-[24px] border border-[#1f1f1f] bg-[#111111] p-7 shadow-sm"
      >
        <SectionHeading
          eyebrow="Experiencia"
          title="Trayectoria y stack"
          subtitle="QA y desarrollo con foco en productos digitales."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              className="rounded-2xl border border-[#1f1f1f] bg-[#0f0f0f] p-4 text-sm text-[#d4d4d4]"
              whileHover={{ y: -4 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#d4d4d4]">{item.period}</p>
              <p className="mt-1 text-base font-semibold text-white">{item.role}</p>
              <p className="text-xs text-[#d4d4d4]">{item.company}</p>
              <p className="mt-2 line-clamp-3">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
