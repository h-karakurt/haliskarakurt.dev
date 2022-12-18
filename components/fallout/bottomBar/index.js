import styles from './styles.module.scss'

export default function Home({children}) {


  return (
    <div className={styles.container}>
      
      <div className={styles.hp}>
        <span>HP 70/70</span>
      </div>
      
      <div className={styles.level}>
        <span>LEVEL 24</span>
        <div className={styles.levelBar}>
          <div className={styles.levelBarIndicator}>
          
          </div>
        </div>
      </div>

      <div className={styles.ap}>
        <span>AP 90/90</span>
      </div>

    </div>
  )
}