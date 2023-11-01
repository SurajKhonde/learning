import React from 'react'
import { NavLink } from 'react-router-dom';
import App from "../utlity/ProgressBar"
  const HeroSection = () => {  
  return (
    <>
    <p className='font-semibold ml-4  '>This Is Me... </p>
    <div className="mx-2 lg:flex">
      
          <div className='lg:w-[50%]'>
          <div >
            <h1 className='flex hover:first-letter:text-rose-500'>Suraj 
            <span className='hidden lg:block lg:hover:text-[#6D8203]'>. R .</span></h1>
            <h1>Khonde</h1>
          </div>
              <p>A Full Stack WebApp-Devloper.I Have expertise in FrontEnd && Backend && DataBase.As Devloper Learner I had Created more than10+ Project based on MERN concept.
            As Devloper I'm very Inspired by JavaScript. <br /><span className='text-green-600 font-semibold'> <NavLink to="/about">Know More...</NavLink></span></p>
      
            <button className=' mt-[12px] '><NavLink to ="/contact">
            <span>Hire Me</span></NavLink></button>
          </div>
      <div className="">
        <div className='lg:w-[82%]'>{<App/> }</div>
        
        </div>
      </div>
      </>
  )
}

export default HeroSection