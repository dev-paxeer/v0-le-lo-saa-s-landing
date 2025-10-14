import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "ChainFlow",
  description: "By Traders for Traders. On chain 0 Cost Prop firm ",
  generator: "Paxeer.app",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OPENNET_ICON.PNG-QILPhfIZve0nd55LUY9zhB3ChbuUF3.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
