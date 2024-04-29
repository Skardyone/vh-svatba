import React from "react";
import { SparklesCore } from "./ui/Sparkles";
import Herotext from "./ui/Herotext";

function Hero() {
  return (
    <div className="h-[100svh] w-full flex flex-col items-center justify-center py-8 lg:pt-32">
      <div
        id="bg"
        className="hidden lg:block w-full h-full absolute top-0 left-0 bg-[url('/uvod.png')] bg-no-repeat bg-top bg-cover opacity-30"
      ></div>
      <div
        id="bg"
        className="w-full h-full lg:hidden absolute top-0 left-0 bg-[url('/eucalypto_mobil.png')] bg-no-repeat bg-top bg-cover opacity-30"
      ></div>
      <Herotext />

      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={2.5}
          particleDensity={100}
          className="w-full h-full -z-10"
          particleColor="#a67c00"
        />
      </div>
    </div>
  );
}

export default Hero;
