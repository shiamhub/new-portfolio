import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/layout/Navbar'
import { ThemeProvider } from '@/providers/ThemeProvider'
// import { ScrollProvider } from '@/providers/ScrollProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head /> */}

      <body className={`${inter.className} dark:bg-bgDark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <ScrollProvider> */}
            <header>
              <Navbar />
            </header>
            {children}
          {/* </ScrollProvider> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
