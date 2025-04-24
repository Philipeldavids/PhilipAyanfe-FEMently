import React from 'react'
import Image from 'next/image'
import WelcomeHeader from './WelcomeHeader'


const Dashboard = () => {
  return (
<div>
    <WelcomeHeader/>
<div className="m-10 mt-45 w-240 h-150 grid grid-cols-3 gap-4">
  <div className="bg-white rounded-2xl row-span-2 h-110">

  </div>
  <div className="bg-white rounded-2xl h-55 col-span-2">

  </div>
  <div className="bg-white rounded-2xl h-110 w-80 row-span-2">

  </div>
  <div className="bg-white rounded-2xl h-110 w-75 row-span-2">

  </div>
  <div className="bg-white rounded-2xl h-55  ">

  </div>
</div>
</div>



    
  )
}

export default Dashboard