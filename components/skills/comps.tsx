import { ReactNode } from "react";
import { SiDatabricks, SiLinux, SiGnubash } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import SkillsTemp from "./skillsTemplate";

import TechButton from "./TechButton";

const fundamentals: ReactNode[] = [
  <TechButton key="dsa" to="#" techName="DSA" Icon={SiDatabricks} />,
  <TechButton key="os" to="#" techName="Operating Systems" Icon={SiLinux} />,
  <TechButton key="oop" to="#" techName="OOP" Icon={GiBrain} />,
  <TechButton key="dbms" to="#" techName="DBMS" Icon={FaDatabase} />,
  <TechButton key="shell" to="#" techName="Shell Scripting" Icon={SiGnubash} />,
];

export default function F() {
  return <SkillsTemp naav="📚 CS Fundamentals" skills={fundamentals} ></SkillsTemp>;
}
