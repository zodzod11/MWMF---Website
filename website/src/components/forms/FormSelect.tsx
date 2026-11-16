export function FormSelect({
  label,
  name,
  required = false,
  options,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
  error?: string;
}) {
  const id = `field-${name}`;
  const hasError = !!error;
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-charcoal mb-1">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        aria-invalid={hasError ? "true" : undefined}
        aria-describedby={hasError ? `error-${name}` : undefined}
        className={`w-full px-3 py-2 rounded-lg border ${error ? "border-terracotta" : "border-gray-200"} bg-white text-charcoal`}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`error-${name}`} className="text-sm text-terracotta mt-1" role="alert">{error}</p>
      )}
    </div>
  );
}
