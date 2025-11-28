/*
DEPRECATED, changed to next-theme
*/

'use client';
import { createContext, useState, useEffect, useContext } from 'react';

type Theme = 'light' | 'dark' | 'system';
type EffectiveTheme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    effectiveTheme: EffectiveTheme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystemTheme(): EffectiveTheme {
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Initialize with 'system' to match blocking script default
    const [theme, setTheme] = useState<Theme>('system');
    const [systemTheme, setSystemTheme] = useState<EffectiveTheme>('dark');

    // Compute effective theme
    const effectiveTheme: EffectiveTheme = theme === 'system' ? systemTheme : theme;

    // Toggle: system → light → dark → system
    const toggleTheme = () => {
        const next: Theme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
        setTheme(next);
    };

    // On mount: read saved theme and detect system preference
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark' || saved === 'system') {
            setTheme(saved);
        }
        setSystemTheme(getSystemTheme());
    }, []);

    // Listen for OS theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = (e: MediaQueryListEvent) => {
            setSystemTheme(e.matches ? 'dark' : 'light');
        };
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    // Apply theme changes to DOM
    useEffect(() => {
        const isDark = effectiveTheme === 'dark';

        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme, effectiveTheme]);

    return (
        <ThemeContext.Provider value={{ theme, effectiveTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context;
}