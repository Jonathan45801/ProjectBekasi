import React,{useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
const Loginadmin = () => {
  const history = useNavigate();
  const [errormessage,Seterrormessage] = useState({}); 
  const handlesubmitform = (e) =>{
    e.preventDefault();
    var{user,pass} = document.forms[0];
    Axios.post('/loginadmin',{
      user: user.value,
      pass: pass.value
    }).then(function(body){
      const checkuserdata = body.data.find((user1)=>user1.Namauser === user.value);
      if(checkuserdata)
      {
        if(checkuserdata.Password !== pass.value){
          Seterrormessage({name:"pass",message:"password salah"});
          toast.error("password salah",{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
        else
        {
          history('/dashboardadmin');
          Cookies.set('user',checkuserdata.Namauser,{expires:1})
        }
      }
      else
      {
        Seterrormessage({name:"user",message:"Nama User salah"});
        toast.error("username salah",{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    })
  }
  return (
    <div className='w-full h-screen backgroundcolor-login'>
        <div className='flex justify-center items-center h-screen'>
          <div className='max-w-md w-full bg-white rounded-lg h-[300px]'>
            <div className='mb-8'>
              <div className='w-full bg-black rounded-lg p-4'>
              <h2 className='text-2xl text-white text-center font-serif'>ADMINISTRASI </h2>
              </div>
            </div>
            <form onSubmit={handlesubmitform}>
            <div>
            <label className='text-sm font-bold pl-10 p-2'>Username</label>
            <input className={`${errormessage.name === "user" ? "border border-red-500":"border border-gray-300"} rounded-lg text-sm shadow-sm p-1 pl-2 w-[250px]}rounded-lg text-sm shadow-sm p-1 pl-2 w-[250px]`} type="text" placeholder='Enter Nama' name='user'/>
            </div>
            <div className='pt-6'>
              <label className='text-sm font-bold pl-11 p-2'>Password</label>
              <input className={`${errormessage.name==="pass" ? "border border-red-500" :"border border-gray-300"} rounded-lg text-sm shadow-sm p-1 pl-2 w-[250px]`} type="password" placeholder='Enter password' name='pass' />
            </div>
            <div className='pt-2 px-28 flex-col grid grid-cols-3 gap-4 justify-between items-center'>

              <div className='flex col-span-2'>
            <input className='h-5 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none cursor-pointer' id='checkboxremeber' type="checkbox"/>
                <span className='text-sm px-1 inline-block' htmlFor="checkboxremeber">
                  Remember me
                </span>
                </div>
                <div className='flex px-12'>
                  <a href='/' className='text-sm '>Home</a>
                </div>
            </div>
            <div className='flex justify-center pt-6 items-center'>
              <button className='border bg-violet-300 w-[8rem] rounded-md p-1 font-bold font-serif' type='submit'>Login</button>
            </div>
            </form>
          </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Loginadmin