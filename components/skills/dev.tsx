import { ReactNode } from "react";
import { SiReact, SiNodedotjs, SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si"; // Using Simple Icons for better specificity
import {SkillsTemp}  from "./skillsTemp";
interface DevTool {
  name: string;
  icon: ReactNode
}
const devTools: DevTool[] = [
  { name: "React", icon: <SiReact className="text-slate-900 w-6 h-6" /> },
  { name: "NodeJS", icon: <SiNodedotjs className="text-slate-900 w-6 h-6" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-slate-900 w-6 h-6" /> },
  { name: "NextJS", icon: <SiNextdotjs className="text-slate-900 w-6 h-6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-slate-900 w-6 h-6" /> },
];

const Devs = (
  <SkillsTemp naav="⚡ Development & Frameworks" skills={devTools}></SkillsTemp>
);

export { Devs };