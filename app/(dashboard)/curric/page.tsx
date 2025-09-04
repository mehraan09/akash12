import ThreeTexts from "@/components/mainpage/threeText"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "Curriculum"
  }

export default function A() { 
return <div className="h-screen flex w-max">
<ThreeTexts  t1="Extra Curriculars : " t2={data}></ThreeTexts>
<ThreeTexts  t1=""></ThreeTexts>
</div> 
}

const data = <div>
  <ol className="">
    <li className="p-4">1. Cricket Team Member (Runner-Up) - Inter-Departmental Cricket Tournament.</li>
    <li className="p-4">2. Completed 500+ DSA Questions across platforms.</li>
    <li className="p-4">3. Foundation for Excellence (FFE) Scholar, Class of 2022.</li>
  </ol>
</div>
