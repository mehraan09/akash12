import { ReactNode } from "react";
import { DiVisualstudio } from "react-icons/di";
import {  SiUbuntu, SiGithub } from "react-icons/si";
import { SkillsTemp } from "./skillsTemp";
interface Tool {
  name: string;
  icon: ReactNode
}

const toolsData: Tool[] = [
  { name: "VS Code", icon: <DiVisualstudio className="text-slate-900 w-6 h-6" /> },
  { name: "Ubuntu Linux", icon: <SiUbuntu className="text-slate-900 w-6 h-6" /> },
  { name: "GitHub", icon: <SiGithub className="text-slate-900 w-6 h-6" /> },
];

export const tools = (
  <SkillsTemp skills={toolsData} naav="🛠️ Tools & Platforms"></SkillsTemp>
);