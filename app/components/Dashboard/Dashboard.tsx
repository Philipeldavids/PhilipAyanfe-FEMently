import React from 'react'
import ProgramsWidget from '../Programs/ProgramsWidget'
import GroupCallWidget from '../Activities/GroupCallWidget'

type DashboardProps = {
    widgets: string[]
  }
const Dashboard = ({widgets}: DashboardProps) => {

    
  return (
    <div>
    <div className="m-10 absolute mt-45 ml-65 w-240 h-150 grid grid-cols-3 gap-4">
    {widgets.includes('programs') && (
        <ProgramsWidget />
    )}
     {widgets.includes('groupcalls') && (
       <GroupCallWidget />
     )}
     {widgets.includes('applications') && (
        <div className="bg-white rounded-2xl h-100 w-80 row-span-2">

        </div>
     )}
     {widgets.includes('mentors') && (
        <div className="bg-white rounded-2xl h-100 w-75 row-span-2">

        </div>
     )}
     {widgets.includes('recent') && (
        <div className="bg-white rounded-2xl h-55  ">

  </div>
     )}
</div>
    </div>
  )
}

export default Dashboard