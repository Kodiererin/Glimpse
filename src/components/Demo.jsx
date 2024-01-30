import { useState, useEffect } from "react";

import { linkIcon, loader } from "../assets";
import { articleSummary } from "../services/Summarize";

const Demo = () => {
  const [article, setArticle] = useState(""); // for article

  const [summary, setSummary] = useState(""); // for Summary

  const [storeSummary, setStoreSummary] = useState([]);

  let [isFetching, setisFetching] = useState(false); // For Loader



  const addData = (e) => {
    const arr = localStorage.getItem("storeSummary");
    console.log(arr);
    setStoreSummary(arr ? JSON.parse(arr) : []);
    console.log(storeSummary);
    // console.log(storeSummary);
    e.preventDefault();
    // console.log(e.target.value);
    setArticle(e.target.value);
  };

  const summarize = async (e) => {
    e.preventDefault();
    setisFetching(true);
  
    try {
      const summary = await articleSummary(article);
      // console.log(summary);
      setSummary(summary);
  
      // Update state after the asynchronous call
      setStoreSummary((prevStoreSummary) => [...prevStoreSummary, summary]);
      console.log(storeSummary);
  
      // Move localStorage update to useEffect to ensure it captures the updated state
    } catch (error) {
      alert("Website is not responding, Please try again later.");
    } finally {
      setisFetching(false);
    }
  };
  
  // Use useEffect to update local storage whenever storeSummary changes
  useEffect(() => {
    localStorage.setItem("storeSummary", JSON.stringify(storeSummary));
  }, [storeSummary]);
  
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search Component */}
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center">
          <img
            src={linkIcon}
            alt="Icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="text"
            placeholder="Enter your article"
            required
            className="url_input peer"
            value={article}
            onChange={(e) => addData(e)}
          />
          <button
            type="Submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
            onClick={(e) => summarize(e)}
          >
            {" "}
            🔍{" "}
          </button>
        </form>
        {/* Browser articleHistory */}
        {summarize.length == 0 ? (
          <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
            {storeSummary.map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="link_card"
              >
                {/* <div className='copy_btn'
                onClick={() => handleCopy(item.url)}>
                <img
                  src={copied == item.article? tick : copy}
                  // Bug in the Code, Please check in Future.
                  alt='copy_icon'
                  className='w-[40%] h-[40%] object-contain' ></img>
              </div> */}
                <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                  {item.url}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </div>
      {/* Display Results */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching == true ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : summary != "" ? (
          <div className="flex flex-col gap-3">
            <h2 className="font-satoshi fon-bold text-gray-600 text-xl ">
              Article <span className="blue_gradient">Summary</span>
            </h2>
            <div className="summary_box">
              <p className="font-inter font-medium text-sm text-gray-700">
                {summary}
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {storeSummary.length > 0 ? (
        <div>
          <h2 className="font-satoshi fon-bold text-gray-600 text-xl">
            History
          </h2>
          {storeSummary.map((item, index) => (
            <div className="summary_box" key={index}>
              <p className="font-inter font-medium text-sm text-gray-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Demo;

// : error ? (
//   <p className='font-inter font-bold text-black text-center'>
//     Well That Was not supposed to Happen...
//     <br />
//     <span className='font-santosh- font-normal text-gray-700' >
//       {error?.data?.error}
//     </span>
//   </p>
// )
