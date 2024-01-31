import { useTheme } from 'next-themes';

const LogoPath = () => {

  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/assets/images/logo.png";
      break;
    case "dark":
      src = "/assets/images/logo-dark.png";
      break;
    default:
      src = "/assets/images/logo.png";
      break;
  }

  return src;
}

export default LogoPath