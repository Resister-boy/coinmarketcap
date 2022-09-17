import Image from 'next/image'
import Search from '../../assets/svg/search'
import { ConnectButton } from 'web3uikit'

const styles = {
  headerContainer: 'bg-[#17171A] w-full h-20 flex items-center overflow-hidden text-[#fff]',
  headerWrapper: 'flex justify-center h-full max-w-screen-xl mx-auto px-4',
  navContainer: 'flex justify-center items-center gap-[20px]',
  navItem: 'relative mr-1 cursor-pointer hover:opacity-60',
  navLink: 'text-[#fff] flex mx-[10px]',
  badge: 'rounded-full bg-blue-600 w-1 h-1 absolute bottom-5 right-0 top-1 ring-4',
  inputContainer:"flex items-center justify-end p-2 rounded bg-[#171924] ml-12",
  input: "bg-transparent outline-none text-[#fff] w-70 h-8 ml-3 duration-200 p-2"
}

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Image 
        src="/assets/coinmarketcap-logo-icon.svg"
        alt="logo"
        width={400}
        height={220}
      />
      <div className={styles.headerWrapper}>
        <nav className={styles.navContainer}>
          <div className={styles.navItem}>
            <div>Cryptocurrentcies</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div>Exchanges</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div>NFTs</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div>Cryptown</div>
            <div className={styles.badge} /> 
          </div>
          <div className={styles.navItem}>
            <div>Portfolio</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div>Watchlist</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div>Products</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div>Learn</div>
            <div className={styles.badge} />
          </div>
        </nav>
        <div className='flex items-center'>
          <div className={styles.inputContainer}>
            <Search />
            <input type="text" className={styles.input} placeholder="Search" />
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header