import { FaHome } from "react-icons/fa"
import {BsGearFill} from "react-icons/bs"
import {AiOutlineFileText}from 'react-icons/ai'
import {ImDownload3} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
export const menusidebar =[
    {
        namamenu:"Dashboard",
        menuicon:<FaHome size={20}/>,
        url:"/Dasboardadmin",
        dropdown:false
    },
    {
        namamenu:"Setting Aplikasi",
        menuicon:<BsGearFill size={20}/>,
        dropdown:true
    },
    {
        namamenu:"Master Aplikasi",
        menuicon:<FaHome size={20}/>,
        dropdown:true
    },
    {
        namamenu:"Dokumen",
        menuicon:<AiOutlineFileText size={20}/>,
        url:"/Dokumenadmin",
        dropdown:true
    },
    {
        namamenu:"Backup Database",
        menuicon:<ImDownload3 size={20}/>,
        url:"/Backupdatabase",
        dropdown:false
    },
    {
        namamenu:"Keluar",
        menuicon:<FiLogOut size={20}/>,
        url:"/keluar",
        dropdown:false
    }

]

export const subsidesettingapplikasi=[
    {
        namamenu:"Akses Administrasi",
        typemenu:"radio",
        url:"/aksesadministrasi",
        classtype:"border border-gray-300 bg-white rounded-full h-4 w-4 checked:bg-white checked:border-gray-700",
        idmenu:"idakses"
    }
]

export const submasteraplikasi=[
    {
        namamenu:"Instansi",
        typemenu:"radio",
        url:"/instasimaster",
        classtype:"border border-gray-300 bg-white rounded-full h-4 w-4 checked:bg-white",
        idmenu:"idinstasi"
    },
    {
        namamenu:"Bagian",
        typemenu:"radion",
        url:"/bagianmaster",
        classtype:"border border-gray-300 bg-white rounded-full h-4 w-4 checked:bg-white",
        idmenu:"idbagian"
    },
    {
        namamenu:"Sub Bagian",
        typemenu:"radio",
        url:"/submaster",
        classtype:"border border-gray-300 bg-white rounded-full h-4 w-4 checked:bg-white",
        idmenu:"idsub"
    },
    {
        namamenu:"Pengguna",
        typemenu:"radio",
        url:"/penggunamaster",
        classtype:"border border-gray-300 bg-white rounded-full h-4 w-4 checked:bg-white",
        idmenu:"idpengguna"
    },
    {
        namamenu:"Pengaturan Akses",
        typemenu:"radio",
        url:"/pengaturanmaster",
        classtype:"border border-gray-300 bg-white rounded-full h-4 w-4 checked:bg-white",
        idmenu:"idpengaturan"
    }
]
export const subdokumen=[
    {
        namamenu:"",
        typemenu:"radio",
        url:"/dokumenmaster",
        classtype:"border border-gray-300 bg-white rounded-full h-4 w-4 checked:bg-white"
    }
]