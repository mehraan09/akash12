"use client"
import { usePathname } from 'next/navigation'
import RightArrow from './rightArrow'
import Link from 'next/link'

const navs = [
    { nav: "Home", route: "/", color: "bg-red-300" },
    { nav: "About Me", route: "/about", color: "bg-blue-300" },
    { nav: "Education", route: "/ed", color: "bg-green-300" },
    { nav: "Projects", route: "/pros", color: "bg-yellow-300" },
    { nav: "Skills", route: "/skill", color: "bg-purple-300" },
    { nav: "Experience", route: "/exp", color: "bg-pink-300" },
    { nav: "Extra Curriculars", route: "/curric", color: "bg-orange-300" },
    { nav: "Extras", route: "/extras", color: "bg-teal-300" }
];

export default function NavBar() {
  const pathname = usePathname()

  return (
    <div className="relative md:w-[22vw] md:border-r border-black dark:border-white z-50 transition-colors duration-300">
      <div className="md:ml-2 mt-6 w-0 md:w-[22vw] gap-2 md:gap-0 md:p-3 font-semibold font-lora text-sm z-0">
        <div className="hidden md:flex flex-col">
          {navs.map((n, i) => (
            <div className="flex items-center md:justify-start justify-center mb-4" key={i}>
                <Link href={n.route}>
                <div className='flex '>
              <div
                className={`w-5 h-5 hidden md:flex items-center justify-center m-1 mr-4 font-montserrat text-xs ${n.color} border border-black dark:border-white `}
              >
                {i + 1}
              </div>
              <span
                className={`tracking-widest font-instru p-1 m-0 transition-colors duration-200 ${
                  pathname === n.route
                    ? 'text-red-500'
                    : 'text-black dark:text-white hover:text-red-500'
                }`}
              >
                {n.nav}
              </span>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export function Arrow () {
const pathname = usePathname()
const index = navs.findIndex((n) => n.route === pathname);
  return <RightArrow linkk={ navs[(index+1)%navs.length].route || "/"}></RightArrow>
}