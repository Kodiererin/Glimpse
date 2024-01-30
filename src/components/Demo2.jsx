import { useState, useEffect } from "react";


// Save the History in the form of array in the localstorage..


import { copy, linkIcon, loader, tick } from "../assets";
import { articleSummary } from "../services/Summarize";

const Demo2 = () => {
  return(
    <section className="mt-16 w-full max-w-xl">
    {/* Search Component */}
    <div className="flex flex-col w-full gap-2">
      <form className="relative flex justify-center items-center">
        <img
          src={linkIcon}
          alt="Icon"
          className="absolute left-0 my-2 ml-3 w-5" />
        <input
          type="text"
          placeholder="Enter your article"
          required
          className="url_input peer" />
        <button
          type="Submit"
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
        >
          {" "}
          🔍{" "}
        </button>
      </form>
      </div>
      {/* Browser articleHistory */}
  </section>
  )
};

export default Demo2;

// : error ? (
//   <p className='font-inter font-bold text-black text-center'>
//     Well That Was not supposed to Happen...
//     <br />
//     <span className='font-santosh- font-normal text-gray-700' >
//       {error?.data?.error}
//     </span>
//   </p>
// )
