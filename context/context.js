import { createContext, useState, useEffect } from "react";

const initialState = {

}

export const CoinMarketContext = createContext(initialState)

export const CoinMarketProvider = ({ children }) => {

  const getTopTenCoins = async() => {
    try {
      const response = await fetch('api/getTopTenCoin')
      const data = await response.json()

      return data.data.data

    } catch(error) {
      console.log(error)
    }
  }

  return (
    <CoinMarketContext.Provider value={ getTopTenCoins }>
      { children }
    </CoinMarketContext.Provider>
  )
}