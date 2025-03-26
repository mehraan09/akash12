// soft.tsx
import { GiBrain, GiTeamIdea } from "react-icons/gi"; // Proxy icons for abstract skills
import { FaComments, FaLightbulb } from "react-icons/fa"; // Communication and problem-solving proxies
import { ReactNode } from "react";

// Define a type for soft skill data
interface SoftSkill {
  name: string;
  icon: ReactNode
}

// Soft skills data as an array
const softSkills: SoftSkill[] = [
  {
    name: "Analytical Thinking",
    icon: <GiBrain className="text-slate-900 w-6 h-6" />, // Brain for analytical thinking
  },
  {
    name: "Problem-solving",
    icon: <FaLightbulb className="text-slate-900 w-6 h-6" />, // Lightbulb for problem-solving
  },
  {
    name: "Communication Skills",
    icon: <FaComments className="text-slate-900 w-6 h-6" />, // Comments for communication
  },
  {
    name: "Teamwork",
    icon: <GiTeamIdea className="text-slate-900 w-6 h-6" />, // Team idea for teamwork
  },
];

// Main soft constant
export const soft = (
  <div className="flex flex-col gap-6">
    <h3 className="px-4 py-2 text-lg font-lora font-semibold text-slate-900 flex items-center gap-2">
      <span role="img" aria-label="soft skills">🤝</span> Soft Skills
    </h3>
    {softSkills.map((skill) => (
      <div
        key={skill.name}
        className="flex justify-between items-center px-4 py-2 border-b border-slate-900 last:border-b-0"
      >
        <div className="flex items-center gap-2">
          {skill.icon}
          <span className="text-slate-900 font-bold text-sm md:text-base">
            {skill.name}
          </span>
        </div>
      </div>
    ))}
  </div>
);