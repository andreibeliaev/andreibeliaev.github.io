'use client';
import { FaLinkedin, FaInstagram, FaXTwitter, FaGithub, FaEnvelope } from "react-icons/fa6";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useTheme } from '@/components/ThemeProvider';
import { Switch } from '@/components/ui/switch';

export default function Header() {

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="pt-8 px-8 bg-white dark:bg-zinc-900">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-light text-black dark:text-gray-100">
            Andrei Beliaev
          </h1>
        </div>

        <nav className="flex gap-6 items-center">
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
          <a href="/andrei-beliaev-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white text-lg hover:scale-110 transition-transform inline-flex items-center"
            >
            cv
          </a>
          <div className="flex items-center gap-2">
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              aria-label="Toggle theme"
            />
            {theme === 'dark' ? (
              <HiMoon className="h-4 w-4 text-gray-300" />
            ) : (
              <HiSun className="h-4 w-4 text-amber-500" />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}