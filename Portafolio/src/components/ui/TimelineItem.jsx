export default function TimelineItem({ item }) {
  const { company, role, period, summary, results } = item;

  return (
    <article className="relative border-l border-softBlue pl-8 pb-10 last:pb-0">
      <span className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full border border-white bg-softBlue shadow-[0_0_20px_rgba(220,238,255,0.9)]" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{company}</p>
          <span className="text-xs text-slate-400">{period}</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{role}</h3>
        <p className="text-sm text-slate-600">{summary}</p>
        {!!results?.length && (
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            {results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
