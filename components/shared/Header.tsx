import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToggle";
import LogoPath from "./LogoPath";

const Header = () => {

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <LogoPath />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3 items-center">
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"/>
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full text-neutral-50" size="lg">
              <Link href="/sign-in">Connexion</Link>
            </Button>
          </SignedOut>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
