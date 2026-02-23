import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hey, I'm <span className="text-gray-300">Sascha Fischer</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-400 mb-8 leading-relaxed">
              A creative developer building beautiful, responsive web experiences. I specialize in
              React, TypeScript, and modern design systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition font-semibold text-center sm:text-left"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition font-semibold text-center sm:text-left"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gray-900 border-2 border-gray-800 overflow-hidden">
              <Image
                src="/profile.png"
                alt="Sascha Fischer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
