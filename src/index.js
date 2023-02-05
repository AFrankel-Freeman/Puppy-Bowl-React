import React, {Component} from 'react';
import  {createRoot} from 'react-dom/client';
import RenderPuppies from "./components/RenderPuppy";
import Pup from './components/Pup';
import { BrowserRouter as Router, Routes, Switch, Route, useParams } from 'react-router-dom'

// import SearchPup from "./components/SearchPup";



const Init = () => {
    return (
        <Router>
        <Routes>
        <Route  path="/" element={<RenderPuppies/>}/>
        <Route path="/pup/:id" element={<Pup/>}/>
        

        </Routes>
        
        
        </Router>
       
        )
};
Init()

const appElement = document.getElementById("app");
const root = createRoot (appElement);
root.render (<Init />)