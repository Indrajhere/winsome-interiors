import React from 'react'
import AIButton from './ui/AIButton'

const CTA = () => {
  return (
       <section className='py-20 bg-gradient-to-r from-cream/40 to-sand'>
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl text-olive/75 tracking-tight font-extrabold">
            Ready to transform your space?
          </h2>
          <p className="text-lg text-olive/65 md:text-xl/relaxed">
            Thoughtfully designed interiors and joinery that blend beauty, function, and craftsmanship.
          </p>

             <AIButton inverted={false} text="Request a Quote" />

        </div>
      </section>
  )
}

export default CTA
