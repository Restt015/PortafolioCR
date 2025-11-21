import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tag from './Tag';

export default function ProjectCard({ project, layout = 'default', ctaTo }) {
  const { id, title, description, achievements = [], cover, technologies = [], repoUrl } = project;
  const stack = technologies.length ? technologies : project.stack || [];

  return (
    <motion.article
      layout
      className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#d4d4d4]/30 bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
      whileHover={{ translateY: -6, boxShadow: '0 20px 40px rgba(59,130,246,0.35)' }}
    >
      {cover && (
        <div className="h-48 w-full overflow-hidden">
          <motion.img
            src={cover}
            alt={title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-[#d4d4d4]">{description}</p>
        </div>
        {!!achievements.length && layout === 'default' && (
          <ul className="list-disc space-y-2 pl-5 text-sm text-[#d4d4d4]">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {!!stack.length && (
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-3 p-6 pt-0 text-sm font-medium">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#3b82f6] px-4 py-2 text-white transition hover:bg-[#3b82f6]/10"
          >
            GitHub
            <span aria-hidden="true">-&gt;</span>
          </a>
        )}
        <Link
          to={ctaTo || `/projects/${id}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-4 py-2 text-white transition hover:bg-[#2563eb]"
        >
          Ver mas
          <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </motion.article>
  );
}
