import Image from "next/image";
import { FC } from "react";
import NavLink from "./ui/NavLink";
import Gambetta from "./ui/Gambetta";
import { Dot } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="fixed w-[108px] z-10 top-2 left-2 bottom-8 h-auto flex justify-center items-center bg-neutral-50 rounded-md">
      <div className="flex justify-between items-center flex-col gap-2">
        <Dot size={20} className="m-0 p-0 text-neutral-900" />
        <NavLink href="/" label="HOME" />
        <NavLink href="about" label="ABOUT" />
        <NavLink href="hire" label="HIRE ME" />
        <Dot size={20} className="m-0 p-0 text-neutral-900" />
      </div>
    </nav>
  );
};

export default Navbar;
