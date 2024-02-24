import React from 'react'
import iso from "../img/iso.jpg"

export const Iso = () => {
  return (
    <div className='flex flex-col items-center mt-[100px]'>
        <div className=' font-bold text-3xl text-[#71717a] mb-5'>We are ISO 9001 Certified</div>
        <div><img src={iso} alt="ISO certificate" /></div>
    </div>
  )
}
