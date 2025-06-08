"use client"
import { usePathname } from 'next/navigation'
import RightArrow from './rightArrow'
import Link from 'next/link'
import { useState } from 'react'

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
          {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed bottom-4 right-4 text-xl p-3 rounded-full shadow-lg z-50`}
        aria-label="Toggle navigation"
      >
     ☰
      </button>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden fixed bottom-20 right-4 border border-black dark:border-white rounded-lg p-4 w-64 shadow-lg z-40">
          {navs.map((n, i) => {
            const isActive = pathname === n.route;
            return (
              <Link
                href={n.route}
                key={i}
                onClick={() => setIsOpen(false)} // close menu on click
              >
                <div className="flex items-center py-2">
                  <div
                    className={`w-5 h-5 flex items-center justify-center mr-3 font-bold text-xs ${n.color} border border-black dark:border-white`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`font-semibold text-sm ${
                      isActive
                        ? 'text-red-500'
                        : 'text-black dark:text-white hover:text-red-500'
                    }`}
                  >
                    {n.nav}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      
       <div className="md:m-4 max-h-[100dvh] w-[94.8vw] md:w-[24rem] rounded-lg md:border border-black dark:border-white z-50 transition-colors duration-300">
      <div className="md:ml-2 mt-4 w-0 md:w-[22vw] gap-2 md:gap-0 md:p-3 text-sm z-0">
        <div className="hidden md:flex flex-col">
          {navs.map((n, i) => (
            <div className="flex items-center md:justify-start justify-center mb-4" key={i}>
                <Link href={n.route}>
                <div className='flex '>
              <div
                className={`w-5 h-5 hidden md:flex items-center justify-center m-1 mr-4 font-bold text-xs ${n.color} border border-black dark:border-white `}
              >
                {i + 1}
              </div>
              <span
                className={`tracking-wide font-iansui font-extrabold p-1 m-0 transition-colors duration-200 ${
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

      </>
   
  )
}


export function Arrow () {
const pathname = usePathname()
const index = navs.findIndex((n) => n.route === pathname);
  return <RightArrow linkk={ navs[(index+1)%navs.length].route || "/"}>{navs[(index+1)%navs.length].nav}</RightArrow>
}