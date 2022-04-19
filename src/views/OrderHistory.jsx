import React, { useEffect, useState } from "react"
import OrderList from "../components/OrderList"

import api from "../services/api"

export default function ActiveOrders(){
    const [data, setData] = useState()
    const [orderList, setOrderList] = useState()

    useEffect(() => {
        const url = "/orders/history"
        api.get(url).then(response => {
            setData(response.data)
            console.log(response.data)
        })
    }, []);

    return(
        <div className='OrderHistory'>
            <OrderList data={data} />
        </div>
    )
}