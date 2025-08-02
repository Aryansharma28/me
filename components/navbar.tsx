import { FaGithub, FaLinkedin, FaInstagram,FaHome } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className="fixed z-50 justify-center items-center flex">
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-4 w-fit justify-center mx-auto pointer-events-none">
      <div className="pointer-events-auto">
      <ul className="flex justify-center space-x-6 list-none mt-2">
        <li><a href="/" className="text-2xl"><FaHome size={24} /></a></li>
        <li><a href="https://www.linkedin.com/in/aryansharma12282002/"><FaLinkedin size={24} /></a></li>
        <li><a href="https://github.com/Aryansharma28"><FaGithub size={24} /></a></li>
        <li><a href="https://www.instagram.com/lifeofaryansharma/"><FaInstagram size={24} /></a></li>
        <li><a href="https://calendly.com/aryansharma2k2/aryan-x-15-mins" className="btn">Contact</a></li>
      </ul>
      </div>
    </nav>
    </div>
  );
}