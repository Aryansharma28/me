import './globals.css'

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
      <body className='cursor-retro'>{children}</body>
    </html>
  )
}