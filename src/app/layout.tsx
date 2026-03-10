import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discovering Anson',
  description: 'Explore personal inquiries and discoveries across different life categories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 to-slate-800 text-white`}>
        {children}
      </body>
    </html>
  )
}
