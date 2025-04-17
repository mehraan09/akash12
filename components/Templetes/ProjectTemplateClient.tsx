"use client";
import { ReactNode, useState  } from "react";
import Link from "next/link";
import { Issue } from "@/lib/github";
import { IoIosArrowDown } from "react-icons/io";

interface t {
  pname: string;
  date: string;
  desc?: React.ReactNode;
  techs?: ReactNode;
  links?: {
    l1: string;
    l2: string;
  }[];
  issues?: Issue[] | null;
}

export default function ProjectTemplateClient({
  pname,
  date,
  desc,
  links,
  techs,
  issues,
}: t) {
  const [a, setA] = useState<"hidden" | "flex">("hidden");

  const toggleMenu = () => {

    setA((prev) => (prev === "hidden" ? "flex" : "hidden"));
  };

  return (
    <div className="w-[94.8vw] md:w-[28rem] md:border border-black rounded-lg md:m-4 dark:border-white md:text-sm/6 text-sm tracking-wide relative transition-colors duration-300">
      <div className="h-full flex flex-col justify-between p-8 relative z-10">
        <div>
          <p className="md:text-lg font-macondo font-bold dark:text-cyan-100 hover:text-red-700 dark:hover:text-red-400">
            {pname}
          </p>
          <div className="font-iansui italic dark:text-cyan-100 mt-1">{date}</div>
        </div>

        <div className="font-iansui italic dark:text-cyan-100 flex-wrap mt-4">{desc}</div>

        <div className="flex gap-3 flex-wrap md:text-base text-xs mt-6">
          {techs}
        </div>

        <div className="flex gap-3 flex-wrap flex-row-reverse mt-4">
          {links &&
            links.map((a) => (
              <Link key={a.l1} href={a.l1}>
                <div className="h-8 px-3 border border-slate-600 dark:border-slate-400 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-medium shadow-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200 cursor-pointer">
                  {a.l2}
                </div>
              </Link>
            ))}
        </div>

        <div className="flex flex-wrap gap-4 p-4">
          <button onClick={toggleMenu}>
            <p className="flex text-sm justify-center items-center font-semibold text-gray-800 font-macondo gap-2">
              Want to Contribute! <IoIosArrowDown />
            </p>
          </button>

  {(!issues || issues.length === 0 ) ? (
  <p className={`${a} text-gray-600 font-iansui`}>
    No issues found in the current GitHub repo. Kindly check other repos.
  </p>
) : (
  issues.slice(0,3).map((i: Issue, j: number) => (
    <div key={j} >
      <a href={i.url} className={`${a}`}>
      <p className="text-md font-iansui text-gray-800 mb-2 ">
        {j + 1}. {i.title}
      </p>
      <div className="flex gap-4">
        <h5
          className={`text-sm font-medium ${
            i.state === "open" ? "text-green-600" : "text-red-600"
          }`}
        >
          {i.state.toUpperCase()}
        </h5>
        <h6 className="text-xs text-gray-500">
          Created: {i.createdAt}
        </h6>
      </div>
      </a>
    </div>
  ))
)}

        </div>
      </div>
    </div>
  );
}
