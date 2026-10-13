import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ArrowRight } from './Icons';

function Cover({ project }) {
  if (project.format === 'phone') {
    return (
      <div className="flex aspect-[16/10] justify-center gap-4 overflow-hidden rounded-xl border border-line bg-surface px-6 pt-6">
        {project.cover.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            width={720}
            height={1561}
            loading="lazy"
            className="h-[150%] w-auto rounded-t-lg border border-line"
          />
        ))}
      </div>
    );
  }

  return (
    <img
      src={project.cover[0]}
      alt=""
      loading="lazy"
      className="aspect-[16/10] w-full rounded-xl border border-line object-cover object-top"
    />
  );
}

export default function ProjectList() {
  return (
    <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.id}>
          <Link to={`/projects/${project.id}`} className="group block">
            <Cover project={project} />
            <h3 className="mt-5 text-2xl text-white">{project.title}</h3>
          </Link>
          <p className="mt-1 text-sm font-medium text-sky">
            {project.kind}
            {project.practice && <span className="text-muted"> · Proyecto de práctica</span>}
          </p>
          <p className="mt-3 max-w-[52ch] text-muted">{project.description}</p>
          <Link to={`/projects/${project.id}`} className="text-link mt-3 inline-flex min-h-[44px] items-center gap-2">
            Ver {project.title}
            <ArrowRight />
          </Link>
        </li>
      ))}
    </ul>
  );
}
