import React from "react";

export default function If(props){
    if(props.condition){
        return (
            <div>
                {props.children}
            </div> 
        )
    }
}