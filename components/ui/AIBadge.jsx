import React from 'react'
import { Badge } from './badge'

const AIBadge = ({text}) => {
  return (
    <div className='text-center'>
    <Badge variant='outline' className='bg-olive/90 text-cream py-1 px-3 border-[#C6B98B]font-medium text-md'>
           {text}
          </Badge>
    </div>
  )
}

export default AIBadge
