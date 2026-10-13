import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="relative isolate min-h-screen bg-ink text-text antialiased">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fill focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.16),_transparent_60%)]" />
      <Header />
      <main id="contenido" className="mx-auto max-w-5xl px-5 sm:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
