import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {FaPhoneVolume,FaPaperPlane} from 'react-icons/fa'
const Lokasi = () => {
  return (
    <div className='w-full h-screen backgroundlokasi'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
            <div className='max-w-[1000px] w-full py-4'>
            <div className='py-6'>
                <p className='text-white font-bold font-serif tracking-wider text-3xl'>Lokasi Kami</p>
            </div>
            <div className='flex py-4'>
                <MdLocationOn size={50} className='text-emerald-600'/>
                <p className='text-white text-xl font-bold px-4 p-2 font-serif tracking-wider'>JL A.Yani No.2 Komplek GOR Bekasi Selatan, Kota Bekasi - 17144</p>
            </div>
            <div className='flex py-4'>
                <FaPhoneVolume size={50} className='text-emerald-600'/>
                <p className='text-white text-xl font-bold px-4 p-2 font-serif tracking-wider'>+62 21 88959980</p>
            </div>
            <div className='flex py-4'>
                <FaPaperPlane size={50} className='text-emerald-600'/>
                <p className='text-white text-xl font-bold px-4 p-2 font-serif tracking-wider'>diskominfo.bekasikota.go.id, opd.diskominfostandi@bekasi.go.id</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Lokasi