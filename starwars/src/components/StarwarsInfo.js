import React from "react";
import styled from "styled-components";


const Cards = styled.div`
background-image: linear-gradient(to bottom right, dodgerblue, navy);
color: white;
h3 {
  color: black;
}
p {
  color: red;
}
width: 300px;
height: 350px;
border: 5px ridge black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 20px;
`;


const StarwarsInfo = props => {

  

  return (
    <Cards>
      <h1>{props.getName}</h1>
      <h3>Born - {props.getBirth}</h3>
      <div className="text">
        <p>Hair Color: {props.getHair}</p>
        <p>Eyes: {props.getEyes}</p>
        <p>Height: {props.getHeight}</p>
        <p>Gender: {props.getGender}</p> 
        <p>Skin Color: {props.getSkin}</p>
      </div>
    </Cards>
  );

};

export default StarwarsInfo;