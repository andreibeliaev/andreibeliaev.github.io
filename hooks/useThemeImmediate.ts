'use client';
import { useTheme } from 'next-themes';

/**
 * Wraps next-themes useTheme to provide an immediate resolved theme.
 *
 * Problem: next-themes' resolvedTheme is undefined during SSR/hydration.
 * Solution: Read the 'dark' class from DOM (already set by next-themes blocking script).
 *
 * This ensures theme-dependent code (like WebGL) has correct colors from first frame.
 */
export function useThemeImmediate() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();

  // Read from DOM if resolvedTheme not yet available
  // next-themes blocking script already set the correct class before paint
  const getImmediateTheme = (): 'light' | 'dark' => {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  };

  return {
    theme,
    setTheme,
    systemTheme,
    // resolvedTheme that's never undefined - falls back to DOM class
    resolvedTheme: (resolvedTheme as 'light' | 'dark') ?? getImmediateTheme(),
  };
}
