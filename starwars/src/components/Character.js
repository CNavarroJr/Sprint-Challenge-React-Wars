// Write your Character component here
import React, { useEffect, useState } from "react";
import axios from "axios";
import StarwarsInfo from "./StarwarsInfo";


const Character = () => {

  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios
    .get("https://swapi.py4e.com/api/people/1")
    
    .then(response => {

      setCharacter(response.data);
      console.log("response", response.data)
      
    })
    .catch(error => 
      console.log("Error!", error));

  }, []);

  return(
    <div>
      <StarwarsInfo character={character}/>
    </div>
  )
}

export default Character;