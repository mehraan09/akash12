// components/LeetCodeStats.tsx
import React from "react";

type Props = {
  solved: number;
  total: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  attempting: number;
};

export default function LeetCodeStats({
  solved,
  total,
  easySolved,
  easyTotal,
  mediumSolved,
  mediumTotal,
  hardSolved,
  hardTotal,
  attempting,
}: Props) {
  const easyPercent = (easyTotal / total) * 100;
  const mediumPercent = (mediumTotal / total) * 100;
  const hardPercent = (hardTotal / total) * 100;

  const easyEnd = easyPercent;
  const mediumEnd = easyEnd + mediumPercent;
  const hardEnd = mediumEnd + hardPercent;

  return (
    <div className="bg-[#ebfffe] text-black p-4 md:p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-center shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 w-full max-w-3xl mx-auto">
      
      {/* Multi-colored Circular Chart */}
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0">
        <div
          className="absolute inset-1 rounded-full shadow-inner"
          style={{
            background: `conic-gradient(
              #3b82f6 0% ${easyEnd}%,     
              #eab308 ${easyEnd}% ${mediumEnd}%, 
              #ef4444 ${mediumEnd}% ${hardEnd}%
            )`,
          }}
        ></div>
        <div className="absolute inset-[5px] sm:inset-[6px] bg-[#ebfffe] rounded-full flex flex-col justify-center items-center shadow-md">
          <span className="text-xl sm:text-2xl font-bold">
            {solved}
            <span className="text-gray-400 font-normal text-xs sm:text-sm">/{total}</span>
          </span>
          <span className="text-green-500 text-xs sm:text-sm">Solved</span>
          <span className="text-gray-500 text-[10px] sm:text-xs">{attempting} Attempting</span>
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="flex flex-col gap-3 w-full">
        <div className="px-3 py-2 sm:px-4 rounded-md flex justify-between items-center shadow-sm border border-gray-100">
          <span className="text-blue-500 font-semibold">Easy</span>
          <span className="text-sm ">{easySolved}/{easyTotal}</span>
        </div>
        <div className="px-3 py-2 sm:px-4 rounded-md flex justify-between items-center shadow-sm border border-gray-100">
          <span className="text-yellow-500 font-semibold">Med.</span>
          <span className="text-sm ">{mediumSolved}/{mediumTotal}</span>
        </div>
        <div className="px-3 py-2 sm:px-4 rounded-md flex justify-between items-center shadow-sm border border-gray-100">
          <span className="text-red-500 font-semibold">Hard</span>
          <span className="text-sm ">{hardSolved}/{hardTotal}</span>
        </div>
      </div>
    </div>
  );
}
