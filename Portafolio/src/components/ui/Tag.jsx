export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#3b82f6] bg-[#111111] px-3 py-1 text-xs font-medium text-[#d4d4d4]">
      {children}
    </span>
  );
}
