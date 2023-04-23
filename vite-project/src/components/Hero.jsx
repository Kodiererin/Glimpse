import React from 'react'
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center  items-center flex-col '>
        <nav className='flex justify-between items-center flex-col w-full mb-10 pt-3' >
            <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
            <button type='button' onClick={()=>{window.open('www.google.com')}} className='black_btn' >
                Github
            </button>
        </nav>

        <h1 className='head_text' >Summarize Articles<br className='max-md:hidden' /> <span className='orange_gradient' >Open Ai</span></h1> 
    </header>
  )
}

export default Hero


// Hello World