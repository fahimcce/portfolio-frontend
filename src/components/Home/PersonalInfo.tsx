export default function PersonalInfoPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-900 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-600 text-white text-center py-8">
          <h1 className="text-4xl font-bold">Forhadul Islam Fahim</h1>
          <p className="mt-2 text-lg">Full Stack Web Developer | Programmer</p>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              Hello! I'm a passionate web developer with expertise in building
              modern, responsive, and user-friendly websites. I enjoy solving
              problems, learning new technologies, and turning ideas into
              reality.
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <h1>
              <>Bechelor of Science ,</>
              <br />
              <>Computer & Communication Enginnering</>
              <br />
              <>International Islamic University Chittagong</>
              <br />
              <strong>CGPA : 3.4 out of 4</strong>
            </h1>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-700">Feel free to reach out to me!</p>
            <ul className="mt-2 space-y-1">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:fahimcce@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  fahimcce@gmail.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong> +8801868174998
              </li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/fahimcce"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/fahimcce
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://linkedin.com/in/fahimcce"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/fahimcce
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
