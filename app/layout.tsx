import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Billy Sambasi | Data Scientist & ML Engineer',
  description:
    'Explore Billy\'s portfolio of machine learning projects, data science solutions, and curriculum innovation work. Based in Kenya, passionate about AI and educational technology.',
  keywords: ['data science', 'machine learning', 'AI', 'Python', 'portfolio'],
  authors: [{ name: 'Billy Sambasi' }],
  creator: 'Billy Sambasi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://billysambasi.dev',
    title: 'Billy Sambasi | Data Scientist & ML Engineer',
    description:
      'Explore Billy\'s portfolio of machine learning projects, data science solutions, and curriculum innovation work.',
    siteName: 'Billy Sambasi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Billy Sambasi | Data Scientist & ML Engineer',
    description: 'Portfolio of machine learning projects and data science work',
    creator: '@yourtwitterhandle',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-slate-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}