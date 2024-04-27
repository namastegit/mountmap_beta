import Hero_05 from "@/components/Hero_05";
import Hero02 from "@/components/Hero-02";
import Hero_03 from "@/components/Hero_03";
import Hero_04 from "@/components/Hero_04";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";



export default function Home() {
  return (<div className="bg-white dark:bg-black relative inset-0 ">
    <div className="fixed w-full bg-white dark:bg-black z-50"><Navbar></Navbar></div>

<div className="text-xl  pt-20 sm:pt-20 md:pt-14 lg:pt-10   xl:pt-16">
  <div className="overflow-hidden  ">
    <Hero></Hero>
    <Hero02></Hero02>
    <Hero_03></Hero_03>
    <Hero_04></Hero_04>
    <Hero_05></Hero_05>
   
  </div>

</div>
  </div>
  );
}
