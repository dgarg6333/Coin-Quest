import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { CoinList } from "../Config/api";
import { CryptoState } from "../CryptoContext";

export const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currency, symbol } = CryptoState();
  const [search, setSearch] = useState([]);

  const fetchCoins = async() =>{
    setLoading(true);
    const {data} = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  }

  console.log(coins);

  useEffect(()=>{
    fetchCoins()
  }, [currency]);

  return (
    <div className=''>
        <div className=' flex justify-center text-center font-small text-4xl py-6 text-slate-100'>Cryptocurrency Prices by Market Cap </div>
        <input className='w-full py-3 pl-4 bg-transparent text-slate-100 outline outline-slate-600 outline-1' 
        type='search' placeholder='Search Crypto Coin...' id='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        
    </div>
  )
}
