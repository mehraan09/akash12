import { FaLongArrowAltRight } from "react-icons/fa";

export default function RightArrow({
  linkk,
  children,
}: {
  linkk: string;
  children: string;
}) {
  return (
    <div className="h-[5rem] w-[5rem] md:w-[28rem] md:h-full rotate-90 md:rotate-0 flex flex-col justify-center items-center">
      <a href={linkk} className="relative w-20 h-20 group animate-bounce-x">
        {/* SVG for circular text */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
              fill="none"
            />
          </defs>
          <text
            className="fill-gray-900 dark:fill-gray-900 text-[8px] font-bold"
            style={{ letterSpacing: "1px" }}
          >
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              {children}
            </textPath>
          </text>
        </svg>

        {/* Circular button with arrow inside */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          h-14 w-14 rounded-full border-2 border-gradient-to-r from-green-400 to-blue-500
           flex items-center justify-center 
           group-hover:scale-150 transition-all duration-300 shadow-xl"
        >
          <FaLongArrowAltRight size={24} className="text-gray-900 dark:text-gray-900 hover:scale-120" />
        </div>
      </a>
    </div>
  );
}
