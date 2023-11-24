import React from 'react'
import { CryptoState } from '../../CryptoContext';
import axios from 'axios';
import { TrendingCoins } from '../../Config/api';
import { useState , useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

export  function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g , ",");
}


export const Carousel = () => {
    const [trending, setTrending] = useState([]);
    const { currency , symbol } = CryptoState();


    const fetchTrendingCoins = async()=>{
        const { data } = await axios.get(TrendingCoins(currency));
        setTrending(data);
    }

    useEffect(() => {
        fetchTrendingCoins();
      }, [currency]);

    const items = trending.map((coin) => {
        let profit = coin?.price_change_percentage_24h >= 0;
    
        return (
          <Link className='flex flex-col items-center cursor-pointer' to={`/coins/${coin.id}`}>
            <img className='h-24 my-6' src={coin?.image} alt={coin.name}/>
            <span className='flex text-slate-50 uppercase text-xl font-medium'>
                {coin?.symbol}
                <span style={{ color: profit > 0 ? "rgb(14, 203, 129)" : "red", }} className='px-2 font-small'>
                    {profit && "+"}
                    {coin?.price_change_percentage_24h?.toFixed(2)}%
                </span>
            </span>
            <span className='text-2xl font-medium flex text-slate-50'>
                {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
            </span>
          </Link>
        );
    });

    const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
      };
    return (
    <div>
        <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
    )
}
