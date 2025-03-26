// components/Layout.tsx
"use client"
import { ReactNode, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        window.scrollBy({
          left: event.deltaY * 2,
        });
      }
    };

    const handletouch = (event:TouchEvent)=>{
      if(event.touches[0].clientY!=0){
        window.scrollBy({
          left : event.touches[0].clientY * 2 , 
        })
      }
    }

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchmove" , handletouch)
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove" , handletouch)
    };
  }, []);

  return <div className="">{children}</div>;
}


