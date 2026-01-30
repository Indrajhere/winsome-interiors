"use client";

import { contactDetails } from "@/lib/const";

export default function ContactPage() {
  return (
    <section className="bg-[var(--color-cream)] py-12">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl md:text-6xl text-center text-olive my-12 md:my-24 uppercase">Contact Us</h2>
        
        {/* Top Section: Map + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
          {/* Map */}
          <div className="lg:col-span-2 h-[400px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src={contactDetails.embedLocation}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>

          {/* Contact Details */}
          <div className="bg-[var(--color-olive)] text-[var(--color-cream)] rounded-xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Details
            </h3>

            <div className="space-y-6 text-sm leading-relaxed">
              <div>
                <p className="uppercase tracking-wide text-[var(--color-sand)] mb-1">
                  Find Location
                </p>
                <p>
                    {contactDetails.address}
                </p>
              </div>

              <div>
                <p className="uppercase tracking-wide text-[var(--color-sand)] mb-1">
                  Call Us
                </p>
                <p>{contactDetails.phone}</p>
              </div>

              <div>
                <p className="uppercase tracking-wide text-[var(--color-sand)] mb-1">
                  Mail Us
                </p>
                <p>{contactDetails.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[var(--color-olive)] mb-12">
            Ask A Question
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[var(--color-olive)]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[var(--color-olive)]"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[var(--color-olive)]"
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[var(--color-olive)]"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[var(--color-olive)] text-[var(--color-cream)] px-8 py-3 font-medium tracking-wide hover:bg-opacity-90 transition"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
