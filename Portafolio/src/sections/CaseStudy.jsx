import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Tag from '../components/ui/Tag';
import { ecommerceCaseStudy } from '../data/caseStudy';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function CaseStudy() {
  const { id, title, intro, sections, closing } = ecommerceCaseStudy;

  return (
    <motion.section
      id={id}
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div
        variants={sectionVariants}
        className="overflow-hidden rounded-[32px] border border-softGray bg-gradient-to-br from-white via-softBlue to-white p-10 shadow-xl"
      >
        <SectionHeading eyebrow="Proyecto destacado" title={title} subtitle={intro} />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {sections.map((section) => (
            <motion.article
              key={section.title}
              className="relative flex flex-col gap-5 rounded-3xl border border-softGray bg-white/90 p-6 shadow-sm"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-center gap-3">
                <Tag>{section.title}</Tag>
              </div>
              <p className="text-sm text-slate-700">{section.body}</p>
              {!!section.highlights?.length && (
                <ul className="space-y-3 text-sm text-slate-600">
                  {section.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-sky-500">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-softBlue to-transparent" />
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={sectionVariants}
          className="mt-12 rounded-3xl border border-softBlue bg-softBlue/40 p-6 text-sm text-slate-700"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Descripcion</p>
          <p className="mt-3 text-base text-slate-800">{closing}</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
