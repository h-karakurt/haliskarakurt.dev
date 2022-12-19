import Head from 'next/head'

import Header from 'components/fallout/header/index'
import BottomBar from 'components/fallout/bottomBar/index'

import styles from './styles.module.scss'
import localFont from '@next/font/local'
const fallout = localFont({ src: '../../fonts/fallout/fallout_text.woff2' })

export default function Layout({ children}) {
  
return (
    <>
        <Head>
            <title>Halis Karakurt</title>
            <meta name="description" content="Halis Karakurt Portfolio Website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={styles.main}>
            <div className={styles.borderedContainer}>
                <Header/>
                <div className={fallout.className}>
                    {children}
                </div>
                <BottomBar/>
            </div>
        </main>
        
    </>
  )
}