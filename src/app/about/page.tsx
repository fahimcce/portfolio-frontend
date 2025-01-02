export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-800 text-white text-center py-8">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-2 text-lg">
            Full Stack Web Developer | Problem Solver | Tech Enthusiast
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Who I Am</h2>
            <p className="text-gray-700 leading-relaxed">
              Hello! My name is Forhadul Islam Fahim, and I’m a professional web
              developer with a passion for creating stunning, functional, and
              user-friendly websites. I’ve worked on numerous projects, ranging
              from personal portfolios to large-scale e-commerce platforms.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">My Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="list-disc list-inside text-gray-700">
                  <li>JavaScript ,TypeScript</li>
                  <li>C, C++</li>
                  <li>React </li>
                  <li>Redux</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>shadcdn</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Node js</li>
                  <li>Express</li>
                  <li>Mongo DB</li>
                  <li>Postgres</li>
                  <li>Version Control (Git)</li>
                  <li>API Integration</li>
                  <li>Responsive Web Design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">My Experience</h2>
            <p className="text-gray-700 leading-relaxed">
              3 years of hands-on experience with React , Redux, Next.js, and
              other modern web development tools. Proficient in JavaScript,
              TypeScript,
            </p>
          </section>

          {/* Hobbies */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Outside of Work</h2>
            <p className="text-gray-700 leading-relaxed">
              When I’m not coding, you’ll find me exploring new technologies,
              reading books on personal development, or enjoying time with my
              friends and family. I’m also a big fan of
              Travelling,reading,Gaming,Cricket.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
