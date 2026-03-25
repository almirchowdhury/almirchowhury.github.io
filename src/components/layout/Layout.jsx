import { Navigation } from './Navigation';

export function Layout({ children, showRings = false }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--surface)' }} />
        <div
          className="orb orb-slow -top-32 right-[-10%] h-[420px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgba(195, 106, 67, 0.25), transparent 65%)' }}
        />
        <div
          className="orb -bottom-40 left-[-10%] h-[520px] w-[520px]"
          style={{ background: 'radial-gradient(circle, rgba(26, 127, 141, 0.22), transparent 70%)' }}
        />
        {showRings && (
          <div
            className="orb orb-slow top-[10%] left-[20%] h-[280px] w-[280px]"
            style={{ background: 'radial-gradient(circle, rgba(217, 164, 65, 0.22), transparent 68%)' }}
          />
        )}
        <div className="absolute inset-0 bg-grid" />
      </div>

      <Navigation />

      <main className="relative z-10 pt-24 md:pt-28">
        {children}
      </main>
    </div>
  );
}
