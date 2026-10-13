import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProjectList from '../components/ui/ProjectList';
import { ArrowRight } from '../components/ui/Icons';
import usePageTitle from '../hooks/usePageTitle';

export default function ProjectsPage() {
  usePageTitle('Desarrollo web');

  return (
    <Layout>
      <section className="py-16 sm:py-24">
        <h1 className="text-4xl text-white sm:text-5xl">Desarrollo web</h1>
        <p className="mt-4 max-w-[60ch] text-lg text-muted">
          Dos sitios para negocios de Panamá y dos proyectos de práctica, diseñados y programados por mí.
        </p>
        <div className="mt-12">
          <ProjectList />
        </div>
        <Link to="/#qa" className="text-link mt-16 inline-flex min-h-[44px] items-center gap-2">
          Ver también mi experiencia en QA
          <ArrowRight />
        </Link>
      </section>
    </Layout>
  );
}
