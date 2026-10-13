import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { navigationItems } from '../../data/navigation';
import { links } from '../../data/profile';
import { Download } from '../ui/Icons';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-white">
          Cesar Restrepo
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link to={`/#${item.id}`} className="py-2 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={links.cv} download className="btn btn-secondary">
            <Download />
            Descargar CV
          </a>
        </nav>

        <button
          type="button"
          className="btn btn-secondary md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Principal" className="border-t border-line px-5 pb-5 md:hidden">
          <ul className="divide-y divide-line text-base font-medium">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  className="flex min-h-[48px] items-center text-text"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={links.cv} download className="btn btn-primary mt-4 w-full">
            <Download />
            Descargar CV
          </a>
        </nav>
      )}
    </header>
  );
}
