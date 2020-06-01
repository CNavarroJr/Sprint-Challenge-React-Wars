// Write your Character component here
import React, { useEffect, useState } from "react";
import axios from "axios";
import StarwarsInfo from "./StarwarsInfo";


const Character = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get("https://swapi.py4e.com/api/people")
    
    .then(response => {

      console.log(response);
      setCharacters(response.data);
    })
    .catch(error => console.log("Error!", error));

  }, []);

  return (

    <div className="cards">

      {characters.map(results => (
        <StarwarsInfo results={results}/>
      ))} 

    </div>
  );
};

export default Character;