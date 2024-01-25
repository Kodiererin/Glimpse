// // One Specific part of state from global store

// import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// // const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
// const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;


// export const articleApi = createApi({
//     reducerPath  : 'articleApi',
//     baseQuery : fetchBaseQuery({
//         baseUrl : 'https://article-extractor-and-summarizer.p.rapidapi.com/',
//         prepareHeaders:(headers)=>{
//             headers.set('X-RapidAPI-Key', rapidApiKey)
//             headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.comn ')
            
//             return headers;
//         }
//     }),
//     endpoints : (builder)=>({
//         getSummary : builder.query({
//             query:(params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
//             // length can be modified from 3 to many
//         })
//     })   
// });

// // The string might contain special characters so for that we must use : encodeURIComponent 
// // This is for Special Characters.

// export const { useLazyGetSummaryQuery } = articleApi;

// // Exporting this Hook.