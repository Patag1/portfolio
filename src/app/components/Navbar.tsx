import Image from "next/image";
import { FC } from "react";
import NavLink from "./ui/NavLink";
import Link from "next/link";
import Gambetta from "./ui/Gambetta";
import { Dot } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="absolute z-10 top-2 left-2 bottom-8 h-auto flex justify-between items-center flex-col py-2 bg-neutral-50 rounded-md">
      <div className="flex justify-center items-start flex-grow basis-0 pt-4">
        <Gambetta size="xs" weight="on" color="gray">
          Augusto
          <br />
          Sasso
        </Gambetta>
      </div>
      <div className="flex justify-between items-center flex-col gap-2">
        <Dot size={20} className="m-0 p-0 text-neutral-900" />
        <NavLink href="about" label="ABOUT" />
        <NavLink href="hire" label="HIRE ME" />
        <Dot size={20} className="m-0 p-0 text-neutral-900" />
      </div>
      <div className="flex justify-center items-end flex-grow basis-0">
        <Link href={"/"}>
          <Image
            src={"/signature.png"}
            alt="profile"
            width={100}
            height={100}
            className="px-2"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
