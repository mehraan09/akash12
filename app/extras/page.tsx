import Layout from "@/components/layyy";
import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
import Image from "next/image";
export default function A() {
return <Layout><div className="h-screen flex w-max">
<ThreeTexts  nav="/ed" t1="Extras" t2="" t3=""></ThreeTexts>
<div className="col-span-4 md:col-span-1 border-r border-black flex justify-center items-center">
<Image src="/image.png" width={300} height={300} alt="thank you"></Image>
</div>
   <div className="hidden md:flex"><RightArrow  linkk="/" /></div>
</div> 
</Layout>
  
    }