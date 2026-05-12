"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function XXSAd() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("Adsense error:", err);
    }
  }, []);

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{
          display: "inline-block",
          width: "120px",
          height: "120px",
        }}
        data-ad-client="ca-pub-6934180729383134"
        data-ad-slot="1697442628"
      />
    </div>
  );
}