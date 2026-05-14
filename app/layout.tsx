import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Bubble Bliss - Mother\'s Day Celebration',
  description: 'Join us for an unforgettable Bubble House Experience! Book your magical family moments for our Mother\'s Day Celebration on May 23, 2026.',
  keywords: ['bubble house', 'mother\'s day', 'family event', 'kids activities', 'Newcastle', 'celebration'],
  openGraph: {
    title: 'Bubble Bliss - Mother\'s Day Celebration',
    description: 'Join us for an unforgettable Bubble House Experience! Book your magical family moments.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#8EDCF2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#FDF8FA]">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
