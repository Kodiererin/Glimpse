import React from 'react'
import { useState, useEffect } from 'react'

import {copy,linkIcon,loader,tick} from "../assets";

const Demo = () => {

  const[article,setArticle] = useState({
    url:'',
    summary:''
  });

  const handleSubmit = async (e) =>{
    alert("Submitted");
  }

  return (
    <section className='mt-16 w-full max-w-xl' >
        {/* Search Component */}
        <div className='flex flex-col w-full gap-2' >
          <form 
            className='relative flex justify-center items-center'
            // onSubmit={()=>{handleSubmit}}
            onSubmit={handleSubmit}
            // We will do Proper AI GPT Request.
            // In Future.
            // https://www.youtube.com/watch?v=vpvtZZi5ZWk
            // https://github.com/adrianhajdin/project_ai_summarizer/tree/main/src
            // https://rapidapi.com/restyler/api/article-extractor-and-summarizer?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel
            // https://vitejs.dev/guide/
            // https://tailwindcss.com/docs/guides/vite
          >
            <img src={linkIcon}
            alt="Icon"
            className='absolute left-0 my-2 ml-3 w-5'  />
            <input 
              type='url'
              placeholder='Enter a URL'
              value={article.url}
              onChange={(e)=>setArticle({...article,url:e.target.value})}
              required
              className='url_input peer'
            />
            <button
              type='Submit'
              className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
            >
                🔍
            </button>
          </form>
          {/* Browser URL History */}
        </div>
        {/* Display Results */}
    </section>
  )
}

export default Demo;
