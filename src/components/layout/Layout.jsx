import { Navigation } from './Navigation';
import { GlowingRings } from '../animations/GlowingRings';

export function Layout({ children, showRings = false }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navigation />

      {showRings && (
        <>
          <GlowingRings />
          <GlowingRings />
        </>
      )}

      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
