import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function About() {
  return (
    <>
    <div className=" w-full flex flex-col lg:flex-row px-6 xl:px-12 rounded-md">
     
      <div className="h-[90vh] md:h-[70vh] xl:h-[70vh] w-full bg-zlata/40 flex flex-col justify-center items-center lg:py-8 rounded-md">
        <p className="w-full p-6 md:p-10 lg:w-[70%] text-base md:text-xl lg:text-xl font-light tracking-wider">
          Vítejte na našem svatebním webu, kde jsme se rozhodli sdílet svou
          cestu k oltáři. Naše společná cesta začala před několika lety, v době,
          kdy se uzavíraly hranice po celém světě. Aniž bychom jeden z nás
          tušili, že si jednoho dne řekneme své ANO, jsme k sobě našli cestu.
          Ačkoli se setkala duše sportovce s duší umělkyně, vznikla fúze, která
          si libuje v chalupaření, v péči o své dva čtyřnohé kamarády a sdílejí
          stejné hodnoty. Takže…naše milá rodino a přátelé, děkujeme, že s námi
          oslavíte náš jedinečný den.
        </p>
        <p className="w-full lg:w-[60%] text-base md:text-xl lg:text-xl font-light text-right px-8">
          Těšíme se na vás!
        </p>
      </div>
      <div className="relative h-[60vh] -top-[10vh] lg:top-0 lg:h-auto w-full lg:w-[50%] xl:w-[35%] bg-zlata rounded-md">
          <Image
            src={"/foto1.jpg"}
            alt="img1"
            fill
            className="hidden lg:block object-cover object-center md:object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
          {/*carousel*/}
          <Carousel opts={{ loop:true}} className="relative lg:hidden w-full h-[60vh] rounded-md">
            <CarouselContent className="w-full h-[60vh]">
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/foto1.jpg"}
                    alt="foto1"
                    className="object-center object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/foto2.jpg"}
                    alt="foto2"
                    className="object-center object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/foto3.jpg"}
                    alt="foto3"
                    className="object-center object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="h-full w-full">
                <div className="w-full h-full relative">
                  <Image
                    src={"/foto4.jpg"}
                    alt="foto4"
                    className="object-center object-cover"
                    fill
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-white border-zlata text-zlata left-2" />
            <CarouselNext className="bg-white border-zlata text-zlata right-2"  />
          </Carousel>
      </div>
    </div>
    
    <div className="hidden mt-12 lg:flex relative xl:h-[100vh] space-y-6 md:space-y-10 lg:space-y-0 w-full p-2  flex-col lg:flex-row items-center justify-evenly ">
        <div className="relative h-[60vh] lg:h-[70vh] w-full lg:w-[22%] bg-bezova rounded-md">
          <Image
            src={"/foto2.jpg"}
            alt="img1"
            fill
            className="object-cover object-center md:object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
        </div>
        <div className="hidden lg:block relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%]  bg-bezova rounded-md">
          <Image
            src={"/foto3.jpg"}
            alt="img1"
            fill
            className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
        </div>
        <div className="hidden lg:block relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%]  bg-bezova rounded-md">
          <Image
            src={"/foto4.jpg"}
            alt="img1"
            fill
            className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
        </div>
      </div>
    </>
  );
}

export default About;
