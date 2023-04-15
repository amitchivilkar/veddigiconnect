import Head from 'next/head';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Services from '../Components/Services';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ved Digital Connect</title>
      </Head>
      <Header />
      <Hero />
      <Services />
      <Footer />

    </>
  )
}