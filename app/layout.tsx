import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Providers } from "@/components/providers"
import { SiteBlob } from "@/components/site-blob"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  metadataBase: new URL ("https://www.mystore.com"),
  title: {
    default: "My Store",
    template: `%s | My Store`
  
  },
  description: "This is the description of my store", 
  verification: {
    google: "google-site-verification= googledafd61001b660688.html",
  },
  icons: {
    icon: '/favicon.ico'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <SiteBlob />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
