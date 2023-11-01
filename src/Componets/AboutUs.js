import logo from "../image/newPICS.png";
import Cardo from './Card';
import PersonalData from "../utlity/PersonalDetails";
export const AboutUs = () => {
  const Maindata = PersonalData.map((item) => { return item.card })
  return (
    <div className='mx-[15%] md:mx-[25%]  lg:w-[60%] w-[75%] md:w-[60%]  lg:mt-[5%]  mt-[20%] pt-[190px] relative block rounded-lg p-6 shadow-[0_2px_150px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:bg-orange-50'>
      <div className=" w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full absolute -mt-[230px] md:-mt-[250px] lg:mx-[370px] md:mx-[120px] mx-[80px] z-40">
        <img className='h-[100%] w-[100%] rounded-full' src={logo} />
      </div>
      <div className="-mt-[100px]">
        {<Cardo  carddata={Maindata}  />}
      </div>
    
    </div>
  )
}
