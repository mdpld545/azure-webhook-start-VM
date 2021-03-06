import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
var myHeaders = new Headers();
myHeaders.append("Access-Control-Allow-Origin", "*");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
  mode: "no-cors"
};


export default function Home() {
  const Start = () => {
    fetch("https://d7fe1ff7-92ff-4b99-abb4-15aac517a57c.webhook.eus.azure-automation.net/webhooks?token=qeK5yDjuk8gfwJ6LY0301PvkAKzMTXiTY%2fB085rdcCw%3d", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  const Stop= () =>  {
    fetch("https://d7fe1ff7-92ff-4b99-abb4-15aac517a57c.webhook.eus.azure-automation.net/webhooks?token=RWnBDYFJIBsNKR%2bgzpveA0JxDb1r68287Mehm89i6BY%3d", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div className={styles.grid}>
        <button onClick={Start}><p>Start!</p></button>
        <button onClick={Stop}><p>Stop!</p></button>
        </div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
