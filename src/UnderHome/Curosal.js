import React from 'react'
import ProjectOnHome from '../Componets/ProjectOnHome'



const Curosal = () => {
  return (
    <div className='mt-[80px] relative rounded-3xl p-6 w-11/12 mx-auto my-4 bg-gray-50 shadow-lg hover:bg-lime-300  '>
      <h1 className=' hidden sm:text-center '>PortFolio<span className="  sm:hover:text-violet-500" >OverView</span> </h1>
      <h2 className=' md:hidden text-center font-bold text-5xl'>PortFolio<span className="   hover:text-violet-500" >OverView</span> </h2>
      {<ProjectOnHome />}
      </div>
  )
}

export default Curosal