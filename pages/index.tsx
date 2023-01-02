import Head from 'next/head';
import { AboutMe } from '../components/AboutMe';
import { Banner } from '../components/Banner';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
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
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}