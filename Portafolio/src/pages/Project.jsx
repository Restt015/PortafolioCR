import { Link, useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import NotFound from './NotFound';
import { getProject, projects } from '../data/projects';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '../components/ui/Icons';
import usePageTitle from '../hooks/usePageTitle';

const galleryGrid = {
  desktop: 'grid gap-x-6 gap-y-10 md:grid-cols-2',
  small: 'grid gap-x-6 gap-y-10 sm:grid-cols-2',
  phone: 'grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4',
};

const shotSize = {
  desktop: { width: 1440, height: 900 },
  small: {},
  phone: { width: 720, height: 1561 },
};

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = getProject(projectId);
  usePageTitle(project?.title);

  if (!project) return <NotFound />;

  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  // Solo las capturas a 1440 px aguantan el ancho completo de la página
  const lead = project.format === 'desktop' ? project.gallery[0] : null;
  const shots = lead ? project.gallery.slice(1) : project.gallery;

  return (
    <Layout>
      <article className="py-12 sm:py-16">
        <Link to="/projects" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white">
          <ArrowLeft />
          Desarrollo web
        </Link>

        <h1 className="mt-4 text-4xl text-white sm:text-6xl">{project.title}</h1>
        <p className="mt-3 text-lg font-medium text-sky">
          {project.kind}
          {project.practice && <span className="text-muted"> · Proyecto de práctica</span>}
        </p>
        <p className="mt-5 max-w-[62ch] text-lg text-text">{project.summary}</p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.siteUrl && (
            <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {project.format === 'phone' ? 'Abrir la vista web' : 'Ver el sitio en vivo'}
              <ArrowUpRight />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${project.siteUrl ? 'btn-secondary' : 'btn-primary'}`}
            >
              Código en GitHub
              <ArrowUpRight />
            </a>
          )}
        </div>

        {lead && (
          <figure className="mt-12">
            <img
              src={lead.src}
              alt={`${project.title}. ${lead.caption}`}
              {...shotSize.desktop}
              className="h-auto w-full rounded-xl border border-line"
            />
            <figcaption className="mt-3 text-sm text-muted">{lead.caption}</figcaption>
          </figure>
        )}

        <div className="mt-16 grid gap-x-12 gap-y-10 border-t border-line pt-12 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl text-white">Lo que construí</h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-text marker:text-accent">
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-white">Tecnologías</h2>
            <p className="mt-5 text-text">{project.stack.join(', ')}.</p>
            <h2 className="mt-8 text-2xl text-white">Mi rol</h2>
            <p className="mt-5 text-text">Diseño y desarrollo completos.</p>
          </div>
        </div>

        <h2 className="mt-16 border-t border-line pt-12 text-2xl text-white">
          {project.format === 'phone' ? 'Recorrido por la app' : 'Recorrido por el sitio'}
        </h2>
        <div className={`mt-8 ${galleryGrid[project.format]}`}>
          {shots.map((shot) => (
            <figure key={shot.src}>
              <img
                src={shot.src}
                alt={`${project.title}. ${shot.caption}`}
                {...shotSize[project.format]}
                loading="lazy"
                className="h-auto w-full rounded-lg border border-line"
              />
              <figcaption className="mt-3 text-sm text-muted">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>

        <nav aria-label="Más proyectos" className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <Link to={`/projects/${next.id}`} className="text-link inline-flex min-h-[44px] items-center gap-2">
            Siguiente proyecto: {next.title}
            <ArrowRight />
          </Link>
          <Link to="/#contact" className="btn btn-secondary">
            Contacto
          </Link>
        </nav>
      </article>
    </Layout>
  );
}
