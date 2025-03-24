import Image from "next/image"
import RightArrow from "../rightArrow"
export default function TwoImages(){
    return  <div className="w-[94.8vw] md:w-[28rem] col-span-1  h-full border-r border-black">
     <div className="h-full flex flex-col items-center justify-around mx-8">
     <div className="md:hidden flex justify-center">
      <RightArrow linkk="/ed"></RightArrow>
      </div>
              <Image src="/abcd2.png" alt="pic 1"  width={300} height={300} ></Image>
              <Image src="/emps.png" alt="pic 1"    width={300} height={300}></Image>
    </div>
    </div>
}