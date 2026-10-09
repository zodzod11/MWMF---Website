export function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
  error,
  value,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  value?: string;
}) {
  const id = `field-${name}`;
  const hasError = !!error;
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-charcoal mb-1">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          defaultValue={value}
          rows={4}
          className={`w-full px-3 py-2 rounded-lg border ${hasError ? "border-terracotta" : "border-gray-200"} bg-white text-charcoal`}
          aria-invalid={hasError ? "true" : undefined}
          aria-describedby={hasError ? `error-${name}` : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          defaultValue={value}
          className={`w-full px-3 py-2 rounded-lg border ${hasError ? "border-terracotta" : "border-gray-200"} bg-white text-charcoal`}
          aria-invalid={hasError ? "true" : undefined}
          aria-describedby={hasError ? `error-${name}` : undefined}
        />
      )}

      {hasError && (
        <p id={`error-${name}`} className="text-sm text-terracotta mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
