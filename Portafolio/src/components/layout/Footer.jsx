import { navigationItems } from '../../data/navigation';
import { socialLinks, contactContent } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="mt-16 rounded-3xl border border-[#1f1f1f] bg-[#0f0f0f] p-8 text-sm text-[#d4d4d4] sm:p-10 lg:p-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between lg:gap-12">
        <div>
          <p className="text-2xl font-bold text-white">
            CR<span className="text-[#3b82f6]">.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#d4d4d4]">{contactContent.availability}</p>
        </div>
        <nav>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#3b82f6]/80">Mapa</p>
          <ul className="mt-4 space-y-3">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-all hover:text-[#3b82f6] hover:translate-x-1 inline-block">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#3b82f6]/80">Redes</p>
          <ul className="mt-4 space-y-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-all hover:text-[#3b82f6] hover:translate-x-1 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#3b82f6]/80">Conecta</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/cesar-restrepo-9ba6b22a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#3b82f6] px-5 py-2.5 text-white transition-all hover:scale-105 hover:bg-[#3b82f6] hover:text-[#0f0f0f] hover:shadow-lg hover:shadow-[#3b82f6]/40"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Restt015/Jflowg.git"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#3b82f6] px-5 py-2.5 text-white transition-all hover:scale-105 hover:bg-[#3b82f6] hover:text-[#0f0f0f] hover:shadow-lg hover:shadow-[#3b82f6]/40"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-[#1f1f1f] pt-6">
        <p className="text-center text-xs text-[#d4d4d4]">Copyright © {new Date().getFullYear()} Cesar Restrepo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
