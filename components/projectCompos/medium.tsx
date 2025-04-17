import {
    SiNextdotjs,
    SiTurborepo,
    SiPostgresql,
    SiTypescript,
    SiExpress,
    SiPrisma,
    SiTailwindcss,
  } from "react-icons/si";
  import TechButton from "../skills/TechButton";
  
  const techs = [
    {
      to: "/skills#nextjs",
      techName: "NextJS",
      Icon: SiNextdotjs,
    },
    {
      to: "/skills#turborepo",
      techName: "Turborepo",
      Icon: SiTurborepo,
    },
    {
      to: "/skills#postgresql",
      techName: "PostgreSQL",
      Icon: SiPostgresql,
    },
    {
      to: "/skills#typescript",
      techName: "TypeScript",
      Icon: SiTypescript,
    },
    {
      to: "/skills#express",
      techName: "Express",
      Icon: SiExpress,
    },
    {
      to: "/skills#prisma",
      techName: "Prisma ORM",
      Icon: SiPrisma,
    },
    {
      to: "/skills#tailwind",
      techName: "Tailwind CSS",
      Icon: SiTailwindcss,
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
  