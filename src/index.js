import React from 'react';
import  {createRoot} from 'react-dom/client';
import RenderPuppies from "./components/renderPuppy";



const Init = () => {
    return (
        <RenderPuppies/>
        )
};
Init()

const appElement = document.getElementById("app");
const root = createRoot (appElement);
root.render (<Init />)