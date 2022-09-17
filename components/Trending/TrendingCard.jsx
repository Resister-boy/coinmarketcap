import React from 'react'
import Image from 'next/image'
import MoreButton from '../Common/MoreButton'
import TrendingCardRow from  './TrendngCardRow'

const styles = {
  trendingCard: "w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3",
  trendingCardWrapper: "flex items-center justify-between"
}

const TrendingCard = ({ title, icon, trendingData}) => {
  return (
    <section className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className='flex'>
          {icon && 
            <Image 
              src={icon} 
              alt="icon"
              width={27}
              height={28} />}
              <span>&nbsp;&nbsp</span>
              <p className='font-bold'>{title}</p>

        </div>
        <MoreButton />
      </div>
      <br />
      {trendingData.map((item, index) => {
        return (
          <TrendingCardRow 
            key={index} 
            number={item.number}
            symbol={item.symbol}
            name={item.name}
            icon={item.icon}
            isIncrement={item.isIncrement}
            rate={item.rate} />
        )
      })}
    </section>
  )
}

export default TrendingCard