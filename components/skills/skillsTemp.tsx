import { ReactNode } from "react";

interface Skill {
  name: string;
  icon: ReactNode;
}

interface SkillsProps {
  skills: Skill[];
  naav: string;
}

export function SkillsTemp({ skills, naav }: SkillsProps) {
  return (
    <div className="w-[94.8vw] md:w-[28rem] md:border md:m-4 rounded-2xl border-black dark:border-white transition-colors duration-300">
      <div className="h-full flex flex-col pt-16 p-8">
        <p className="text-lg font-iansui font-bold text-black dark:text-white">
          {naav}
        </p>
        <ul className="px-4 py-16 text-lg font-iansui text-slate-900 dark:text-slate-100 flex flex-wrap items-center gap-16">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="px-4 py-2 border-b border-slate-900 dark:border-slate-300"
            >

              <div className="flex items-center gap-2 text-black dark:text-cyan-100 text-sm">
                <span className="text-black dark:text-cyan-100  text-xl">
                  {skill.icon}
                </span>
                <span className=" text-sm md:text-base">
                  {skill.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
