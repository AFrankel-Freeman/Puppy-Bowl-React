import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import {Button, Card} from 'react-bootstrap/Button';
import {Link, useParams } from 'react-router-dom'
import "../styles/mainPage.css"


const URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am/players';

const RenderPuppies = () => {
    const [puppies, setPuppies] = useState ([]);
    // const [puppy, setPuppy]= useState
    const handleChange = (event)=> {
        setPuppies(event.target.value);
    }

    useEffect ( ()=>{
       fetchPuppies()
    },[]
    )
    const fetchPuppies = async ()=>{
        try{
            const response = await fetch(URL)
            const puppyResult = await response.json()
            // console.log(puppyResult.data.players)
            setPuppies(puppyResult.data.players)
            
        }
        catch(err){
           return "oh this didnt work"
        }    
    }

    const puppiesList = puppies.map(puppy =>{
        return(
            <div className="puppy" key ={puppy.name}>
                <h1 className = "pupName">{puppy.name}</h1>
                <img className = "pupImg" src={puppy.imageUrl}></img>
                <Link to={`/pup/${puppy.id}`}><button>See Details </button></Link>
                
            </div>
        )
    })
       


    
// console.log(puppies, 'this is a test')
    return (
      <div className="container">
        {puppiesList}
      </div>
       
          
    )
}

// const handleChange = async (renderPup) => {
    
    // const URL = await fetchSinglePup();
    // event.preventDefault();
    // console.log("Puppy Event", renderPup)

    // setState({name:event.target.value });
// }
// fetchSinglePup();
//handleChange()
export default RenderPuppies;