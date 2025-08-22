import React from 'react'
import ImageContainer from './ImageContainer'
import ProfileDetails from './profileDetails'


export default function ImageBox() {
  return (
    <div className='flex flex-col w-[400px] h-screen p-5 pl-0 shrink-0'>
      <ImageContainer>
      </ImageContainer>
      <ProfileDetails></ProfileDetails>
    </div>
  )
}
