import React, { useEffect, useState } from "react";

import OrderList from "../components/OrderList";

import api from "../services/api";

export default function ActiveOrders(){
    const [data, setData] = useState()

    useEffect(() => {
        const url = "/orders/active"
        api.get(url).then(response => {
            setData(response.data);
        })
    }, []);

    return(
        <div className='ActiveOrders'>
            <OrderList data={data} />
        </div>
    )
}