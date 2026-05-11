"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: { push: (args: object) => void };
  }
}

export default function AdsenseAd() {
  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "inline-block",
        width: "240px",
        height: "720px",
      }}
      data-ad-client="ca-pub-6934180729383134"
      data-ad-slot="1750568111"
    />
  );
}