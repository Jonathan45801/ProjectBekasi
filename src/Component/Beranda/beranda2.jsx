import React from 'react'
import Electronic from '../Assets/gambar/electronic-signature.png'
import {FaRegFolderOpen,FaWrench} from 'react-icons/fa'
import {IoShieldHalfOutline} from 'react-icons/io5'
import {BsPersonCheckFill} from 'react-icons/bs'
const beranda2 = () => {
  return (
    <div className='w-full h-screen bg-cyan-800'>
      <div className='w-full h-screen flex justify-between py-6 px-8'>
        <div className='grid grid-cols-2 gap-4 px-8 mx-auto'>
          <div>
              <div className='py-12 flex flex-col'>
                <p className='text-xl text-purple-500 font-bold font-serif tracking-wider'>Kenapa E-Office ?</p>
              </div>
              <div className='py-3'>
                <p className='text-4xl font-bold'>Memberikan Kamu <span className='text-white text-4xl'>Kemudahan, Efisien Waktu</span> Serta Pengalaman Dalam Menggunakan Layanan Digital Kami</p> 
              </div>
              <div className='py-6'>
                <p className='text-white text-md'>untuk menyelesaikan persoalan menggunakan solusi inovatif,integrasi dan berkelanjutan melalui penyedia infrastruktur dan layanan digital</p>
              </div>
              <div className='flex py-6'>
                <button className='rounded-full w-[20rem] h-[3rem] bg-white text-md font-bold font-serif tracking-wider' type='button'>Baca panduan lainnya</button>
              </div>
              <div className='flex justify-around items-center my-auto h-[18rem]'>
             
                <div className='rounded-full bg-blue-500 w-20 h-20 p-1'>
                  <FaRegFolderOpen size={70} className='px-4 text-white'/>
                  <div className='w-[8rem] py-4'>
                    <p className='text-white text-xl tracking-wider'>Arsip Digital</p>
                    </div>
                </div>
                <div className='rounded-full bg-pink-500 w-20 h-20 p-1'>
                  <IoShieldHalfOutline size={70} className='px-4 text-white'/>
                  <div className='w-[8rem] py-4'>
                    <p className='text-white text-xl tracking-wider'>Keamanan</p>
                  </div>
                </div>
              </div>
          </div>
          <div>
            <div>
              <img src={Electronic} className='h-[460px] pt-12' />
              </div>
              <div className='flex justify-around items-center my-auto h-[18rem]'>
              <div className='rounded-full bg-yellow-500 w-20 h-20 p-1'>
              <FaWrench size={70} className='px-4' />
              <div className='w-[8rem] py-4'>
                <p className='text-white text-xl tracking-wider'>Perawatan</p>
                </div>
              </div>
              <div className='rounded-full bg-blue-600 w-20 h-20 p-1'>
              <BsPersonCheckFill size={70} className='px-4 text-white'/>
              <div className='w-[8rem] py-4'>
                <p className='text-white text-xl tracking-wider'>Perawatan</p>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default beranda2