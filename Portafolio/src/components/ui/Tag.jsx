export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#3b82f6]/60 bg-[#111111] px-3.5 py-1.5 text-xs font-semibold text-[#d4d4d4] transition-all duration-200 hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 hover:text-white">
      {children}
    </span>
  );
}
