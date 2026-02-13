import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

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
