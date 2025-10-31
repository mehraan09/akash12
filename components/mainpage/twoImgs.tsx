import Image from "next/image";
import BouncingBalls from "../Animations/bounce";

export default function TwoImages() {
  return (
    <div className="h-screen overflow-y-auto small-scrollbar w-[92vw] md:w-[20rem] max-w-full text-sm md:text-sm/6">
      <div className="h-screen w-full flex flex-col items-center justify-between relative z-10">
        <Image
          src="/comp1.png"
          alt="Image 1"
          width={300}
          height={300}
          className="transition-all duration-500"
          style={{ filter: "var(--img-filter)" }}
        />

        <div className="border-y w-full h-1/3 p-0">
        <BouncingBalls ballCount={20} gravity={1} ballRadius={6}/>
        </div>

        <Image
          src="/emps.png"
          alt="Image 2"
          width={300}
          height={300}
          className="transition-all duration-500"
          style={{ filter: "var(--img-filter)" }}
        />
      </div>
    </div>
  );
}
