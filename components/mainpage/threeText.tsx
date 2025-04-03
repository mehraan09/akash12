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
    <div className="w-[94.8vw] md:w-[28rem] h-full md:border-r border-black md:text-sm/6 text-sm tracking-wide relative bg-white-500 ">
      
      <div className="h-full flex flex-col justify-between p-8 relative z-10">
        <div className="">
          <p className="md:text-lg font-macondo hover:text-red-600 font-bold">
            {t1}
          </p>
          <div className="font-lora text-slate-600 italic">{t2}</div>
        </div>
        <div className="font-iansui text-slate-500 flex-wrap">{t3}</div>
        <div className="font-iansui text-gray-800 text-right text-md italic">{t4}</div>
        <div className="flex gap-4 flex-wrap md:text-base text-xs">
          {techs
            ? techs.map((a) => (
                <div
                  key={a}
                  className="h-8 px-4 border border-indigo-400 rounded-full flex items-center justify-center text-indigo-600 font-semibold shadow-sm hover:bg-indigo-100 transition-all duration-200"
                >
                  {a}
                </div>
              ))
            : null}
        </div>
        <div className="flex gap-4 flex-wrap flex-row-reverse">
          {links
            ? links.map((a) => (
                <Link key={a.l1} href={a.l1}>
                  <div className="h-8 px-3 border border-slate-600 rounded-full flex items-center justify-center text-blue-700 font-medium shadow-sm hover:bg-blue-100 transition-all duration-200 cursor-pointer">
                    {a.l2}
                  </div>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}