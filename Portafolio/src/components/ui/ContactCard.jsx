export default function ContactCard({ title, value, href }) {
  const Tag = href ? 'a' : 'div';

  return (
    <Tag
      href={href}
      className="flex-1 rounded-2xl border border-softGray bg-white/90 p-4 text-sm text-slate-600 shadow-sm transition hover:border-softBlue hover:shadow-lg"
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{title}</p>
      <p className="mt-2 text-base font-semibold text-slate-900">{value}</p>
    </Tag>
  );
}
