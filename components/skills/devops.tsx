// DevOpsSection.tsx
import { ReactNode } from "react";
import { DiAws, DiDocker, DiRedis, DiDatabase, DiWebplatform } from "react-icons/di";
import SkillsTemp  from "./SkillsTemp";
import TechButton from "./TechButton";

const devops: ReactNode[] = [
  <TechButton key="aws" to="#" techName="AWS" Icon={DiAws} />,
  <TechButton key="docker" to="#" techName="Docker" Icon={DiDocker} />,
  <TechButton key="monorepos" to="#" techName="Monorepos" Icon={DiDatabase} />,
  <TechButton key="redis" to="#" techName="Redis" Icon={DiRedis} />,
  <TechButton key="websockets" to="#" techName="WebSockets" Icon={DiWebplatform} />,
];

export default function DevOpsSection() {
  return <SkillsTemp naav="🛠️ DevOps Tools" skills={devops} />;
}
