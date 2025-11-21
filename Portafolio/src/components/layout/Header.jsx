import { Link } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import { socialLinks } from '../../data/profile';

export default function Header() {
  return (
    <header className="sticky top-4 z-50 rounded-3xl border border-[#1f1f1f] bg-[#0f0f0f]/90 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur">
      <div className="flex flex-wrap items-center gap-4 md:gap-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-white">
          CR<span className="text-[#3b82f6]">.</span>
        </Link>
        <nav className="flex-1">
          <ul className="flex flex-wrap gap-2 text-sm font-medium text-[#d4d4d4]">
            {navigationItems.map((item) => (
              <li key={item.id}>
                {item.id === 'projects' ? (
                  <Link
                    to="/projects"
                    className="inline-flex rounded-full px-3 py-1 transition hover:text-[#3b82f6] hover:bg-[#111111]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={`/#${item.id}`}
                    className="inline-flex rounded-full px-3 py-1 transition hover:text-[#3b82f6] hover:bg-[#111111]"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4d4d4] md:flex">
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#3b82f6]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center rounded-full border border-[#d4d4d4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#3b82f6] hover:text-[#3b82f6]"
          >
            Proyectos
          </Link>
          <a
            href="https://github.com/Restt015/Jflowg.git"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#3b82f6] text-[#3b82f6] transition hover:bg-[#3b82f6] hover:text-[#0f0f0f]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.86 10.927c.575.1.785-.25.785-.556 0-.275-.01-1.003-.016-1.968-3.2.695-3.878-1.543-3.878-1.543-.523-1.328-1.276-1.683-1.276-1.683-1.043-.713.08-.699.08-.699 1.154.082 1.762 1.185 1.762 1.185 1.027 1.76 2.695 1.252 3.353.957.105-.744.402-1.253.732-1.541-2.553-.291-5.236-1.277-5.236-5.682 0-1.255.448-2.282 1.183-3.086-.118-.29-.513-1.464.111-3.053 0 0 .965-.309 3.162 1.178a10.86 10.86 0 0 1 5.758 0c2.197-1.487 3.161-1.178 3.161-1.178.625 1.589.23 2.763.113 3.053.737.804 1.182 1.831 1.182 3.086 0 4.417-2.688 5.387-5.254 5.673.413.355.78 1.053.78 2.124 0 1.533-.014 2.768-.014 3.144 0 .308.208.66.79.555A11.502 11.502 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
