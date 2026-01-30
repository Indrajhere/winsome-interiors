export default function AboutUs() {
  return (
    <section className="bg-cream py-12">
      <div className="container mx-auto px-6">

        <h2 className="text-6xl text-center text-olive my-24 uppercase">About Us</h2>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
          

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-olive)] mb-6 leading-tight">
              Crafted Interiors, <br /> Built to Last
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We specialise in custom-built interiors that balance timeless
              design with everyday functionality. From kitchens and walk-in
              robes to vanities, media walls, and outdoor kitchens — every piece
              is thoughtfully designed and precisely crafted.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              With a strong focus on quality materials, clean finishes, and
              personalised solutions, we work closely with our clients to bring
              their vision to life — beautifully and reliably.
            </p>

            {/* Stats / Highlights */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-[var(--color-olive)]">
                  10+
                </p>
                <p className="text-sm text-gray-600">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[var(--color-olive)]">
                  500+
                </p>
                <p className="text-sm text-gray-600">
                  Projects Completed
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[var(--color-olive)]">
                  100%
                </p>
                <p className="text-sm text-gray-600">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[var(--color-sand)] rounded-xl"></div>

            <img
              src="/images/kitchen-pantry.jpg"
              alt="Custom interior craftsmanship"
              className="relative z-10 rounded-xl shadow-lg object-cover w-full h-[420px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
