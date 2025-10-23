import Image from "next/image";
import FallingText from "../Animations/fallingText";
import ScrambledText from "../Animations/scrambleText";
  

interface InfoCardProps {
  img?: string;
  txt: string;
  txt2?: string;
  txt3?: string;
  txt4?: string;
  txt5? : string
}

export default function InfoCard({ img, txt, txt2, txt3, txt4 , txt5 }: InfoCardProps) {
  return (
    <div className="h-screen overflow-y-auto overflow-x-auto small-scrollbar w-[95vw] md:w-[20rem] md:text-sm/6 text-sm tracking-wide relative transition-colors duration-300">
    <div className="h-full flex flex-col justify-between py-16 px-2 relative z-10 text-wrap">
    <div className="h-1/6">
        <FallingText
            text={txt}
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            mouseConstraintStiffness={0.9}
          />  
    </div>

        <div className="flex justify-center items-center">
         { img && <Image
            src={img}
            width={200}
            height={200}
            alt="Profile Image"
            quality={100}
            className="rounded-full object-cover !transition-transform duration-500 hover:scale-110"
          />
         }
          <p className="shrink text-xs">{txt2}</p>

        </div>

          <ScrambledText
            className="scrambled-text-demo mt-0"
            radius={50}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            {txt3 || ""}
          </ScrambledText>    


        <div className="">
          {txt4 && (
            <p className="leading-relaxed text-xs ">{txt4}</p>
          )}
        </div>


        <div>
        <p className=" leading-relaxed text-xs ">{txt5}</p>
        </div> 
          </div>
        </div>
  );
}
