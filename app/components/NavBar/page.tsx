import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div>
    <div className='absolute w-255 h-15 bg-white right-0'>
        
        <div className='flex space-x-4 p-3 ml-190 w-100 h-15 items-center' >
        <div className='mr-6'>
            <Image 
            className='align-middle'
            src="/notifications.png"
            alt="notification"
            width={25}
            height={25}
            />
        </div>
        <div className='flex space-x-2 items-center'>
            <Image             
            src="/UserImage.png"
            alt="userimage"
            width={32}
            height={20}
            />
           <div>
            <p className='text-sm'>Techrity Founder</p>
            <p className='text-xs'>member</p>
           </div>

           <Image             
            src="/Frame1321318580.png"
            alt="userprofile"
            width={15}
            height={7}
            />
        </div>
        </div>
    </div>  

    
    </div>
  )
}

export default NavBar