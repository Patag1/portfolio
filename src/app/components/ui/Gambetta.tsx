import { FC } from "react";
import { gambetta } from "./fonts/Fonts";

interface GambettaProps {
  children: React.ReactNode
  className?: string
  weight?: boolean
  size: "lg" | "md" | "sm" | "xs"
  color: "gray" | "white"
}

const Gambetta: FC<GambettaProps> = ({ children, className, weight, size, color }) => {
  const fontWeight = weight ? "font-extrabold" : "font-normal";
  const textSize =
    size === "lg" ? "text-[2.6rem] leading-none" : size === "md" ? 'text-md' : size === "sm" ? "text-sm" : "text-xs";
  const textColor = color === "gray" ? "text-neutral-400" : "text-neutral-50";

  return (
    <span
      className={`${gambetta.className} ${className} ${fontWeight} ${textSize} ${textColor} w-fit italic text-center`}
    >
      {children}
    </span>
  );
};

export default Gambetta;
