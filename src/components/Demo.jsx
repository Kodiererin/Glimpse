import { useState, useEffect } from "react";


// Save the History in the form of array in the localstorage..


import { copy, linkIcon, loader, tick } from "../assets";
import { articleSummary } from "../services/Summarize";

class History {
  constructor(article, summary) {
    this.article = article;
    this.summary = summary;
  }

  setArticle(article) {
    this.article = article;
  }

  setSummary(summary) {
    this.summary = summary;
  }


  saveArticle() {
    localStorage.setItem("article", JSON.stringify(this.article));
    localStorage.setItem("summary", JSON.stringify(this.summary));
  }


  getArticle() {
    if (localStorage.getItem("article") != null) {
      console.log(JSON.parse(localStorage.getItem("article")));
      return JSON.parse(localStorage.getItem("article"));
    } else {
      return null;
    }
  }
  getSummary() {
    if (localStorage.getItem("article") != null) {
      console.log(JSON.parse(localStorage.getItem("summary")));
      return JSON.parse(localStorage.getItem("summary"));
    } else {
      return null;
    }
  }
}

const Demo = () => {

  let HistoryClass = new History();
  // let HistoryClass = new History();
  // console.log(HistoryClass);
  const [article, setArticle] = useState("");

  const [summary, setSummary] = useState("");

  const [articleData, setArticleData] = useState([]);

  let [isFetching, setisFetching] = useState(false);

  const addData = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setArticle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(await articleSummary(article));
    setisFetching(true);
    articleSummary(article)
      .then((data) => {
        // console.log(data);
        setSummary(data);
        HistoryClass.setArticle(article);
        HistoryClass.setSummary(data);
        HistoryClass.saveArticle();
      })
      .then(() => {
        console.log("Your Data is ");
        console.log(summary);
        addElements(summary);
        // console.log(isFetching);

       // Set Article and Set Summary.
        console.log(HistoryClass);
      });
      setTimeout(10000);
      console.log(isFetching);
      setisFetching(false);
  };

  const addElements = (data) => {
    const prevData = articleData;

    const newData = [data];

    const updatedData = [...prevData, ...newData];

    setArticleData(updatedData);

    console.log(articleData);
  };

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
            onClick={(e) => handleSubmit(e)}
          >
            {" "}
            🔍{" "}
          </button>
        </form>
        {/* Browser articleHistory */}
        {articleData.length == 0 ? (
          <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
            {articleData.map((item, index) => (
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
        ) : (
          summary!=''?(
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
          ):(<div></div>)
        )}
      </div>
      {localStorage.getItem("article") !== null && (
        <div>
          <h2 className="font-satoshi fon-bold text-gray-600 text-xl">
            History
          </h2>
          <div className="summary_box">
            <p className="font-inter font-medium text-sm text-gray-700">
              {HistoryClass.getSummary()}
            </p>
          </div>
        </div>
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
