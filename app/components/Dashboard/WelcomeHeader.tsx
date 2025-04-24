'use client'
import React from 'react'

const WelcomeHeader = () => {
  return (
    <div className='flex absolute w-240 bg-purple-800 items-center p-2 pr-5 pl-5 space-x-20 rounded-sm text-white right-10 mt-28' >
        <p className='text-lg font-semibold'>Welcome Aboard, Blessing 👋</p>
        <p className='text-shadow-gray-100'>We’re thrilled to have you join Techrity Team!</p>
        <button onClick={()=> console.log("update profile")} className='bg-white cursor-pointer text-gray-950 p-2 rounded-sm text-sm'>Update Profile</button>
    </div>
  )
}

export default WelcomeHeader