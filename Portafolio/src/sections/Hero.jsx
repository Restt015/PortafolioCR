import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SplitText from '../components/reactbits/SplitText';
import { heroContent, links } from '../data/profile';
import { ArrowRight, Download } from '../components/ui/Icons';

const titleClass = 'font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl';

function HeroTitle({ text }) {
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [ready, setReady] = useState(false);

  // SplitText espera a las fuentes; se muestra el título cuando ya puede animarlo
  useEffect(() => {
    let frame;
    document.fonts.ready.then(() => {
      frame = requestAnimationFrame(() => setReady(true));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (reduced) return <h1 className={titleClass}>{text}</h1>;

  return (
    <div style={{ opacity: ready ? 1 : 0 }}>
      <SplitText
        tag="h1"
        text={text}
        className={`${titleClass} pb-2`}
        splitType="chars"
        delay={35}
        duration={0.9}
        ease="expo.out"
        from={{ opacity: 0, y: 36 }}
        to={{ opacity: 1, y: 0 }}
        rootMargin="0px"
        textAlign="left"
      />
    </div>
  );
}

export default function Hero() {
  const { name, role, description, facts } = heroContent;

  return (
    <section id="hero" className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
      <div>
        <HeroTitle text={name} />
        <p className="mt-4 font-display text-2xl font-medium tracking-tight text-sky sm:text-3xl">{role}</p>
        <p className="mt-6 max-w-[52ch] text-lg text-muted">{description}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/#qa" className="btn btn-primary">
            Ver mi trabajo en QA
            <ArrowRight />
          </Link>
          <Link to="/#projects" className="btn btn-secondary">
            Ver sitios web
          </Link>
          <a href={links.cv} download className="btn text-sky hover:text-white">
            <Download />
            CV en PDF
          </a>
        </div>
      </div>

      <dl className="divide-y divide-line border-y border-line text-sm">
        {facts.map((fact) => (
          <div key={fact.label} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3.5">
            <dt className="text-muted">{fact.label}</dt>
            <dd className="text-text">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
