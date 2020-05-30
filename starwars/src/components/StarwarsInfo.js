import React from "react";


const StarwarsInfo = (props) => {

  const { character } = props;

  return (
    <div>
      <h1>Name: {character.name}</h1>
      <p>Height: {character.height}</p> 
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
    </div>
  )
}

export default StarwarsInfo;