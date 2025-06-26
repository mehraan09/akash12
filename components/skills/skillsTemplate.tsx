import { ReactNode } from "react";

interface SkillsProps {
  skills: ReactNode[];
  naav: string;
}

export default function SkillsTemp({ skills, naav }: SkillsProps) {
  return (
    <div className="small-scrollbar overflow-y-auto w-[94.8vw] md:w-[28rem] md:border md:m-4 rounded-lg border-black dark:border-white transition-colors duration-300">
 <div className="h-full flex flex-col pt-10 md:pt-16 p-6 md:p-8 ">
      <p className="text-lg font-iansui font-bold text-black dark:text-white">
          {naav}
        </p>
        <div className="px-4 py-16 text-lg font-iansui font-medium text-slate-900 dark:text-slate-100 flex flex-wrap items-center gap-16">
          {skills.map((Skill, i) => (
            <div
              key={i}
              className="px-4 py-2 border-b border-slate-900 dark:border-slate-300"
            >
              {Skill}
            </div>
          ))}
        </div>
      </div>
    </div>
     
  );
}