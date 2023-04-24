import {configureStore } from '@reduxjs/toolkit'

import { articleApi } from './article'

export const store = configureStore({
    reducer : {
        [articleApi.reducerPath] : articleApi.reducer
    },
    middleware: (getDefaultMiddleware)=>{
        getDefaultMiddleware().concat()
    }
})

// Reducer Will allow to get the soecific slice.