import React, { useState, useEffect } from 'react';
import './App.css';

import Section from './components/Section';
import Button from './components/Button';
import DrinkSection from './components/DrinkSection';
import useCreateOrder from './hooks/useCreateOrder';
import NavBar from './components/NavBar';
import OrderResume from './components/OrderResume';

export default function App(props){
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
      <NavBar/>

      <Section title="Pastas" onClick={setPasta}/>
      <Section title="Ingredients" onClick={setIngredient}/>
      <Section title="Sauces" onClick={setSauce}/>
      <Section title="Toppings" onClick={setTopping}/>
    
      <Button text="Add Meal" onClick={addMeal}/>
    
      <DrinkSection title="Drinks" drinksQuantity={drinksQuantity} setDrink={setDrink}/>
      

      <div>
        <label>Digite seu Nome:</label>
      </div>
      <input 
      type="text" 
        value={name} 
        onChange={(event) => setName(event.target.value)}/>

      <OrderResume order={order}/>

      <Button text="End Order" onClick={endOrder}/>    
      
    </div>
  )
}