export default function Footer() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="pt-8 pb-6 px-4 bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Made with <span className="text-red-600 dark:text-red-500" style={{ fontFamily: 'Inter, sans-serif' }}>♥</span>
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Last updated {lastUpdated}
        </p>
      </div>
    </footer>
  );
}
