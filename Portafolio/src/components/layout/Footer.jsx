import { links } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Cesar Restrepo · Ciudad de Panamá</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              GitHub
            </a>
          </li>
          <li>
            <a href={links.cv} download className="transition-colors hover:text-white">
              CV en PDF
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
