import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
import Layout from "@/components/layyy"
export default function A() {

return <Layout><div className="h-screen flex w-max">
<ThreeTexts  nav="/ed" t1="Cricket Team Member (Runner-Up) - Inter-Departmental Cricket Tournament" t2="" t3=""></ThreeTexts>
          <div className="hidden md:flex"><RightArrow  linkk="/extras" /></div>


</div> 
</Layout>
}