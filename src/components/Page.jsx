import React, { useState } from "react";
import NavBar from "./NavBar";

export default function Page(props){   
    return(
        <div>
            <NavBar setActivePage={props.setActivePage}/>
            {props.children}
        </div>
        
    )
}