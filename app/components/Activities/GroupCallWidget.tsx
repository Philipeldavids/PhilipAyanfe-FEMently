import React from 'react'
import Image from 'next/image'

const GroupCallWidget = () => {
  return (

    <div className="bg-white p-3 rounded-2xl h-60 col-span-2">
         <div className='flex space-x-4 items-center'>
                    <Image 
                    src="/famicons_outline.png"
                    alt="burger"
                    width={16}
                    height={7}
                    />
                    <div className=' flex space-x-105 items-center'>
                        <p className='text-sm text-zinc-400'>Group Calls</p>
                        <span className='text-xs cursor-pointer text-purple-800'>See all</span>
                    </div>
                    <Image 
                    src="/tdesign_more.png"
                    alt="menu"
                    width={14}
                    height={8}
                    
                    />
                </div>
                <div className='w-30 h-40 p-2'>
                <div className="rounded-2xl bg-[url('/Rectangle.png')] bg-auto bg-no-repeat bg-center">

                </div>

                </div>
                <div>

                </div>
    </div>
  )
}

export default GroupCallWidget