import React from 'react'

const AIButton = ({ inverted = true, text , onClick}) => {
    return (
        <button onClick={onClick} 
        className={`rounded-md px-4 py-2 text-sm font-semibold transition hover:brightness-105
    cursor-pointer ${inverted ? 'bg-sand text-olive' : 'bg-olive text-sand'}`}>
            {text}
        </button>
    )
}

export default AIButton
