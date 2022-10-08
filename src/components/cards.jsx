import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
import createCard from "./App.jsx";
import contacts from "../contacts";

//here we changed props name as {props.images} --> so at calling time we have to write image="--" this formate

function Card(props){
    return(
      <div className="card" >
          <div className="top" >
            <h2 className="name">{props.name}</h2>
            <Avatar image={props.img}></Avatar>   
          </div>
          
          <div className="bottom" >
           <Details telephone={props.tel} ></Details>
           <Details emailId={props.mail}></Details>
          </div>
      </div>
    )
  }

  export default Card;