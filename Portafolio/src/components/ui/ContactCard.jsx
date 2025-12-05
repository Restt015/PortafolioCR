export default function ContactCard({ title, value, href }) {
  const Tag = href ? 'a' : 'div';

  return (
    <Tag
      href={href}
      className="flex-1 rounded-2xl border border-[#d4d4d4]/20 bg-[#111111] p-6 text-sm text-[#d4d4d4] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#3b82f6] hover:bg-[#111111] hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)]"
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
    >
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#3b82f6]/70">{title}</p>
      <p className="mt-3 text-lg font-semibold text-white">{value}</p>
    </Tag>
  );
}
