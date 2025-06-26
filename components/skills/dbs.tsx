import { ReactNode } from "react";
import { SiMongodb, SiMysql, SiPostgresql, SiPrisma } from "react-icons/si";
import SkillsTemp from "./skillsTemplate";

import TechButton from "./TechButton";

const dbs: ReactNode[] = [
  <TechButton key="mongo" to="#" techName="MongoDB" Icon={SiMongodb} />,
  <TechButton key="mysql" to="#" techName="MySQL" Icon={SiMysql} />,
  <TechButton key="pg" to="#" techName="PostgreSQL" Icon={SiPostgresql} />,
  <TechButton key="prisma" to="#" techName="Prisma" Icon={SiPrisma} />,
];

export default function DatabasesSection() {
  return <SkillsTemp naav="💾 Databases" skills={dbs} idd="dbs" />;
}
