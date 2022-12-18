import Image from 'next/image'

import Layout from 'components/layout'

import styles from '../styles/Home.module.scss'

export default function Home() {


  return (
    <Layout>
    
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} fill alt="Vault-Boy" src="/vault-boy.svg"/>
        </div>

        <div className={styles.bottomText}>
          <h1>HALIS KARAKURT</h1>
          <h2>Software Developer - Computer Engineer</h2>
        </div>
      </div>
    
    </Layout>
  )
}
