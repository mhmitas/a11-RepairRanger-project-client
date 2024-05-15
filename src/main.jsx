import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import AuthProvider from './providers/AuthProvider'
import ServerLinkProveder from './providers/ServerLinkProveder'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServerLinkProveder>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </ServerLinkProveder>
  </React.StrictMode>,
)
