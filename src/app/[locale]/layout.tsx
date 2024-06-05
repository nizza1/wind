import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

import Bb from "@/app/components/bg/gb";
import Header from "../components/layout/header/header";

import Footer from "@/app/components/layout/footer/footer";
import Provider from "../globalState/provider";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const mona = localFont({
  src: '../fonts/Mona Sans/Mona-Sans.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Nizar",
  description: "Web-developer ",
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }]
}


type Props = {
  children: React.ReactNode;
  params: Params
}

export default function RootLayout({
  children,
  params
}: Props) {

  return (
    <html lang={params.locale}>
      <body className={`${mona.className}`}>
        <Provider>
          <Header />
          {/*    <Bb /> */}
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}


/* 
"absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
 */