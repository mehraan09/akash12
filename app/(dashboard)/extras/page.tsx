import GuessGamePage from "@/components/games/guessGame";
import ClickSpeedGame from "@/components/games/speed";
import { Metadata } from "next"
export const metadata : Metadata = {
    title : "Extras "
  }

import Image from "next/image";
export default function A() {
return <div className="h-screen flex overflow-y-auto">
          <div className="h-screen flex border-r w-[95vw] md:w-[20rem]">
          <GuessGamePage/>
          </div>
          
          <div className="h-screen flex border-r w-[95vw] md:w-[20rem]">
          <ClickSpeedGame/>
          </div>

          <div className="h-screen flex border-r w-[95vw] md:w-[20rem] items-center justify-center">
            <Image src="/image.png" width={200} height={200} alt="Thank You"
            style={{ filter: "var(--img-filter)" }}
            />
          </div> 

</div> 
    }