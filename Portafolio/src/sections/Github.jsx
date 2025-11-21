import { motion } from 'framer-motion';

const githubUser = 'Restt015';

export default function GithubSection() {
  return (
    <motion.section
      id="github"
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="rounded-[32px] border border-softGray bg-gradient-to-r from-softBlue/40 via-white to-softGray/40 p-8 shadow-inner">
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.div
            className="flex h-20 w-20 items-center justify-center rounded-full border border-softBlue bg-white shadow-lg"
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 6 }}
          >
            <svg
              className="h-10 w-10 text-slate-900"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.86 10.927c.575.1.785-.25.785-.556 0-.275-.01-1.003-.016-1.968-3.2.695-3.878-1.543-3.878-1.543-.523-1.328-1.276-1.683-1.276-1.683-1.043-.713.08-.699.08-.699 1.154.082 1.762 1.185 1.762 1.185 1.027 1.76 2.695 1.252 3.353.957.105-.744.402-1.253.732-1.541-2.553-.291-5.236-1.277-5.236-5.682 0-1.255.448-2.282 1.183-3.086-.118-.29-.513-1.464.111-3.053 0 0 .965-.309 3.162 1.178a10.86 10.86 0 0 1 5.758 0c2.197-1.487 3.161-1.178 3.161-1.178.625 1.589.23 2.763.113 3.053.737.804 1.182 1.831 1.182 3.086 0 4.417-2.688 5.387-5.254 5.673.413.355.78 1.053.78 2.124 0 1.533-.014 2.768-.014 3.144 0 .308.208.66.79.555A11.502 11.502 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
            </svg>
          </motion.div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-slate-900">GitHub</h3>
            <p className="text-sm text-slate-600">
              Revisa commits, experimentos y proyectos en vivo directamente en mi perfil.
            </p>
          </div>
          <motion.a
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            @{githubUser}
            <span aria-hidden="true">-&gt;</span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
