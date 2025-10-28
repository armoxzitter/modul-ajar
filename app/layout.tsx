import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learning module of describing Food & Beverage — Modul Ajar',
  description: 'Landing page untuk modul ajar Bahasa Inggris (Culinary and Me) untuk peserta didik kelas VII.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={[inter.className, 'bg-white antialiased'].join(' ')}>
        {children}
      </body>
    </html>
  )
}


