import { ReactNode } from "react";
import { SiMongodb, SiMysql, SiPostgresql, SiPrisma } from "react-icons/si";
import { SkillsTemp } from "./skillsTemp";
interface Database {
  name: string;
  icon: ReactNode
}
const databases: Database[] = [
  { name: "MongoDB", icon: <SiMongodb className=" w-6 h-6" /> },
  { name: "MySQL", icon: <SiMysql className=" w-6 h-6" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className=" w-6 h-6" /> },
  { name: "Prisma", icon: <SiPrisma className=" w-6 h-6" /> },
];

export default function D() {
 return     <SkillsTemp skills={databases} naav="💾 Databases"></SkillsTemp>
}