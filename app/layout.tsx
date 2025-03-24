import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navs";
import Me from "@/components/mySelf";
import Head from "next/head";

<style></style>;
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akash Ahmad Malik",
  description: "Hey There!",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="shortcut icon" href={favicon} /> */}
        <link rel="shortcut icon" href="/image.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-thin bg-white`}
      >
        <div className="fixed left-0 h-screen md:w-[5rem] w-[5vw] md:border-r border-black z-2 bg-white">
          <Me></Me>
        </div>
        <div className="ml-[5vw] md:ml-[5rem] h-screen flex z-1 bg-white">
          <div className="hidden md:flex justify-center md:w-[22vw] border-r border-black">
            <NavBar></NavBar>
          </div>
          <div className="flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
