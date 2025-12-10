"use client";
import { useEffect } from "react";

export default function AdUnit2() {
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
      data-ad-format="fluid"
      data-ad-layout-key="-fb+5t+4v-dd+6v"
      data-ad-client="ca-pub-6934180729383134"
      data-ad-slot="1288694184"
      data-full-width-responsive="true"
    />
  );
}



