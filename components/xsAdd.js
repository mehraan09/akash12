"use client";
import { useEffect } from "react";

export default function AdUnit3() {
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
     data-ad-slot="1697442628"
     data-ad-format="auto"
     data-full-width-responsive="true"
    />
  );
}


