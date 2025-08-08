import './globals.css'
import {Analytics} from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>This is Aryan</title>
      </head>
      <body className='cursor-retro'>{children}
        <Analytics />
      </body>
    </html>
  )
}