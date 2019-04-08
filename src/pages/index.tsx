import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Splash from '../components/Splash';

const SplashPage = () => (
  <>
    <Layout />
    <SEO
      title="hello"
      keywords={[
        'blog',
        'tech',
        'crowder',
        'eric',
        'javascript',
        'developer',
        'software',
      ]}
    />
    <Splash />
  </>
);

export default SplashPage;
