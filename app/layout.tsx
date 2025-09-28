import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dashain Fun Gallery - Friends Edition 🎉',
  description: 'A hilarious collection of friends photos during Dashain festival',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dashain-pattern">
        {children}
      </body>
    </html>
  )
}
