import { ReactNode } from "react";
import { SiReact, SiNodedotjs, SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si"; // Using Simple Icons for better specificity
import {SkillsTemp}  from "./skillsTemp";
interface DevTool {
  name: string;
  icon: ReactNode
}
const devTools: DevTool[] = [
  { name: "React", icon: <SiReact className="w-6 h-6" /> },
  { name: "NodeJS", icon: <SiNodedotjs className="w-6 h-6" /> },
  { name: "ExpressJS", icon: <SiExpress className="w-6 h-6" /> },
  { name: "NextJS", icon: <SiNextdotjs className="w-6 h-6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
];

export default function D() {
 return <SkillsTemp naav="⚡ Development & Frameworks" skills={devTools}></SkillsTemp>
}