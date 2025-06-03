"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const names = ["akash", "ahmad", "malik", "xd" , "AK5H" ];
  const [randomName, setRandomName] = useState("akash");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const randomIndex = Math.floor(Math.random() * names.length);
      setRandomName(names[randomIndex]);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="z-[120] hidden md:fixed w-full h-full cursor-none pointer-events-none">
        <div
          className="absolute pointer-events-none text-sm"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          {randomName}
        </div>
      </div>
    </>
  );
};

export default CustomCursor;