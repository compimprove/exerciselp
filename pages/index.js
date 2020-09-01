import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FREE report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}><span>Free Report Reveals</span></div>
        <h1>Text</h1>
        <div className={styles.twoRow}>
          <div className={styles.row1}>
            <ul>
              <li>report1</li>
              <li>report2</li>
            </ul>
          </div>
          <div className={styles.row2}>
            <div className="sendlane-form" data-form-key="eyJkb21haW4iOiJjb21waWhlYWx0aCIsImZvcm1faWQiOiJiMjdhMmM2MS1iZjQ5LTQyYjctOWJmZi1lZjMxZDkwMmRiNWUifQ=="></div>
            <script src="https://sendlane.com/scripts/pusher.js" async></script>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
