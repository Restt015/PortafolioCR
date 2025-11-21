export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white antialiased">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-x-0 top-[-20%] -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)]" />
        <div className="mx-auto max-w-5xl px-4 pb-14 pt-6 sm:px-6 lg:px-0">{children}</div>
      </div>
    </div>
  );
}
