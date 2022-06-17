import React from 'react'
import Webdiskom from '../Assets/gambar/webdiskom.png'
const diskom = () => {
  return (
    <div className='w-full h-[30rem] bg-gradient-to-r from-cyan-400 to-teal-800'>
        <div className='max-w-[1000px] px-7 mx-auto flex flex-col justify-center h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                <div>
                    <div className='py-4'>
                    <p className='font-bold text-xl'>Jangan Lupa</p>
                    </div>
                    <div className='py-4'>
                    <p className='font-bold text-2xl'>Kunjungi Halaman Kami Untuk Seputar Kegiatan Dan Informasi</p>
                    </div>
                    <div className='py-4'>
                        <button className='rounded-full w-[10rem] h-10 px-4 bg-white font-bold text-2xl' type='button'>Klik Disini</button>
                    </div>
                </div>
                <div>
                    <img src={Webdiskom} alt="webdiskom" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default diskom