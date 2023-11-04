import React from "react";
import ReactDOM from "react-dom/client"; 
import { Home } from "./Componets/Home"
import { Contanct } from "./Componets/Contanct";
import { AboutUs } from "./Componets/AboutUs";
import Services  from "./Componets/Services"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import Sidenav from "./utlity/external/SideNav";


const AppLayout = () => {   
    return (
       
        <BrowserRouter >
            <div className="right-0 fixed sm:hidden ">{<Sidenav />}</div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contanct />} />
                <Route path="/about" element={<AboutUs/>}/>
            </Routes>
           <Footer  />
        
        </BrowserRouter>
            
           
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
 
