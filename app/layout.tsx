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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "Akash Ahmad Malik - Portfolio",
  description: "Hi There!",
  keywords: [
    "Akash Ahmad Malik",
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
    icon: "/image.png", // Ensure this file exists in /public
  },
  openGraph: {
    title: "Akash Ahmad Malik - Portfolio",
    description:
      "Explore the personal portfolio of Akash Ahmad Malik, featuring software development projects and technical skills.",
    url: "https://akash09.vercel.app", // Replace with your actual domain
    siteName: "Akash Ahmad Malik",
    images: [
      {
        url: "https://your-domain.vercel.app/image.png", // Update domain
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
    creator: "@Aakash41339611", // Replace with your Twitter handle
    images: ["https://your-domain.vercel.app/image.png"], // Update domain
  },
};

// Define viewport for responsive design
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-thin bcg`}
      >
        <div className="fixed left-0 h-screen md:w-[5rem] w-[5vw] md:border-r border-black z-50 bcg">
          <Me/>
        </div>
        <Layout>
        <div className="ml-[5vw] md:ml-[5rem] h-screen flex z-10">
          <NavBar />
          <div className="flex-grow">
          {children}
          </div>
          <div className="md:flex hidden"><Arrow /></div>
          <div className="fixed right-12 top-12 md:hidden"><Arrow /></div>
          </div>
        </Layout>
      </body>
    </html>
  );
}