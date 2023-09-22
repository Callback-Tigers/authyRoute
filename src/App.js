import React,{useState} from "react";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import "./App.css";

import { Routes, Route } from "react-router-dom";



const App = () => {

 

  return(
    <div>
     
     <Routes>
        <Route path="/" element={<Signup/>}/>
        {/* <Route path="/signup" element={<Signup/>}/> */}
        <Route path="/login" element= {<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        

      </Routes>

    </div>
  )
}

export default App;