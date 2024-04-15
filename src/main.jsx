import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ContextInfo from './global/ContextInfo.jsx'
import Cart from './pages/Cart.jsx'


const router = createBrowserRouter([
{
  path:'/',
  element:<App />,
  children:[
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/cart',
      element:<Cart />
    },
  ]

}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextInfo>
      <RouterProvider router={router} />
    </ContextInfo>
  </React.StrictMode>
)
