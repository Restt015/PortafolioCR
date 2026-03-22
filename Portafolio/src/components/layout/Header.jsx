import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '../../data/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);

  const externalGithub = 'https://github.com/Restt015';

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  };

  return (
    <header className="sticky top-4 z-50 rounded-3xl border border-[#ffffff10] bg-[#0d0d0d]/80 p-4 shadow-[0_15px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_80px_rgba(59,130,246,0.15)]">
      <div className="flex items-center justify-between gap-4 md:gap-8">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-2xl font-black tracking-tighter text-white transition-colors hover:text-[#3b82f6]">
            CR<span className="text-[#3b82f6]">.</span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#3b82f6]/50 bg-[#3b82f6]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#60a5fa] transition-all hover:scale-105 hover:bg-[#3b82f6]/20 hover:text-[#93c5fd] md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
        
        <nav className="hidden flex-1 md:flex md:items-center md:justify-end gap-6">
          <ul className="flex items-center gap-5 text-sm font-semibold text-[#a3a3a3]">
            {navigationItems.map((item) => (
              <li key={item.id}>
                {item.id === 'projects' ? (
                  <Link
                    to="/projects"
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={`/#${item.id}`}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-3 pl-6 border-l border-[#ffffff1a]">
            <a
              href="https://www.linkedin.com/in/cesar-restrepo-9ba6b22a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/50 bg-[#3b82f6]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#60a5fa] backdrop-blur-sm transition-all hover:bg-[#3b82f6]/20 hover:border-[#3b82f6] hover:text-[#93c5fd] hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href={externalGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ffffff1a] bg-[#111111] text-[#a3a3a3] transition-all hover:scale-105 hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 hover:text-[#60a5fa]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.86 10.927c.575.1.785-.25.785-.556 0-.275-.01-1.003-.016-1.968-3.2.695-3.878-1.543-3.878-1.543-.523-1.328-1.276-1.683-1.276-1.683-1.043-.713.08-.699.08-.699 1.154.082 1.762 1.185 1.762 1.185 1.027 1.76 2.695 1.252 3.353.957.105-.744.402-1.253.732-1.541-2.553-.291-5.236-1.277-5.236-5.682 0-1.255.448-2.282 1.183-3.086-.118-.29-.513-1.464.111-3.053 0 0 .965-.309 3.162 1.178a10.86 10.86 0 0 1 5.758 0c2.197-1.487 3.161-1.178 3.161-1.178.625 1.589.23 2.763.113 3.053.737.804 1.182 1.831 1.182 3.086 0 4.417-2.688 5.387-5.254 5.673.413.355.78 1.053.78 2.124 0 1.533-.014 2.768-.014 3.144 0 .308.208.66.79.555A11.502 11.502 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="mt-4 rounded-[20px] border border-[#ffffff10] bg-[#111111]/95 backdrop-blur-xl p-5 shadow-2xl md:hidden"
          >
            <ul className="space-y-4 text-sm font-semibold text-[#a3a3a3]">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  {item.id === 'projects' ? (
                    <Link
                      to="/projects"
                      className="block hover:text-white transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={`/#${item.id}`}
                      className="block hover:text-white transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              
              <li className="pt-4 border-t border-[#ffffff10] flex gap-3">
                <a
                  href="https://www.linkedin.com/in/cesar-restrepo-9ba6b22a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full border border-[#3b82f6]/50 bg-[#3b82f6]/10 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-[#60a5fa] transition-all hover:bg-[#3b82f6]/20 hover:text-[#93c5fd]"
                >
                  LinkedIn
                </a>
                <a
                  href={externalGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ffffff1a] bg-[#1a1a1a] text-[#a3a3a3] transition-all hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 hover:text-[#60a5fa]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.86 10.927c.575.1.785-.25.785-.556 0-.275-.01-1.003-.016-1.968-3.2.695-3.878-1.543-3.878-1.543-.523-1.328-1.276-1.683-1.276-1.683-1.043-.713.08-.699.08-.699 1.154.082 1.762 1.185 1.762 1.185 1.027 1.76 2.695 1.252 3.353.957.105-.744.402-1.253.732-1.541-2.553-.291-5.236-1.277-5.236-5.682 0-1.255.448-2.282 1.183-3.086-.118-.29-.513-1.464.111-3.053 0 0 .965-.309 3.162 1.178a10.86 10.86 0 0 1 5.758 0c2.197-1.487 3.161-1.178 3.161-1.178.625 1.589.23 2.763.113 3.053.737.804 1.182 1.831 1.182 3.086 0 4.417-2.688 5.387-5.254 5.673.413.355.78 1.053.78 2.124 0 1.533-.014 2.768-.014 3.144 0 .308.208.66.79.555A11.502 11.502 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
