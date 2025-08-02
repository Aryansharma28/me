import Navbar from "../components/navbar";
import HeroSection from "../components/home/intro";
import AboutFunction from "../components/about/who";
import Footer from "../components/footer";

export default function Home() {
  return (
  <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
  <div className="fixed top-0 left-0 right-0 z-50"><Navbar /></div>

  <div className="snap-start"><HeroSection /></div>
  <div className="snap-start min-h-screen"><AboutFunction /></div>
  <div className="snap-end"><Footer /></div> {/* This is the final "slide" */}
</div>
  );
}
