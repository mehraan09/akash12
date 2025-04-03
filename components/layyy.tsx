"use client"
import { useEffect } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const scrollAmount = (event.deltaY || event.deltaX) * 0.75;
      window.scrollBy({
          left: scrollAmount,
      });
    };
    window.addEventListener("wheel", handleWheel  , { passive : false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return <div >{children}</div>;
}