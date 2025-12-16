import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Markit.one - The end of fragmented stacks',
  description: 'FormEase, QRBee, and AdVerse combined into one cohesive operating system. Stop context switching. Start creating magic.',
  keywords: ['forms', 'QR codes', 'video marketing', 'all-in-one platform', 'business tools', 'marketing automation'],
  authors: [{ name: 'Markit.one' }],
  creator: 'Markit.one',
  publisher: 'Markit.one',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://markit.one'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Markit.one - The end of fragmented stacks',
    description: 'FormEase, QRBee, and AdVerse combined into one cohesive operating system. Stop context switching. Start creating magic.',
    url: 'https://markit.one',
    siteName: 'Markit.one',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Markit.one - All-in-one platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markit.one - The end of fragmented stacks',
    description: 'FormEase, QRBee, and AdVerse combined into one cohesive operating system.',
    images: ['/og-image.jpg'],
    creator: '@markitone',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

