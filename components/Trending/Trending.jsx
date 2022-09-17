import React, { useState } from 'react'
import Fire from '../../assets/fire.png'
import Btc from '../../assets/btc.png'
import Usdt from '../../assets/usdt.png'
import Gainers from '../../assets/gainers.png'
import Recent from '../../assets/recent.png'
import ReactSwitch from 'react-switch'
import Rate from '../table/Rate'
import TrendingCard from './TrendingCard'

const styles = {
  trendingWrapper: "mx-auto max-w-screen-2xl",
  h1: "text-3xl text-[#fff]",
  flexCenter: "flex items-center"
}

const trendingData = [
  {
      number: 1,
      symbol: "BTC",
      name: "Bitcoin",
      icon: Btc,
      isIncrement: true,
      rate: "2.34%"
  }, {
      number: 2,
      symbol: "USDT",
      name: "Tether",
      icon: Usdt,
      isIncrement: false,
      rate: "9.32%"
  }, {
      number: 1,
      symbol: "BTC",
      name: "Bitcoin",
      icon: Btc,
      isIncrement: true,
      rate: "2.34%"
  },
]

const Tranding = () => {
  const [checked, setChecked] = useState(false)

  return (
    <section className='text-[#fff]'>
      <div className={styles.trendingWrapper}>
        <div className='flex justify-between'>
          <h1 className={styles.h1}>Today Cryptocurrency Prices by Market Cap</h1>
          <div className='flex'>
            <p className='text-gray-400'>Highlights &nbsp</p>
            <ReactSwitch checked={checked} onChange={() => {setChecked(!checked)}} />
          </div>
        </div>
        <br />
        <div className='flex'>
          <p className='text-gray-400'>The global crypto market cap is $1.74T, a &nbsp</p>
          <span className='ml-2'><Rate isIncrement={true} rate="0.53%"/></span>
          <p>&nbsp; decrease over the last day. <span className='underline'>Read more</span></p>
        </div>
        <br />
        <div className={styles.flexCenter}>
          <TrendingCard title="Trending" icon={Fire} trendingData={trendingData} />
          <TrendingCard title="Biggest Gainers" icon={Gainers} trendingData={trendingData} />
          <TrendingCard title="Recently" icon={Recent} trendingData={trendingData} />
        </div>
      </div>
    </section>
  )
}

export default Tranding