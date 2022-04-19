import React from "react"

import useCreateOrder from '../hooks/useCreateOrder'
import Section from '../components/Section'
import Button from "../components/Button"
import DrinkSection from "../components/DrinkSection"
import OrderResume from "../components/OrderResume"

export default function NewOrder(props){
    const[
        name, 
        setName,
        setPasta,
        setIngredient,
        setSauce,
        setTopping,
        addMeal,
        setDrink,
        drinksQuantity,
        order,
        endOrder
    ] = useCreateOrder()

    return(
        <div>
            <Section title="Pastas" onClick={setPasta}/>
            <Section title="Ingredients" onClick={setIngredient}/>
            <Section title="Sauces" onClick={setSauce}/>
            <Section title="Toppings" onClick={setTopping}/>
            
            <Button text="Add Meal" onClick={addMeal}/>
            
            <DrinkSection title="Drinks" drinksQuantity={drinksQuantity} setDrink={setDrink}/>
            
            <OrderResume order={order}/>
        
            <div>
                <label>Digite seu Nome:</label>
            </div>
            <input 
            type="text" 
                value={name} 
                onChange={(event) => setName(event.target.value)}/>
        
            <Button text="End Order" onClick={endOrder}/>
        </div>
    )
}

