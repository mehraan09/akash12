import ThreeTexts from "@/components/mainpage/threeText"
import RightArrow from "@/components/rightArrow"
import Layout from "@/components/layyy"
import { Langs } from "@/components/skills/lang"
import { Devs } from "@/components/skills/dev"
import { dbs } from "@/components/skills/dbs"
import { tools } from "@/components/skills/tools"
import { comps } from "@/components/skills/comps"
import { soft } from "@/components/skills/soft"

export default function A() {

return <Layout>
<div className="h-screen flex w-max">
<ThreeTexts  nav="/ed" t1="" t3={Langs} ></ThreeTexts>
<ThreeTexts  nav="/ed" t1="" t3={Devs}></ThreeTexts>
<ThreeTexts  nav="/ed" t1="" t3={comps}></ThreeTexts>
<ThreeTexts  nav="/ed" t1="" t3={dbs}></ThreeTexts>
<ThreeTexts  nav="/ed" t1="" t3={soft}></ThreeTexts>
<ThreeTexts  nav="/ed" t1="" t3={tools}></ThreeTexts>
  <div className="hidden md:flex"><RightArrow  linkk="/exp" /></div>
</div> </Layout>
}