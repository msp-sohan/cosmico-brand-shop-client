// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'
import router from './Routes/Router/Router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  // </React.StrictMode>,
)
