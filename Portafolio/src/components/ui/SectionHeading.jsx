const alignmentMap = {
  left: 'items-start text-left',
  center: 'items-center text-center',
};

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = alignmentMap[align] ?? alignmentMap.left;

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#3b82f6]/80">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-[#d4d4d4] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
