export default function handler(request, response) {

  const options = {
    methods: 'GET',
    headers: {
      Accept: '*/*'
    }
  }

  const getData = async() => {
    const result = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.CMC_API_KRY}`, options)
    
      const data = await result.json()
      response.status(200).json({ data })
  }
  getData()
}