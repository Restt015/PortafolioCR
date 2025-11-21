import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import ContactCard from '../components/ui/ContactCard';
import { contactContent, socialLinks } from '../data/profile';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Contact() {
  const contactItems = [
    { title: 'Email', value: contactContent.email, href: `mailto:${contactContent.email}` },
    { title: 'Telefono', value: contactContent.phone, href: `tel:${contactContent.phone.replace(/\s+/g, '')}` },
    { title: 'Ubicacion', value: contactContent.location },
  ];

  return (
    <motion.section
      id="contact"
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
          eyebrow="Contacto"
          title="Listo para colaborar"
          subtitle={contactContent.availability}
          align="center"
        />

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {contactItems.slice(0, 2).map((item) => (
            <ContactCard key={item.title} {...item} />
          ))}
          <ContactCard title="Perfil" value="LinkedIn" href={socialLinks.find((l) => l.label === 'LinkedIn')?.href} />
        </div>

        <motion.div variants={sectionVariants} className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
          <motion.a
            href="https://github.com/showtunez"
            className="rounded-full bg-[#3b82f6] px-4 py-2 text-white transition hover:bg-[#2563eb]"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href={`mailto:${contactContent.email}`}
            className="rounded-full border border-[#3b82f6] px-4 py-2 text-[#3b82f6] transition hover:bg-[#0f0f0f]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Enviar correo
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
