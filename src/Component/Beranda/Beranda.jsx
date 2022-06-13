import React from 'react'
import Navbar from './Navbar'
import Eoffice from './eoffice'
import Beranda2 from './beranda2'
import Balai from './Balai'
import Support from './Support'
import Diskom from './diskom'
import Lokasi from './Lokasi'
import Footer from './Footer'
const Beranda = () => {
  return (
    <div>
         <Navbar/>
         <Eoffice/>
         <Beranda2/>
         <Balai/>
         <Support/>
         <Diskom/>
         <Lokasi/>
         <Footer/>
    </div>
  )
}

export default Beranda