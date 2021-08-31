import Head from 'next/head';
import { About } from '../components/About';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { Hire } from '../components/Hire';
import { Navbar } from '../components/Navbar';
import ProjectSection from '../components/ProjectSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paul Ogolla</title>
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Navbar />
      <Banner />
      <ProjectSection />
      <About />
      <Hire />
      <Footer />
    </div>
  );
}