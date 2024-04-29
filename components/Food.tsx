import Image from "next/image";
import React from "react";
import { GiKnifeFork } from "react-icons/gi";

function Food() {
  return (
    <div className="h-[60vh] xl:h-[30vh] xl:my-16 w-full px-6 md:w-3/4 xl:w-3/4 font-light text-base md:text-xl xl:text-xl flex flex-col items-center justify-center border-t-2 border-zelena pb-8">
      <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px] my-8">
              {/* <FaRegCalendarAlt /> */}
              <Image
                src="/ikony/obed.png"
                alt="misto"
                fill
                className="object-center object-contain"
              />
            </div>
      <p className="">
        Během celého dne bude pro všechny zajištěno jídlo a nápoje. Před obřadem
        na vás bude čekat drobné občerstvení (knoflíky u košile musí vydržet
        přes obřad). Slavnostní hostina bude zahrnovat společnou polévku s
        pestrým rautem. K odpolední kávě bude rozkrojen svatební dort. V
        podvečer bude zajištěno grilování a během večerní zábavy bude k
        dispozici studený raut.
      </p>
    </div>
  );
}

export default Food;
