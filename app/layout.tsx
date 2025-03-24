import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navs";
import Me from "@/components/mySelf";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akash Ahmad Malik - Portfolio",
  description:
    "Personal portfolio of Akash Ahmad Malik showcasing projects, skills, and achievements in software development and technology.",
  keywords: [
    "Akash Ahmad Malik",
    "shuttttttt upppppppp",
    "software developer",
    "portfolio",
    "web development",
    "Next.js",
    "React",
    "technology",
    "projects",
  ],
  authors: [{ name: "Akash Ahmad Malik" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow", // Allow indexing and link following
  icons: {
    icon: "/image.png", // Ensure this is in /public
  },
  openGraph: {
    title: "Akash Ahmad Malik - Portfolio",
    description:
      "Explore the personal portfolio of Akash Ahmad Malik, featuring software development projects and technical skills.",
    url: "https://akash09.vercel.app", // Replace with your Vercel domain
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
    creator: "@Aakash41339611", // Replace with your Twitter handle
    images: ["https://your-domain.vercel.app/image.png"],
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
