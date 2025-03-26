import { ReactNode } from "react";
import { SiReact, SiNodedotjs, SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si"; // Using Simple Icons for better specificity

// Define a type for dev tool data
interface DevTool {
  name: string;
  icon: ReactNode
}

// Dev tools data as an array
const devTools: DevTool[] = [
  { name: "React", icon: <SiReact className="text-slate-900 w-6 h-6" /> },
  { name: "NodeJS", icon: <SiNodedotjs className="text-slate-900 w-6 h-6" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-slate-900 w-6 h-6" /> },
  { name: "NextJS", icon: <SiNextdotjs className="text-slate-900 w-6 h-6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-slate-900 w-6 h-6" /> },
];

// Main Devs component
const Devs = (
  <div className="flex flex-col gap-6">
     
    <h3 className="px-4 py-2 text-lg font-lora font-semibold text-slate-900 flex items-center gap-2">
      <span role="img" aria-label="computer">⚡</span> Development & Frameworks</h3>
    {devTools.map((tool) => (
      <div
        key={tool.name}
        className="flex justify-between items-center px-4 py-2 border-b border-slate-900 last:border-b-0"
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

export { Devs };