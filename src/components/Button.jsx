import React from "react";
import "../styles/Button.css"

export default function Button(props){
    return(
        <div>
            <button className="Button" onClick={() => props.onClick()}>{props.text}</button>
        </div>
    )
}