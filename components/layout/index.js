import Head from 'next/head'

import Header from 'components/fallout/header/index'
import BottomBar from 'components/fallout/BottomBar/index'

import styles from './styles.module.scss'

import localFont from '@next/font/local'
const font = localFont({ src: '../../fonts/fallout/fallout_text.woff2' })

export default function Layout({ children}) {
  
return (
    <>
        <Head>
            <title>Halis Karakurt</title>
            <meta name="description" content="Halis Karakurt Portfolio Website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className={`${font.className} ${styles.main}`}>
            <div className={styles.borderedContainer}>
                <Header/>
                {children}
                <BottomBar/>
            </div>
        </main>
        
    </>
  )
}