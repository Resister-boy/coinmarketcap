import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider serverUrl={process.env.MORALIS_SERVER} appId={process.env.MORALIS_SERVER_ID}>
      <CoinMarketProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CoinMarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
