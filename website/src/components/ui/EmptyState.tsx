export function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center p-8 bg-white rounded-lg border border-gray-200">
      <p className="text-lg text-charcoal-light font-medium">{message}</p>
    </div>
  );
}
