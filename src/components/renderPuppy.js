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


console.log(puppies, 'this is a test')
    return (
        puppies.map((puppy)=> {
            console.log(puppy.name)
            return(
                <div>
                <h1 class = "pupName">{puppy.name}</h1>
                <img class = "pupImg" src={puppy.imageUrl}></img>
                </div>

        )
    })
    )
}
export default RenderPuppies;