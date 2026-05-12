import GuessGamePage from "@/components/games/guessGame";
import SnakeGame from "@/components/games/snakeGame";
import ClickSpeedGame from "@/components/games/speed";
import TypingTest from "@/components/games/typeGame";
import AdsenseAd from "@/components/ads/projectAd1";
import FluidAd from "@/components/ads/fullwidth";

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
    <div className="min-h-screen bg-background">
      {/* Mobile Ad */}
      <div className="md:hidden w-full border-b px-2 py-3">
        <div className="flex justify-center">
          <FluidAd />
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside
          className="
            hidden md:flex
            fixed left-0 top-0 z-20
            h-screen w-[22rem]
            items-center justify-center px-4
          "
        >
          <AdsenseAd />
        </aside>
{/* Main Content */}
        <main
          className="
            flex
            overflow-x-auto
            overflow-y-hidden
            small-scrollbar
            md:ml-[22rem]
            w-full
          "
        >
          {games.map(({ label, Component }, i) => (
            <section
              key={label}
              className="
                relative
                min-h-screen
                w-full
                md:w-[22rem]
                shrink-0
                border-l
                flex flex-col
              "
            >
              {/* Header */}
              <div className="px-5 pt-6 pb-3 flex flex-col gap-1 font-jetB">
                <span className="text-[9px] tracking-[0.25em] uppercase opacity-40">
                  — {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="pl-3 border-l-2 text-sm font-bold leading-snug">
                  {label}
                </h2>
              </div>

              {/* Game */}
              <div className="flex-1 overflow-auto">
                <Component />
              </div>
            </section>
          ))}

          {/* End Section */}
          <section
            className="
              min-h-screen
              w-full
              md:w-[22rem]
              shrink-0
              border-l
              flex flex-col
              items-center
              justify-center
              gap-4
              px-6
              text-center
              font-jetB
            "
          >
            <Image
              src="/image.png"
              width={180}
              height={180}
              alt="Thank You"
              style={{
                filter: "var(--img-filter)",
              }}
              className="opacity-80 w-[140px] md:w-[180px] h-auto"
            />

            <div className="flex flex-col items-center gap-1">
              <span className="text-[9px] tracking-[0.25em] uppercase opacity-40">
                — Thanks
              </span>

              <p className="italic font-playfair text-sm opacity-50">
                for visiting.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}