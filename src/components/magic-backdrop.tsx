export function MagicBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    </div>
  );
}
