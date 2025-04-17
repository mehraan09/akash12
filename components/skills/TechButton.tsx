import { IconType } from "react-icons";

interface Inputs {
  to: string;
  techName?: string;
  Icon: IconType;
  className? : string 
}

export default function TechButton({ to, techName, Icon , className }: Inputs) {
  const defaultClass = "flex flex-col items-center text-black dark:text-cyan-100 text-md gap-2";
  return (
      <a href={to} className={className ? className :  defaultClass}>
        <Icon className="w-5 h-5" />
        <span className="">{techName}</span>
      </a>    
  );
}