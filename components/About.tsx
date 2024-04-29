import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="min-h-screen w-full">
      <div className="h-[90vh] md:h-[70vh] xl:h-[70vh] w-full bg-zelena flex flex-col justify-center items-center lg:py-8 ">
        <p className="w-full p-6 md:p-10 lg:w-[70%] text-base md:text-xl lg:text-xl font-light tracking-wider">
          Vítejte na našem svatebním webu, kde jsme se rozhodli sdílet svou
          cestu k oltáři. Naše společná cesta začala před více jak dvaceti lety
          na základní škole, kdy ani jednoho z nás nenapadlo, že si jednoho dne
          řekneme své ANO. Spousta bláznivých zážitků byla zakončena tanečním
          kurzem, kde jsme si nevědomky natrénovali kroky na první novomanželský
          tanec. Ačkoli byly poté naše životní směry rozdílné, dokázali jsme si
          k sobě opět najít cestu a nyní plánujeme společný život. Takže, naše
          milá rodino a přátelé, připravte se na jízdu plnou lásky smíchu a
          možná nějaké té slzy, ale jen té šťastné.
        </p>
        <p className="w-full lg:w-[60%] text-base md:text-xl lg:text-xl font-light text-right px-8">
          Těšíme se na vás!
        </p>
      </div>
      <div className="relative xl:h-[100vh] -top-24 md:-top-40 lg:-top-16 xl:-top-36 2xl:-top-48 space-y-6 md:space-y-10 lg:space-y-0 w-full p-8 lg:p-4 flex flex-col lg:flex-row items-center justify-evenly ">
        <div className="relative h-[60vh] lg:h-[70vh] w-full lg:w-[22%] bg-bezova rounded-md">
          <Image
            src={"/img-855.jpg"}
            alt="img1"
            fill
            className="object-cover object-center md:object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
        </div>
        <div className="hidden lg:block relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%]  bg-bezova rounded-md">
          <Image
            src={"/img-856.jpg"}
            alt="img1"
            fill
            className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
        </div>
        <div className="hidden lg:block relative h-[50vh] lg:h-[70vh] w-full lg:w-[22%]  bg-bezova rounded-md">
          <Image
            src={"/img-857.jpg"}
            alt="img1"
            fill
            className="object-cover object-center rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
        </div>
        <div className="relative h-[60vh] lg:h-[70vh] w-full lg:w-[22%]  bg-bezova rounded-md">
          <Image
            src={"/img-858.jpg"}
            alt="img1"
            fill
            className="object-cover object-center md:object-bottom rounded-md ring-4 ring-bezova ring-offset-8 ring-opacity-50"
          />
        </div>
      </div>
      <div className="relative -top-16 h-[2px] w-3/4 mx-auto bg-zelena"></div>
    </div>
  );
}

export default About;
