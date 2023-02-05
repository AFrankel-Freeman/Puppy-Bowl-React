import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';





const RenderPuppies = () => {
    const [puppies, setPuppies] = useState ([])

    useEffect ( ()=>{
       fetchPuppies()
    },[]
    )
    const fetchPuppies = async ()=>{
        try{
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-am/players')
            const puppyResult = await response.json()
            // console.log(puppyResult.data.players)
            setPuppies(puppyResult.data.players)
            
        }
        catch(err){
           return "oh this didnt work"
        }    
    }
    

// console.log(puppies, 'this is a test')
    return (
        puppies.map((puppy)=> {
            // console.log(puppy.name)
            return(
                <div key ={puppy.name}>
                <h1 className = "pupName">{puppy.name}</h1>
                <img className = "pupImg" src={puppy.imageUrl}></img>
                <button onChange = {handleChange} >See Details</button>
                </div>

            )
        }) 
          
    )
}
const handleChange = (event) => {
    console.log("Puppy Event", event)
    // setState({name:event.target.value });
}
handleChange()
export default RenderPuppies;