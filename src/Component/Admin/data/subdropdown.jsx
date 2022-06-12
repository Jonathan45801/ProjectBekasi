import React from 'react'

const subdropdown = ({submenus}) => {
  return (
    <ul className='h-25 w-25'>
        {
            submenus.map((submenus,index)=>{
                <li key={index}> {submenus}</li>
            })
        }
    </ul>
  )
}

export default subdropdown