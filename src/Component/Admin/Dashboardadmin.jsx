import React from 'react'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import Sidebar from './Sidebar'
import Homeadmin from './Homeadmin'
import { FaBars,FaFile } from 'react-icons/fa'
import { FiBell } from 'react-icons/fi'
const Dashboardadmin = () => {
    const[user,Setusercookies] = React.useState();
    const[menu,Setmenu] = React.useState();
    const navigate = useNavigate();
    const getcookies = ()=>{
        Setusercookies(Cookies.get('user'));
        if(user === "")
        {
            navigate('/Loginadmin');
        }
    }
    React.useEffect(()=>{
        getcookies();
    },[])
  return (
    <div className='w-full flex bg-white h-screen'>
        <Sidebar namauser={user}/>
        <Homeadmin/>
    </div>
  )
}

export default Dashboardadmin