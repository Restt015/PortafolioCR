import { Link } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import { socialLinks } from '../../data/profile';

export default function Header() {
  return (
    <header className="sticky top-4 z-50 rounded-3xl border border-softBlue/70 bg-white/80 p-4 shadow-lg backdrop-blur">
      <div className="flex flex-wrap items-center gap-4 md:gap-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-slate-900">
          CR<span className="text-sky-500">.</span>
        </Link>
        <nav className="flex-1">
          <ul className="flex flex-wrap gap-2 text-sm font-medium text-slate-600">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  className="inline-flex rounded-full px-3 py-1 transition hover:bg-softBlue hover:text-slate-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 md:flex">
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-500"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-700"
          >
            Galeria
          </Link>
        </div>
      </div>
    </header>
  );
}
