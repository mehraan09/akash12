"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdsenseAd() {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    try {
      if (
        adRef.current &&
        !adRef.current.getAttribute("data-adsbygoogle-status")
      ) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("Adsense error", err);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{
        display: "block",
        width: "240px",
        height: "720px",
      }}
      data-ad-client="ca-pub-6934180729383134"
      data-ad-slot="1750568111"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}