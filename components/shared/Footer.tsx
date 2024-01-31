import Image from "next/image";
import Link from "next/link";

const Footer = ({darkMode}: {darkMode: boolean}) => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src={`/assets/images/logo${darkMode ? "-dark" : ""}.png`}
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p className="text-secondary-foreground">2024 OpenTea©</p>
      </div>
    </footer>
  );
};

export default Footer;
