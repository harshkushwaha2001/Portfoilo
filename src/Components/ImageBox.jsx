import React from 'react'
import ImageContainer from './ImageContainer'

export default function ImageBox() {
  return (
    <div className='flex w-[400px] lg:h-screen sm:h-[500px] justify-center items-center shrink-0 pt-6 lg:pb-6 pr-6 pl-0 sm:pb-0'>
      <ImageContainer></ImageContainer>
    </div>
  )
}
