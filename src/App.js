import React from 'react'
import Navbar from './components/Navbar'
import './index.css';
import Gap from './components/Gap';
import Form from './components/Form';
import Map from './components/Map';
import Products from './components/Products';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='bg-[#FFFFFF]  bor h-full'>
      <Navbar/>
      <Form/>
      <Map/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App