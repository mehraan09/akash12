import {
  SiNextdotjs,
  SiTurborepo,
  SiPostgresql,
  SiTypescript,
  SiExpress,
  SiPrisma,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si"; // Note: `SiZod` doesn't exist, using SiZod = "Z" icon substitute (see below)

import { FaZ } from "react-icons/fa6"; // using this as a stand-in for Zod since react-icons doesn't have a Zod icon

import TechButton from "../skills/TechButton";

const techs = [
  {
    to: "/skills#devs",
    techName: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    to: "/skills#devs",
    techName: "Turborepo",
    Icon: SiTurborepo,
  },
  {
    to: "/skills#dbs",
    techName: "PostgreSQL",
    Icon: SiPostgresql,
  },
  {
    to: "/skills#langs",
    techName: "TypeScript",
    Icon: SiTypescript,
  },
  {
    to: "/skills#devs",
    techName: "Express.js",
    Icon: SiExpress,
  },
  {
    to: "/skills#dbs",
    techName: "Prisma ORM",
    Icon: SiPrisma,
  },
  {
    to: "/skills#devs",
    techName: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    to: "/skills#tools",
    techName: "Zod",
    Icon: FaZ, // fallback since Zod has no official icon
  },
  {
    to: "/skills#devops",
    techName: "Docker",
    Icon: SiDocker,
  },
];

export default function TechList() {
  return (
    <div className="flex gap-4 flex-wrap">
      {techs.map((tech, index) => (
        <TechButton
          key={index}
          to={tech.to}
          techName={tech.techName}
          Icon={tech.Icon}
          className="flex items-center gap-2 rounded-full h-8 px-4 border border-indigo-400 text-black dark:text-cyan-100 text-sm font-iansui"
        />
      ))}
    </div>
  );
}

