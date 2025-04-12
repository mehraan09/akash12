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
    icon: <GiBrain className=" w-6 h-6" />, // Brain for analytical thinking
  },
  {
    name: "Problem-solving",
    icon: <FaLightbulb className=" w-6 h-6" />, // Lightbulb for problem-solving
  },
  {
    name: "Communication Skills",
    icon: <FaComments className=" w-6 h-6" />, // Comments for communication
  },
  {
    name: "Teamwork",
    icon: <GiTeamIdea className=" w-6 h-6" />, // Team idea for teamwork
  },
  {
    name : "Continuous Learning" , 
    icon: <FaBookOpen className=" w-6 h-6" />
  },
];

export default function S() {
 return   <SkillsTemp skills={softSkills} naav="🤝 Soft Skills" ></SkillsTemp>

}