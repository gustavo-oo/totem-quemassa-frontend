import React from "react";
import "../styles/SectionTitle.css"

export default function SectionTitle(props){
    return(
        <div className="sectionTitle">
            <h2>{props.title}</h2>
            <span>{props.description || ''}</span>
        </div>
    )
}