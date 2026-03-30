import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddFeedback from "./components/AddFeedback";

const App = () =>{
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path ="/" element ={<Dashboard />} />
      <Route path ="/add" element ={<AddFeedback />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;