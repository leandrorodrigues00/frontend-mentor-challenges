import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Multi-step by Leandro',
    absolute: 'Multi-step Form ',
  },
  description: 'Frontend Mentor multi-step form challenge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.variable} lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
