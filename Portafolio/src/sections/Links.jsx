import { motion } from 'framer-motion';

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cesar-restrepo-9ba6b22a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  { label: 'GitHub JFLOWG', href: 'https://github.com/Restt015/Jflowg.git' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function LinksSection() {
  return (
    <motion.section
      className="py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div
        variants={sectionVariants}
        className="rounded-[24px] border border-[#1f1f1f] bg-[#111111] p-6 shadow-sm"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4d4d4]">Conecta conmigo</p>
            <h3 className="text-2xl font-semibold text-white">Links Profesionales</h3>
            <p className="text-sm text-[#d4d4d4]">Accesos directos a mi LinkedIn y GitHub del proyecto JFLOWG.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6] px-4 py-2 text-white transition hover:bg-[#3b82f6] hover:text-[#0f0f0f]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
