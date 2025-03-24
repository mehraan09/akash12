import Layout from "@/components/layyy";
import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
export default function A() {
return <Layout><div className="h-screen flex w-max">
<ThreeTexts nav="/ed" t1="About page" t2="" t3=""></ThreeTexts>
  <div className="hidden md:flex"><RightArrow  linkk="/extras" /></div>

</div> 
</Layout>
  
    }