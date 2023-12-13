// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'

import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import router from './Routes/Router'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <Toaster />
  </QueryClientProvider>
  // </React.StrictMode>,
)
