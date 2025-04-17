// DevToolsSection.tsx
import { ReactNode } from "react";
import { SiReact, SiNodedotjs, SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import  SkillsTemp  from "./SkillsTemp";
import TechButton from "./TechButton";

const devTools: ReactNode[] = [
  <TechButton key="react" to="pros#college" techName="React" Icon={SiReact} />,
  <TechButton key="node" to="pros#drift" techName="NodeJS" Icon={SiNodedotjs}  />,
  <TechButton key="express" to="pros#drift" techName="ExpressJS" Icon={SiExpress} />,
  <TechButton key="next" to="pros#drift" techName="NextJS" Icon={SiNextdotjs} />,
  <TechButton key="tailwind" to="pros#drift" techName="Tailwind CSS" Icon={SiTailwindcss} />,
];

export default function DevToolsSection() {
  return <SkillsTemp naav="⚡ Development & Frameworks" skills={devTools} />;
}
