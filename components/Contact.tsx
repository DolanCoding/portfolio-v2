"use client";
import "@fortawesome/fontawesome-free/css/all.css";
export default function Contact() {
  const contactLinks = [
    { label: "Email", href: "mailto:sascha.coding2406@gmail.com", icon: "fas fa-envelope" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sascha-fischer-657900356/",
      icon: "fab fa-linkedin",
    },
    { label: "GitHub", href: "https://github.com/DolanCoding", icon: "fab fa-github" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-400">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create
            something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col justify-center items-center text-center space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have a project idea, a job opportunity, or just want to say hi, feel
                free to reach out. I'm always interested in connecting with fellow creators and
                developers.
              </p>
            </div>

            <div className="flex gap-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-gray-400 hover:text-gray-200 transition font-medium group"
                >
                  <i className={`${link.icon} text-2xl`}></i>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-400">Response time: Usually within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
