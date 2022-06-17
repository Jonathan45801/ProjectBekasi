import React from 'react'

import {FaPaperPlane} from 'react-icons/fa'
import MaskGroup  from '../Assets/gambar/Mask_Group_1.png'
import Analyticsimg from '../Assets/gambar/Analytics_process_Two_Color.png'
import {BsFillTriangleFill,BsTriangle} from 'react-icons/bs'
import {IoTriangle} from 'react-icons/io5'
const eoffice = () => {
  return (
   <div className='h-screen w-full bg-gradient-to-b from-teal-800 to-cyan-600'>
    <div className='w-full mx-auto px-8 flex h-full overflow-hidden'>
        <div className=' w-full flex justify-between items-center px-8 pt-20 mx-auto'>
            <div>
              <div className='w-[500px] h-[400px]'>
               <img src={Analyticsimg} alt="analytics"/> 
               </div>
               <IoTriangle size={150} className='-rotate-12 opacity-10' />
            </div>
            <div>
            <BsFillTriangleFill size={150} className='-rotate-45 opacity-10'/>
            </div>
                <div className='flex flex-col'>
                <BsFillTriangleFill size={30} className='-rotate-12 opacity-20 translate-y-12 translate-x-10 '/>
                <h2 className='text-4xl font-bold text-teal-500 font-serif pb-1'>E-Office</h2>
                <p className='text-3xl font-bold text-white pb-24'>DPMPTSP Kota Bekasi</p>
                <p className='text-md  font-bold text-white pb-12'>Aplikasi Tanda Tangan Elektronik</p>
                <button className=' rounded-full bg-white w-40 h-[3rem] font-bold text-xl' type='button'> Login</button>

                </div>
                
                
          </div>
          <div className='w-[500px] h-full flex '>
          
          </div>
        </div>
          
          
    </div>
  )
}

export default eoffice