import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: [
  "100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"
] })

export const metadata = {
  title: 'Augusto S',
  description: 'My personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
