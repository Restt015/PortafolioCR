import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Tag from '../components/ui/Tag';
import { aboutContent } from '../data/profile';
import { skills } from '../data/skills';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function About() {
  return (
    <motion.section
      id="about"
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
        <SectionHeading eyebrow="Contexto" title={aboutContent.title} subtitle={aboutContent.description} />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {aboutContent.highlights.slice(0, 4).map((item) => (
              <motion.div
                key={item}
                className="rounded-2xl border border-[#3b82f6]/30 bg-[#0f0f0f] p-6 text-base leading-relaxed text-[#d4d4d4] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#3b82f6]/50 hover:bg-[#111111] hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {skills.map((group) => (
              <motion.div key={group.title} variants={sectionVariants}>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#3b82f6]/80">{group.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
