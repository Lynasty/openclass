import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import LogoPath from "@/lib/utils/LogoPath";
import isDarkMode from "@/lib/utils/IsDarkMode";

const MobileNav = () => {
  const logoSrc = LogoPath();
  const isDark = isDarkMode();

  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="Menu"
            width={24}
            height={24}
            className={`cursor-pointer filter-${isDark ? 'white' : 'grey'}`}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-primary-foreground md:hidden">
          <Image src={logoSrc} alt="Logo" width={128} height={38} />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
