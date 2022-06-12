import React from 'react'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import DataTable from 'react-data-table-component'

import { FaBars,FaFile } from 'react-icons/fa'
import { FiBell } from 'react-icons/fi'
import Cardadmin from './subcomponent/Cardadmin'

const columns=[
    {
        name:'No',
        selector:row=>row.id,
        
    },
    {
        name:'Nomor Surat',
        selector:row=>row.no_surat,
    },
    {
        name:'Tanggal Surat',
        selector:row=>row.tanggalsurat
    },
    {
        name:'Isi Surat',
        selector:row=>row.namasurat
    },
    {
        name:'File',
        selector:row=>row.file
    },
    {
        name:'Tampil',
        selector:row=>row.tampil
    }
]
const data =[
    {
        id:1,
        no_surat:"Test",
        tanggalsurat:"12-Jun-2022",
        namasurat:"Data dummy",
        file:"",
        tampil:""
    }
]
const Homeadmin = () => {
  return (
    <div className='bg-white h-screen w-full'>
        <div className='mt-0 bg-violet-300 w-full h-12'>
            <div className='flex py-2 justify-between items-center'>
                <div className='px-2 flex'>
                <div className='py-1'>
                <FaBars size={20}/>
                </div>
                <div className='px-2'>
                <button className='font-bold cursor-pointer text-lg' type='button'>Home</button>
                </div>
                <div className='px-2'>
                <button className='font-bold cursor-pointer text-lg' type='button'> Keluar</button>
                </div>
                </div>
                <ul className='flex'>
                    <li className='py-1'>
                        <FiBell size={20}/>
                        <span className='absolute top-2 right-8 rounded-full bg-white w-4 h-4 flex justify-center items-center text-red-500 text-sm'><span>0</span></span>
                    </li>
                    <li className='py-1 px-2'>
                        <FaFile size={20}/>
                        <span className='absolute top-2 right-1 rounded-full bg-white w-4 h-4 flex justify-center items-center text-red-500 text-sm'><span>0</span></span>
                    </li>
                </ul>
            </div>
        </div>
        <div className='pt-6 flex'>
            <div className='p-7 '>
                <label className='font-bold text-2xl'>Halaman Dasboard</label>
            </div>
            <div className='p-7'>
                <label className='absolute right-0'>
                    <span className='text-red-500 text-md'>Home</span>   
                    <span className='font-bold text-md'> / Dashboard</span> 
                </label>
            </div> 
        </div>
        <div className='pt-6 w-full'>
        <div className='px-6'>
                <Cardadmin/>
            </div>
        </div>
        <div className='pt-7 w-full'>
            <div className='px-6'>
                <div className='rounded-sm border-black border w-full h-[300px]'>
                    <div className='p-2 px-4 border border-b-black '>
                        <label className='text-lg font-bold font-serif'>Surat Masuk Tanggal hari ini</label>
                    </div>
                    <div>
                        <DataTable
                        columns={columns} 
                        data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homeadmin