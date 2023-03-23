import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className='navbar'>Daniel Davis</nav>
        {children}
      </body>
    </html>
  )
}
