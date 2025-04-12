import { FaLongArrowAltRight } from "react-icons/fa";

export default function RightArrow({ linkk }: { linkk: string }) {
  return (
    <div className="h-[5rem] w-[5rem] md:w-[28rem] md:h-full rotate-90 md:rotate-0 flex flex-col justify-center items-center">
      <div className="flex animate-bounce-x">
        <a href={linkk} className="group">
          <div className="h-12 w-12 border-2 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-45 
            dark:bg-black 
            border-gradient-to-r from-green-400 to-blue-500 
            group-hover:bg-gradient-to-br from-blue-500 to-green-400">
            <FaLongArrowAltRight
              size={40}
              className="text-gray-700 dark:text-gray-200 transition-colors duration-300"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

