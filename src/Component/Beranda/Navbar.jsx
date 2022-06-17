import React from 'react'
import { Menunavbar } from './Menunavbar'
import logo from '../Assets/gambar/Coat_of_arms_of_Bekasi.png'
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className='fixed w-full sm:h-[8rem] flex  justify-between px-4 bg-teal-800'>
        <div className='flex py-1 justify-start'>
            <div className=' rounded-b-full  w-[300px] h-[180px] bg-green-600 px-8 p-12 ml-[-100px] mr-10 mt-[-30px] flex justify-end'>
            <FaBars size={20} className='ml-20 items-center'/>
            </div>
            <img src={logo} className='w-[120px] h-[120px] p-4 ' />
        </div>
        <ul className='hidden sm:flex items-center py-4'>
            {
                Menunavbar.map((x,index)=>{
                    return <li key={index} className={x.classli}>
                        <a key={index} className={x.class} href={x.link}>{x.namamenu}</a>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Navbar