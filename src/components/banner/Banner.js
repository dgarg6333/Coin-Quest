import React from 'react'
import { Carousel } from './Carousel'

export const Banner = () => {
  return (
    <div className='h-96' style={{backgroundImage: "url(./banner2.jpg)"}}>
        <div className=' flex flex-col justify-around'>
          <div className='font-semibold text-6xl text-center py-4'>Coin Quest</div>
          <div className='text-slate-300 text-center font-medium mb-4'>
          Retrieve all information about the cryptocurrency you favor the most
          </div>
        </div>
        <Carousel/>
    </div>
  )
}
