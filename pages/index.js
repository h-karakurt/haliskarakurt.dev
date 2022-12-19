import Layout from 'components/layout'

import styles from '../styles/Home.module.scss'

export default function Home() {


  return (
    <Layout>
    
      <div className={styles.container}>
        
        <div className={styles.text}>
          <p>
            Keen, forward-thinking, team-player developer with 3 years of professional web
            development experience.
          </p>
          <p>
            Software developer
            with knowledge of engineering concepts of algorithm and problem solving
            & front-end concepts from my own enthusiasm on user experience,
            interface & performance.
          </p>
          <h3>Interests:</h3>
          <ul>
            <li>Web Development</li>
            <li>Software Patterns</li>
            <li>Software Architecture</li>
            <li>UI-UX</li>
            <li>PWAs</li>
          </ul>
        </div>

        <div className={styles.bottomText}>
          <h1>HALIS KARAKURT</h1>
          <h2>Software Developer - Computer Engineer</h2>
        </div>
      </div>
    
    </Layout>
  )
}
