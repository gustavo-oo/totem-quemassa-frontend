import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

import "../styles/OrderResume.css"

export default function OrderResume(props){
    const order = props.order
    const [resume, setResume] = useState()

    function generateResume(){
        return order.meals.map((meal, index) => {
            return (
                <div key={index}>
                    <h3>Meal: {index+1}</h3>
                    <h4> {meal.pastaId ? "Pasta:" + meal.pastaId : ''}</h4>
                    <h4> {meal.ingredientsId.length > 0 ? "Ingredients: " + meal.ingredientsId.join(', ') : ''}</h4> 
                    <h4>{meal.sauceId ? "Sauce:" + meal.sauceId : ''}</h4>  
                    <h4>{meal.toppingId ? "Topping:" + meal.toppingId : ''}</h4>  
                </div>
            )
        })
    }

    useEffect(() => {
        setResume(generateResume())
    }, [order])

    return (
        <div className="OrderResume">
            <SectionTitle title="Order Resume"/>
            {resume}
        </div>
        
    )
}