import { SiNextdotjs, SiTurborepo, SiPostgresql, SiTypescript, SiExpress, SiPrisma, SiTailwindcss } from "react-icons/si";
import TechButton from '../skills/TechButton';

// add respective path to skills page 
// also add #s in skills page 
const techs = [
  {
    to: "skill",
    techName: "NextJS",
    Icon: SiNextdotjs,
  },
  {
    to: "#",
    techName: "Turborepo",
    Icon: SiTurborepo,
  },
  {
    to: "#",
    techName: "PostgreSQL",
    Icon: SiPostgresql,
  },
  {
    to: "#",
    techName: "TypeScript",
    Icon: SiTypescript,
  },
  {
    to: "#",
    techName: "Express",
    Icon: SiExpress,
  },
  {
    to: "#",
    techName: "Prisma ORM",
    Icon: SiPrisma,
  },
  {
    to: "#",
    techName: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
];

export default function TechList() {
  return (
    <div className="flex gap-4 flex-wrap ">
      {techs.map((tech, index) => (
        <TechButton
          key={index}
          to={tech.to}
          techName={tech.techName}
          Icon={tech.Icon}
          className="flex font-iansui gap-4 flex-wrap rounded-full h-8 px-4 border border-indigo-400 items-center text-sm"
        />
      ))}
    </div>
  );
}
