import React from 'react'
import {FaHandshake}from 'react-icons/fa'
import Gambarkunci from '../Assets/gambar/gambar2.png'
const Balai = () => {
  return (
    <div className='w-full h-[30rem] bg-gradient-to-b from-cyan-500 to-teal-900'>
        <div className='flex w-full h-screen'>
            <div className='w-full grid grid-cols-2 h-[30rem] gap-4 px-4'>
                <div className='flex items-center'>
                    <div className='px-6'>
                    <img src={Gambarkunci} alt="kunci" className='w-[200px] h-[200px]' />
                    </div>
                    <div className=' border-l-green-500 h-[200px] pl-4 border-l-[4px]'></div>
                    <div className='flex flex-col -mt-10'>
                    <h2 className='text-4xl text-green-500 font-bold py-2 font-serif tracking-wider'>BALAI</h2>
                    <h2 className='text-4xl text-green-500 font-bold py-2 font-serif tracking-wider'>SERTIFIKAT</h2>
                    <h2 className='text-4xl text-green-500 font-bold py-2 font-serif tracking-wider'>ELEKTRONIK</h2>
                    </div>
                </div>
                <div className='flex flex-col mt-20 p-4'>
                    <div className='py-2'>
                        <p className='text-white font-bold text-3xl font-serif tracking-wider'>Bagaimana Dengan Legalitas ?</p>
                    </div>
                    <div className='py-4'>
                        <p className='text-white font-bold text-4xl font-serif tracking-wider'> APAKAH AMAN ?</p>
                    </div>
                    <div className='py-6'>
                        <p className='text-white font-bold texl-2xl font-serif tracking-wider'>
                            kami menjalin kerjasama dengan balai sertifikikasi elektronik BSrE(bssn),
                            untuk pemanfaatan layanan sertifikasi elektronik demi kenyamanan pengguna serta keamanan data dan juga terverifikasi
                        </p>
                    </div>
                    <div className='py-4 text-white'>
                        <FaHandshake size={45}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Balai