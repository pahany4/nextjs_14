import './globals.css'
import {Footer} from "@/components/footer/footer";
import {Providers} from "@/app/providers";
import {HeaderServer} from "@components/header/header-server";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
    <Providers>
      <HeaderServer/>
      <main className="flex min-h-screen flex-col items-center justify-between px-24 py-5">
        {children}
      </main>
      <Footer/>
    </Providers>
    </body>
    </html>
  )
}
