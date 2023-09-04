import React , {Component} from 'react';
import Image from 'next/image';


const Competitions = () => {
  return (
    <>
<div className='cont'>
  
  <div className='bak'>
    <div className='flex flex-col w-screen h-auto p-10'>
      <div className='flex flex-row h-96'>
        <div className='flex min-w-max min-h-max'>
          <Image
            src={require('./../../../public/images/Rectangle51.png')}
            alt= "Rectangle51"
          />
        </div>
        <div className='flex pt-4 pl-14 flex-col place-content-start w-auto text-white h-fit justify-center'>
          <h className='font-semibold text-5xl h-12'> 
            COMPETITIONS
          </h>
          <h className='font-normal text-2xl h-16'>
          Lorem ipsum dolor sit amet consectetur. Sed non placerat purus vitae in. Pellentesque et tempor tortor enim ac sit.
          </h>
        </div>
      </div>
      <div className='flex flex-row h-80'>
        <div className='flex pt-36 flex-col w-auto align-baseline text-white h-fit text-right justify-end pr-14'>
          <h className='font-semibold text-5xl h-12'>
            WORKSHOP
          </h>
          <h className='font-normal text-2xl h-16'>
          Lorem ipsum dolor sit amet consectetur. Sed non placerat purus vitae in. Pellentesque et tempor tortor enim ac sit.
          </h>
        </div>
        <div className='flex min-w-max min-h-max flex-col'>
          <Image
            src={require('./../../../public/images/Rectangle52.png')}
            alt= "Rectangle52"
          />
        </div>
      </div>
    </div>
  </div>
  <div className='frot'>
      <h1 className='flex flex-col justify-center font-thin text-7xl text-white text-center leading-snug'>
        In my head is like if I can conquer men then I can conquer feminity
      </h1>
  </div>
</div>
    </>
  )
}

export default Competitions
