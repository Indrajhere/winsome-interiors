import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
        <Hero />
        <AboutUs/>
        <Services />
        {/* <Projects /> */}
        <Faq/>
        <CTA/>
    </div>
  );
}
