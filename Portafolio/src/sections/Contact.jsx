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
          eyebrow="Contacto"
          title="Listo para colaborar"
          subtitle={contactContent.availability}
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactItems.map((item) => (
            <ContactCard key={item.title} {...item} />
          ))}
        </div>

        <motion.div
          variants={sectionVariants}
          className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-slate-600"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="rounded-full border border-softGray px-4 py-2 transition hover:border-softBlue hover:text-slate-900"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
