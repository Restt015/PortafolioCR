export default function ContactCard({ title, value, href }) {
  const Tag = href ? 'a' : 'div';

  return (
    <Tag
      href={href}
      className="flex-1 rounded-2xl border border-[#d4d4d4]/30 bg-[#111111] p-4 text-sm text-[#d4d4d4] shadow-sm transition hover:border-[#3b82f6] hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]"
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-[#d4d4d4]">{title}</p>
      <p className="mt-2 text-base font-semibold text-white">{value}</p>
    </Tag>
  );
}
