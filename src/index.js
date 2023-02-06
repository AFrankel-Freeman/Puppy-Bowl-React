import React, {Component, useEffect, useState} from 'react';
import  {createRoot} from 'react-dom/client';
import RenderPuppies from "./components/RenderPuppy";
import Pup from './components/Pup';
import { BrowserRouter as Router, Routes, Switch, Route, useParams } from 'react-router-dom'
import AddNewPup from './components/SearchPup';



const Init = () => {
    const [puppies, setPuppies] = useState([]);
    return (
        <div>
            <AddNewPup puppies={puppies} setPuppies={setPuppies}  />
            <Router>
                <Routes>
                    <Route  path="/public/index.html" element={<RenderPuppies puppies={puppies} setPuppies={setPuppies}/>}/>
                    <Route path="/pup/:id" element={<Pup/>}/>
                </Routes>
            </Router>
        </div>
        )
        
};



const appElement = document.getElementById("app");
const root = createRoot (appElement);
root.render (<Init />)