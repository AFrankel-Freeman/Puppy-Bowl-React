import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom"
import "../styles/pup.css"


const pupInfo= ()=> {
    const {id} = useParams()
    console.log(id)
    const URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am/players/' + id;
    console.log(URL)
    
        const [pup, setPup] = useState ({});
       
        useEffect ( ()=>{
           fetchPuppies()
        },[]
        )
        const fetchPuppies = async ()=>{
            try{
                const response = await fetch(URL)
                const puppyResult = await response.json()
                setPup(puppyResult.data.player)
                
            }
            catch(err){
               return "oh this didnt work"
            }    
        }
    


    return(
        <div className="child">
        <h2 className ="pupName">{pup.name}</h2>
            <img src={pup.imageUrl} alt="image"/>
            <p>Breed - {pup.breed}</p>
            <Link to="/"><button className="home">Home</button></Link>
            
        </div>
    )
}
export default pupInfo;