import type { Metadata, Viewport } from "next";
import Layout from "@/components/layyy";
import PlanetOrbit from "@/components/mainpage/bg";
import "./globals.css";
import NavBar from "@/components/navs";
import { Arrow } from "@/components/navs";
import Me from "@/components/mySelf";
// import MouseParticlesWrapper from "@/components/mainpage/mousera";

export const metadata: Metadata = {
  title: {
    template: "Akash %s",
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
      "Check out Akash Ahmad Malik's portfolio for software projects and tech skills.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen antialiased font-thin overflow-x-auto small-scrollbar bg-[#e6f9ff] dark:bg-[#1a1f23]  z-[40]`}
      >   
        <div className="fixed inset-0 z-0">
          <PlanetOrbit></PlanetOrbit>
        </div>
        <div className="fixed md:top-[2vh] md:left-[1vw] md:h-[96vh] h-screen md:w-[6rem] w-[5vw] md:border rounded-lg dark:border-white border-black bg-[#e6f9ff] dark:bg-[#1a1f23] z-[100]">
          <Me />
        </div>
        <Layout>
          <div className="ml-[6vw] md:ml-[7rem] h-screen flex z-40 ">
            <NavBar />
            <div className={`flex-grow z-20 `}>{children}</div>
            <div className="md:flex hidden z-30">
              <Arrow />
            </div>
            <div className="fixed right-12 top-12 md:hidden z-30">
              <Arrow />
            </div>
          </div>
        </Layout>
      </body>
    </html>
  );
}