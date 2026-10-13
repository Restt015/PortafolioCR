import { Link } from 'react-router-dom';
import { qaCases } from '../data/qaCases';
import { ArrowRight } from '../components/ui/Icons';

export default function QaWork() {
  return (
    <section id="qa" className="border-t border-line py-16 sm:py-24">
      <h2 className="text-3xl text-white sm:text-4xl">Experiencia en QA</h2>
      <p className="mt-4 max-w-[60ch] text-lg text-muted">
        Tres equipos y tres tipos de prueba: regresión de APIs en una aerolínea, carga y estrés en un banco, y pruebas
        funcionales en mi práctica profesional.
      </p>

      <ol className="mt-12 divide-y divide-line border-y border-line">
        {qaCases.map((item) => (
          <li key={item.id} className="grid gap-x-10 gap-y-3 py-8 md:grid-cols-[13rem_1fr]">
            <p className="font-mono text-sm whitespace-nowrap text-muted">{item.period}</p>
            <div>
              <h3 className="text-2xl text-white">{item.company}</h3>
              <p className="mt-1 font-medium text-sky">{item.role}</p>
              <p className="mt-4 max-w-[62ch] text-text">{item.summary}</p>
              <p className="mt-3 text-sm text-muted">
                <span className="sr-only">Herramientas: </span>
                {item.tools.join(' · ')}
              </p>
              <Link to={`/qa/${item.id}`} className="text-link mt-5 inline-flex min-h-[44px] items-center gap-2">
                Ver el caso: {item.title}
                <ArrowRight />
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
