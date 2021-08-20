import Head from 'next/head';
import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { Hire } from '../components/Hire';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paul Ogolla</title>
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Navbar />
      <div>Hello World</div>
      <About />
      <Hire />
      <Footer />
    </div>
  );
}