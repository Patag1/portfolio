import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { poppins } from './components/Fonts'
import './globals.css'

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
