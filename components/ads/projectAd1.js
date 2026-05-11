"use client";
import { useEffect } from "react";

export default function AdUnit() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6934180729383134"
      data-ad-slot="3210465734"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
