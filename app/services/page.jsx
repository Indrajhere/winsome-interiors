import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/const";

export default function Services() {
    return (
        <section className="bg-cream py-12">
            <div className="container mx-auto px-6">

                <h2 className="text-6xl text-center text-olive my-24 uppercase">Services</h2>


                <div className="container mx-auto px-6">

                    {/* Section Header */}
                    <div className="mb-12 text-center w-full space-y-6">


                        <h2 className="tracking-wide text-2xl md:text-4xl text-olive/80 font-bold ">We create, innovate and design lasting impressions, which is meant to last a lifetime.</h2>

                        <p className="text-[var(--color-olive)]/80">
                            Thoughtfully designed joinery solutions crafted to elevate
                            residential and commercial interiors.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4 max-w-3xl mx-auto justify-items-center">
                        {services.map((service, index) => (
                            <Card
                                key={`${service.id}-${index}`}
                                className="w-80 bg-white rounded-xl overflow-hidden
             hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-0"
                            >
                                <CardContent className="p-0">
                                    {/* Image */}
                                    <div className="relative h-56">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Icon */}
                                        <div className="absolute top-4 right-4 w-14 h-14 rounded-full
                      bg-white flex items-center justify-center text-3xl shadow-lg">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {service.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Highlights */}
                                        <ul className="space-y-2 text-sm text-gray-700">
                                            {service.highlights.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-olive font-bold">•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        {/* <button
                                            className="pt-2 text-sm font-semibold text-olive
                   hover:underline flex items-center gap-1"
                                        >
                                            {service.cta}
                                            <span>→</span>
                                        </button> */}
                                    </div>
                                </CardContent>
                            </Card>

                        ))}
                    </div>



                </div>

                {/* Why Choose Us */}
                <div className="mt-32 text-center">
                    <h3 className="text-3xl md:text-4xl font-semibold text-olive uppercase mb-16">
                        Why Choose Us
                    </h3>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6">
                        {[
                            {
                                title: "Custom Made",
                                desc: "Every piece is designed specifically for your space and lifestyle."
                            },
                            {
                                title: "Premium Finishes",
                                desc: "High-quality materials that look refined and last for years."
                            },
                            {
                                title: "End-to-End Execution",
                                desc: "From concept to installation, we handle everything."
                            },
                            {
                                title: "Reliable Timelines",
                                desc: "Clear schedules with no hidden delays or surprises."
                            },
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <h4 className="text-lg font-semibold text-olive">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-olive/70 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
