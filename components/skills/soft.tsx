import { ReactNode } from "react";
import { GiBrain, GiTeamIdea } from "react-icons/gi";
import { FaComments, FaLightbulb, FaBookOpen } from "react-icons/fa";
import SkillsTemp from "./skillsTemplate";

import TechButton from "./TechButton";

const softSkills: ReactNode[] = [
  <TechButton key="thinking" to="#" techName="Analytical Thinking" Icon={GiBrain} />,
  <TechButton key="problem" to="#" techName="Problem-solving" Icon={FaLightbulb} />,
  <TechButton key="comm" to="#" techName="Communication" Icon={FaComments} />,
  <TechButton key="team" to="#" techName="Teamwork" Icon={GiTeamIdea} />,
  <TechButton key="learning" to="#" techName="Continuous Learning" Icon={FaBookOpen} />,
];

export default function SoftSkillsSection() {
  return <SkillsTemp naav="🤝 Soft Skills" skills={softSkills} />;
}
