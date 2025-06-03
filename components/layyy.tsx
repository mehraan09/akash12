"use client"
import { useEffect } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const scrollAmount = (event.deltaY + event.deltaX);
      window.scrollBy({
          left: scrollAmount*.75,
          top : 0,
      });
    };
    window.addEventListener("wheel", handleWheel  , { passive : false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return <div className="flex h-[100vh]">{children}</div>;
}