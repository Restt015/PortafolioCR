import { Link, useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import NotFound from './NotFound';
import { getQaCase, qaCases } from '../data/qaCases';
import { ArrowLeft, ArrowRight } from '../components/ui/Icons';
import usePageTitle from '../hooks/usePageTitle';

export default function QaCasePage() {
  const { caseId } = useParams();
  const item = getQaCase(caseId);
  usePageTitle(item ? `${item.title} · ${item.company}` : undefined);

  if (!item) return <NotFound />;

  const next = qaCases[(qaCases.indexOf(item) + 1) % qaCases.length];
  const sheet = [
    { label: 'Empresa', value: item.company },
    { label: 'Rol', value: item.role },
    { label: 'Periodo', value: item.period },
    { label: 'Tipos de prueba', value: item.testTypes.join(', ') },
    { label: 'Herramientas', value: item.tools.join(', ') },
  ];

  return (
    <Layout>
      <article className="py-12 sm:py-16">
        <Link to="/#qa" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white">
          <ArrowLeft />
          Experiencia en QA
        </Link>

        <h1 className="mt-4 max-w-[18ch] text-4xl text-white sm:text-6xl">{item.title}</h1>
        <p className="mt-3 text-lg font-medium text-sky">
          {item.company} <span className="text-muted">· {item.role}</span>
        </p>
        <p className="mt-5 max-w-[62ch] text-lg text-text">{item.summary}</p>

        <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-[1fr_20rem]">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl text-white">Contexto</h2>
              <p className="mt-4 max-w-[62ch] text-text">{item.context}</p>
            </section>

            <section>
              <h2 className="text-2xl text-white">Qué probé</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-text marker:text-accent">
                {item.scope.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white">Cómo lo probé</h2>
              <ol className="mt-4 max-w-[62ch] list-decimal space-y-2 pl-5 text-text marker:font-mono marker:text-sm marker:text-muted">
                {item.approach.map((entry) => (
                  <li key={entry} className="pl-1">
                    {entry}
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl text-white">Resultado</h2>
              <p className="mt-4 max-w-[62ch] text-text">{item.outcome}</p>
            </section>
          </div>

          <aside className="lg:order-last">
            <dl className="divide-y divide-line border-y border-line text-sm">
              {sheet.map((row) => (
                <div key={row.label} className="grid grid-cols-[8rem_1fr] gap-4 py-3.5">
                  <dt className="text-muted">{row.label}</dt>
                  <dd className="text-text">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-muted">Esta página no incluye capturas ni datos del cliente.</p>
          </aside>
        </div>

        <nav aria-label="Más casos" className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <Link to={`/qa/${next.id}`} className="text-link inline-flex min-h-[44px] items-center gap-2">
            Siguiente caso: {next.title}
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
