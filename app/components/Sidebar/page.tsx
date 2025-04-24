import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="p-5 w-60 text-white text-md bg-purple-950">

        <div className=' flex flex-row space-x-3 m-2 mb-10'>
            <Image 
                src="/Frame1171276268.png" 
                alt="logo"
                width={100}
                height={100}
                
        />
        <Image 
            src="/grid-4.png"
            alt="toggle"
            width={20}
            height={20}
            className='ml-5'
        />
        </div>
        <ul className="flex flex-col p-3 m-3 space-y-6" >
            <li className='flex space-x-6 flex-row'><Image 
              src="/Icon.png"
              alt="dashboard"
              width={15}
              height={15} /><Link href="#">Dashboard</Link></li>
            <li className="flex space-x-6">
            <Image 
              src="/book.png"
              alt="dashboard"
              width={15}
              height={15} /><Link href="#">Programs</Link></li>
            <li className="flex space-x-6"><Image 
              src="/bubble.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="#">Activities</Link></li>
            <li className="flex space-x-6"><Image 
              src="/clipboard-text.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="#">Forums</Link></li>
            <li className="flex space-x-6"><Image 
              src="/empty-wallet.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="#">Finances</Link></li>
            <li className="flex space-x-6"><Image 
              src="/award.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="#">Rewards</Link></li>
            <li className="flex space-x-6"><Image 
              src="/diagram.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="#">Analytics</Link></li>
            <li className="flex space-x-6"><Image 
              src="/setting-2.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="#">Settings</Link></li>
            <li className="flex space-x-6"><Image 
              src="/logout.png"
              alt="dashboard"
              width={20}
              height={20} /><Link href="#">LogOut</Link></li>
        </ul>

        <div className="bg-purple-800 p-5 space-y-3 rounded-2xl">
        <Image 
              src="/user-tag.png"
              alt="dashboard"
              width={20}
              height={20} />
            <p className='text-sm'>Got some questions, enquiries or need help?</p>
            <a className='text-xs'href="#">Visit Mently Help Desk Here</a>
        </div>

        <div className="mt-3 text-sm"><p>Switch to Classic Mode</p><input></input></div>


    </div>
  )
}

export default Sidebar