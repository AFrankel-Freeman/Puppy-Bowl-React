import React, {useState, useEffect} from 'react';


const AddNewPup = (props)=> {
    const [newPup, setNewPup] = useState ([]);
    const [nameOfNewPup, setNameOfNewPup ] = useState("");
    const [breedOfNewPup, setBreedOfNewPup] = useState ("");

    const handleNameSubmit = (event) =>{

        setNameOfNewPup(event.target.value);
    }
    const handleBreedSubmit = (event) =>{
   
        setBreedOfNewPup(event.target.value);
    }
   const submitForm = (event) => {
        event.preventDefault();
        props.setPuppies([...props.puppies, {
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