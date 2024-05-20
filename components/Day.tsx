import React from "react";
import { WiTime3 } from "react-icons/wi";
import {
  MdOutlinePhotoCamera,
  MdOutlinePlace,
  MdPhotoCameraFront,
  MdPlace,
} from "react-icons/md";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaCarAlt, FaRegCalendarAlt } from "react-icons/fa";
import {
  GiKnifeFork,
  GiLinkedRings,
  GiMusicalNotes,
  GiStairsCake,
} from "react-icons/gi";
import { PiSneakerMoveBold } from "react-icons/pi";
import Image from "next/image";

function Day() {
  return (
    <div className=" xl:h-screen w-full py-6 px-8 xl:py-16 flex flex-col items-center xl:space-y-10">
      <h2 className="text-center uppercase  m-4 text-[2rem] xl:text-[5rem] font-bellefair">
        svatební den
      </h2>
      <div className="w-full h-[25vh] xl:h-[30vh] flex flex-row xl:flex-row items-center justify-around">
        <div className="h-full w-1/2 flex flex-col items-center justify-center xl:justify-around space-y-2 xl:space-y-5">
          <span className="text-[1.5rem] font-bold">Datum</span>
          <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px]">
            {/* <FaRegCalendarAlt /> */}
            <Image
              src="/ikony/datum.png"
              alt="datum"
              fill
              className="object-center object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-xl ">
            <p>13.7.2024</p>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col items-center justify-center xl:justify-around space-y-2 xl:space-y-5">
          <span className="text-[1.5rem] font-bold">Místo</span>
          <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px]">
            {/* <FaRegCalendarAlt /> */}
            <Image
              src="/ikony/misto.png"
              alt="misto"
              fill
              className="object-center object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-xl  text-center">
            <p>Bušovický dvůr</p>
          </div>
        </div>
      </div>
      <div className="xl:py-8 flex space-x-10 xl:space-x-0 xl:gap-0 flex-row lg:py-16 xl:flex-col">
        <div className="flex flex-col h-screen w-1 xl:w-full xl:h-1 bg-bezova xl:flex-row items-center justify-around">
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
          <div className="h-8 w-8 bg-bezova rounded-full border-[5px] border-white"></div>
        </div>
        <div className="flex h-screen lg:h-auto flex-col justify-stretch xl:grid xl:grid-cols-8 xl:gap-0 xl:py-8 ">
          <div className="h-full w-full flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px]">
              {/* <FaRegCalendarAlt /> */}
              <Image
                src="/ikony/prijezd.png"
                alt="misto"
                fill
                className="object-center object-contain"
              />
            </div>
            <div className="flex flex-col items-start xl:items-center justify-center text-left xl:text-center  md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>11:00 - 12:00</p>
              <p>Příjezd hostů</p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[80px] lg:h-[80px]  xl:w-[100px] xl:h-[100px]">
              {/* <FaRegCalendarAlt /> */}
              <Image
                src="/ikony/obrad.png"
                alt="misto"
                fill
                className="object-center object-contain"
              />
            </div>
            <div className="flex flex-col items-start xl:items-center justify-center text-left xl:text-center md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>13:00</p>
              <p>Svatební obřad</p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[80px] lg:h-[80px]  xl:w-[100px] xl:h-[100px]">
              {/* <FaRegCalendarAlt /> */}
              <Image
                src="/ikony/foceni.png"
                alt="misto"
                fill
                className="object-center object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-left xl:text-center  md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>
                Společné
                <br />
                focení
              </p>
            </div>
          </div>
          {/* <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[80px] lg:h-[80px]  xl:w-[100px] xl:h-[100px]">
              {/* <FaRegCalendarAlt /> */}
              {/* <Image
                src="/ikony/obed.png"
                alt="misto"
                fill
                className="object-center object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-left xl:text-center  md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>
                Krájení dortu
                <br />
                a raut
              </p>
            </div>
          </div> */}
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[80px] lg:h-[80px]  xl:w-[100px] xl:h-[100px]">
              {/* <FaRegCalendarAlt /> */}
              <Image
                src="/ikony/dort.png"
                alt="misto"
                fill
                className="object-center object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-left xl:text-center md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>
                Krájení dortu
                <br />
                a raut
              </p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[80px] lg:h-[80px]  xl:w-[100px] xl:h-[100px]">
              {/* <FaRegCalendarAlt /> */}
              <Image
                src="/ikony/tanec.png"
                alt="misto"
                fill
                className="object-center object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-left xl:text-center  md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>
                Tanec
                <br />
                novomanželů
              </p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[80px] lg:h-[80px]  xl:w-[100px] xl:h-[100px]">
              {/* <FaRegCalendarAlt /> */}
              <Image
                src="/ikony/hry.png"
                alt="misto"
                fill
                className="object-center object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-left xl:text-center  md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>Svatební hry</p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[80px] lg:h-[80px]  xl:w-[100px] xl:h-[100px]">
              {/* <FaRegCalendarAlt /> */}
              <Image
                src="/ikony/gril.png"
                alt="misto"
                fill
                className="object-center object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-left xl:text-center  md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>
                Grilování
              </p>
            </div>
          </div>
          <div className="h-full w-full  flex flex-row xl:flex-col items-center justify-start gap-5 xl:gap-0">
            <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[80px] lg:h-[80px]  xl:w-[100px] xl:h-[100px]">
              {/* <FaRegCalendarAlt /> */}
              <Image
                src="/ikony/prekvapeni.png"
                alt="misto"
                fill
                className="object-center object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-left xl:text-center  md:text-[1.5rem] xl:text-[1rem] 2xl:text-[1.6rem]">
              <p>
                Překvapení
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day;
