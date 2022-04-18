import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';

import toDollars from '../utils/ToDollars';

import "../styles/Section.css"

import api from '../services/api';

export default function Section(props){
    const [data, setData] = useState()
    const {title, onClick} = props
    const [selected, setSelected] = useState([])

    const url = String(title).toLowerCase()

    useEffect(() => {
        api.get(url).then(response => {
            setData(response.data)
        })
    }, [])

    function updateSelect(id){
        let newSelected = [...selected]
        switch(title){
            case 'Toppings':
            case 'Pastas':
            case 'Sauces':
                const inverted = !newSelected[id - 1];
                newSelected.fill(false)
                newSelected[id - 1] = inverted;
                break
            
            default:
                newSelected[id - 1] = !newSelected[id - 1];
                break
        }
        
       

        setSelected(newSelected)
    }

    return(
        <div className='Section'>
            <SectionTitle title={title} />

            <div className='Content'>
                {data?.map((obj) => {
                    return (
                        <div key={obj.id} 
                            className = {'Card ' + (selected[obj.id - 1] ? 'Selected' : '')}
                            onClick={() => {
                                onClick(obj.id)
                                updateSelect(obj.id)
                            }}>

                            <h2>{obj.name}</h2>
                            <h3>{toDollars(parseFloat(obj.price))}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}