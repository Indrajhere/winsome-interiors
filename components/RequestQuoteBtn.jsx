
'use client';
import React from 'react'
import AIButton from './ui/AIButton'
import { useRouter } from 'next/navigation';


const RequestQuoteBtn = ({ inverted, onClick = null }) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    router.push('/contact');

  };

  const router = useRouter();
  return (
    <AIButton
      inverted={inverted}
      text="Request a Quote"
      onClick={handleClick} />
  )
}

export default RequestQuoteBtn
