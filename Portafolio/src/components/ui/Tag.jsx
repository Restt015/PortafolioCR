export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-softBlue bg-softBlue/40 px-3 py-1 text-xs font-medium text-slate-600">
      {children}
    </span>
  );
}
