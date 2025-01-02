export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-800 text-white text-center py-8">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="mt-2 text-lg">I'd love to hear from you!</p>
        </div>

        {/* Contact Form Section */}
        <div className="p-8 space-y-8">
          {/* Contact Info */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-gray-700">
              Feel free to reach out via the contact form below, or connect with
              me on social media.
            </p>
          </section>

          {/* Form */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree URL or backend endpoint
            method="POST"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Connect with Me</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/fahimcce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/fahimcce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                LinkedIn
              </a>
              <a
                href="https://fb.com/fahimcce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                Facebook
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
