import type { Metadata } from "next";
import { Belanosima , Rubik } from "next/font/google";
import navBarStyle from "../app/styles/navbar.scss";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const belanosima = Belanosima({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-belanosima'
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-rubik'
});

export const metadata: Metadata = {
  title: "Maverick Studio",
  description: "Get your business into the digital world with the aid of our innovative marketing, web, and AI services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={`${belanosima.variable} ${rubik.variable} ${navBarStyle}`}>
        <SmoothScroll children={undefined}/>
          {children}
        <SmoothScroll children={undefined}/>        
      </body>
    </html>
  );
}
