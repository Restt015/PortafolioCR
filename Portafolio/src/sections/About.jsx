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
        <SectionHeading eyebrow="Contexto" title={aboutContent.title} subtitle={aboutContent.description} />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            {aboutContent.highlights.slice(0, 2).map((item) => (
              <motion.div
                key={item}
                className="rounded-2xl border border-[#3b82f6]/40 bg-[#0f0f0f] p-4 text-sm text-[#d4d4d4]"
                whileHover={{ scale: 1.02 }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="space-y-5">
            {skills.map((group) => (
              <motion.div key={group.title} variants={sectionVariants}>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d4d4d4]">{group.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
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
