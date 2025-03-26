// comps.tsx
import { SiDatabricks, SiLinux, SiGnubash } from "react-icons/si"; // Specific icons where available
import { FaDatabase } from "react-icons/fa"; // For Database Management Systems
import { GiBrain } from "react-icons/gi"; // For OOP (no specific icon, using a brain as a proxy)
import { ReactNode } from "react";

// Define a type for competency data
interface Competency {
  name: string;
  icon: ReactNode
}

// Competencies data as an array
const competencies: Competency[] = [
  {
    name: "Data Structures & Algorithms",
    icon: <SiDatabricks className="text-slate-900 w-6 h-6" />, // Proxy for data structures
  },
  {
    name: "Operating Systems",
    icon: <SiLinux className="text-slate-900 w-6 h-6" />, // Linux as a proxy for OS
  },
  {
    name: "Object-Oriented Programming",
    icon: <GiBrain className="text-slate-900 w-6 h-6" />, // Brain as a conceptual proxy
  },
  {
    name: "Database Management Systems",
    icon: <FaDatabase className="text-slate-900 w-6 h-6" />, // Generic database icon
  },
  {
    name: "Shell Scripting",
    icon: <SiGnubash className="text-slate-900 w-6 h-6" />, // Bash icon for shell scripting
  },
];

// Main comps constant
export const comps = (
  <div className="flex flex-col gap-6">
    <h3 className="px-4 py-2 text-lg font-lora font-semibold text-slate-900 flex items-center gap-2">
      <span role="img" aria-label="computer">📚</span>  Computer Science Fundamentals
    </h3>
    {competencies.map((comp) => (
      <div
        key={comp.name}
        className="flex justify-between items-center px-4 py-2 border-b border-slate-900 last:border-b-0"
      >
        <div className="flex items-center gap-2">
          {comp.icon}
          <span className="text-slate-900 font-bold text-sm md:text-base">
            {comp.name}
          </span>
        </div>
      </div>
    ))}
  </div>
);