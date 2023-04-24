import React from 'react'
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumz_logo" className="w-28 object-contain"/>
            <button type="button" onClick={()=>{window.open('www.google.com',"blank")}} className="black_btn" >
                Github
            </button>
        </nav>

        <h1 className='head_text' >Summarize Articles<br className='max-md:hidden' /> <span className='orange_gradient' >Open Ai</span></h1> 
        <h2 className='desc' >Simplify Your Reading with Summize, an Open source article summarizer that transforms lengthy artices into clear and concise summaries.</h2>
    </header>
  );
};

export default Hero;


// Hello World