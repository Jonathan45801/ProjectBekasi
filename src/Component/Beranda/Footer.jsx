import React from 'react'
import {BsInstagram,BsTwitter,BsFacebook}from 'react-icons/bs'
import {CgCopyright} from 'react-icons/cg'
const Footer = () => {
  return (
    <div className='w-full h-[10rem] bg-green-300'>
        <div className='h-[10rem] flex justify-between px-4'>
            <div className='flex my-auto px-8'>
                <div className='px-4'>
                    <BsFacebook size={50}/>
                </div>
                <div className='px-4'>
                <BsTwitter size={50}/>
                </div>
                <div className='px-4'>
                <BsInstagram size={50}/>
                </div>
            </div>
            <div className='flex justify-end my-auto px-8'>
                <div className='p-1'>
            <CgCopyright size={20} className='text-white' />
            </div>
                <p className='text-white text-lg font-serif tracking-wider'>
                    2022 powered by ergon egile system
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer