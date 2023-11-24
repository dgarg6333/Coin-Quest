import React from 'react'
import { Banner } from '../components/banner/Banner'
import { CoinsTable } from '../components/CoinsTable'


export const Homepage = () => {
    return (
        <div className='text-slate-50'>
          <Banner/>
          <CoinsTable/>
        </div>
      )

}
