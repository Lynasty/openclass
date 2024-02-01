import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const LogoPath = () => {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState("");

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    let theme = resolvedTheme;
    if (localStorage.theme) {
      theme = localStorage.theme;
    }

    switch (theme) {
      case "light":
        setSrc("/assets/images/logo.png");
        break;
      case "dark":
        setSrc("/assets/images/logo-dark.png");
        break;
      default:
        setSrc(
          isDark ? "/assets/images/logo-dark.png" : "/assets/images/logo.png"
        );
        break;
    }
  }, [resolvedTheme]);

  return <Image src={src} alt="logo" width={128} height={38} />;
};

export default LogoPath;

