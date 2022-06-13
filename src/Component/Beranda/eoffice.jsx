import React from 'react'

import {FaPaperPlane} from 'react-icons/fa'
import MaskGroup  from '../Assets/gambar/Mask_Group_1.png'
import Analyticsimg from '../Assets/gambar/Analytics_process_Two_Color.png' 
const eoffice = () => {
  return (
   <div className='backgroundhome h-screen w-full'>
    <div className=' mx-auto px-8 flex h-full overflow-hidden'>
        <div className='max-w-[1000px] w-full flex justify-between items-center px-8 pt-20'>
            <div className='w-[500px]'>
               <img src={Analyticsimg} alt="analytics" className='-top-[75px]'/> 
               
            </div>
                <div>
                <p className='text-4xl font-bold text-cyan-500 font-serif pb-1'>E-Office</p>
                
                <p className='text-4xl font-bold text-white pb-24'>DPMPTSP Kota Bekasi</p>
                <p className='text-md  font-bold text-white pb-12'>Aplikasi Tanda Tangan Elektronik</p>
                <button className=' rounded-full bg-white w-40 h-[3rem] font-bold text-xl' type='button'> Login</button>
                </div>
                <div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default eoffice