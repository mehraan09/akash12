"use client"
import SocialLinks from "./iconss"
import Link from "next/link"
export default function Me(){
return <div className="">
            <div className="absolute md:left-8 left-4 right-8 top-32 -rotate-90 mt-32 whitespace-nowrap text-2xl font-bold text-red-800  cursor-pointer">
       <Link href={"/"}><p>SALIQ NAZIR MALIK</p></Link>           
                </div>
                <SocialLinks></SocialLinks>
</div>
}

