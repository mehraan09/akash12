// "use client";
// import SocialLinks from "./iconss";
// import Link from "next/link";
// export default function Me() {
//   return (
//     <div className="">
//         <Link href={"/"}>
//           <p className="absolute md:left-4 left-2 right-8 top-40  pt-4 -rotate-90 mt-24 whitespace-nowrap text-2xl font-bold text-pink-600 dark:text-white cursor-pointer ">
//             AKASH AHMAD MALIK
//           </p>
//         </Link>
//        <SocialLinks></SocialLinks>
//     </div>
//   );
// }
// fixed whitespace-nowrap -rotate-90 md:pb-16 mr-16 text-xl font-bold text-pink-600  cursor-pointer


"use client";
import SocialLinks from "./iconss";
import Link from "next/link";
export default function Me() {
  return (
    <div className="fixed top-0 h-[100dvh] md:w-[4rem] w-[2.5rem] border-r z-[50] bg-[var(--bg-color)]/80 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center justify-between h-[100dvh]">
        <Link href={"/"} className="mt-36 whitespace-nowrap text-2xl font-kodeMono font-bold cursor-pointer">
          <p className="-rotate-90 z-[10] !text-pink-700">
            AKASH AHMAD MALIK
          </p>
        </Link>
        <div className="flex pb-4"><SocialLinks /></div>
      </div>
    </div>
  );
}
