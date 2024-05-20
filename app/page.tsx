import About from "@/components/About";
import Areal from "@/components/Areal";
import Day from "@/components/Day";
import Dresscode from "@/components/Dresscode";
import Food from "@/components/Food";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import People from "@/components/People";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between font-cormorant font-light">
      <Hero/>
      <About/>
      <Day/>
      <Food/>
      <Areal/>
      <People/>
      <Dresscode/>
      <Footer/>      
    </main>
  );
}
