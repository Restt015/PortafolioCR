import { navigationItems } from '../../data/navigation';
import { socialLinks, contactContent } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="mt-14 rounded-3xl border border-[#1f1f1f] bg-[#0f0f0f] p-8 text-sm text-[#d4d4d4]">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">
            CR<span className="text-[#3b82f6]">.</span>
          </p>
          <p className="mt-2 max-w-sm text-xs text-[#d4d4d4]">{contactContent.availability}</p>
        </div>
        <nav>
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4d4d4]">Mapa</p>
          <ul className="mt-3 space-y-2">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition hover:text-[#3b82f6]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4d4d4]">Redes</p>
          <ul className="mt-3 space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition hover:text-[#3b82f6]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4d4d4]">Conecta</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/cesar-restrepo-9ba6b22a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6] px-4 py-2 text-white transition hover:bg-[#3b82f6] hover:text-[#0f0f0f]"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Restt015/Jflowg.git"
              className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6] px-4 py-2 text-white transition hover:bg-[#3b82f6] hover:text-[#0f0f0f]"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <p className="mt-6 text-xs text-[#d4d4d4]">Copyright {new Date().getFullYear()} Todos los derechos reservados.</p>
    </footer>
  );
}
