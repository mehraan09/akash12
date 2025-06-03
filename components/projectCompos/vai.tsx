import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiDocker } from "react-icons/si";
import TechButton from "../skills/TechButton";

const creatorDashboardTechs = [
  {
    to: "/skills#react",
    techName: "React",
    Icon: SiReact,
  },
  {
    to: "/skills#nodejs",
    techName: "Node.js",
    Icon: SiNodedotjs,
  },
  {
    to: "/skills#express",
    techName: "Express",
    Icon: SiExpress,
  },
  {
    to: "/skills#mongodb",
    techName: "MongoDB",
    Icon: SiMongodb,
  },
  {
    to: "/skills#docker",
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
