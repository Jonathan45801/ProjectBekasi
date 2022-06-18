import React,{useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import {AiOutlineEye} from 'react-icons/ai'
import Logokunci from '../Assets/gambar/gambar2.png'
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
          <div className='max-w-lg w-full bg-gradient-to-b from-green-800 to-green-500 rounded-lg h-[600px]'>
            <div className='mb-1'>
              <div className='w-full p-4'>
              <h2 className='text-3xl font-bold text-fuchsia-600 text-center font-serif tracking-wider'>E-Office </h2>
              </div>
            </div>
            <div className='pb-4 px-8 '>
              <p className='text-white text-lg font-serif tracking-wider'>Selamat Datang Di E-Office !</p>
            </div>
            <div className='pb-4 px-8'>
              <p className='text-sm font-serif text-gray-400 tracking-wider'>Silakan Login dengan Akun Anda</p>
            </div> 
            <form onSubmit={handlesubmitform} className='flex flex-col justify-center'>
              <div>
                  <label className='text-sm pl-10 p-2 text-white font-serif'>User Name / NIP / NIK</label>
              </div>
            <div className='px-10'>
            <input className={`${errormessage.name === "user" ? "border border-red-500":"border border-gray-300"} rounded-lg text-sm shadow-sm p-1 pl-2 rounded-lg text-sm shadow-sm p-1 pl-2 w-[350px]`} type="text" placeholder='Enter Nama' name='user'/>
            </div>
            <div className='pt-4'>
            <label className='text-sm font-bold pl-11 text-white font-serif p-2'>Password</label>
            </div>
            <div className='flex px-10'>
              <input className={`${errormessage.name==="pass" ? "border border-red-500" :"border border-gray-300"} form-input rounded-lg text-sm shadow-sm p-1 pl-2 w-[350px]`} type="password" placeholder='Enter password' name='pass' />
              <div className='border bg-white border-gray-300 rounded-lg transform left-3 -translate-x-6'><AiOutlineEye size={30}/></div>
            </div>
            {/* <div className='pt-2 px-28 flex-col grid grid-cols-3 gap-4 justify-between items-center'>

              <div className='flex col-span-2'>
            <input className='h-5 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none cursor-pointer' id='checkboxremeber' type="checkbox"/>
                <span className='text-sm px-1 inline-block' htmlFor="checkboxremeber">
                  Remember me
                </span>
                </div>
                <div className='flex px-12'>
                  <a href='/' className='text-sm '>Home</a>
                </div>
            </div> */}
            <div className='flex  pt-6  px-10'>
              <button className='border border-blue-700 bg-blue-700 w-[20rem] rounded-md p-1 font-bold font-serif text-white' type='submit'>Login</button>
            </div>
            <div className='flex  pt-6  px-10'>
              <button className='border border-orange-600 bg-orange-600 w-[20rem] rounded-md p-1 font-bold font-serif text-white' type='submit'>Login dengan SSO</button>
            </div>
            <div className='flex pt-6 justify-center'>
              <p className='text-md text-white'>Support by</p>
            </div>
            <div className='flex pt-3 justify-center '>
            <img src={Logokunci} alt="logobekasi" className='w-[90px] h-[90px]' />
                    <div className=' border-l-green-500 h-[90px] pl-4 border-l-[4px]'></div>
                    <div className='flex flex-col'>
                    <h2 className='text-lg text-green-900 font-bold font-serif tracking-wider'>BALAI</h2>
                    <h2 className='text-lg text-green-900 font-bold font-serif tracking-wider'>SERTIFIKAT</h2>
                    <h2 className='text-lg text-green-900 font-bold font-serif tracking-wider'>ELEKTRONIK</h2>
                    </div>
            </div>
            </form>
          </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Loginadmin