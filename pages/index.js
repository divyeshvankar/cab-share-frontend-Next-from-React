import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Homepage from './Homepage'
// import styles from '@/styles/Home.module.css'
import fevicon from '../public/fevicon.svg'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabs 4u</title>
        <meta name="description" content="Cabs4u gives you affordable and cheapest ride." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.svg" /> */}
        <link rel="icon" href="fevicon.svg" />
        {/* <link rel="shortcut icon" href="final.ico" type="image/x-icon" /> */}
      </Head>
      <>
        <Homepage/>
      </>
      
    </>
  )
}
