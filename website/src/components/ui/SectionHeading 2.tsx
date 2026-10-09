export function SectionHeading({
  heading,
  subheading,
  className,
}: {
  heading: string;
  subheading?: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className ?? ""}`.trim()}>
      <h2 className="font-heading text-4xl text-green-950 mb-2">
        {heading}
      </h2>
      {subheading && (
        <p className="text-lg text-charcoal-light/80 mt-0 mb-0">{subheading}</p>
      )}
    </div>
  );
}
