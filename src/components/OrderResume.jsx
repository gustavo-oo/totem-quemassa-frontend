import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

import api from "../services/api";

export default function OrderResume(props){
    const order = props.order
    const [ingredients, setIngredients] = useState()
    const [pasta, setPasta] = useState()
    const [sauce, setSauce] = useState()
    const [resume, setResume] = useState()
    const [topping, setTopping] = useState()

    function getPasta(meal){
        const url = "pastas/" + meal.pastaId

        api.get(url).then(response => {
            setPasta(response.data.name)
        })
    }

    function getSauce(meal){
        const url = "sauces/" + meal.sauceId

        api.get(url).then(response => {
            setSauce(response.data.name)
        })
    }

    function getTopping(meal){
        const url = "toppings/" + meal.toppingId

        api.get(url).then(response => {
            setTopping(response.data.name)
        })
    }

    function getIngrediens(meal){
        const ingredients = meal.ingredientsId.map((ingredientId) => {
            const url = "ingredients/" + ingredientId

            api.get(url).then(response => {
                return response.data.name
            })
        })
        
        setIngredients(ingredients)
        
    }

    function generateResume(){
        return order.meals.map((meal, index) => {
            

            if(meal){
                getPasta(meal)
                getSauce(meal)
                getTopping(meal)
                getIngrediens(meal)
            }

            return (
                <div key={index}>
                    <h2>Meal: {index+1}</h2>
                    <h3>Pasta: {pasta}</h3>
                    <h3>Ingredients: {ingredients}</h3> 
                    <h3>Sauce: {sauce}</h3>  
                    <h3>Topping: {topping}</h3>  
                </div>
            )
        })
    }

    useEffect(() => {
        setResume(generateResume())
    }, [order, pasta, sauce, topping, ingredients])

    return (
        <div>
            <SectionTitle title="Order Resume"/>
            {resume}
        </div>
        
    )
}