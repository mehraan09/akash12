import { SiExpress, SiMongodb, SiReact } from "react-icons/si";
import TechButton from "../skills/TechButton";

const collegeDBMSTechs = [
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
    to: "/skills#react",
    techName: "React",
    Icon: SiReact,
  },
];

export default function CollegeDBMSTechList() {
  return (
    <div className="flex gap-4 flex-wrap">
      {collegeDBMSTechs.map((tech, index) => (
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
