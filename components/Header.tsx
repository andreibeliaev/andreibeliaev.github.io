"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";
import { SunMoon } from "lucide-react";

export default function Header() {
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  const themeLabel = !mounted || theme === "system"
    ? "System"
    : theme === "light" ? "Light" : "Dark";
  const nextTheme = themeLabel === "System" ? "light" : themeLabel === "Light" ? "dark" : "system";

  return (
    <header className="site-width flex items-center justify-between gap-4 pt-10 sm:pt-14">
      <h1 className="text-[2.125rem] font-semibold leading-snug">Andrei Beliaev</h1>
        <button
          type="button"
          onClick={toggleTheme}
          disabled={!mounted}
          className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center"
          aria-label={"Color theme: " + themeLabel.toLowerCase() + ". Switch to " + nextTheme + " theme"}
          title={themeLabel + " theme"}
        >
          {themeLabel === "Light" ? (
            <HiSun className="h-5 w-5 text-amber-500" aria-hidden="true" />
          ) : themeLabel === "Dark" ? (
            <HiMoon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <SunMoon className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
    </header>
  );
}
