import Image from "next/image";

interface InfoCardProps {
  img?: string;
  txt: string;
  txt2?: string;
  txt3?: string;
  txt4?: string;
  txt5? : string
}

export default function InfoCard({ img, txt, txt2, txt3, txt4 , txt5 }: InfoCardProps) {
  return (
    <div className="w-[94.8vw] md:w-[28rem]  md:border border-black rounded-lg md:m-4 dark:border-white md:text-sm/6 text-sm tracking-wide relative transition-colors duration-300">
      <div className="h-full flex flex-col justify-between py-16 px-6 relative z-10 text-wrap">

      <p className="flex md:text-lg font-macondo font-bold dark:text-cyan-100 hover:text-red-700 dark:hover:text-red-400 border-b-2 border-blue-300 pb-1 w-fit">
            {txt}
      </p>

        <div className="flex justify-center items-center">
         { img && <Image
            src={img}
            width={200}
            height={200}
            alt="Profile Image"
            quality={100}
            className="rounded-full object-cover transition-transform duration-500 hover:scale-110"
          />
         }
          <p className="shrink text-gray-900 text-sm font-iansui">{txt2}</p>

        </div>

        <div>
        <p className="text-gray-900  leading-relaxed font-iansui">{txt3}</p>
        </div>


        <div className="">
          {txt4 && (
            <p className="text-gray-900  leading-relaxed font-iansui">{txt4}</p>
          )}
        </div>


        <div>
        <p className="text-gray-900  leading-relaxed font-iansui">{txt5}</p>
        </div>
        {/* <div className="">
          {txt5 && (
            <p className="text-gray-900  leading-relaxed font-iansui">{txt5}</p>
          )}
        </div> */}
          </div>
        </div>

  );
}
