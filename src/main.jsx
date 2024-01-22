import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Cart from './components/Cart.jsx';
import Hero from './components/Hero.jsx';
import ProductPage from './components/ProductPage.jsx';
import Error from './components/Error.jsx';
import Test from './components/Test.jsx';

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Hero />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/productpage' element={<ProductPage />} />
      <Route path='/test' element={<Test />}/>
      <Route element={<Error />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
