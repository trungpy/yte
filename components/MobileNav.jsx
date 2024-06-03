import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
import { useState } from "react";

const MobileNav = () => {
  const [active, setActive] = useState(false);
  return (
    <Sheet>
      <SheetTrigger
        asChild
        onClick={() => {
          setActive(true);
        }}
      >
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      {active && (
        <SheetContent>
          <div className="flex h-full flex-col items-center justify-between py-8">
            <div className="flex flex-col items-center gap-y-32">
              <Logo />
              <Nav
                containerStyles="flex flex-col items-center gap-y-6"
                linkStyles="text-2xl"
                setActive={setActive}
              />
            </div>
            <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
          </div>
        </SheetContent>
      )}
    </Sheet>
  );
};

export default MobileNav;
