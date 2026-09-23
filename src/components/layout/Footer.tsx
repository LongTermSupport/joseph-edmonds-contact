/**
 * Footer - dark bar with the copyright line.
 */

// Hardcoded rather than computed from `new Date()`: this is a static SSG build,
// so a runtime value would mismatch between the prerendered HTML and the client.
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 border-t border-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <p className="text-xs text-gray-400 text-center sm:text-left m-0">
          &copy; {COPYRIGHT_YEAR} Joseph Edmonds. Shipley, West Yorkshire, UK.
        </p>
        <p className="text-xs text-gray-400 m-0">Built with TypeScript &amp; React</p>
      </div>
    </footer>
  );
}
