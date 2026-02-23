export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ShopHub - E-Commerce App",
      description:
        "A full-stack e-commerce application with React frontend featuring product catalog, shopping cart, and user authentication. Node.js/Express backend with PostgreSQL database, JWT authentication, and RESTful API.",
      image: "/E-Commerce.png",
      tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redux", "Tailwind CSS"],
      link: "https://github.com/DolanCoding/E-Commerce_App",
      github: "https://github.com/DolanCoding/E-Commerce_App",
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">Featured Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-300 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-700 text-gray-300 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="w-full px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded hover:bg-gray-700 transition text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
