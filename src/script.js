import React from "react";
import ReactDOM from "react-dom/client"; 
import { Home } from "./Componets/Home"
import { Contanct } from "./Componets/Contanct";
import { AboutUs } from "./Componets/AboutUs";
import { Services } from "./Componets/Services";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";


const AppLayout = () => {   
    return (
       
        <BrowserRouter >
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
 
