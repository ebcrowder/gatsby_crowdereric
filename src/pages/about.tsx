import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import About from '../components/About';
import Contact from '../components/Contact';

const AboutPage = () => (
  <>
    <Layout />
    <SEO title="about" />
    <About />
    <Contact />
  </>
);

export default AboutPage;
