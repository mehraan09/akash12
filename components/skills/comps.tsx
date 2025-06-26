import { ReactNode } from "react";
import { SiDatabricks, SiLinux, SiGnubash } from "react-icons/si";
import { FaDatabase, FaMicrochip } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import SkillsTemp from "./skillsTemplate";
import TechButton from "./TechButton";

const fundamentals: ReactNode[] = [
  <TechButton key="dsa" to="#" techName="Data Structures & Algorithms" Icon={SiDatabricks} />,
  <TechButton key="os" to="#" techName="Operating Systems" Icon={SiLinux} />,
  <TechButton key="oop" to="#" techName="Object Oriented Programming" Icon={GiBrain} />,
  <TechButton key="dbms" to="#" techName="Database Management System" Icon={FaDatabase} />,
  <TechButton key="shell" to="#" techName="Shell Scripting" Icon={SiGnubash} />,
  <TechButton key="compiler" to="#" techName="Compiler Design" Icon={MdOutlineDeveloperBoard} />,
  <TechButton key="embedded" to="#" techName="Embedded Systems" Icon={FaMicrochip} />,
];

export default function F() {
  return <SkillsTemp naav="📚 CS Fundamentals" skills={fundamentals} />;
}
