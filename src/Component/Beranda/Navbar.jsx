import React from 'react'
import { Menunavbar } from './Menunavbar'
const Navbar = () => {
  return (
    <div className='fixed w-full sm:h-[5rem] flex justify-between items-center px-4 bg-violet-300'>
        <div className='font-bold text-lg font-serif text-center p-4'>
            <span>Aplikasi-</span>
            <span className='text-red-700'>DMS</span>
        </div>
        <ul className='hidden sm:flex items-center'>
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