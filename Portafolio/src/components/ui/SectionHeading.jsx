const alignmentMap = {
  left: 'items-start text-left',
  center: 'items-center text-center',
};

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = alignmentMap[align] ?? alignmentMap.left;

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">{title}</h2>
      {subtitle && <p className="max-w-2xl text-slate-600 text-base">{subtitle}</p>}
    </div>
  );
}
