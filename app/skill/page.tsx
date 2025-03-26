import ThreeTexts from "@/components/mainpage/threeText"
import { Langs } from "@/components/skills/lang"
import { Devs } from "@/components/skills/dev"
import { dbs } from "@/components/skills/dbs"
import { tools } from "@/components/skills/tools"
import { comps } from "@/components/skills/comps"
import { soft } from "@/components/skills/soft"

export default function A() {

return <div className="h-screen flex w-max">
<ThreeTexts   t1="" t3={Langs} ></ThreeTexts>
<ThreeTexts   t1="" t3={Devs}></ThreeTexts>
<ThreeTexts   t1="" t3={comps}></ThreeTexts>
<ThreeTexts   t1="" t3={dbs}></ThreeTexts>
<ThreeTexts   t1="" t3={soft}></ThreeTexts>
<ThreeTexts   t1="" t3={tools}></ThreeTexts>
</div>
}