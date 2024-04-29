import React from "react";
import { Allura, Corinthia } from "next/font/google";

const allura = Allura({ weight: "400", subsets: ["latin"] });
const corinthia = Corinthia({ weight: "400", subsets: ["latin"] });

function Herotext() {
  return (
    <div className={corinthia.className}>
      <div className="z-50 flex flex-col lg:flex-row text-center justify-center items-center gap-0 md:gap-5  lg:gap-16">
        <div className="flex flex-col items-center">
          <span className="text-[6rem] lg:text-[11rem] ">
            Veronika
          </span>
          <span className="relative -mt-16 lg:-mt-0 lg:-top-16 text-[5rem] md:text-[5rem] lg:text-[4rem]">
            Edelová
          </span>
        </div>
        <span className="text-[3rem] md:text-[5rem] lg:text-[7rem] flex flex-col items-center justify-center">
          &
        </span>
        <div className="flex flex-col items-center">
          <span className="text-[6rem] lg:text-[11rem] ">
            Jan
          </span>
          <span className="relative -mt-16 lg:-mt-0 lg:-top-16 text-[5rem] md:text-[5rem] lg:text-[4rem]">
            Matoušík
          </span>
        </div>
      </div>
    </div>
  );
}

export default Herotext;
