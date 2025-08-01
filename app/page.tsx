import Navbar from "../components/navbar";
import ImageTile from "../components/home/rotating_cards";
import SplitText from "../components/home/intro";
import HeroText from "../components/home/intro";
import HeroSection from "../components/home/intro";

export default function Home() {
  const cards = [
    {
      image: "/images/30eFvABC.jpg",
      caption: "🎓 Graduated cum laude — VU Amsterdam, 2025",
    },
    {
      image: "/images/20250305_125656.jpg",
      caption: "🌍 2 years in NL — one hell of a journey so far",
    },
    {
      image: "/images/20250305_131731.jpg",
      caption: "",
    },
    {
      image: "/images/20250307_185323.jpg",
      caption: "",
    },
    {
      image: "/images/20250308_152115.jpg",
      caption: "",
    },
    {
      image: "/images/20250308_234236.jpg",
      caption: "",
    },
  ];

  return (
    <>
      <Navbar />

      <HeroSection />
    </>
  );
}
