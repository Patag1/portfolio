import { FC } from "react";
import { morganite } from "./fonts/Fonts";

interface HeaderProps {
  size: 'default' | 'xl' | 'lg' | 'sm';
  gray?: boolean;
  className?: string;
  children: string;
  props?: any;
}

const Header: FC<HeaderProps> = ({
  size, gray, className, props, children
}) => {

    const setSize = size === 'xl'
        ? 'text-[9rem] md:text-[12rem] lg:text-[15rem] leading-[11rem]'
        : size === 'lg'
        ? 'text-5xl md:text-6xl lg:text-7xl leading-3'
        : size === 'sm'
        ? 'text-2xl md:text-3xl lg:text-4xl leading-3'
        : 'text-4xl md:text-5xl lg:text-6xl leading-3' // default

    return (
        <h1 className={`
            ${morganite.className} font-bold tracking-wide
            ${gray ? 'text-neutral-400' : 'text-neutral-50'}
            ${className}
            ${setSize}
        `} {...props}>
            { children }
        </h1>
    )
}

export default Header
