import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full bg-zlata/40 flex flex-col items-center justify-evenly overflow-hidden pb-8">
      <div className="w-full flex flex-col items-center px-8 xl:px-0 lg:w-1/2 xl:text-xl text-center font-light border-b-2 border-white pb-12 xl:py-8">
        <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px] my-8">
          {/* <FaRegCalendarAlt /> */}
          <Image
            src="/ikony/darky.png"
            alt="misto"
            fill
            className="object-center object-contain"
          />
        </div>
        <h3 className="my-6 xl:my-12 font-bellefair font-semibold xl:text-[3rem]">
          KDYŽ SI NEVÍŠ RADY S DARY
        </h3>
        <p>
        Nějakou tu dobu si již užíváme společného bydlení, proto dary, jako sada skleniček nebo damaškové povlečení, jsou pro nás již zbytečné. {" "}
        </p>{" "}
        <p>
          {" "}
          Chcete-li nás obdarovat, přidejte nám na cestu, kde si ženich užije
          svoji milou nevěstu.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center font-semibold font-bellefair p-6 gap-4 xl:text-[2rem]">
        <span>Prosím vyplňte formulář zde:</span>
        <Link href={"/dotaznik"}>
          <Button
            size={"lg"}
            variant={"outline"}
            className="border-bezova uppercase font-bold"
          >
            Potvrdit účast
          </Button>
        </Link>
      </div>
      <div className="text-center mt-8 text-white text-[1rem]">
        <p>Pro svatebčany vytvořili Viki a Dany</p>
      </div>
    </div>
  );
}

export default Footer;
