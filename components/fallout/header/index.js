import styles from './styles.module.scss'

export default function Home({children}) {


  return (
    <div className={styles.container}>
      
      <div className={styles.menuItems}>
        <span className={styles.active}>- STAT -</span>
        <span>INFO</span>
        <span>CONTACT</span>
        <span>CV</span>
      </div>

    </div>
  )
}