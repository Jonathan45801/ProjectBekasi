import React from 'react'
import {BsPersonCircle,BsPersonFill,BsChevronLeft} from 'react-icons/bs'
import { menusidebar,subsidesettingapplikasi,submasteraplikasi,subdokumen } from './data/Datasidebar'

const Sidebar = ({namauser}) => {
    const[subdropdown,Setsubdropdown] = React.useState();
    const[rotate,Setrotate] = React.useState(false);
    const[navindex,Setnavindex] = React.useState();
    const[mbvalue, Setmbvalue] = React.useState();
    const[menuinti,Setmenuinti] = React.useState();
    const handlesubdropdown = (e,b)=>{
        Setsubdropdown(e);
        Setrotate(!rotate);
        Setnavindex(b);
        handlemvalue(b);
    }
    const handlemvalue=(e)=>{
        
        if(e === 1)
        {
            Setmbvalue("relative mb-[20px]");
        }
        else if(e === 2)
        {
            Setmbvalue("relative mb-[200px]");
        }
        else
        {
            Setmbvalue("relative mb-[10px]");
        }
    }
    const renderlisubdropdown=(c)=>{
        if(c === 1)
        {
            return(
                <ul className='h-auto'>
                {subsidesettingapplikasi.map((subsetting,indexsetting)=>(

                        <li key={indexsetting} className='text-white text-md flex items-center py-2 cursor-pointer hover:bg-blue-500 rounded-md'>

                            <input key={indexsetting} type={subsetting.typemenu} className="border border-gray-300 bg-white rounded-full h-4 w-4 checked:bg-white checked:border-gray-700" id={subsetting.idmenu}/>
                        <label className='text-white px-2'htmlFor={subsetting.idmenu} >{subsetting.namamenu}</label>
                        </li>
                    
                    
                ))}
                </ul>)
         
            
        }
        else if(c === 2)
        {
            return(
                submasteraplikasi.map((submaster,indexmaster)=>(
                    <li key={indexmaster} className='text-white text-xl flex items-center gap-x-4 py-2 cursor-pointer hover:bg-blue-500 rounded-md'>
                        <input key={indexmaster} type={submaster.typemenu} className={submaster.classtype} id={submaster.idmenu} />
                        <label className='text-white px-2' htmlFor={submaster.idmenu}>{submaster.namamenu}</label> 
                    </li>
                ))
            )
         
        }
        else
        {
           return(
                subdokumen.map((subdok,indexdok)=>(
                    <li key={indexdok} className='text-white text-xl flex items-center gap-x-4 py-2 cursor-pointer hover:bg-blue-500 rounded-md'>
                        {/* <input key={indexdok} type={subdok.typemenu} value={subdok.url} className={subdok.classtype} /> */}
                        {subdok.namamenu}
                    </li>
                ))
           )
           
        }
    }

  return (
    <div className='flex'>
    <div className='w-72 duration-300 h-screen bg-black'>
        <div className='border border-gray-700 h-10 flex px-2 p-1'>
        
        <div className='rounded-full bg-white w-7 h-7'>
            <span className='fixed font-bold text-md text-center text-black px-2 font-serif'>A</span>
        </div>
        
        <div className='px-4'>
            <p className='text-white text-md font-serif'>Aplikasi - DMS</p>
        
        </div>
        </div>
        <div className='border border-gray-700 h-10 flex px-2 p-1'>
            <div className='rounded-full bg-white w-7 h-7'>
                <div className='px-1 py-1'>
                <BsPersonFill size={20}/>
                </div>
            </div>
            <div className='px-4'>
                <p className='text-white text-md font-serif'>{namauser}</p>
            </div>
        </div>
        <div className='pt-12 px-2'>
            <p className='text-white text-xl font-serif'>Setting</p>
            <ul className='px-2'>
                {
                    menusidebar.map((menus,index)=>(
                    <li key={index} className={`text-white text-xl flex items-center py-2 cursor-pointer ${index === navindex && rotate ? `${mbvalue}`:"hover:bg-blue-500 rounded-md"} `} >
                        
                      {menus.dropdown ? (
                        <>
                        
                         <i className={`${index === navindex && rotate ? "mb-5":""}`}>{menus.menuicon}</i>
                        <div className='relative inline-block'>
                            <div className={`relative ${index === navindex && rotate ?"pb-5":""}`}>
                      <button type='button' className='px-2'>
                      {menus.namamenu}
                        <i className={`ml-12 ${index === navindex && rotate ? " absolute left-[170px] rotate-90":"rotate-0 absolute left-[170px]"}`} onClick={()=>handlesubdropdown(menus.namamenu,index)} ><BsChevronLeft size={20}/></i>
                      </button>
                        <ul className={index === navindex && rotate ? "absolute w-56 bg-black":"hidden"}>
                             {renderlisubdropdown(index)}
                        </ul>
                     
                      </div>
                    
                     </div>
                     </>
                      ):(
                        <>
                        {menus.menuicon}
                        <span className='text-white px-2 text-xl'>{menus.namamenu}</span> 
                        </>)}
                        
                    </li>
                    ))
                    
                }
                
                
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Sidebar