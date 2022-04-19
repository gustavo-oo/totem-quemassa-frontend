import React from "react";

import SectionTitle from "../components/SectionTitle"

import toDollars from "../utils/ToDollars";

export default function OrderList(props){
    const data = props.data

    return (
        <div className='Content'>
            {data?.map((obj) => {
                return (
                    <div key={obj.id}>
                        <SectionTitle title={"Order " + obj.id} />

                        <h2>Name: {obj.clienteName}</h2>
                        <h2>Price: {toDollars(obj.totalPrice)}</h2>
                        <h2>End Time: {obj.endTime}</h2>
                        
                    </div>
                )
            })}
        </div>
    )
}