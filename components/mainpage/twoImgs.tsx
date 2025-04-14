import Image from "next/image"
export default function TwoImages(){
    return  <div className="w-[94.8vw] md:w-[28rem] col-span-1 md:m-4 rounded-xl md:border border-black text-white dark:hidden">
     <div className="h-full flex flex-col items-center justify-around mx-8 relative z-10">
     <div className="md:hidden flex justify-center">    
      </div>
              <Image src="/abcd2.png" alt="pic 1"   width={300} height={300}></Image>
              <Image src="/emps.png" alt="pic 1"    width={300} height={300} ></Image>
    </div>
    </div>
}