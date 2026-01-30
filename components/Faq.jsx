import { faqs } from '@/lib/const'
import React from 'react'
import AIBadge from './ui/AIBadge'

const Faq = () => {
  return (
       <section className="px-6 md:pt-12 pb-12 md:px-12 lg:px-24 bg-white text-gray-900">
        <div className='max-w-7xl mx-auto space-y-8'>
                  <AIBadge text="FAQs"/>

        <div className=" grid md:grid-cols-3 gap-12">
          {/* Left Side */}
          <div className="flex  text-left flex-col justify-center">
            {/* <h2 className="text-6xl md:text-left text-center font-semibold mb-4 text-green">
              FAQs
            </h2> */}
          <h2 className="tracking-wide hidden md:block md:text-6xl text-olive font-bold md:text-left text-center mb-4">FAQs</h2>

            <p className="md:text-left text-olive/80 text-center text-lg">
              Discover answers to your most pressing <br /> questions about
              Winsome and our services.
            </p>
          </div>

          {/* Right Side */}
          <div className="md:col-span-2 space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="border-b border-gray-200 pb-4 group"
              >
                <summary className="cursor-pointer text-lg font-semibold group-open:text-primary transition">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
        </div>
      </section>
  )
}

export default Faq
