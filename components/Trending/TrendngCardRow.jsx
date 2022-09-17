import React from 'react'
import Rate from '../table/Rate'
import Image from 'next/image'

const styles = {
  tendingCardRow: "flex items-center justify-between mb-4 text-[0.93rem]"
}

const TrendngCardRow = ({ number, icon, name, symbol, isIncrement, rate }) => {
  return (
    <section className={styles.tendingCardRow}>
      <p className='opacity-40'>{number}</p>
      <div className='w-full flex'>
        <div className='mx-5'>
          {icon && 
            <Image 
              src={icon}
              alt={name}
              width={20}
              height={20}
              />}
        </div>
        <p className='font-bold'>
          {name}
          <span className='text-gray-400'>{symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </section>
  )
}

export default TrendngCardRow