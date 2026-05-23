export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-matte">
      <div className="space-y-3 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-hazard border-t-transparent" />
        <p className="font-heading text-2xl uppercase tracking-wide text-chalk">Loading Site</p>
      </div>
    </div>
  );
}