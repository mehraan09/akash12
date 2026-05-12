"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function GamesAd() {
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
    <div className="w-full overflow-hidden flex items-center justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-6934180729383134"
        data-ad-slot="3631384166"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}