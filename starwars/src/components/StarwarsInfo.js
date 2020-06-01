import React from "react";


const StarwarsInfo = props => {

  const { results } = props;
  // const { characters } = props;

  return (
    <div className="card-list">
      <h1>{results.name}</h1>
      <p>{results.height}</p> 
      <p>{results.mass}</p>
      <p>{results.hair_color}</p>
      <p>{results.skin_color}</p>
    </div>
  )
}

export default StarwarsInfo;