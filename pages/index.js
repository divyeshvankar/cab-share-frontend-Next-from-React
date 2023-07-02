import Script from 'next/script';
import Head from 'next/head'
import Homepage from './Homepage'
// import { Helmet } from "react-helmet";


export default function Home() {
  return (
    <>
      <Head>


        <title>Cabs 4u | Cabs in vadodara 24/7 Available</title>
        <meta name="deScription" content="Cabs4u gives you cheapest and affordable  ride in Vadodara and many more cities. 24/7 service available. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Cabs4u,cabs4u,cabs 4 u, cabs for you , cabs in vadodara, taxi in vadodara, taxi service in vadodara, cabs in vadodara to mumbai,cabs in vadodara airport, night cabs in vadodara,outstation cab in vadodara,cheapest cab in vadodara,online cab in vadodara "></meta>
        <meta name="keywords" content="Cabs4u,cabs4u,cabs 4 u, cabs for you , taxi in vadodara, taxi in vadodara, taxi service in vadodara, taxi in vadodara to mumbai,taxi in vadodara airport, night taxi in vadodara,outstation taxi in vadodara,cheapest taxi in vadodara,online taxi in vadodara "></meta>
        <link rel="canonical" href="https://www.cabs4u.in/" />

      {/* google adsense */}
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7559321082850840"
     crossOrigin="anonymous"></Script>

        {/* <!-- Google tag (gtag.js) --> */}

        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-10981971260"></Script>
        <Script strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-10981971260');
        gtag('event', 'conversion', {'send_to': 'AW-10981971260/vxuqCPiRlqoYELyqzvQo'});
      `}
    </Script>




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
