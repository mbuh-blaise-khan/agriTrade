import { useState } from 'react'
import './App.css'

import Home from './components/home/home' 
import About from './components/about/about' 
import Product from './components/product/product' 
import Contact from './components/contact/contact' 
import Login from './components/login/login' 


function App() {
  return (
    <div className='font-bold underline space-y-30 text-4xl px-4 text-center my-8'>
        <Home/>
        <About/>
        <Product/>
        <Contact/>
        <Login/>
    </div>
  )
}

export default App
