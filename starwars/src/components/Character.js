// Write your Character component here
import React, { useEffect, useState } from "react";
import axios from "axios";
import StarwarsInfo from "./StarwarsInfo";
import styled from "styled-components";


const CardList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;


const Character = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get("https://swapi.py4e.com/api/people")
    
    .then(response => {

      console.log(response.data);
      console.log(response.data.results)

      // const newData = response.data.results; you can also use this to create a new variable.
      setCharacters(response.data.results);
    })
    .catch(error => {console.log("Error!", error)});

  }, []);


  return (
    <CardList>
      {/* using map. */}

     {characters.map(item => {
       return (
         <StarwarsInfo key={item.id}
         getName={item.name}
         getBirth={item.birth_year}
         getHair={item.hair_color}
         getEyes={item.eye_color}
         getHeight={item.height}
         getGender={item.gender}
         getSkin={item.skin_color}
        
         />
       );
     })}
    </CardList>
  );

};

export default Character;