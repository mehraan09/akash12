import {
  SiReact,
  SiCloudflare,
  SiPostgresql,
  SiTypescript,
  SiPrisma,
  SiTailwindcss,
  SiZenn, // Used as a placeholder for Zod
  SiGithub, // For GitHub CI/CD
} from "react-icons/si";

import { FaKey } from "react-icons/fa"; // For JWT representation
import TechButton from "../skills/TechButton";

// Hono doesn't have a dedicated icon in react-icons – fallback
import { MdOutlineHttp } from "react-icons/md"; // Fallback for Hono

const techs = [
  {
    to: "/skills#langs",
    techName: "React",
    Icon: SiReact,
  },
  {
    to: "/skills#langs",
    techName: "Zod",
    Icon: SiZenn, // Placeholder for Zod
  },
  {
    to: "/skills#tools",
    techName: "Debouncing",
    Icon: MdOutlineHttp, // Fallback (tooltip-only if no icon)
  },
  {
    to: "/skills#dbs",
    techName: "Cloudflare Workers",
    Icon: SiCloudflare,
  },
  {
    to: "/skills#dbs",
    techName: "Hono",
    Icon: MdOutlineHttp, // Fallback icon
  },
  {
    to: "/skills#dbs",
    techName: "PostgreSQL",
    Icon: SiPostgresql,
  },
  {
    to: "/skills#dbs",
    techName: "Prisma ORM",
    Icon: SiPrisma,
  },
  {
    to: "/skills#langs",
    techName: "TypeScript",
    Icon: SiTypescript,
  },
  {
    to: "/skills#devs",
    techName: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    to: "/skills#tools",
    techName: "JWT Auth",
    Icon: FaKey, // Key icon to represent secure auth
  },
  {
    to: "/skills#tools",
    techName: "GitHub CI/CD Workflows",
    Icon: SiGithub, // GitHub logo to represent workflows
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
