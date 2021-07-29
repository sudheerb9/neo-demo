import Head from 'next/head'
import Image from 'next/image'
import Navbar from "../components/Navbar/NavbarElement.js";
import Fotter from "../components/Fotter/Fotter.js";
import Homepageslider from "../components/Homepageslider/homepageslider2"
import Testimonies from "../components/Testimonials/TestimonialComp.js";
import KeyFeatures from "../components/KeyFeatures/KeyFeatures.js";
import Principal from "../components/Principal/PrincipalElement.js"
import App from "../components/AppDownload/AppElement.js"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>

      </Head>
      <Navbar />
        <Homepageslider/>
      {/*<Banner />*/}
      <KeyFeatures />
      <Principal />
      <Testimonies />
       <App /> 
      <Fotter />
    </div>
  )
}
