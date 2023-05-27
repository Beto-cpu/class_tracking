import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Class Tracker',
  description: 'Behold, our group\'s final masterpiece!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen w-screen overflow-x-hidden flex flex-col justify-between ${inter.className}`}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
