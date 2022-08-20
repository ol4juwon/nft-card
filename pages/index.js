import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NFT Card- FEMentor Challenge::. Ol4juwon</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../css/styles.css"></link>
      </Head>

      <main >
        <div className='container'>
          <h1>NFT Card</h1>
        </div>
      </main>

      <footer>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          
          ol4juwon
        </a>
      </footer>

      <style jsx>{`
        .container {
          max-wdth: 420px;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          // padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          position: fixed;

          width: 100%;
          height: 50px;
          bottom: 0;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;

        }
        @media (max-width: 600px) {

        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
