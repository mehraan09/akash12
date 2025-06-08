"use client";
import SocialLinks from "./iconss";
import Link from "next/link";
export default function Me() {
  return (
    <div className="">
        <Link href={"/"}>
          <p className="absolute md:left-4 left-2 right-8 top-40  pt-4 -rotate-90 mt-24 whitespace-nowrap text-2xl font-bold text-pink-600 dark:text-white cursor-pointer ">
            AKASH AHMAD MALIK
          </p>
        </Link>
       <SocialLinks></SocialLinks>
    </div>
  );
}
// fixed whitespace-nowrap -rotate-90 md:pb-16 mr-16 text-xl font-bold text-pink-600  cursor-pointer

// "use client";
// import SocialLinks from "./iconss";
// import Link from "next/link";
// export default function Me() {
//   return (
//     <div className="h-[33%] flex justify-center items-center mt-4 flex-wrap">
//         <Link href={"/"}>
//           {/* <p className="p-4 bg-red-100 absolute md:left-4 left-2 right-8 top-40 md:top-36 pt-4 -rotate-90 mt-24 whitespace-nowrap text-2xl font-bold text-pink-600 dark:text-white cursor-pointer ">
//             AKASH AHMAD MALIK
//           </p> */}
//           <p className="relative whitespace-nowrap -rotate-90 text-pink-600  cursor-pointer text-2xl font-bold">
//             AKASH AHMAD MALIK
//           </p>
//         </Link>
//       <SocialLinks></SocialLinks>
//     </div>
//   );
// }
