import AIButton from "./ui/AIButton";

export default function Hero() {
  return (
    <section className="w-full">
      {/* Video Wrapper */}
      <div className="relative h-[60vh] w-full md:h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover grayscale-[10%] brightness-75"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-olive/60 mix-blend-multiply" />

        {/* Desktop Overlay Content */}
        <div className="absolute left-10 bottom-[10%] md:bottom-[25%]  md:left-20 md:block rounded-xl overflow-hidden">
          <HeroCard />
        </div>
      </div>

      {/* Mobile Content (Normal Flow) */}
      {/* <div className="block md:hidden text-center">
        <HeroCard />
      </div> */}
    </section>
  );
}

function HeroCard() {
  return (
    <div className=" max-w-[75vw] md:max-w-xl bg-white p-8 shadow-2xl">
      <h1 className="mb-4 text-lg font-semibold text-olive md:text-4xl">
        Interior Fit-Out & Bespoke Joinery
      </h1>

      <p className="mb-6 text-sm leading-relaxed text-olive/80 md:text-base">
        Thoughtfully crafted interiors with precision joinery,
        tailored for residential, commercial, and luxury spaces.
      </p>

      <AIButton inverted={false} text="Request a Quote" />
    </div>
  );
}
