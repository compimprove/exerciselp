import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#a6c1e0'
    }}>
      <Head>
        <title>FREE report</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
      </Head>

      <main className="container">
        <div className="container d-flex justify-content-center" style={{
          backgroundColor: "#afef6a"
        }}>
          <p style={{ fontSize: '50px', fontWeight: '500' }}>Free Report Reveals</p>
        </div>
        <div className="bg-white" style={{ height: '90vh' }}>
          <div className="d-flex flex-column justify-content-center  align-items-center pt-4">
            <h1>Text</h1>
            <p className="text-danger">Some other infor</p>
          </div>

          <div className="d-flex flex-row justify-content-center flex-wrap mt-4">
            <div className="mb-4">
              <ul className="ml-4 list-group list-group-flush" style={{
                width: "70%"
              }}>
                <li class="list-group-item d-flex align-items-center">
                  <span class="badge badge-primary badge-pill mr-3">1</span>
                  Cras justo odio
                </li>
                <li class="list-group-item d-flex align-items-center">
                  <span class="badge badge-primary badge-pill mr-3">2</span>
                  <span>Cras justo odio Cras justo odio Cras justo odio Cras justo odio Cras justo odio</span>
                </li>
                <li class="list-group-item d-flex align-items-center">
                  <span class="badge badge-primary badge-pill mr-3">3</span>
                  Cras justo odio
                </li>
              </ul>
            </div>
            <div className="border border-primary rounded mb-4">
              <form action="https://sendlane.com/form-api/submission/eyJkb21haW4iOiJjb21waWhlYWx0aCIsImZvcm1faWQiOiJiMjdhMmM2MS1iZjQ5LTQyYjctOWJmZi1lZjMxZDkwMmRiNWUifQ==" method="post" className="p-5 d-flex flex-column justify-content-center">
                <div class="form-group">
                  <input name="3" placeholder="Email" type="Email" required="required" className="form-control" />
                </div>
                <input name="164" placeholder="Affiliate" type="Hidden" />
                <button type="submit" className="btn btn-warning px-4"
                  style={{
                    fontSize: '23px',
                    fontWeight:'bold'
                    // backgroundColor: "#ebe534"
                  }}>
                  Get Access Now
                </button>
                <img src="https://sendlane.com/form-api/impression/eyJkb21haW4iOiJjb21waWhlYWx0aCIsImZvcm1faWQiOiJiMjdhMmM2MS1iZjQ5LTQyYjctOWJmZi1lZjMxZDkwMmRiNWUifQ==" className="d-none" />
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="d-flex justify-content-center ">
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
