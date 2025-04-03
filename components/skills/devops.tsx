import { ReactNode } from "react";
import { DiAws, DiDocker, DiRedis, DiDatabase, DiWebplatform } from "react-icons/di"; // Adjust icons as needed
import { SkillsTemp } from "./skillsTemp";

interface Skill {
  name: string;
  icon: ReactNode;
}

const devops: Skill[] = [
  { name: "AWS", icon: <DiAws className="text-slate-900 w-6 h-6" /> },
  { name: "Docker", icon: <DiDocker className="text-slate-900 w-6 h-6" /> },
  { name: "Monorepos", icon: <DiDatabase className="text-slate-900 w-6 h-6" /> }, 
  { name: "Redis", icon: <DiRedis className="text-slate-900 w-6 h-6" /> },
  { name: "WebSockets", icon: <DiWebplatform className="text-slate-900 w-6 h-6" /> },
];

export default function D() {
  return <SkillsTemp naav="🖥️ DevOps Tools" skills={devops} />;
}
