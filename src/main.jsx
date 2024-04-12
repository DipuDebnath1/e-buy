import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ContextInfo from './global/ContextInfo.jsx'


const router = createBrowserRouter([
{
  path:'/',
  element:<App />,
  children:[
    {
      path:'/',
      element:<Home />
    }
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
