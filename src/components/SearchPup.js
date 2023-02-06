import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import pupInfo from './Pup';
import RenderPuppies from './RenderPuppy';

RenderPuppies()
const AddNewPup = ()=> {
    const [newPup, setNewPup] = useState ([]);
    const [nameOfNewPup, setNameOfNewPup ] = useState("");
    const [breedOfNewPup, setBreedOfNewPup] = useState ("");

    
    // const submitPup = (event) => {
    //     event.preventDefault();
    //     setNewPup(newPup);
    // }

    const handleNameSubmit = (event) =>{
        console.log(event.target.value);
        setNameOfNewPup(event.target.value);
    }
    const handleBreedSubmit = (event) =>{
        console.log(event.target.value)
        setBreedOfNewPup(event.target.value);
    }
   const submitForm = (event) => {
        event.preventDefault();
        setPuppies([...puppies, {
            name:nameOfNewPup,
            breed:breedOfNewPup

            
        }]);

   }

return(

    <form onSubmit= {submitForm}>
        <label>Name: </label>
        <input type = "text" value = {nameOfNewPup} onChange={handleNameSubmit}></input>
        <label>Breed: </label>
        <input type = "text" value = {breedOfNewPup} onChange = {handleBreedSubmit}></input>
        <button type="submit" >Submit</button>
    </form>
)
}

export default AddNewPup

// useEffect(()=>{
//     setNewPup(URL);
//     }, []);