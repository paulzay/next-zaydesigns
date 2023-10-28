import Head from 'next/head';
import { AboutMe } from '../components/AboutMe';
import { Banner } from '../components/Banner';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Hire } from '../components/Hire';
import { Navbar } from '../components/Navbar';
// import ProjectSection from '../components/ProjectSection';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paul Ogolla</title>
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <NextSeo
        title='Paul Ogolla'
        description='The Portfolio Website of Paul Ogolla'
      />
      <Navbar />
      <Banner />
      <AboutMe />
      {/* <ProjectSection /> */}
      <Hire />
      <Contact />
      <Footer />
    </div>
  );
}