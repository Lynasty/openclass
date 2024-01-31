"use client";
import { useTheme } from "next-themes";

const LogoPath = () => {
  const { resolvedTheme } = useTheme();
  let src;
  let theme = resolvedTheme;
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (localStorage.theme) {
    theme = localStorage.theme;
  }
  switch (theme) {
    case "light":
      src = "/assets/images/logo.png";
      break;
    case "dark":
      src = "/assets/images/logo-dark.png";
      break;
    default:
      src = isDark ? "/assets/images/logo-dark.png" : "/assets/images/logo.png";
      break;
  }

  return src;
};

export default LogoPath;
