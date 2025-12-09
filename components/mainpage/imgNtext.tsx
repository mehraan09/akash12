"use client";

import Image from "next/image";
import { useEffect } from "react";
import FallingText from "../Animations/fallingText";
import ScrambledText from "../Animations/scrambleText";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface InfoCardProps {
  img?: string;
  txt: string;
  txt2?: string;
  txt3?: string;
  txt4?: string;
  txt5?: string;
}

export default function InfoCard({
  img,
  txt,
  txt2,
  txt3,
  txt4,
  txt5,
}: InfoCardProps) {
  // ✅ ADSENSE SAFE CLIENT LOAD
useEffect(() => {
  if (typeof window === "undefined") return;

  const timeout = setTimeout(() => {
    try {
      const ads = document.querySelectorAll("ins.adsbygoogle");

      ads.forEach((ad) => {
        if (!ad.getAttribute("data-adsbygoogle-status")) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      });
    } catch (e) {
      console.warn("Adsense push skipped:", e);
    }
  }, 800); // ✅ small delay prevents hydration issues

  return () => clearTimeout(timeout);
}, []);

  return (
    <div className="h-screen w-[95vw] md:w-[20rem] overflow-y-auto overflow-x-hidden small-scrollbar text-sm tracking-wide relative transition-colors duration-300">
      <div className="h-full flex flex-col justify-between py-14 px-3 relative z-10">

          <FallingText
            text={txt}
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            mouseConstraintStiffness={0.9}
          />

        {/* ✅ IMAGE + SUBTEXT (MATCH 2ND LAYOUT) */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {img ? 
            <Image
              src={img}
              width={160}
              height={160}
              alt={txt}
              quality={100}
              className="object-cover transition-transform duration-500 scale-90 hover:scale-100"
            /> : <div className="my-6 w-full">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-fb+5t+4v-dd+6v"
            data-ad-client="ca-pub-6934180729383134"
            data-ad-slot="1288694184"
          ></ins>
        </div>
          }
          {txt2 && <p className="text-xs text-gray-600 dark:text-gray-400">{txt2}</p>}
        </div>

        {/* ✅ SCRAMBLED TEXT */}
        {txt3 && (
          <ScrambledText
            className="scrambled-text-demo text-center text-gray-800 dark:text-gray-100 mt-4"
            radius={60}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            {txt3}
          </ScrambledText>
        )}

        {/* ✅ TEXT CONTENT */}
        <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          {txt4 && <p className="text-xs">{txt4}</p>}
          {txt5 && <p className="text-xs">{txt5}</p>}
        </div>

        {/* ✅ GOOGLE NATIVE AD (SAFE SPOT) */}


        {/* ✅ BOTTOM DIVIDER */}
        <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto" />
      </div>
    </div>
  );
}
