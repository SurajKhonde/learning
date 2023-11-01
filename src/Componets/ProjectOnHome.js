import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import CurosalInHome from '../UnderHome/CurosalInHome';
import { ParentProjectId} from "../utlity/Constsnt"

const ProjectOnHome = () => {    
    const [IntialData, setIntialData] = useState([])
    const [ids, setids] = useState()
    const [idal,setidal]=useState()
   
    useEffect(() => { 
        setIntialData(ParentProjectId);
    }, [])
     const handleParentProjectId = (id) => { 
         setids(id)
    }
    const handleClick = () => { 
        setidal(ids)
    }
    console.log(idal)

  return (
      <div className=' text-center '>
          <select id='ddlParentProjectId'  className='w-3/4 md:w-[450px] h-[30px] font-semibold  mt-3 text-center' onChange={(e)=>handleParentProjectId(e.target.value)}>
              <option values="0">Let's Explore MY Project</option>
          {IntialData && IntialData !== undefined ? IntialData.map((ctr, index) => {
          return (
              <option  key={index} value={ctr.id}>{ ctr.name}</option>
          )
          }) : ""
              }
          </select>
          <button className='w-[120px] h-[35px] rounded-2xl hover:text-black mt-4' onClick={handleClick}>Let's Explore</button>
          <div >{<CurosalInHome id={ids} />}</div>
         
      </div>
  )
}

export default ProjectOnHome;