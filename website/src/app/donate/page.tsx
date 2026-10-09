import { DONATE_PAGE } from "@/lib/content/donate";

export default function DonatePage() {
  return (
    <>
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl text-green-950">{DONATE_PAGE.heading}</h1>
          <p className="text-xl text-charcoal-light mt-4">{DONATE_PAGE.subheading}</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-cream p-8 rounded-lg border border-gray-200 text-center">
            <h2 className="font-heading text-2xl text-green-950">Donation Options Coming Soon</h2>
            <p className="text-lg text-charcoal-light mt-4 leading-relaxed">
              We are setting up secure donation processing. Your support will help us provide culturally responsive programs, education, and navigation services to mothers and families in Greater Boston — at no cost to them.
            </p>
            <p className="text-lg text-charcoal-light mt-4">
              In the meantime, if you would like to support our work, please reach out.
            </p>
            <a href="/contact" className="inline-flex items-center px-6 py-3 mt-6 rounded-lg bg-green-950 text-white font-medium hover:bg-green-800 transition-colors no-underline">
              Contact Us About Supporting the Foundation
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Tax-deductibility information will be provided once 501(c)(3) recognition is confirmed. [VERIFY]
          </p>
        </div>
      </section>
    </>
  );
}
