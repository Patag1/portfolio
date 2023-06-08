import { cn } from "@/app/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";
import { morganite } from "../Fonts";

const HeaderVariants = cva(
    `${morganite.className} font-bold`,
    {
        variants: {
            size: {
                default: 'text-4xl md:text-5xl lg:text-6xl',
                xl: 'text-[9rem] md:text-[12rem] lg:text-[15rem]',
                lg: 'text-5xl md:text-6xl lg:text-7xl',
                sm: 'text-2xl md:text-3xl lg:text-4xl'
            }
        },
        defaultVariants: {
            size: 'default'
        }
    }
)

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof HeaderVariants> {}

const Header = forwardRef<HTMLHeadingElement, HeaderProps>(({
    className, size, children, ...props
}, ref) => {
    return (
        <h1 className={cn(HeaderVariants({size, className}))} {...props} ref={ref}>
            { children }
        </h1>
    )
})

Header.displayName = 'Header'

export default Header
