import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
// Using React-Redux 
// Installed React-Redux.

// import {store} from './services/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store} > */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
)
