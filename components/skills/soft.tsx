import { GiBrain, GiTeamIdea } from "react-icons/gi"; // Proxy icons for abstract skills
import { FaComments, FaLightbulb , FaBookOpen} from "react-icons/fa"; // Communication and problem-solving proxies
import { ReactNode } from "react";
import { SkillsTemp } from "./skillsTemp";
interface SoftSkill {
  name: string;
  icon: ReactNode
}
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
  {
    name : "Continuous Learning" , 
    icon: <FaBookOpen className="text-slate-900 w-6 h-6" />
  },
];
export const soft = (
  <SkillsTemp skills={softSkills} naav="🤝 Soft Skills" ></SkillsTemp>
);