import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/const";
import AIBadge from "./ui/AIBadge";

export default function Services() {
  return (
    <section
      id="services"
      className="py-12 bg-white"
    >
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12 text-center w-full space-y-6">

          <AIBadge text="Services"/>

          <h2 className="tracking-wide text-2xl md:text-4xl text-olive font-bold ">What We Offer</h2>
        
          <p className="text-[var(--color-olive)]/80">
            Thoughtfully designed joinery solutions crafted to elevate
            residential and commercial interiors.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-6 pb-4 flex-wrap justify-center">
          {services.map((service, index) => (
            <Card
              key={`${service.id}-${index}`}
              className="flex-shrink-0 w-80 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-white py-0"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 text-3xl bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-4 text-[var(--color-olive)] font-semibold text-sm hover:underline transition-all">
                    Learn More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
