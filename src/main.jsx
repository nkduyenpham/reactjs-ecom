// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import ShopContextProvider from './Context/ShopContext.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <ShopContextProvider>
//     <App />
//   </ShopContextProvider>
// )


// Testing deployment on Github

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.jsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </HashRouter>
)
