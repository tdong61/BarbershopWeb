import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'John Barbershop',
  description: 'Book Barbershop Appointment',
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
