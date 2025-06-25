import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bolt Code Reviewer',
  description: 'AI-powered code review with professional and roast modes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}