import Head from 'next/head'
import Homepage from './Homepage'
import { Helmet } from "react-helmet";


export default function Home() {
  return (
    <>
      <Head>
        <title>Cabs 4u</title>
        <meta name="description" content="Cabs4u gives you affordable and cheapest ride in Vadodara and many more cities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.svg" /> */}
        <link rel="icon" href="fevicon.svg" />
        {/* <link rel="shortcut icon" href="final.ico" type="image/x-icon" /> */}
        
        <Helmet>
              
        </Helmet>
        





      </Head>
      <>
        <Homepage/>
      </>
      
    </>
  )
}
