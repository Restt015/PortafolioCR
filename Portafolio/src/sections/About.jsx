import { aboutContent } from '../data/profile';
import photo from '../assets/profile.jpeg';

export default function About() {
  const { paragraphs, skills, education } = aboutContent;

  return (
    <section id="about" className="border-t border-line py-16 sm:py-24">
      <h2 className="text-3xl text-white sm:text-4xl">Sobre mí</h2>

      <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start">
        <img
          src={photo}
          alt="Retrato de Cesar Restrepo"
          width={960}
          height={1280}
          loading="lazy"
          className="h-36 w-28 shrink-0 rounded-xl border border-line object-cover object-[50%_30%]"
        />
        <div className="max-w-[62ch] space-y-4 text-lg text-text">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg text-white">{group.title}</h3>
            <ul className="mt-3 space-y-1.5 text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="mt-14 text-lg text-white">Formación</h3>
      <ul className="mt-3 divide-y divide-line border-y border-line">
        {education.map((item) => (
          <li key={item.title} className="grid gap-x-10 gap-y-1 py-4 md:grid-cols-[13rem_1fr]">
            <p className="font-mono text-sm whitespace-nowrap text-muted">{item.period}</p>
            <p className="text-text">
              {item.title} <span className="text-muted">· {item.place}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
