export function Section({ children, className = '' }) {
  return (
    <section className={`py-12 md:py-16 space-y-8 md:space-y-12 ${className}`}>
      {children}
    </section>
  );
}
