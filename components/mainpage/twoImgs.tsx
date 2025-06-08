import Image from "next/image"
export default function TwoImages(){
    return  <div className="overflow-y-auto small-scrollbar w-[94.8vw] md:w-[28rem] col-span-1 m-4 rounded-lg md:border border-black text-white dark:hidden">
     <div className="h-full flex flex-col items-center justify-between p-2 py-8 md:p-8 relative z-10">
              <Image src="/abcd2.png" alt="pic 1"   width={300} height={300}></Image>
              <Image src="/emps.png" alt="pic 1"    width={300} height={300} ></Image>
    </div>
    </div>
}