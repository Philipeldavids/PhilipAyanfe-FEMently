'use client'
import React from 'react'
import Image from 'next/image'

const ProgramsWidget = () => {
  return (
    
        <div className="bg-white p-3 rounded-2xl row-span-2 h-110">
        
        <div className='flex space-x-4 items-center'>
            <Image 
            src="/famicons_outline.png"
            alt="burger"
            width={16}
            height={7}
            />
            <div className=' flex space-x-28 items-center'>
                <p className='text-sm text-zinc-400'>Programs</p>
                <span className='text-xs cursor-pointer text-purple-800'>See all</span>
            </div>
            <Image 
            src="/tdesign_more.png"
            alt="menu"
            width={14}
            height={8}
            
            />
        </div>
        <div className='p-2'>
            <div className="space-x-5 rounded-2xl bg-[url('/Rectangle.png')] bg-auto bg-no-repeat bg-center">
            
                <p className="text-white text-normal p-5">Fundamentals of User interface & Experience</p>
               
            {/* <Image 
                src="/setting-2.png"
                alt="settings"
                width={15}
                height={10}
                />
            */}
            </div>
            <p className='text-xs w-full'>This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach</p>
            <div className='flex space-x-5'>
                <div className='flex items-center space-x-2'>
                <Image                
                src="/man.png"
                alt="mentors"
                width={15}
                height={5}
                />
                <p className='text-xs'>Mentors</p>
                </div>
                <div className='flex space-x-2'>
                    <button className='text-xs text-purple-700 border-1 p-1 border-purple-800 rounded'>View Details</button>
                    <button className='text-xs text-white p-1 bg-purple-800 rounded'>Analysis</button>
                </div>
                
            </div>
        </div>
        <div className='p-2'>
            <div className="space-x-5 rounded-2xl bg-[url('/Rectangle.png')] bg-auto bg-no-repeat bg-center">
            
                <p className="text-white text-normal p-5">Colour Hack Practical 
                Group Call</p>
               
            {/* <Image 
                src="/setting-2.png"
                alt="settings"
                width={15}
                height={10}
                />
            */}
            </div>
            <p className='text-xs w-full'>This  program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach</p>
            <div className='flex space-x-5'>
                <div className='flex items-center space-x-2'>
                <Image                
                src="/man.png"
                alt="mentors"
                width={15}
                height={5}
                />
                <p className='text-xs'>Mentors</p>
                </div>
                <div className='flex space-x-2'>
                    <button className='text-xs text-purple-700 border-1 p-1 border-purple-800 rounded'>View Details</button>
                    <button className='text-xs text-white p-1 bg-purple-800 rounded'>Analysis</button>
                </div>
                
            </div>
        </div>
        
        </div>

    
  )
}

export default ProgramsWidget