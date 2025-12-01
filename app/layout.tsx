import './globals.css'
import {Analytics} from "@vercel/analytics/next";
import LoadingRipple from "../components/loading-ripple";

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
      <body className='cursor-retro'>
        <LoadingRipple />
        {children}
        <Analytics />
      </body>
    </html>
  )
}