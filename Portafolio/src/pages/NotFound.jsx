import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Página no encontrada');

  return (
    <Layout>
      <section className="py-24 sm:py-32">
        <p className="font-mono text-sm text-muted">Error 404</p>
        <h1 className="mt-3 text-4xl text-white sm:text-6xl">Esta página no existe</h1>
        <p className="mt-5 max-w-[52ch] text-lg text-muted">
          La dirección puede estar mal escrita o la página cambió de lugar. Desde el inicio se llega a todo.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn btn-primary">
            Ir al inicio
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            Ver proyectos
          </Link>
        </div>
      </section>
    </Layout>
  );
}
