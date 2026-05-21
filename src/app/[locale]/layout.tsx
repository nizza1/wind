import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/layout/header/header";
import Footer from "@/app/components/layout/footer/footer";
import Provider from "../globalState/provider";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const mona = localFont({
  src: "../fonts/Mona Sans/Mona-Sans.woff2",
  variable: "--font-mona",
  display: "swap",
  weight: "100 900",
});

const raleway = localFont({
  src: [
    {
      path: "../fonts/RalewayV/Raleway-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/RalewayV/Raleway-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-raleway",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nizar — Fullstack Developer",
  description: "Fullstack developer based in Nürnberg, DE. Building products that actually ship.",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

type Props = {
  children: React.ReactNode;
  params: Params;
};

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.locale} className="dark">
      <body className={`${mona.variable} ${raleway.variable} font-mona`}>
        <Provider>
          <Header />
          {children}
          <Footer locale={params.locale} />
        </Provider>
      </body>
    </html>
  );
}
