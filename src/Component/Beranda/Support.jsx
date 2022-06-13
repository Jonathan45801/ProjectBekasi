import React from 'react'
import Logobekasi from '../Assets/gambar/Coat_of_arms_of_Bekasi.png'
import Logowebdiskom from '../Assets/gambar/logo.png'
import Logogambar2 from '../Assets/gambar/gambar2.png'
const Support = () => {
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-full flex flex-col justify-center items-start'>
            <div className='m-auto'>
                <p className='text-3xl tracking-wider font-serif'>Support</p>
            </div>
            <div className='m-auto flex px-4'>
                <div className='flex flex-col items-center px-8'>
                    <img src={Logobekasi} alt="logobekasi" className='w-[150px] h-[120px]' />
                    <p className='font-bold text-3xl font-serif tracking-wider pt-2'>Pemkot Bekasi</p>
                </div>
                <div className='flex flex-col items-center px-8'>
                    <img src={Logowebdiskom} alt="logobekasi" className='w-[150px] h-[120px]' />
                    <p className='font-bold text-3xl font-serif tracking-wider pt-2'>Diskominfo Standi Bekasi Kota</p>
                </div>
                <div className='flex flex-col items-center px-8'>
                    <div className='flex'>
                    <img src={Logogambar2} alt="logobekasi" className='w-[150px] h-[120px]' />
                    <div className=' border-l-green-500 h-[120px] pl-4 border-l-[4px]'></div>
                    <div className='flex flex-col '>
                    <h2 className='text-xl text-green-500 font-bold py-2 font-serif tracking-wider'>BALAI</h2>
                    <h2 className='text-xl text-green-500 font-bold py-2 font-serif tracking-wider'>SERTIFIKAT</h2>
                    <h2 className='text-xl text-green-500 font-bold py-2 font-serif tracking-wider'>ELEKTRONIK</h2>
                    </div>
                    </div>
                    <p className='font-bold text-3xl font-serif tracking-wider pt-2'>BSRE (BSSN)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support