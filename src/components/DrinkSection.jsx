import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';

import "../styles/DrinkSection.css"

import toDollars from '../utils/ToDollars';

import "../styles/DrinkSection.css"

import api from '../services/api';

export default function DrinkSection(props){
    const [data, setData] = useState()
    const {title, drinksQuantity, setDrink} = props

    useEffect(() => {
        const url = "drinks"
        api.get(url).then(response => {
            setData(response.data)
        })

    }, [])

    return(
        <div>
            <SectionTitle title={title} />

            <div>
                {data?.map((obj) => {
                    
                    return (
                        <div key={obj.id}>
                            <h2>{obj.name}</h2>
                            <h3>{toDollars(parseFloat(obj.price))}</h3>
                            <input 
                                className='Input'
                                type='number'
                                value={drinksQuantity[obj.id-1] || ''} 
                                onChange={(event) => setDrink(obj.id, event.target.value)}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}