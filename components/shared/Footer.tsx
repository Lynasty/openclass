import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import LogoPath from "./LogoPath";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <LogoPath />
        </Link>

        <p className="text-secondary-foreground">2024 OpenTea©</p>
      </div>
    </footer>
  );
};

export default Footer;
