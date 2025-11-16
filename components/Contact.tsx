export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-8 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Let's Connect
        </h2>

        <p className="text-xl text-gray-600 mb-12">
          I'm always open to new opportunities and interesting conversations.
        </p>

        {/* Contact Methods */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:your.email@example.com"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Send Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
