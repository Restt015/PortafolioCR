import { contactContent, links } from '../data/profile';
import { ArrowUpRight, Download } from '../components/ui/Icons';

export default function Contact() {
  const { email, phone, availability } = contactContent;

  return (
    <section id="contact" className="border-t border-line py-16 sm:py-24">
      <h2 className="text-3xl text-white sm:text-4xl">Contacto</h2>
      <p className="mt-4 max-w-[60ch] text-lg text-muted">{availability}</p>

      <a
        href={`mailto:${email}`}
        className="mt-8 inline-block break-all font-display text-2xl font-medium text-white underline decoration-accent underline-offset-8 transition-colors hover:text-sky sm:text-4xl"
      >
        {email}
      </a>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href={links.cv} download className="btn btn-primary">
          <Download />
          Descargar CV
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          LinkedIn
          <ArrowUpRight />
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          GitHub
          <ArrowUpRight />
        </a>
        <a href={`tel:${phone.replace(/\s+/g, '')}`} className="btn text-muted hover:text-white">
          {phone}
        </a>
      </div>
    </section>
  );
}
