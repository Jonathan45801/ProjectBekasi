import React from 'react'
import {FaRegEnvelope} from 'react-icons/fa'
import {HiArrowCircleRight} from 'react-icons/hi'
import {IoIosPersonAdd} from 'react-icons/io'
const Cardadmin = () => {
  return (
    <div className='max-w-sm w-full'>
        <div className='flex items-stretch'>
        <div className='rounded-md h-[6rem] w-[250px] bg-indigo-600'>
        <div className=' px-2'>
            <div className='flex justify-between'>
            <label className='font-bold text-4xl py-1 px-4'>5</label>
            <div className='p-3'>
                <FaRegEnvelope size={30}/>
            </div>
            </div>
            <div>
                <label className='font-bold px-4'>Surat Masuk</label>
            </div>
        </div>
        <div>
        <div className='flex rounded-md h-[1.5rem] w-[250px] bg-indigo-300'>
            <span className='font-bold text-sm px-8 absolute'>More info </span>
            
        </div>
        </div>
        </div>
        <div className='px-6'>
        <div className='rounded-md h-[6rem] w-[250px] bg-green-600'>
        <div className='px-2'>
            <div className='flex justify-between'>
            <label className='font-bold text-4xl py-1 px-4'>5</label>
            <div className='py-3'>
                <FaRegEnvelope size={30}/>
            </div>
            </div>
            <div>
                <label className='font-bold px-4'>Surat Keluar</label>
            </div>
        </div>
        <div className='flex rounded-md h-[1.5rem] w-[250px] bg-green-400'>
            <span className='font-bold text-sm px-8'>More info</span>
        </div>
        </div>
        </div>
        <div className='px-4'>
        <div className='rounded-md h-[6rem] w-[250px] bg-yellow-600'>
        <div className='px-2'>
            <div className='flex justify-between'>
            <label className='font-bold text-4xl py-1 px-4'>4</label>
            <div className='py-3'>
                <IoIosPersonAdd size={30}/>
            </div>
            </div>
            <div>
                <label className='font-bold px-4'>Bagian</label>
            </div>
        </div>
        <div className='flex rounded-md h-[1.5rem] w-[250px] bg-yellow-400'>
            <span className='font-bold text-sm px-8'>More info</span>
        </div>
        </div>
        </div>
        <div className='px-4'>
        <div className='rounded-md h-[6rem] w-[250px] bg-cyan-700'>
        <div className='px-2'>
            <div className='flex justify-between'>
            <label className='font-bold text-4xl py-1 px-4'>8</label>
            <div className='py-3'>
                <IoIosPersonAdd size={30}/>
            </div>
            </div>
            <div>
                <label className='font-bold px-4'>Sub Bagian</label>
            </div>
        </div>
        <div className='flex rounded-md h-[1.5rem] w-[250px] bg-cyan-400'>
            <span className='font-bold text-sm px-8'>More info</span>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Cardadmin