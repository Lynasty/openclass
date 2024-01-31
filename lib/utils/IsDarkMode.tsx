'use client'
import { useTheme } from 'next-themes';

const isDarkMode = () => {
  const { resolvedTheme } = useTheme();
   let theme = resolvedTheme;
   const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

   if (localStorage.theme) {
     theme = localStorage.theme;
   }

  return (theme === "dark" || theme === "system") && isDark ? true : false; 
}

export default isDarkMode