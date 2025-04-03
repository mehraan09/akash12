import Langs from "@/components/skills/lang"
import Devs  from "@/components/skills/dev"
import Dbs from "@/components/skills/dbs"
import Tools  from "@/components/skills/tools"
import  Comps  from "@/components/skills/comps"
import Soft from "@/components/skills/soft"
import Devops from "@/components/skills/devops" 

export default function A() {

return <div className="h-screen flex w-max">
    <Langs></Langs>
    <Devs></Devs>
    <Devops/>
    <Comps/>
    <Dbs/>
    <Soft/>
    <Tools/>
</div>
}