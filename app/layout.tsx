import type { Metadata } from "next";
import {Inter} from "next/font/google"

import AuthProvider from "./providers/session-provider";
import Onboarding from "./onboarding/page";
import { SessionProvider } from "next-auth/react";

const inter  = Inter({subsets: ["latin"]})

//for improved SEO and webreadibility
export const metadata : Metadata={
  title: "OtterChat",
  description: "Real time chat application"

}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

     <AuthProvider>
          <SessionProvider>
            <Onboarding>
              {children}
            </Onboarding>
          </SessionProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

