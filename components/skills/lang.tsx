import { ReactNode } from "react";
import { DiCss3, DiHtml5, DiJavascript1, DiSqllite, DiVisualstudio } from "react-icons/di";
import { SkillsTemp } from "./skillsTemp";
interface Language {
  name: string;
  icon: ReactNode // Support single icon or array for HTML/CSS
}

const languages: Language[] = [
  { name: "C/C++", icon: <DiVisualstudio className=" w-6 h-6" /> },
  { name: "JavaScript", icon: <DiJavascript1 className=" w-6 h-6" /> },
  { name: "TypeScript", icon: <DiVisualstudio className=" w-6 h-6" /> },
  { name: "SQL", icon: <DiSqllite className=" w-6 h-6" /> },
  {
    name: "HTML/CSS",
    icon: (
      <div className="flex gap-1">
        <DiHtml5 className=" w-6 h-6" />
        <DiCss3 className=" w-6 h-6" />
      </div>
    ),
  },
];

export default function Langs () {
  return <SkillsTemp naav="🖥️ Programming Languages" skills={languages}></SkillsTemp>
}