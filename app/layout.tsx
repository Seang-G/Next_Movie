import "../styles/global.css"
import { Metadata } from "next"
import Navigation from "../components/navigation"
import Logo from "../components/logo"

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: "Next Movies"
  },
  description: 'The best movies on the best framework.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Logo href="/" />
        {children}
      </body>
    </html>
  )
}
