import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
  SiVercel,
  SiRender,
  SiPrisma,
  SiJsonwebtokens,
  SiReddit,
} from "react-icons/si";
import TechButton from "../skills/TechButton";

const creatorDashboardTechs = [
  {
    to: "/skills#langs",
    techName: "React",
    Icon: SiReact,
  },
  {
    to: "/skills#devs",
    techName: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    to: "/skills#devs",
    techName: "Vercel",
    Icon: SiVercel,
  },
  {
    to: "/skills#devs",
    techName: "Node.js",
    Icon: SiNodedotjs,
  },
  {
    to: "/skills#devs",
    techName: "Express",
    Icon: SiExpress,
  },
  {
    to: "/skills#tools",
    techName: "JWT",
    Icon: SiJsonwebtokens,
  },
  {
    to: "/skills#devs",
    techName: "Render",
    Icon: SiRender,
  },
  {
    to: "/skills#dbs",
    techName: "MongoDB",
    Icon: SiMongodb,
  },
  {
    to: "/skills#dbs",
    techName: "Prisma ORM",
    Icon: SiPrisma,
  },
  {
    to: "/skills#dbs",
    techName: "Reddit API",
    Icon: SiReddit,
  },
  {
    to: "/skills#devops",
    techName: "Docker",
    Icon: SiDocker,
  },
];

export default function CreatorDashboardTechList() {
  return (
    <div className="flex gap-4 flex-wrap">
      {creatorDashboardTechs.map((tech, index) => (
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
