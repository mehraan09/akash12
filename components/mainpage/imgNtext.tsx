"use client"
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

export default function InfoCard({ img, txt, txt2, txt3, txt4, txt5 }: InfoCardProps) {

  // ✅ LOAD ADSENSE ONLY ON CLIENT
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.log("AdSense error:", err);
    }
  }, []);

  return (
    <div className="h-full overflow-y-auto small-scrollbar w-[92vw] md:w-[20rem] flex flex-col justify-between text-sm tracking-wide">

      <FallingText
        text={txt}
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        mouseConstraintStiffness={0.9}
      />

      <div className="flex flex-col items-center gap-3 mt-6">
        {img && (
          <div className="relative group">
            <Image
              src={img}
              width={180}
              height={180}
              alt={txt}
              quality={100}
              className="rounded-full object-cover ring-2 ring-gray-300 dark:ring-gray-600 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-black/10 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        )}

        {txt2 && (
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 italic">
            {txt2}
          </p>
        )}
      </div>

      {/* ✅ GOOGLE NATIVE IN-FEED AD (SAFE PLACEMENT) */}
      <div className="my-6 w-full">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-fb+5t+4v-dd+6v"
          data-ad-client="ca-pub-6934180729383134"
          data-ad-slot="1288694184"
        ></ins>
        akash
      </div>

      {txt3 && (
        <ScrambledText
          className="scrambled-text-demo text-center text-gray-800 dark:text-gray-100 mb-4"
          radius={60}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          {txt3}
        </ScrambledText>
      )}

      <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        {txt4 && <p className="text-xs md:text-sm">{txt4}</p>}
        {txt5 && <p className="text-xs md:text-sm">{txt5}</p>}
      </div>

      <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mt-6" />
    </div>
  );
}
