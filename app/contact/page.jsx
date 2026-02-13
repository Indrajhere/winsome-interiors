"use client";
import { useState } from "react";
import { contactDetails } from "@/lib/const";

export default function ContactPage() {

  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');


    const formData = new FormData(e.target);
    formData.append('access_key', 'd6d49e59-5b89-477a-87ce-b52cd959c046');
    console.log(formData);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('✓ Thank you! We\'ll get back to you soon.');
        e.target.reset();
      } else {
        setResult('✗ Something went wrong. Please try again.');
      }
    } catch (error) {
      setResult('✗ Something went wrong. Please try again.');
    }
  };


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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input type="hidden" name="subject" value="Winsome Interiors Contact Form"></input>
              <input type="hidden" name="from_name" value="Winsome-user"></input>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[var(--color-olive)]"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[var(--color-olive)]"
              />
            </div>

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[var(--color-olive)]"
            />

            <textarea
              placeholder="Message"
              name="message"
              required
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

            {result && (
              <div className={`p-4 rounded border ${result.includes('✓')
                ? 'bg-green-50 text-green-800 border-green-200'
                : 'bg-red-50 text-red-800 border-red-200'
                }`}>
                {result}
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
