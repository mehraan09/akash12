import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layyy";
import "./globals.css";
import NavBar from "@/components/navs";
import { Arrow } from "@/components/navs";
import Me from "@/components/mySelf";
// Define fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload : false
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload : false
});

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Akash Ahmad Malik - Portfolio",
  description: "Hi There!",
  keywords: [
    "Akash Ahmad Malik",
    "vin kya karas be cxei wan" ,
    "software developer",
    "portfolio",
    "web development",
    "Next.js",
    "React",
    "technology",
    "projects",
  ],
  authors: [{ name: "Akash Ahmad Malik" }],
  robots: "index, follow",
  icons: {
    icon: "/image.png",
  },
  openGraph: {
    title: "Akash Ahmad Malik - Portfolio",
    description:
      "Hi There!",
    url: "https://akash09.vercel.app", 
    siteName: "Akash Ahmad Malik",
    images: [
      {
        url: "https://your-domain.vercel.app/image.png", 
        width: 1200,
        height: 630,
        alt: "Akash Ahmad Malik Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Ahmad Malik - Portfolio",
    description:
      "Check out Akash Ahmad Malik's portfolio for software projects and tech skills.",
    creator: "@Aakash41339611",
    images: ["https://your-domain.vercel.app/image.png"], 
  },
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased font-thin overflow-x-auto small-scrollbar bcg `}
>
        <div className="fixed left-0 h-screen md:w-[6rem] w-[5vw] md:border-r border-black z-50 bcg">
        <Me/>
        </div>
        <Layout>
        <div className="ml-[5vw] md:ml-[6rem] h-screen flex">
        <NavBar/>
          <div className="flex-grow z-20">{children} </div>
          <div className="md:flex hidden z-30"><Arrow /></div>
          <div className="fixed right-12 top-12 md:hidden z-30"><Arrow /></div>
        </div>
        </Layout>
      </body>
    </html>
  );
}
