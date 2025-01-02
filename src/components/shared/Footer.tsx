export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">About Me</h2>
            <p className="text-gray-400">
              I’m a passionate web developer specializing in creating modern and
              responsive websites. Let’s build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className=" mx-auto">
            <h2 className="text-lg font-bold mb-4">Follow Me</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.87 8.167 6.839 9.489.5.091.682-.217.682-.483 0-.238-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.532 1.031 1.532 1.031.892 1.528 2.341 1.087 2.91.831.091-.647.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025a9.56 9.56 0 012.5-.336 9.54 9.54 0 012.5.336c1.91-1.294 2.75-1.025 2.75-1.025.545 1.378.202 2.397.099 2.65.64.7 1.029 1.592 1.029 2.683 0 3.841-2.337 4.687-4.565 4.935.36.31.68.921.68 1.857 0 1.34-.012 2.42-.012 2.747 0 .268.18.578.688.481C19.13 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.381-.021-3.157-1.921-3.157-1.922 0-2.218 1.5-2.218 3.054v5.603h-3v-10h2.881v1.367h.041c.401-.757 1.379-1.555 2.841-1.555 3.041 0 3.6 2.001 3.6 4.604v5.584z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M24 4.557c-.883.392-1.833.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.723 0-4.93 2.207-4.93 4.93 0 .386.044.762.128 1.124-4.097-.205-7.73-2.169-10.162-5.155-.425.729-.667 1.574-.667 2.476 0 1.708.87 3.213 2.188 4.098-.807-.026-1.566-.248-2.23-.616v.062c0 2.388 1.699 4.384 3.953 4.834-.414.113-.851.174-1.299.174-.318 0-.627-.03-.928-.088.628 1.957 2.448 3.379 4.604 3.419-1.686 1.321-3.808 2.108-6.115 2.108-.397 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.211 7.548 2.211 9.056 0 14-7.507 14-14 0-.213-.004-.426-.014-.637.961-.695 1.796-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Forhadul Islam Fahim. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
