import { navigationItems } from '../../data/navigation';
import { socialLinks, contactContent } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="mt-24 rounded-3xl border border-softGray bg-white/80 p-8 text-sm text-slate-500 shadow-inner">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-900">
            CR<span className="text-sky-500">.</span>
          </p>
          <p className="mt-2 max-w-sm text-xs text-slate-500">{contactContent.availability}</p>
        </div>
        <nav>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Mapa</p>
          <ul className="mt-3 space-y-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition hover:text-slate-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Redes</p>
          <ul className="mt-3 space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-slate-900" target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-xs text-slate-400">Copyright {new Date().getFullYear()} Todos los derechos reservados.</p>
    </footer>
  );
}
