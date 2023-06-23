import Head from 'next/head'
import Homepage from './Homepage'

// import { Helmet } from "react-helmet";


export default function Home() {
  return (
    <>
      <Head>


        <title>Cabs 4u | Cabs in vadodara 24/7 Available</title>
        <meta name="description" content="Cabs4u gives you cheapest and affordable  ride in Vadodara and many more cities. 24/7 service available. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Cabs4u,cabs4u,cabs 4 u, cabs for you , cabs in vadodara, taxi in vadodara, taxi service in vadodara, cabs in vadodara to mumbai,cabs in vadodara airport, night cabs in vadodara,outstation cab in vadodara,cheapest cab in vadodara,online cab in vadodara "></meta>
        <meta name="keywords" content="Cabs4u,cabs4u,cabs 4 u, cabs for you , taxi in vadodara, taxi in vadodara, taxi service in vadodara, taxi in vadodara to mumbai,taxi in vadodara airport, night taxi in vadodara,outstation taxi in vadodara,cheapest taxi in vadodara,online taxi in vadodara "></meta>
        <link rel="canonical" href="https://www.cabs4u.in/" />
        {/* <!-- Google tag (gtag.js) --> */}

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10981971260"></script>
        <script strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-10981971260');
        gtag('event', 'conversion', {'send_to': 'AW-10981971260/vxuqCPiRlqoYELyqzvQo'});
      `}
    </script>




        {/* <link rel="icon" href="/favicon.svg" /> */}
        <link rel="icon" href="fevicon.svg" />
        {/* <link rel="shortcut icon" href="final.ico" type="image/x-icon" /> */}

        {/* <!-- Start: Copyright 2023 TraceMyIP.org Service Code (091230-06232023)- DO NOT MODIFY //--> */}
        <div id="elemID031021" style="line-height:16px;text-align:center;position:relative;z-index:100000;">
<script async type="text/javascript" src="//s3.tracemyip.org/vLg/lgUrl.php?pidnVar2=66713&amp;prtVar2=2&amp;stlVar2=1500~1687509842~14*2~0F5999*F7FFE6*537899*000000~1*1*0*0*0&amp;rgtype=4684NR-IPIB&amp;scvVar2=12">
  </script>
  <noscript>
    <a title="Cookie free visit tracking analytics" href="https://www.tracemyip.org/tools/cookie-free-tracking-analytics-eu-cookie-law-solution/">
      <img src="//s3.tracemyip.org/vLg/1500~1687509842~14*2~0F5999*F7FFE6*537899*000000~1*1*0*0*0/4684NR-IPIB/66713/2/12/ans/" alt="Cookie free visit tracking analytics" referrerpolicy="no-referrer-when-downgrade" style="border:0px;"/>
        </a>
        </noscript>
        </div> 

        {/* <!-- End: TraceMyIP.org Service Code //--> */}


      </Head>
      <>
        <Homepage/>
      </>
      
    </>
  )
}
