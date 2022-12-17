import { useState } from 'react'
import styles from '../styles/tic-Tac-toe.module.css'

export default function Index() {
  
    const [table , setTable] = useState(
        [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
    )

    const DropMark = (coordinateX , coordinateY) => {
        setTable([coordinateX][coordinateY])
    }

    console.log(table);

    const HandleState = () => {
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                a1
                </div>
                <div className={styles.col}>
                a2
                </div>
                <div className={styles.col}>
                a3
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.col}>
                b1
                </div>
                <div className={styles.col}>
                b2
                </div>
                <div className={styles.col}>
                b3
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.col}>
                c1
                </div>
                <div className={styles.col}>
                c2
                </div>
                <div className={styles.col}>
                c3
                </div>
            </div>

            <button onClick={() => {DropMark(1 , 1)}}>Click Me</button>

        </div>
    )
}
