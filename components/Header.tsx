'use client';
import { FaLinkedin, FaInstagram, FaXTwitter, FaGithub, FaEnvelope } from "react-icons/fa6";
import { HiMoon, HiSun } from "react-icons/hi2";
import { TbFileCv } from "react-icons/tb";
import { useTheme } from '@/components/ThemeProvider';

export default function Header() {

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="pt-6 sm:pt-8 px-4 bg-white dark:bg-zinc-900">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-light text-black dark:text-gray-100">
            Andrei Beliaev
          </h1>
        </div>

        <nav className="flex gap-3 sm:gap-6 items-center flex-wrap">
          <a href="https://www.linkedin.com/in/andreibeliaev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/_siyayu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            <FaInstagram />
          </a>
          <a href="mailto:andrewbelyaev2164@gmail.com"
            className="text-black dark:text-white text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            <FaEnvelope />
          </a>
          <a href="https://x.com/anbeli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            <FaXTwitter />
          </a>
          <a href="https://github.com/andreibeliaev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            <FaGithub />
          </a>
          <a href="/Andrei%20Beliaev%20resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            <TbFileCv />
          </a>
          <button
            onClick={toggleTheme}
            className="hover:scale-110 transition-transform inline-flex items-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <HiMoon className="h-4 w-4 text-gray-300" />
            ) : (
              <HiSun className="h-4 w-4 text-amber-500" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}