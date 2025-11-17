export default function Footer() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="pt-24 pb-6 px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs text-gray-400">
          Made with <span className="text-red-600">♥</span>
        </p>
        <p className="text-xs text-gray-400">
          Last updated {lastUpdated}
        </p>
      </div>
    </footer>
  );
}
