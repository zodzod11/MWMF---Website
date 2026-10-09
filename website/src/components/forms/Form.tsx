"use client";

export type FormState = "idle" | "loading" | "success" | "error";

export function Form({
  action,
  children,
  state,
  message,
}: {
  action: string;
  children: React.ReactNode;
  state: FormState;
  message?: string;
}) {
  return (
    <form
      method="POST"
      action={action}
      noValidate
      className="space-y-0"
    >
      {/* Honeypot — hidden from real users */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input name="_hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {children}

      {state === "success" && (
        <div className="p-4 bg-green-600 opacity-10 border border-green-950 rounded-lg text-green-950 mt-4">
          {message || "Thank you! We'll be in touch."}
        </div>
      )}

      {state === "error" && (
        <div className="p-4 bg-terracotta opacity-10 border border-terracotta rounded-lg text-terracotta mt-4">
          {message || "Something went wrong. Please try again."}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full py-3 px-6 rounded-lg bg-green-950 text-white font-medium hover:bg-green-800 disabled transition-colors"
      >
        {state === "loading" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
