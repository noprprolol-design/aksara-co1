import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import About from '../components/About'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aksara &amp; Co — PR Agency</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
