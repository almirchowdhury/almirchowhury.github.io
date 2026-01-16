export function Container({ children, className = '' }) {
  return (
    <div className={`max-w-6xl mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
