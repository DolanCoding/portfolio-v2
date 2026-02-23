export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Fullstack Engineer",
      issuer: "Codecademy",
      date: "2024",
      credential: "/Fullstack-Certificate.pdf",
    },
    {
      id: 2,
      title: "Meta Full Stack Developer: Front-End & Back-End from Scratch",
      issuer: "Coursera",
      date: "2026",
      credential: "/Coursera BS126HF6RL1V.pdf",
    },
    {
      id: 3,
      title: "Full Stack Open",
      issuer: "University of Helsinki",
      date: "2025",
      credential: "/certificate-fullstack.png",
    },
  ];

  return (
    <section id="certificates" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">Certificates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-300 transition">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.date}</p>
                </div>
                <a
                  href={cert.credential}
                  target={cert.credential !== "#" ? "_blank" : undefined}
                  rel={cert.credential !== "#" ? "noopener noreferrer" : undefined}
                  className="text-gray-400 hover:text-white transition text-sm font-medium whitespace-nowrap"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
