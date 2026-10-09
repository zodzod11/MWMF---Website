import { CONTACT_PAGE } from "@/lib/content/contact";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl text-green-950">{CONTACT_PAGE.heading}</h1>
          <p className="text-xl text-charcoal-light mt-4">{CONTACT_PAGE.subheading}</p>
          <p className="text-lg text-charcoal-light mt-6">{CONTACT_PAGE.body}</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-2xl text-green-950 text-center">Send Us a Message</h2>
          <div className="mt-8">
            <ContactForm />
          </div>
          <div className="mt-8 p-4 bg-cream rounded-lg border border-gray-200 text-center">
            <p className="text-sm text-charcoal-light">
              You can also reach us at <a href="mailto:info@womenmaternalwellness.org" className="text-green-950 no-underline font-medium">info@womenmaternalwellness.org</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
