import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {

  const router = useRouter()
  
  return (
    <div className={styles.container}>
      
      <div className={styles.menuItems}>
        <span className={router.pathname == '/' ? styles.active : null}><Link href="/">{router.pathname == "/" ? "- INFO -" : "INFO"}</Link></span>
        <span className={router.pathname == '/stat' ? styles.active : null}><Link href="/">{router.pathname == "/stat" ? "- STAT -" : "STAT"}</Link></span>
        <span className={router.pathname == '/contact' ? styles.active : null}><Link href="/">{router.pathname == "/contact" ? "- CONTACT -" : "CONTACT"}</Link></span>
        <span>CV</span>
      </div>

    </div>
  )
}