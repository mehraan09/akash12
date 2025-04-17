import { ReactNode } from "react";
import Link from "next/link";

interface t {
  t1: string;
  t2?: ReactNode;
  t3?: ReactNode;
  t4?: ReactNode;
  techs?: string[];
  links?: {
    l1: string;
    l2: string;
  }[];
}

export default function ThreeTexts({ t1, t2, t3, t4, links, techs }: t) {
  return (
    <div className="w-[94.8vw] md:w-[28rem]  md:border border-black rounded-lg md:m-4 dark:border-white md:text-sm/6 text-sm tracking-wide relative transition-colors duration-300">
      <div className="h-full flex flex-col justify-between p-8 relative z-10">
        <div>
          <p className="md:text-lg font-macondo font-bold dark:text-cyan-100 hover:text-red-700 dark:hover:text-red-400">
            {t1}
          </p>
          <div className="font-iansui italic dark:text-cyan-100 mt-1">
            {t2}
          </div>
        </div>

        <div className="font-iansui italic dark:text-cyan-100 flex-wrap mt-4">
          {t3}
        </div>

        <div className="font-iansui text-right text-md dark:text-cyan-100 mt-4">
          {t4}
        </div>

        <div className="flex gap-3 flex-wrap md:text-base text-xs mt-6">
          {techs &&
            techs.map((a) => (
              <div
                key={a}
                className="font-iansui h-8 px-4 border border-indigo-400 rounded-full flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-medium shadow-sm hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all duration-200"
              >
                {a}
              </div>
            ))}
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
      </div>
    </div>
  );
}
