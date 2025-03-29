import { ReactNode } from "react";

interface Skill {
  name: string;
  icon: ReactNode
}
interface SkillsProps {
    skills: Skill[];
    naav: string;
  }
export function SkillsTemp({ skills, naav }: SkillsProps) {
return <div className="flex flex-col gap-6">
    <h3 className="px-4 py-2 text-lg font-assis font-bold text-slate-900 flex items-center gap-2"> – {naav}</h3>
    {skills.map((skill,index) => (
      <div
        key={index}
        className="flex justify-between items-center px-4 py-2 border-b border-slate-900"
      >
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm ">
          {index+1}). {skill.icon}
          <span className="text-slate-900 font-bold text-sm md:text-base">
            {skill.name}
          </span>
        </div>
      </div>
    ))}
  </div>
}