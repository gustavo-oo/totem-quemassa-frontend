import { useState, useEffect } from "react";
import api from '../services/api'

const orderStructure = {
    "clientName": null,
    "meals":[],
    "drinkOrders":[]
}

const mealStructure = {
    "pastaId": null,
    "sauceId": null,
    "ingredientsId": [],
    "toppingId": null
}

export default function useCreateOrder(){
    const [name, setName] = useState('')
    const [order, setOrder] = useState(orderStructure);
    const [meal, setMeal] = useState(mealStructure)
    const [drinksQuantity, setDrinksQuantity] = useState([])

    function isOrderEmpty(){
        if(order.meals === [] && order.drinkOrders === []){
            return true;
        }else{
            return false;
        }
    }

    function setDrink(id, quantity){
        let newDrinks = [...drinksQuantity]
        newDrinks[id-1] = quantity

        setDrinksQuantity(newDrinks)
        console.log(newDrinks)
    }

    function resetOrder(){
        setOrder(orderStructure)
        setMeal(mealStructure)
        setDrinksQuantity([])
    }

    function setPasta(id) {
        let newMeal

        if(meal.pastaId === id){
        newMeal = {...meal, "pastaId": null}
        
        }else{
        newMeal = {...meal, "pastaId": id}
        } 

        setMeal(newMeal)
    }

    function setSauce(id){
        let newMeal

        if(meal.sauceId === id){
        newMeal = {...meal, "sauceId": null}
        }else{
        newMeal = {...meal, "sauceId": id}      
        }
        
        setMeal(newMeal)
        console.log(newMeal)
    }

    function setTopping(id){
        let newMeal

        if(meal.toppingId === id){
        newMeal = {...meal, "toppingId": null}
        }else{
        newMeal = {...meal, "toppingId": id}      
        }
        
        setMeal(newMeal)
        console.log(newMeal)
    }

    function setIngredient(id){
        const ingredientsId = [...meal.ingredientsId]

        const index = ingredientsId.indexOf(id)

        if(index === -1){
            ingredientsId.push(id); 
        }else{
            ingredientsId.splice(index, 1)
        }

        const sortedIgredientsId = ingredientsId.sort()

        const newMeal = {...meal, "ingredientsId": sortedIgredientsId}
        setMeal(newMeal)
        console.log(newMeal)
    }

    function addMeal(){
        let orderMeals = [...order.meals]

        if(meal.pastaId === null){
            return false;
        }

        orderMeals.push(meal)

        const newOrder = {...order, "meals": orderMeals}

        setOrder(newOrder)
        console.log(newOrder)

    }

    function endOrder(){
        const newOrderUrl = "orders";

        let drinkOrders = []
        drinksQuantity.forEach((quantity, index) => {
            if(quantity != 0){
                drinkOrders.push({"drinkId": index+1, "quantity": quantity})
            }
        })

        const newOrder = {...order, "clientName": name, "drinkOrders": drinkOrders}

        api.post(newOrderUrl, newOrder).then((response) => {
        console.log(response.headers)
        const orderId = response.headers.orderid
        const totalPrice = response.headers.totalprice
            if(orderId){
                alert("A sua senha é: " + orderId + "\n" + "Total Value: $" + totalPrice)
            }
        })

        resetOrder()
    }

    return [
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
    ]
}