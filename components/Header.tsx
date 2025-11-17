import { FaLinkedin, FaInstagram, FaXTwitter, FaGithub, FaEnvelope } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="pt-8 px-8 bg-white">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-light text-black">
            Andrei Beliaev
          </h1>
        </div>

        <nav className="flex gap-6 items-center">
          <a href="https://www.linkedin.com/in/andreibeliaev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/_siyayu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            <FaInstagram />
          </a>
          <a href="mailto:andrewbelyaev2164@gmail.com"
            className="text-black text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            <FaEnvelope />
          </a>
          <a href="https://x.com/anbeli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            <FaXTwitter />
          </a>
          <a href="https://github.com/andreibeliaev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            <FaGithub />
          </a>
          <a href="/Andrei%20Beliaev%20resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}