import React, { useState } from 'react';
import './App.css';

import Page from './components/Page';
import NewOrder from './views/NewOrder';
import ActiveOrders from './views/ActiveOrders'
import OrderHistory from './views/OrderHistory'

export default function App(props){
  const [activePage, setActivePage] = useState('newOrder')

  if(activePage === 'newOrder'){
    return(
      <Page setActivePage={setActivePage}>
        <NewOrder/>
      </Page>
    )
  }else if(activePage === 'orderHistory'){
    return(
      <Page setActivePage={setActivePage}>
        <OrderHistory/>
      </Page>
    )

  }else if(activePage === 'activeOrders'){
    return(
    <Page setActivePage={setActivePage}>
      <ActiveOrders/>
    </Page>)

  }else{
    return(
    <Page setActivePage={setActivePage}>
      <h1>Page Not Found</h1>
    </Page>)
  }
  
}