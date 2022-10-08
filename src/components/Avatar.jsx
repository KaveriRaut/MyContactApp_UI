import React from "react";

function Avatar(props){
    return(
        <img className="card img" className="circle-img"
              src={props.image}   //here we changed props name as {props.images} --> so at calling time we have to write image="--" this formate
              alt="avatar_img"
            />
    )
}

export default Avatar;