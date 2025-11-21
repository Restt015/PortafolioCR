export default function TimelineItem({ item }) {
  const { company, role, period, summary, results } = item;

  return (
    <article className="relative border-l border-[#d4d4d4]/30 pl-8 pb-6 last:pb-0">
      <span className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full border border-[#0f0f0f] bg-[#3b82f6] shadow-[0_0_20px_rgba(59,130,246,0.7)]" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-white">{company}</p>
          <span className="text-xs text-[#d4d4d4]">{period}</span>
        </div>
        <h3 className="text-xl font-semibold text-white">{role}</h3>
        <p className="text-sm text-[#d4d4d4]">{summary}</p>
        {!!results?.length && (
          <ul className="list-disc space-y-2 pl-5 text-sm text-[#d4d4d4]">
            {results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
