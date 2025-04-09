import ThreeTexts from "@/components/mainpage/threeText"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "Curriculum"
  }

export default function A() {

return <div className="h-screen flex w-max">
<ThreeTexts  t1="Cricket Team Member (Runner-Up) - Inter-Departmental Cricket Tournament" t2="" t3=""></ThreeTexts>
</div> }