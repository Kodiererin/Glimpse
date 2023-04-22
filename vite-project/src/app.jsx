import React from 'react'

import Hero from "./components/Hero";
import Demo from "./components/Demo";

import './App.css'

const app = () => {
  return (
    <div>
        <main>
            <div className='main' >
                    <div className='gradient'></div>
                <div className='app'>
                    <Hero></Hero>
                    <Demo>
                        Demo
                    </Demo>
                </div>
            </div>
        </main>
    </div>
  )
}

export default app
