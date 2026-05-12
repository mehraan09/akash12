import GuessGamePage from "@/components/games/guessGame";
import SnakeGame from "@/components/games/snakeGame";
import ClickSpeedGame from "@/components/games/speed";
import TypingTest from "@/components/games/typeGame";

import AdsenseAd from "@/components/ads/projectAd1";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Extras",
};

const games = [
  { label: "Typing Test", Component: TypingTest },
  { label: "Guess Game", Component: GuessGamePage },
  { label: "Click Speed", Component: ClickSpeedGame },
  { label: "Snake", Component: SnakeGame },
];

export default function ExtrasPage() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* ========================================= */}
      {/* FIXED LEFT ADS PANEL */}
      {/* ========================================= */}

      <aside
        className=" fixed left-16 top-0 z-20 hidden md:flex
 h-screen w-[20rem] border-r flex-col bg-transparent
        "
      >

        <div
          className=" flex-1 overflow-hidden flex items-center justify-center p-4
          "
        >
          <AdsenseAd />
        </div>
      </aside>

      <main
        className="h-screen overflow-x-auto overflow-y-hidden flex small-scrollbar md:ml-[24rem]
        "
      >
        {games.map(({ label, Component }, i) => (
          <section
            key={label}
            className=" relative h-screen w-[92vw] md:w-[22rem] shrink-0 border-r flex flex-col"
          >
            {/* Panel Header */}

            <div
              className=" px-5 pt-[3dvh] pb-3 flex flex-col gap-1 font-jetB
              "
            >
              <span
                className=" text-[9px] tracking-[0.25em] uppercase opacity-40
                "
              >
                — {String(i + 1).padStart(2, "0")}
              </span>

              <h2
                className=" pl-3 border-l-2 text-sm font-bold leading-snug
                "
              >
                {label}
              </h2>
            </div>

            <div className="flex-1 overflow-hidden">
              <Component />
            </div>
          </section>
        ))}

        <section
          className=" h-screen w-[92vw] md:w-[22rem] shrink-0 border-r flex flex-col items-center justify-center gap-4 font-jetB"
        >
          <Image
            src="/image.png"
            width={180}
            height={180}
            alt="Thank You"
            style={{
              filter: "var(--img-filter)",
            }}
            className="opacity-80"
          />

          <div
            className="
              flex flex-col items-center gap-1
            "
          >
            <span
              className="
                text-[9px] tracking-[0.25em] uppercase opacity-40
              "
            >
              — Thanks
            </span>

            <p
              className=" italic font-playfair text-sm opacity-50"
            >
              for visiting.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}