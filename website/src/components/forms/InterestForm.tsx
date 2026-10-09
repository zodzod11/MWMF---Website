"use client";

import { FormField } from "./FormField";
import { FormSelect } from "./FormSelect";

export function InterestForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const feedback = form.querySelector("#interest-feedback") as HTMLDivElement;
    const fieldErrors = form.querySelectorAll(".field-error");

    fieldErrors.forEach((el) => (el.textContent = ""));
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.ok) {
        feedback.className = "p-4 bg-green-600 opacity-10 border border-green-950 rounded-lg text-green-950 mt-4";
        feedback.textContent = "Thank you for your interest. We will be in touch soon.";
        form.reset();
      } else if (result.errors) {
        feedback.className = "";
        result.errors.forEach((err: { field: string; message: string }) => {
          const el = document.getElementById(`error-${err.field}`);
          if (el) el.textContent = err.message;
        });
        submitBtn.disabled = false;
        submitBtn.textContent = "Send";
      }
    } catch {
      feedback.className = "p-4 bg-terracotta opacity-10 border border-terracotta rounded-lg text-terracotta mt-4";
      feedback.textContent = "Something went wrong. Please try again.";
      submitBtn.disabled = false;
      submitBtn.textContent = "Send";
    }
  }

  return (
    <form
      method="POST"
      action="/api/interest"
      noValidate
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto"
    >
      <div style={{ display: "none" }} aria-hidden="true">
        <input name="_hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <FormField label="Full Name" name="name" required placeholder="Your name" />
      <FormField label="Email" name="email" type="email" required placeholder="email@example.com" />
      <FormField label="Phone (optional)" name="phone" type="tel" placeholder="(555) 555-5555" />
      <FormField label="Organization (optional)" name="organization" placeholder="Your organization" />

      <FormSelect
        label="I'm interested in..."
        name="interest"
        required
        options={[
          { value: "volunteer", label: "Volunteering" },
          { value: "partner", label: "Partnering my organization" },
          { value: "sponsor", label: "Sponsorship opportunities" },
          { value: "other", label: "Other" },
        ]}
      />

      <FormField label="Tell us more" name="message" type="textarea" required placeholder="What brings you to our foundation?" />

      <div id="interest-feedback" className="mb-4" />

      <button
        type="submit"
        className="w-full py-3 px-6 rounded-lg bg-green-950 text-white font-medium hover:bg-green-800 transition-colors"
      >
        Send
      </button>
    </form>
  );
}
