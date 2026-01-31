
'use client';
import React from 'react'
import AIButton from './ui/AIButton'
import { useRouter } from 'next/navigation';


const RequestQuoteBtn = ({inverted}) => {
    const router = useRouter();
  return (
   <AIButton
    inverted={inverted}
    text="Request a Quote"
    onClick={() => {
    router.push('/contact');
  }} />
  )
}

export default RequestQuoteBtn
