export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "SQL",
    "Git",
    "UI/UX Design",
    "Python",
    "Django",
  ];

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate self-taught developer who's been coding for 2 years now. Web
              development started as a hobby and has become my true passion. While I don't have
              professional work experience yet, I'm committed to building beautiful, functional
              applications and continuously learning new technologies.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I love exploring new design trends, experimenting with modern web technologies, and
              challenging myself with creative projects. Each project I build helps me grow as a
              developer.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My focus is on combining technical knowledge with a user-centric design approach to
              create solutions that are both visually appealing and highly functional.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-gray-300 font-medium hover:border-gray-700 hover:text-gray-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Coding Experience</h4>
                <p className="text-gray-400">3 years of self-taught development</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Based In</h4>
                <p className="text-gray-400">Germany</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Open For</h4>
                <p className="text-gray-400">Learning opportunities & Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
