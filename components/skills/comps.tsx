// comps.tsx
import { SiDatabricks, SiLinux, SiGnubash } from "react-icons/si"; // Specific icons where available
import { FaDatabase } from "react-icons/fa"; // For Database Management Systems
import { GiBrain } from "react-icons/gi"; // For OOP (no specific icon, using a brain as a proxy)
import { ReactNode } from "react";
import { SkillsTemp } from "./skillsTemp";
interface Competency {
  name: string;
  icon: ReactNode
}

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

export const comps = (
  <SkillsTemp skills={competencies} naav="📚 Computer Science Fundamentals"></SkillsTemp>
);