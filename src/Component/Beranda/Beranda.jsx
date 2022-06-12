import React from 'react'
import Navbar from './Navbar'
import {FaPaperPlane} from 'react-icons/fa'
import MaskGroup  from '../Assets/gambar/Mask_Group_1.png'
const Beranda = () => {
  return (
    <div className='bg-violet-300 h-screen w-full'>
    <Navbar/>
        <div className='w-full mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                    
                    <div className='md:flex'>
                    <FaPaperPlane size={32} className='hidden md:flex'/>
                    <span className='md:p-4 text-2xl  md:text-4xl font-bold'> Document </span>
                    <span className='md:p-4 text-2xl  md:text-4xl font-bold text-red-500'>Management</span>
                    </div>
                    <p className='md:pl-12 text-2xl md:text-4xl font-bold'>Sistem</p>
                    
                    <div className='pl-64 z-0'>
                        <FaPaperPlane size={64} className="text-gray-300"/>
                    </div>
                    <div className='pt-2 md:pt-6 md:pl-12'>
                        <p className='text-lg font-bold'>Aplikasi Pengelolaan Dokumen Surat Masuk Dan Surat Keluar Pada Sekretariat Daerah Kota Bekasi</p>
                    </div>
                    <div className='pt-2 md:pt-12 md:pl-12'>
                        <p className='text-lg font-bold'>Alamat: </p>
                    </div>
                </div>
                <div>
                    
                    <img src={MaskGroup} alt="Gambar1" className='h-[200px] w-[200px] md:h-[400px] md:w-[500px] md:pl-12 md:pt-12 '/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beranda