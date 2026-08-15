'use client';
import { useSyncExternalStore } from 'react';
import { FaLinkedin, FaXTwitter, FaGithub, FaEnvelope } from "react-icons/fa6";
import { HiMoon, HiSun } from "react-icons/hi2";
import { TbFileCv } from "react-icons/tb";
import { SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );
  const { theme, setTheme } = useTheme();

  // Toggle cycle: system → light → dark → system
  const toggleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  return (
    <header className="pt-6 sm:pt-8 px-4 bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0">
        <div>
          <h1 className="text-3xl sm:text-3xl font-light text-black dark:text-gray-100">
            Andrei Beliaev
          </h1>
        </div>

        <nav className="flex gap-3 sm:gap-6 items-center flex-wrap">
          <a href="https://www.linkedin.com/in/andreibeliaev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="text-black dark:text-white text-xl hover:scale-120 transition-transform inline-flex items-center"
            >
            <FaLinkedin />
          </a>
          <a href="mailto:andrewbelyaev2164@gmail.com"
            aria-label="Email"
            title="Email"
            className="text-black dark:text-white text-xl hover:scale-120 transition-transform inline-flex items-center"
            >
            <FaEnvelope />
          </a>
          <a href="https://github.com/andreibeliaev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="text-black dark:text-white text-xl hover:scale-120 transition-transform inline-flex items-center"
            >
            <FaGithub />
          </a>
          <a href="https://x.com/anbeli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            title="X"
            className="text-black dark:text-white text-xl hover:scale-120 transition-transform inline-flex items-center"
            >
            <FaXTwitter />
          </a>
          <a href="/Andrei%20Beliaev%20resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            title="Resume"
            className="text-black dark:text-white text-xl hover:scale-120 transition-transform inline-flex items-center"
            >
            <TbFileCv />
          </a>
          <button
            onClick={toggleTheme}
            className={`ml-2 hover:scale-120 transition-all duration-500 inline-flex items-center h-5 w-5 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'System'}
          >
            {mounted && (
              theme === 'light' ? <HiSun className="h-5 w-5 text-amber-500" /> :
              theme === 'dark' ? <HiMoon className="h-4.5 w-4.5 text-white" /> :
              <SunMoon className="h-5 w-5 text-black dark:text-white" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
