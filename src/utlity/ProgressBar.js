
import { useEffect, useState } from "react";
import Bar from "./Bar"
import { data, backdata,DataBase} from "./Constsnt"

 const  App = () => {
  const [randoms, setRandoms] = useState({id: 1, name: "HTML", percent: 92,color:"#B5FF33"});
  const generateValues = () => { 
    const Randnum = Math.floor(Math.random() * 4 + 1)
    setRandoms(data[Randnum]) 
  }
   const [backrandoms, setbackRandoms] = useState({id: 1, name: "HTML", percent: 92,color:"#B5FF33"});
  const backgenerateValues = () => {
    const Randnum = Math.floor(Math.random() * 3+ 1)
    setbackRandoms(backdata[Randnum])
  }
   const [database, setdatabase] = useState({id: 1, name: "HTML", percent: 92,color:"#B5FF33"});
  const databases = () => {
    const Randnum = Math.floor(Math.random()*3)
    setdatabase(DataBase[Randnum])
  }
    return (
      <>
        <h1 className="">UNder DEvlopment</h1>
        <div className="text-center grid grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-[90px]" >       
          <div >
            <h3 className="">FRONTDev</h3>
            <Bar percentage={randoms.percent} colour={randoms.color} texo={ randoms.name} />  
             <button className="lg:mx-12" onClick={ generateValues }>{ randoms.name}</button> 
          </div>
          <div >
            <h3 className="">BackDev</h3>
            <Bar percentage={backrandoms.percent} colour={backrandoms.color} texo={ backrandoms.name} />  
             <button className="lg:mx-12" onClick={backgenerateValues }>{ backrandoms.name}</button>
          </div>
          <div>
            <h3 className="">DataBase</h3>
            <Bar percentage={database.percent} colour={database.color} texo={ database.name} />  
             <button className="lg:mx-12 hover:" onClick={databases }>{ database.name}</button>
          </div>
          <div>
            <h3 className="">OtheRSkill</h3>
            <Bar percentage={backrandoms.percent} colour={backrandoms.color} texo={ backrandoms.name} />  
             <button className="lg:mx-12" onClick={databases }>{ backrandoms.name}</button>
          </div>
        
        </div>
      </>
    );
  };
export default App;