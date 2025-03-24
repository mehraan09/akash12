import { ReactNode } from "react";
import { DiVisualstudio } from "react-icons/di";
import {  SiUbuntu, SiGithub } from "react-icons/si";
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
  <div className="flex flex-col gap-6">
    <h3 className="px-4 py-2 text-lg font-lora font-semibold text-slate-900 flex items-center gap-2">
      <span role="img" aria-label="tools">🛠️</span> Tools & Platforms
    </h3>
    {toolsData.map((tool) => (
      <div
        key={tool.name}
        className="flex justify-between items-center px-4 py-2 border-b border-slate-200 last:border-b-0"
      >
        <div className="flex items-center gap-2">
          {tool.icon}
          <span className="text-slate-900 font-bold text-sm md:text-base">
            {tool.name}
          </span>
        </div>
      </div>
    ))}
  </div>
);