import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import {Button, Card} from 'react-bootstrap/Button';
import {Link, useParams } from 'react-router-dom'
import "../styles/mainPage.css"


export const URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am/players';

const RenderPuppies = (props) => {
    const handleChange = (event)=> {
        props.setPuppies(event.target.value);
    }

    useEffect ( ()=>{
        const fetchPuppies = async ()=>{
            try{
                const response = await fetch(URL)
                const puppyResult = await response.json()
                props.setPuppies(puppyResult.data.players)
                
            }
            catch(err){
               return "oh this didnt work"
            }    
        }
    
       fetchPuppies()
    },[])
   
    const puppiesList = props.puppies.map(puppy =>{
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

export default RenderPuppies;