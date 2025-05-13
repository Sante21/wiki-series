import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import NavBar from "../_components/navBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WikiSeries",
  description: "The most complet wiki series.",
};

export default function RootLayout({children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <NavBar>
          </NavBar>
        </header>
        {children}
      </body>
    </html>
  );
}
