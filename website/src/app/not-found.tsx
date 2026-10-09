import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center max-w-lg">
        <h1 className="font-heading text-7xl text-green-950">404</h1>
        <p className="text-xl text-charcoal-light mt-4">
          This page could not be found.
        </p>
        <p className="text-lg opacity-70 text-charcoal-light mt-2">
          The link you followed may be broken, or the page may have moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 mt-8 rounded-lg bg-green-950 text-white font-medium hover:bg-green-800 transition-colors no-underline"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
