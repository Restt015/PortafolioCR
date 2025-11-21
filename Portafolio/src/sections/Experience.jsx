import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import TimelineItem from '../components/ui/TimelineItem';
import { experience } from '../data/experience';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
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
          eyebrow="Experiencia"
          title="Trayectoria profesional"
          subtitle="Los retos que mas han marcado mi forma de trabajar."
        />

        <div className="mt-10 space-y-8">
          {experience.map((item) => (
            <TimelineItem key={`${item.company}-${item.period}`} item={item} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
