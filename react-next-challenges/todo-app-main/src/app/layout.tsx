import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'

import { Header } from '@/components/header'

import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Application to schedule tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
