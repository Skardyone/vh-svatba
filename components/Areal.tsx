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
    <div className="xl:h-[80vh] w-full bg-zelena flex flex-col lg:flex-row items-center justify-center">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="w-full h-[50vh] md:h-[30vh] xl:h-1/2 p-6 xl:p-6 xl:px-12 flex flex-col items-center justify-center text-base xl:text-xl font-light space-y-3 xl:space-y-12">
          <h3 className="text-center uppercase font-svarge text-[2rem] font-semibold xl:font-normal tracking-wide xl:text-[3rem]">svatební místo</h3>
          <p>
         Statek Háječek se nachází na samotě u lesa nedaleko obce Hlohovice. Pro svatební den je k dispozici celý areál a je tedy zajištěna dostatečná kapacita pro parkování. Ubytování v objektech není možné nabídnout všem, a tak je zde možné přenocovat ve vlastním stanu nebo obytném autě na přilehlé louce. Případně můžeme doporučit ubytování v blízkém okolí.
          </p>
        </div>
        <div className="w-full h-[30vh] xl:h-1/2 bg-bezova">
          <Carousel opts={{ loop:true}} className="relative w-full h-full">
            <CarouselContent className="w-full h-[30vh] lg:h-[40vh]">
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/statek/1.JPG"}
                    alt="statek1"
                    className="object-center object-cover"
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
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/statek/3.JPG"}
                    alt="statek3"
                    className="object-center object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/statek/4.JPG"}
                    alt="statek4"
                    className="object-center object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/statek/5.JPG"}
                    alt="statek1"
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
      <div className="lg:h-[80vh] h-[50vh] xl:h-full w-full flex flex-row items-center justify-center bg-bezova">
        <Map />
      </div>
    </div>
  );
}

export default Areal;
