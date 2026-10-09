import { ABOUT_HERO, STORY_SECTION, VALUES, FOUNDER_BIO } from "@/lib/content/about";
import { MISSION_VISION } from "@/lib/content/about";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl text-green-950">{ABOUT_HERO.heading}</h1>
          <p className="text-xl text-charcoal-light mt-4">{ABOUT_HERO.subheading}</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-green-950">{STORY_SECTION.heading}</h2>
          <div className="mt-6 space-y-4 text-lg text-charcoal-light leading-relaxed">
            {STORY_SECTION.body.split("\n\n").map((p) => (
              <p key={p.slice(0, 20)}>{p.trim()}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="font-heading text-2xl text-green-950">Our Mission</h2>
            <p className="text-lg text-charcoal-light mt-4 leading-relaxed">{MISSION_VISION.mission}</p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="font-heading text-2xl text-green-950">Our Vision</h2>
            <p className="text-lg text-charcoal-light mt-4 leading-relaxed">{MISSION_VISION.vision}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-green-950 text-center">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-cream p-6 rounded-lg border border-gray-200">
                <h3 className="font-heading text-xl font-medium text-green-950">{v.title}</h3>
                <p className="text-charcoal-light mt-2">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl text-green-950 text-center">Meet Our Founder</h2>
          <div className="mt-8 bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto md:mx-0" /* photo placeholder */ />
              <div>
                <h3 className="font-heading text-xl text-green-950">{FOUNDER_BIO.name}</h3>
                <p className="text-green-600 font-medium">{FOUNDER_BIO.credentials} — {FOUNDER_BIO.title}</p>
                <p className="text-charcoal-light mt-3 leading-relaxed">{FOUNDER_BIO.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
