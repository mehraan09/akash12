import { ReactNode } from "react";
import { DiVisualstudio } from "react-icons/di";
import { SiUbuntu, SiGithub } from "react-icons/si";
import SkillsTemp from "./SkillsTemp";
import TechButton from "./TechButton";

const tools: ReactNode[] = [
  <TechButton key="vscode" to="#" techName="VS Code" Icon={DiVisualstudio} />,
  <TechButton key="ubuntu" to="#" techName="Ubuntu" Icon={SiUbuntu} />,
  <TechButton key="github" to="#" techName="GitHub" Icon={SiGithub} />,
];

export default function ToolsSection() {
  return <SkillsTemp naav="🧰 Tools & Platforms" skills={tools} />;
}
