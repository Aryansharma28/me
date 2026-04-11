import Navbar from "../components/navbar";
import HeroSection from "../components/home/intro";
import About from "../components/about/who";
import Work from "../components/work";
import Projects from "../components/projects";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Work />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
