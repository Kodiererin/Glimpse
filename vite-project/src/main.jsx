import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { Provider } from 'react-redux'
// Using React-Redux 
// Installed React-Redux.


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
