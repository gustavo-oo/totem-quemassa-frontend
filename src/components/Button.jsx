import React from "react";
import "../styles/Button.css"

export default function Button(props){
    return(
        <div className="button_div">
            <button className="Button" onClick={() => props.onClick()}>{props.text}</button>
        </div>
    )
}