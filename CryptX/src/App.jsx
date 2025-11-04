//Cleared the default data in this file for a new application structure 
//Import all the components of the application (React components)

import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Bitcoin from './components/Bitcoin';
import Ethereum from './components/Ethereum';
import Litecoin from './components/Litecoin';
import Cardano from './components/Cardano';
import BtcPrices from './components/BtcPrices';
import LiveMarket from './components/LiveMarket';
import Transactions from './components/Transactions';

//Define the funtion of the components (export default function)

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Bitcoin />
      <Ethereum />
      <Litecoin />
      <Cardano />
      <BtcPrices />
      <LiveMarket />
      <Transactions />
    </div>
  )
}