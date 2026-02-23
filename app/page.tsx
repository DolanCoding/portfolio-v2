import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Certificates />
        <Projects />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
