import ProjectList from '../components/ui/ProjectList';

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="border-t border-line py-16 sm:py-24">
      <h2 className="text-3xl text-white sm:text-4xl">Desarrollo web</h2>
      <p className="mt-4 max-w-[60ch] text-lg text-muted">
        Dos sitios para negocios de Panamá y dos proyectos de práctica, diseñados y programados por mí.
      </p>
      <div className="mt-12">
        <ProjectList />
      </div>
    </section>
  );
}
