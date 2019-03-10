import * as React from 'react';

import SEO from '../components/SEO';
import Splash from '../components/Splash';
import Contact from '../components/Contact';

const SplashPage = () => (
  <>
    <SEO
      title="index"
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
    <Contact />
  </>
);

export default SplashPage;
