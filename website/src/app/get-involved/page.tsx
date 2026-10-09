import { GET_INVOLVED_PAGE } from "@/lib/content/get-involved";
import { InterestForm } from "@/components/forms/InterestForm";

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl text-green-950">{GET_INVOLVED_PAGE.heading}</h1>
          <p className="text-xl text-charcoal-light mt-4">{GET_INVOLVED_PAGE.subheading}</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-lg border border-gray-200">
              <h2 className="font-heading text-2xl text-green-950">Volunteer</h2>
              <p className="text-charcoal-light mt-4 leading-relaxed">
                {GET_INVOLVED_PAGE.volunteer}
              </p>
              <p className="text-sm text-gray-500 mt-4">
                <span className="font-medium">Next step:</span> Fill out the form on this page to express your interest.
              </p>
            </div>
            <div className="bg-cream p-8 rounded-lg border border-gray-200">
              <h2 className="font-heading text-2xl text-green-950">Partner With Us</h2>
              <p className="text-charcoal-light mt-4 leading-relaxed">
                {GET_INVOLVED_PAGE.partner}
              </p>
              <p className="text-sm text-gray-500 mt-4">
                <span className="font-medium">Next step:</span> Fill out the form on this page and we'll follow up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-2xl text-green-950 text-center">Express Your Interest</h2>
          <div className="mt-8">
            <InterestForm />
          </div>
        </div>
      </section>

      <section className="bg-green-950 py-16 text-center">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="font-heading text-3xl text-white">Support Our Mission</h2>
          <p className="opacity-80 text-white mt-4 text-lg">
            Every contribution helps us reach more mothers and families in Greater Boston.
          </p>
          <a
            href="/donate"
            className="inline-flex items-center px-6 py-3 mt-6 rounded-lg bg-white text-green-950 font-medium hover:bg-gray-100 transition-colors no-underline"
          >
            Learn About Giving
          </a>
        </div>
      </section>
    </>
  );
}
