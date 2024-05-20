"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Verunka",
    designation: "svědkyně",
    image: "/svedkyne.jpg",
  },

  {
    id: 2,
    name: "Tomáš",
    designation: "svědek",
    image: "/svedek.jpg",
  },
  {
    id: 3,
    name: "Viki",
    designation: "fotografka",
    image: "/fotografka.jpg",
  },
];

function People() {
  return (
    <>
      <h3 className="uppercase text-[2rem] font-bellefair xl:text-[4rem]  pt-16 ">
        Důležité osoby
      </h3>
      <div className="hidden xl:flex h-[60vh] w-full  flex-row items-center justify-center">
        <AnimatedTooltip items={people} />
      </div>
      <div className="min-h-screen w-full xl:hidden flex flex-col lg:flex-row items-center justify-center py-8 space-y-5">
        {people.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center"
          >
            <Image
              height={250}
              width={250}
              src={item.image}
              alt={item.name}
              className=" object-cover !m-0 !p-0 object-top rounded-full h-40 md:h-60 w-40 md:w-60 border-4 group-hover:scale-105 group-hover:z-30 border-zlata/40  relative transition duration-500"
            />
            <span className="text-lg md:text-2xl">{item.name}</span>
            <span className="text-base">{item.designation}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default People;
