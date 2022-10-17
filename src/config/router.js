
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import About from "../component/about";
import Contact from "../component/contact";
import Home from "../component/home";
import Service from "../component/services";
import Location from "../component/location";
import Item from "../component/service-screen/Item";
import Data from "../component/service-screen/Data";


export default function AppRouter() {
  return (
    <Router>
        <div className="bg-secondary h-50">
            <Link className="btn btn-secondary p-2  me-5 fs-2" to='/'>Home</Link>
            <Link className="btn btn-secondary p-2  me-5 fs-2" to='contact'>Contact</Link>
            <Link className="btn btn-secondary p-2  me-5 fs-2" to='about'>About</Link>
            <Link className="btn btn-secondary p-2  me-5 fs-2" to='service'>Outlet</Link>
            <Link className="btn btn-secondary p-2  me-5 fs-2" to='location'>Location</Link>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="service/*" element={<Service/>}/>
            <Route path="location" element={<Location/>}/>
            <Route path="Item" element={<Item/>}/>
            <Route path="Data" element={<Data/>}/>
            
            
        </Routes>
      
    </Router>
  );
}


