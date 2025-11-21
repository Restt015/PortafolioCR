export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-softGray via-white to-softBlue text-slate-900 antialiased">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-x-0 top-[-10%] -z-10 h-[500px] bg-[radial-gradient(circle_at_top,_rgba(220,238,255,0.85),_transparent_60%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[420px] bg-[radial-gradient(circle_at_right,_rgba(234,234,234,0.8),_transparent_55%)] blur-3xl" />
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 lg:px-0">{children}</div>
      </div>
    </div>
  );
}
