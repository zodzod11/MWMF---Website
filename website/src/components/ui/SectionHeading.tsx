export function SectionHeading({
  heading,
  subheading,
}: {
  heading: string;
  subheading?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="font-heading text-4xl text-green-950">
        {heading}
      </h2>
      {subheading && (
        <p className="text-lg opacity-80 text-charcoal-light mt-4">
          {subheading}
        </p>
      )}
    </div>
  );
}
