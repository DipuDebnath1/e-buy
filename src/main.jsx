import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ContextInfo from './global/ContextInfo.jsx'
import Cart from './pages/Cart.jsx'
import Shop from './pages/Shop.jsx'
import Product from './pages/Product.jsx'
import Error from './components/Error.jsx'
import Contact from './pages/Contact.jsx'
import Pages from './pages/Pages.jsx'
import Login from './pages/Login.jsx'
import AuthProvider from './global/AuthProvider.jsx'
import Register from './pages/Register.jsx'


const router = createBrowserRouter([
{
  path:'/',
  element:<App />,
  errorElement: <Error />,
  children:[
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/cart',
      element:<Cart />
    },
    {
      path:'/shop',
      element:<Shop />
    },
    {
      path:'/shop/:id',
      element:<Product />
    },
    {
      path:'/contact',
      element:<Contact />
    },
    {
      path:'/pages',
      element:<Pages />
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/register',
      element:<Register />
    },
  ]

}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextInfo>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </ContextInfo>
  </React.StrictMode>
)
