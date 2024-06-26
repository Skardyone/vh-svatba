import React from "react";
import Map from "./ui/Map";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Areal() {
  return (
    <div className="w-full bg-zlata/40 flex flex-col lg:flex-row items-center justify-center">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="w-full h-[50vh] md:h-[30vh] lg:h-[40vh] xl:h-[50vh] p-6 xl:p-8 xl:px-12 flex flex-col items-center justify-center text-base xl:text-xl font-light space-y-3 xl:space-y-6">
          <h3 className="text-center uppercase font-bellefair text-[2rem] font-semibold xl:font-normal tracking-wide xl:text-[3rem]">
            svatební místo
          </h3>
          <p>
            Bušovický dvůr se nachází na kraji obce Bušovice (Bušovice 103). Pro
            svatební den je k dispozici celý areál a je tedy zajištěna
            dostatečná kapacita pro parkování. Ubytování v objektu není možné
            nabídnout všem, a tak je zde možné přenocovat ve vlastním stanu nebo
            obytném autě na louce. Po 22. hodině platí v obci noční klid, k
            dispozici nám však budou neomezeně vnitřní prostory. Odvoz z areálu
            nebude zajišťen. Děkujeme za pochopení.
          </p>
        </div>
        <div className="w-full h-[30vh] lg:h-[40vh] xl:h-[50vh] bg-bezova">
          <Carousel opts={{ loop:true}} className="relative w-full h-full">
            <CarouselContent className="w-full h-[30vh] lg:h-[40vh] xl:h-[50vh]">
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/statek/1.JPG"}
                    alt="statek1"
                    className="object-center object-cover "
                    fill
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/statek/2.JPG"}
                    alt="statek2"
                    className="object-center object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="lg:h-[80vh] h-[50vh] xl:h-[100vh] w-full flex flex-row items-center justify-center bg-bezova">
        <Map />
      </div>
    </div>
  );
}

export default Areal;
