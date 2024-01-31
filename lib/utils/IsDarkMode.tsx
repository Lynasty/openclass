import { useTheme } from 'next-themes';

const isDarkMode = () => {
  const { resolvedTheme } = useTheme();

  return resolvedTheme === 'dark' ? true : false; 
}

export default isDarkMode