import type { Metadata, Viewport } from "next";
import PlanetOrbit from "@/components/mainpage/bg";
import "./globals.css";
import NavBar from "@/components/navs";
import { Arrow } from "@/components/navs";
import Me from "@/components/mySelf";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    template: "%s Akash",
    default: "Akash Ahmad Malik - Portfolio",
  },
  description: "Hi There! Let's build cool things together. You in? 👾",
  keywords: [
    "Akash Ahmad Malik",
    "vin kya karas be cxei wan",
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
  twitter: {
    card: "summary_large_image",
    title: "Akash Ahmad Malik's Portfolio",
    description:
      "Akash Ahmad Malik's portfolio for software projects and tech skills.",
    creator: "@Aakash41339611",
    images: ["akash.jpeg"],
  },
  openGraph: {
    title: "Akash Ahmad Malik - Portfolio",
    url: "https://akash09.vercel.app",
    siteName: "Akash Ahmad Malik",
    images: [
      {
        url: "akash.jpeg",
        width: 600,
        height: 600,
        alt: "Akash Ahmad Malik Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  viewportFit: "cover",
  maximumScale : 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="/hScroll.js" strategy="afterInteractive" />
      </head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LYJ3E16RSB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LYJ3E16RSB');
          `}
        </Script>
      <meta name="google-site-verification" content="uhUSq3S9zTC8jQ-rP1KM_Ne-ZPVdXiya5FtSIS2RCkk" />
      <body className="bg-[#ebfffe] new-scrollbar">
        <div className="overflow-auto md:overflow-visible bg-[#ebfffe] z-[40]">
        <div className="fixed inset-0 z-0"><PlanetOrbit></PlanetOrbit></div>

        <Me></Me>

          <div className="ml-[3rem] md:ml-[7.8rem] h-[100dvh] flex z-40 ">
            <NavBar />
            <div className={`flex-grow z-20`}>{children}
            <Analytics/> <SpeedInsights/>
            </div>
            <div className="md:flex hidden z-30">
              <Arrow /></div>
            <div className="fixed right-12 top-12 md:hidden z-30">
              <Arrow /></div>
          </div>
        </div>
        
      </body>
    </html>
  );
}