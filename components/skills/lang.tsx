import { ReactNode } from "react";
import { DiCss3, DiHtml5, DiJavascript1, DiSqllite, DiVisualstudio } from "react-icons/di";
import { SkillsTemp } from "./SkillsTemp";
import TechButton from "./TechButton";

const langs: ReactNode[] = [
  <TechButton key="cpp" to="#" techName="C/C++" Icon={DiVisualstudio} />,
  <TechButton key="js" to="#" techName="JavaScript" Icon={DiJavascript1} />,
  <TechButton key="ts" to="#" techName="TypeScript" Icon={DiVisualstudio} />,
  <TechButton key="sql" to="#" techName="SQL" Icon={DiSqllite} />,
  <div key="htmlcss" className="flex gap-2 items-center">
    <DiHtml5 className="w-5 h-5 text-orange-500" />
    <DiCss3 className="w-5 h-5 text-blue-500" />
    <span className="text-sm md:text-base">HTML/CSS</span>
  </div>,
];

export default function LangsSection() {
  return <SkillsTemp naav="🖥️ Programming Languages" skills={langs} />;
}
