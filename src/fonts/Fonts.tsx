import { Poppins } from "next/font/google"
import Morganite from "next/font/local"
import Gambetta from "next/font/local"

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const morganite = Morganite({
  src: './Morganite-Medium.woff2',
  display: 'swap'
})

export const gambetta = Gambetta({
  src: [
    {
        path: './GAMBETTA-BOLDITALIC.woff2',
        weight: '800',
        style: 'italic'
    },
    {
        path: './GAMBETTA-ITALIC.woff2',
        weight: '400',
        style: 'italic'
    }
  ],
  display: 'swap'
})
