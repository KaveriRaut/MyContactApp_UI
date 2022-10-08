import React from "react";

function Details(props){
    return(
        <div>
            <p className="info">{props.telephone}</p>
            <p className="info">{props.emailId}</p>
        </div>
    )
}

export default Details; 