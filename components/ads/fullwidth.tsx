"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function FluidAd() {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    try {
      if (
        typeof window !== "undefined" &&
        adRef.current &&
        !adRef.current.getAttribute("data-adsbygoogle-status")
      ) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{
        display: "block",
      }}
      data-ad-format="fluid"
      data-ad-layout-key="-fb+5t+4v-dd+6v"
      data-ad-client="ca-pub-6934180729383134"
      data-ad-slot="1288694184"
    />
  );
}