import React from "react"
import "../styles/NavBar.css"
import Button from "./Button"

export default function NavBar(props){
    return(
        <div className="Navbar">
            <h2 onClick={() => props.setActivePage('newOrder')}>Make an Order</h2>
            <h2 onClick={() => props.setActivePage('orderHistory')}>Order History</h2>
            <h2 onClick={() => props.setActivePage('activeOrders')}>Active Orders</h2>
        </div>
    )

}