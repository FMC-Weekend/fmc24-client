import React from 'react'
// import './styles/Header.css'

const Header = () => {
  return (
    <>
    <div className='container-header flex flex-row h-20 fixed left-0 right-0'>
      <div className='fmcw-logo-header basis-1/6 place-self-center'></div>
      <div className='links-container-header flex justify-end flex-row basis-5/6'>
        <a href="" className='links-header w-24 place-self-center'>events</a>
        <a href="" className='links-header w-24 place-self-center'>sponsors</a>
        <a href="" className='links-header w-24 place-self-center'>glimpses</a>
        <a href="" className='links-header w-24 place-self-center'>team</a>
        <a href="" className='links-header w-16 place-self-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="27.922" height="11.688" viewBox="0 0 30 14" fill="none">
          <path d="M1 1.15576H28.9218" stroke="white" strokeWidth="1.94803" stroke-linecap="round"/>
          <path d="M1 7H28.9218" stroke="white" strokeWidth="1.94803" stroke-linecap="round"/>
          <path d="M1 12.8442H28.9218" stroke="white" strokeWidth="1.94803" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
    </div>
     
    </>
  )
}

export default Header
